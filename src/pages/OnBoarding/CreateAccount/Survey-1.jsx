import { useState } from "react";
import "./Survey-1.css";

export default function PlantSurvey({ onConfirm }) {
    const [selected, setSelected] = useState(null);

    const options = [
        { id: "yes", label: "네, 현재 키우고 있어요." },
        { id: "no", label: "아니요, 현재 키우는 식물은 없어요." },
    ];

    const handleConfirm = () => {
        if (!selected) return;
        if (onConfirm) onConfirm(selected);
    };

    return (
        <div className="ps-screen">
            <div className="ps-top-bar">
                <button className="ps-back-btn" aria-label="뒤로가기">
                    &#8249;
                </button>
            </div>

            <div className="ps-progress-wrap">
                <div className="ps-progress-fill" />
            </div>

            <div className="ps-question-area">
                <p className="ps-question-text">
                    현재 식물을<br />키우고 계신가요?
                </p>
            </div>

            <div className="ps-options-area">
                {options.map((opt) => (
                    <button
                        key={opt.id}
                        className={`ps-option-btn${selected === opt.id ? " selected" : ""}`}
                        onClick={() => setSelected(opt.id)}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>

            <div className="ps-bottom-area">
                <button
                    className={`ps-confirm-btn${selected ? " active" : ""}`}
                    onClick={handleConfirm}
                    disabled={!selected}
                >
                    선택하기
                </button>
            </div>
        </div>
    );
}
