import React, { useState, useRef, useEffect } from "react";
import "./Chat.css";

const QUICK_REPLIES = ["네", "아니요", "잘 모르겠어요", "다른게 궁금해요"];

const INITIAL_MESSAGES = [
    { id: 1, type: "bot", text: null, isWelcome: true },
];

export default function Chat() {
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState("");
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = (text) => {
        if (!text.trim()) return;
        const userMsg = { id: Date.now(), type: "user", text };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");

        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                type: "bot",
                text: "네, 알겠어요! 식물 상태에 대해 조금 더 알려주세요.",
            };
            setMessages((prev) => [...prev, botMsg]);
        }, 800);
    };

    const handleQuickReply = (text) => sendMessage(text);
    const handleKeyDown = (e) => { if (e.key === "Enter") sendMessage(inputValue); };

    return (
        <div className="phone-wrap">

            {/* Header */}
            <header className="chat-header">
                <button className="icon-btn" aria-label="뒤로가기">
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
                {messages.map((msg) =>
                    msg.isWelcome ? (
                        <div key={msg.id} className="welcome-msg">
                            <p><span className="brand">Rootie</span>와 함께</p>
                            <p>식물 상태를 알아볼까요?</p>
                        </div>
                    ) : msg.type === "user" ? (
                        <div key={msg.id} className="bubble-row user">
                            <div className="bubble bubble-user">{msg.text}</div>
                        </div>
                    ) : (
                        <div key={msg.id} className="bubble-row bot">
                            <div className="bot-avatar">R</div>
                            <div className="bubble bubble-bot">{msg.text}</div>
                        </div>
                    )
                )}
                <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            <div className="quick-replies">
                {QUICK_REPLIES.map((q) => (
                    <button key={q} className="quick-chip" onClick={() => handleQuickReply(q)}>
                        {q}
                    </button>
                ))}
            </div>

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
                    <span className="input-brand">Rootie</span>
                    <span className="input-placeholder-text">와 대화를 시작해보세요.</span>
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