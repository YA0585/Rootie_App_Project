import React, { useState, useRef, useEffect } from "react";
import "./Chat.css";
import summaryPlant from "../../assets/monstera.jpg";

// ── Scripted questionnaire flow ──────────────────────────────────────────────
// 웰컴(Figma 438:1064) → 문진 질문(438:1863) → 문진 요약 결과 카드 순으로 이어진다.
const QUESTIONS = [
    {
        key: "식물",
        prompt: () => "오늘은 어떤 식물이 걱정되시나요?",
        options: ["몬스테라", "스투키", "산세베리아"],
    },
    {
        key: "증상",
        prompt: (a) => `${a["식물"] || "반려식물"}에게 어떤 증상이 보이나요?`,
        options: ["잎이 변색되었어요", "식물이 말랐어요", "잘 모르겠어요", "다른게 궁금해요"],
        summarize: (v) => (v === "잎이 변색되었어요" ? "잎이 노랗게 변함" : v),
    },
    {
        key: "급수",
        prompt: () => "물은 얼마나 자주 주시나요?",
        options: ["주 2~3회", "주 1회", "2주에 1회"],
    },
    {
        key: "햇빛",
        prompt: () => "햇빛은 어떻게 받고 있나요?",
        options: ["직접광", "간접광", "그늘"],
    },
    {
        key: "증상기간",
        prompt: () => "증상이 나타난 지 얼마나 됐나요?",
        options: ["3일 전부터", "1주일 전부터", "한 달 이상"],
    },
];

const SUMMARY_ROWS = ["식물", "증상", "급수", "햇빛", "증상기간"];
const CONFIRM_TEXT = "이 내용으로 전문가에게 전달해줘";
const WELCOME_REPLIES = ["네", "아니요", "잘 모르겠어요", "다른게 궁금해요"];

let msgId = 0;
const nextId = () => ++msgId;

export default function Chat({ onBack }) {
    const [started, setStarted] = useState(false); // false → 웰컴 화면 (Figma 438:1064)
    const [messages, setMessages] = useState([]);
    const [step, setStep] = useState(0); // index into QUESTIONS; === length → completed
    const [answers, setAnswers] = useState({});
    const [confirmed, setConfirmed] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const pushBot = (msg) =>
        setMessages((prev) => [...prev, { id: nextId(), ...msg }]);

    // 웰컴 답변 → 문진 플로우 시작
    const startSurvey = (text) => {
        setStarted(true);
        setMessages([{ id: nextId(), kind: "user", text }]);
        setTimeout(() => {
            pushBot({ kind: "bot", text: QUESTIONS[0].prompt({}) });
        }, 600);
    };

    // 현재 문진 단계 답변 처리
    const answerStep = (text) => {
        const q = QUESTIONS[step];
        const nextAnswers = { ...answers, [q.key]: text };
        setAnswers(nextAnswers);
        setMessages((prev) => [...prev, { id: nextId(), kind: "user", text }]);

        const nextStep = step + 1;
        setStep(nextStep);

        setTimeout(() => {
            if (nextStep < QUESTIONS.length) {
                pushBot({ kind: "bot", text: QUESTIONS[nextStep].prompt(nextAnswers) });
            } else {
                pushBot({
                    kind: "botText",
                    text: "문진 작성이 완료됐어요! 전문가에게 보내기전에 아래 내용을 확인해주세요.",
                });
                pushBot({ kind: "summary", answers: nextAnswers });
            }
        }, 600);
    };

    const sendConfirm = () => {
        setConfirmed(true);
        setMessages((prev) => [...prev, { id: nextId(), kind: "user", text: CONFIRM_TEXT }]);
        setTimeout(() => {
            pushBot({
                kind: "botText",
                text: "전문가에게 전달했어요! 곧 진단 답변이 도착할 거예요. 🌱",
            });
        }, 600);
    };

    const sendMessage = (text) => {
        if (!text.trim()) return;
        setInputValue("");
        const t = text.trim();
        if (!started) startSurvey(t);
        else if (step < QUESTIONS.length) answerStep(t);
        else if (!confirmed) sendConfirm();
        else setMessages((prev) => [...prev, { id: nextId(), kind: "user", text: t }]);
    };

    const handleKeyDown = (e) => { if (e.key === "Enter") sendMessage(inputValue); };

    const summaryValue = (rows, key) => {
        const q = QUESTIONS.find((x) => x.key === key);
        const raw = rows[key];
        return q?.summarize ? q.summarize(raw) : raw;
    };

    const isDone = step >= QUESTIONS.length;
    const quickReplies = isDone ? [] : QUESTIONS[step].options;

    return (
        <div className="chat-page">

            {/* Header */}
            <header className="chat-header">
                <button className="icon-btn" aria-label="뒤로가기" onClick={onBack}>
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="icon-btn" aria-label="메뉴">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </header>

            {/* Message Area */}
            <div className="chat-body">
                {!started && (
                    <div className="welcome-msg">
                        <p><span className="brand">Rootie</span>와 함께</p>
                        <p>식물 상태를 알아볼까요?</p>
                    </div>
                )}
                {messages.map((msg) => {
                    if (msg.kind === "user") {
                        return (
                            <div key={msg.id} className="bubble-row user">
                                <div className="bubble bubble-user">{msg.text}</div>
                            </div>
                        );
                    }
                    if (msg.kind === "summary") {
                        return (
                            <div key={msg.id} className="bubble-row bot">
                                <div className="summary-card">
                                    <div className="summary-thumb">
                                        <img src={summaryPlant} alt="식물 사진" />
                                    </div>
                                    <p className="summary-title">문진 요약</p>
                                    <div className="summary-table">
                                        {SUMMARY_ROWS.map((key) => (
                                            <div key={key} className="summary-row">
                                                <span className="summary-label">{key}</span>
                                                <span className="summary-value">
                                                    {summaryValue(msg.answers, key)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    // bot / botText
                    return (
                        <div key={msg.id} className="bubble-row bot">
                            <div className={`bubble bubble-bot ${msg.kind === "botText" ? "bubble-bot--block" : ""}`}>
                                {msg.text}
                            </div>
                        </div>
                    );
                })}
                <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            {!started ? (
                <div className="quick-replies">
                    {WELCOME_REPLIES.map((q) => (
                        <button key={q} className="quick-chip" onClick={() => sendMessage(q)}>
                            {q}
                        </button>
                    ))}
                </div>
            ) : isDone && !confirmed ? (
                <div className="quick-replies">
                    <button className="quick-chip quick-chip--primary" onClick={sendConfirm}>
                        {CONFIRM_TEXT}
                    </button>
                </div>
            ) : quickReplies.length > 0 ? (
                <div className="quick-replies">
                    {quickReplies.map((q) => (
                        <button key={q} className="quick-chip" onClick={() => sendMessage(q)}>
                            {q}
                        </button>
                    ))}
                </div>
            ) : null}

            {/* Input Bar */}
            <div className="chat-input-bar">
                <div className="input-wrap">
                    <button className="add-btn" aria-label="추가">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2.5">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <span className="input-hint">
                        <span className="input-brand">Rootie</span>와 대화를 시작해보세요.
                    </span>
                    <input
                        type="text"
                        className="chat-input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder=""
                    />
                </div>
            </div>

        </div>
    );
}
