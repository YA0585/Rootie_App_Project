import { useState } from "react";
import "./Survey-3.css";

const OPTIONS = [
    { id: "diagnose", emoji: "🔍", label: "식물이 왜 아픈지 알고 싶어요." },
    { id: "nearby", emoji: "📍", label: "주변 식물 관리 업체를 둘러보고 싶어요." },
    { id: "care", emoji: "💧", label: "물주기와 관리 방법을 알고 싶어요." },
    { id: "trust", emoji: "🧺", label: "믿을 수 있는 관리 업체를 찾고 싶어요." },
];

export default function Survey3({ onConfirm }) {
    const [selected, setSelected] = useState(null);

    const handleConfirm = () => {
        if (!selected) return;
        if (onConfirm) onConfirm(selected);
    };

    return (
        <div className="phone-wrap">
            <div className="sv3-topbar">
                <button className="sv3-back-btn" aria-label="뒤로가기">&#8249;</button>
            </div>

            <div className="sv3-progress-wrap">
                <div className="sv3-progress-fill" />
            </div>

            <div className="sv3-question">
                <p className="sv3-question-text">
                    <span className="sv3-brand">Rootie</span>에서 가장 기대되는<br />기능은 무엇인가요?
                </p>
            </div>

            <div className="sv3-options">
                {OPTIONS.map((opt) => (
                    <button
                        key={opt.id}
                        className={`sv3-option${selected === opt.id ? " selected" : ""}`}
                        onClick={() => setSelected(opt.id)}
                    >
                        <span className="sv3-emoji" aria-hidden="true">{opt.emoji}</span>
                        <p className="sv3-option-label">{opt.label}</p>
                    </button>
                ))}
            </div>

            <div className="sv3-bottom">
                <button
                    className={`sv3-confirm-btn${selected ? " active" : ""}`}
                    onClick={handleConfirm}
                    disabled={!selected}
                >
                    선택하기
                </button>
            </div>
        </div>
    );
}