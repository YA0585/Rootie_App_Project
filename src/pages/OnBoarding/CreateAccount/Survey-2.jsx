import { useState } from "react";
import "./Survey-2.css";

const OPTIONS = [
    {
        id: "beginner",
        label: "초보예요.",
        desc: "식물을 처음 키워봐요.",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="20" cy="32" rx="7" ry="3" fill="#a8d5a2" />
                <rect x="19" y="16" width="2" height="16" rx="1" fill="#6bb86a" />
                <path d="M20 20 C14 18 10 12 14 7 C16 12 20 14 20 20Z" fill="#4caf50" />
            </svg>
        ),
    },
    {
        id: "middle",
        label: "어느 정도 익숙해요.",
        desc: "기본적인 물주기와 관리법은 알고 있어요.",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="20" cy="33" rx="7" ry="2.5" fill="#a8d5a2" />
                <rect x="19" y="15" width="2" height="18" rx="1" fill="#6bb86a" />
                <path d="M20 22 C14 20 10 13 15 8 C17 13 20 16 20 22Z" fill="#4caf50" />
                <path d="M20 18 C26 16 30 10 26 5 C24 10 20 14 20 18Z" fill="#66bb6a" />
            </svg>
        ),
    },
    {
        id: "expert",
        label: "자신있어요.",
        desc: "다양한 식물을 꾸준히 건강하게 키우고 있어요.",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="20" cy="34" rx="7" ry="2.5" fill="#a8d5a2" />
                <rect x="19" y="13" width="2" height="21" rx="1" fill="#6bb86a" />
                <path d="M20 24 C13 22 9 14 14 8 C17 14 20 18 20 24Z" fill="#43a047" />
                <path d="M20 20 C27 18 31 11 27 5 C24 11 20 15 20 20Z" fill="#66bb6a" />
                <path d="M20 16 C20 10 16 5 12 4 C13 9 17 13 20 16Z" fill="#81c784" />
            </svg>
        ),
    },
];

export default function Survey2({ onConfirm }) {
    const [selected, setSelected] = useState(null);

    const handleConfirm = () => {
        if (!selected) return;
        if (onConfirm) onConfirm(selected);
    };

    return (
        <div className="phone-wrap">
            <div className="pss-topbar">
                <button className="pss-back-btn" aria-label="뒤로가기">&#8249;</button>
            </div>

            <div className="pss-progress-wrap">
                <div className="pss-progress-fill" />
            </div>

            <div className="pss-question">
                <p className="pss-question-text">
                    식물 키우기 실력은<br />어느 정도인가요?
                </p>
            </div>

            <div className="pss-options">
                {OPTIONS.map((opt) => (
                    <button
                        key={opt.id}
                        className={`pss-option${selected === opt.id ? " selected" : ""}`}
                        onClick={() => setSelected(opt.id)}
                    >
                        <div className="pss-icon-wrap">{opt.icon}</div>
                        <div className="pss-text">
                            <p className="pss-label">{opt.label}</p>
                            <p className="pss-desc">{opt.desc}</p>
                        </div>
                    </button>
                ))}
            </div>

            <div className="pss-bottom">
                <button
                    className={`pss-confirm-btn${selected ? " active" : ""}`}
                    onClick={handleConfirm}
                    disabled={!selected}
                >
                    선택하기
                </button>
            </div>
        </div>
    );
}

