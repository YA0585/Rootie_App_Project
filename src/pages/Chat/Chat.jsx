import React, { useState, useRef, useEffect } from "react";
import "./Chat.css";
import summaryPlant from "../../assets/monstera.jpg";
import greenhandsImg from "../../assets/greenhands.jpg";

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

// 추천 업체 (Figma 438:2023)
const SHOP = {
    name: "그린핸즈 식물 케어",
    location: "서울시 서초구 00동",
    rating: "4.9",
    reviews: "리뷰 120건",
    responseRate: "응답률 89%",
    isOpen: true,
};

// 전문가 진단 결과 (Figma 438:1984)
const DIAGNOSIS = {
    shop: "그린핸드 식물케어 진단 결과",
    title: "과습으로 인한 뿌리 손상 의심",
    body: "급수 빈도가 다소 높고 간접광이 짧아 과습이 진행됐을 가능성이 높습니다. 뿌리 점검과 배수층 확인이 필요합니다.",
    actionsLabel: "권장조치",
    actions: [
        "급수 주 1회로 줄이기",
        "뿌리 점검 및 분갈이 권장",
        "햇빛 노출 시간 하루 4~5시간으로 늘리기",
    ],
};

let msgId = 0;
const nextId = () => ++msgId;

export default function Chat({ onBack, onGoToShop }) {
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

    // 웰컴에서 "네" 등을 누르면 → Figma 438:1863 처럼 봇 질문으로 대화 시작
    const startSurvey = () => {
        setStarted(true);
        setMessages([{ id: nextId(), kind: "bot", text: QUESTIONS[0].prompt({}) }]);
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
                text: "식집사님의 위치기반 설정에 따른 근처 3곳의 식물 전문가에게 전달했어요. 잠시만 기다려주세요.",
            });
            pushBot({ kind: "diagnosing" });
        }, 600);
        // 진단 완료 → "진단중..." 제거 후 결과 도착 (Figma 438:1984)
        setTimeout(() => {
            setMessages((prev) => [
                ...prev.filter((m) => m.kind !== "diagnosing"),
                { id: nextId(), kind: "bot", text: "전문가 진단이 도착했어요." },
                { id: nextId(), kind: "diagnosis" },
                { id: nextId(), kind: "botText", text: "업체로 방문하시면 해결해드릴수있어요. 업체 정보를 확인해보세요!" },
                { id: nextId(), kind: "shopcard" },
            ]);
        }, 2600);
    };

    const sendMessage = (text) => {
        if (!text.trim()) return;
        setInputValue("");
        const t = text.trim();
        if (!started) startSurvey();
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
                    if (msg.kind === "diagnosing") {
                        return (
                            <div key={msg.id} className="bubble-row bot">
                                <span className="diagnosing">
                                    진단중<span className="diag-dots"><span>.</span><span>.</span><span>.</span></span>
                                </span>
                            </div>
                        );
                    }
                    if (msg.kind === "shopcard") {
                        return (
                            <div key={msg.id} className="bubble-row bot">
                                <div className="shop-card">
                                    <div className="shop-card__meta">
                                        <span className="shop-card__rating">{SHOP.rating}</span>
                                        <svg className="shop-card__star" width="14" height="14" viewBox="0 0 16 16" fill="none">
                                            <path d="M9.2 2.01l1.24 2.48c.17.35.61.68.99.74l2.24.38c1.43.24 1.76 1.28.73 2.31l-1.74 1.75c-.29.3-.45.87-.36 1.28l.5 2.16c.39 1.72-.51 2.38-2.02 1.48l-2.09-1.25c-.38-.22-1-.22-1.39 0l-2.09 1.25c-1.5.9-2.41.23-2.02-1.48l.5-2.16c.09-.41-.07-.98-.36-1.28L1.6 7.92C.57 6.89.9 5.85 2.33 5.61l2.23-.38c.37-.06.82-.39.99-.74L6.78 2.01c.67-1.35 1.76-1.35 2.42 0z" fill="#6AB43A" />
                                        </svg>
                                        <span>{SHOP.reviews}</span>
                                        <span>{SHOP.responseRate}</span>
                                    </div>
                                    <div className="shop-card__main">
                                        <img className="shop-card__avatar" src={greenhandsImg} alt={SHOP.name} />
                                        <div className="shop-card__info">
                                            <div className="shop-card__name-row">
                                                <span className="shop-card__name">{SHOP.name}</span>
                                                {SHOP.isOpen && <span className="shop-card__badge">영업중</span>}
                                            </div>
                                            <div className="shop-card__loc">
                                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                                    <path d="M9.43 14.56c-.3.28-.71.44-1.13.44s-.83-.16-1.13-.44C4.39 11.94.66 9.01 2.48 4.77 3.46 2.47 5.82 1 8.3 1s4.84 1.47 5.82 3.77c1.81 4.24-1.9 7.18-4.69 9.79z" fill="#6B7280" />
                                                    <circle cx="8.3" cy="7.3" r="2.45" fill="#fff" />
                                                </svg>
                                                <span>{SHOP.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shop-card__actions">
                                        <button className="shop-card__btn shop-card__btn--outline" onClick={onGoToShop}>업체 정보 보기</button>
                                        <button className="shop-card__btn shop-card__btn--primary">방문 예약하기</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    if (msg.kind === "diagnosis") {
                        return (
                            <div key={msg.id} className="bubble-row bot">
                                <div className="diagnosis-card">
                                    <p className="diag-shop">{DIAGNOSIS.shop}</p>
                                    <div className="diag-divider" />
                                    <p className="diag-title">{DIAGNOSIS.title}</p>
                                    <p className="diag-body">{DIAGNOSIS.body}</p>
                                    <p className="diag-actions-label">{DIAGNOSIS.actionsLabel}</p>
                                    <ul className="diag-actions">
                                        {DIAGNOSIS.actions.map((a) => (
                                            <li key={a}>{a}</li>
                                        ))}
                                    </ul>
                                </div>
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
            ) : !isDone ? (
                quickReplies.length > 0 ? (
                    <div className="quick-replies">
                        {quickReplies.map((q) => (
                            <button key={q} className="quick-chip" onClick={() => sendMessage(q)}>
                                {q}
                            </button>
                        ))}
                    </div>
                ) : null
            ) : !confirmed ? (
                <div className="quick-replies">
                    <button className="quick-chip quick-chip--primary" onClick={sendConfirm}>
                        {CONFIRM_TEXT}
                    </button>
                </div>
            ) : (
                <div className="quick-replies">
                    {WELCOME_REPLIES.map((q) => (
                        <button key={q} className="quick-chip" onClick={() => sendMessage(q)}>
                            {q}
                        </button>
                    ))}
                </div>
            )}

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
                    {!started && !inputValue && (
                        <span className="input-hint">
                            <span className="input-brand">Rootie</span>와 대화를 시작해보세요.
                        </span>
                    )}
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
