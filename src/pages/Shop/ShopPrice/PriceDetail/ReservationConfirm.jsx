import { useState } from "react";
import "./ReservationConfirm.css";

const BackIcon = () => (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#2A2A22" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const CloseIcon = () => (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#2A2A22" strokeWidth="2" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const CalendarIcon = () => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 2v4M8 2v4" />
        <rect x="3" y="4" width="18" height="18" rx="3" />
        <path d="M3 10h18" />
    </svg>
);

const InfoIcon = () => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2F2F2F" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="11" x2="12" y2="16" strokeLinecap="round" />
        <circle cx="12" cy="8" r="0.8" fill="#2F2F2F" stroke="none" />
    </svg>
);

const CheckIcon = ({ active }) => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={active ? "#6AB43A" : "#D9D9D9"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2.5 2.5L16 9" />
    </svg>
);

export default function ReservationConfirm({ service = "분갈이", size, price, onBack, onClose, onDone }) {
    const [checked, setChecked] = useState(false);

    return (
        <div className="rc-root">
            {/* Header */}
            <div className="rc-header">
                <button className="rc-header-back" onClick={onBack}><BackIcon /></button>
                <span className="rc-header-title">예약하기</span>
                <button className="rc-header-close" onClick={onClose}><CloseIcon /></button>
            </div>

            {/* Content */}
            <div className="rc-scroll">
                <div className="rc-fields">
                    <div className="rc-field rc-field--row">
                        <CalendarIcon />
                        <span className="rc-field-text">4.28 (화)  •  오후 2:30</span>
                    </div>
                    <div className="rc-field">
                        <span className="rc-field-text">{service}</span>
                    </div>
                    <div className="rc-field">
                        <span className="rc-field-text">{size || "사이즈"}</span>
                    </div>
                </div>

                <div className="rc-divider" />

                <div className="rc-amount">
                    <span className="rc-amount-label">예상 금액</span>
                    <span className="rc-amount-value">{price || "-"}</span>
                </div>

                <div className="rc-notice">
                    <div className="rc-notice-head">
                        <InfoIcon />
                        <span className="rc-notice-title">예약 전 반드시 확인해주세요!</span>
                    </div>
                    <div className="rc-notice-body">
                        화분의 특성과 상태에 따라 현장 결제 금액이 예상 금액과 다를 수 있습니다. 정확한 금액은 업체에 전화 문의하시거나 앱 내 상담 기능을 이용해 확인해 주세요.
                    </div>
                    <button
                        className={`rc-confirm-check ${checked ? "rc-confirm-check--on" : ""}`}
                        onClick={() => setChecked((v) => !v)}
                    >
                        <span>확인했어요</span>
                        <CheckIcon active={checked} />
                    </button>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="rc-footer">
                <button
                    className={`rc-cta ${checked ? "rc-cta--active" : ""}`}
                    disabled={!checked}
                    onClick={() => checked && (onDone ? onDone() : onClose?.())}
                >
                    방문 예약하기
                </button>
            </div>
        </div>
    );
}
