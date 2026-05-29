import { useState } from "react";
import "./CheckSelect.css";
import SelectService from "../../components/SelectService/SelectService";
import SizeSelect from "../../components/SizeSelect/SizeSelect";

const BackIcon = () => (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const CloseIcon = () => (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#2F2F2F" strokeWidth="2" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const CalendarIcon = () => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="15" cy="15" r="1.5" fill="#2F2F2F" stroke="none" />
    </svg>
);

const InfoIcon = () => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="8.5" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="12" x2="12" y2="16" strokeWidth="1.5" />
    </svg>
);

const CheckCircleIcon = ({ checked }) => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none"
        stroke={checked ? "#6AB43A" : "#D9D9D9"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        {checked && <polyline points="8 12 11 15 16 9" strokeWidth="2" />}
    </svg>
);

/**
 * CheckSelect — 예약하기 확인 페이지
 *
 * @param {string}   datetime      - 날짜/시간 텍스트        (기본: "4.28 (화)  •  오후 2:30")
 * @param {string}   service       - 선택된 서비스           (기본: "분갈이")
 * @param {string}   size          - 선택된 사이즈           (기본: "사이즈")
 * @param {string}   estimatedPrice- 예상 금액 텍스트        (기본: "6,000원")
 * @param {string}   noticeText    - 안내 박스 텍스트
 * @param {string}   confirmLabel  - 하단 버튼 텍스트        (기본: "방문 예약하기")
 * @param {function} onBack        - 뒤로가기 콜백
 * @param {function} onClose       - 닫기 콜백
 * @param {function} onConfirm     - 예약하기 버튼 콜백
 */
export default function CheckSelect({
    datetime = "4.28 (화)  •  오후 2:30",
    service = "분갈이",
    size = "사이즈",
    estimatedPrice = "6,000원",
    noticeText = "화분의 특성과 상태에 따라 현장 결제 금액이 예상 금액과 다를 수 있습니다. 정확한 금액은 업체에 전화 문의하시거나 앱 내 상담 기능을 이용해 확인해 주세요.",
    confirmLabel = "방문 예약하기",
    onBack,
    onClose,
    onConfirm,
}) {
    const [checked, setChecked] = useState(false);
    const [currentService, setCurrentService] = useState(service);
    const [currentSize, setCurrentSize] = useState(size === "사이즈" ? "" : size);

    return (
        <div className="cs-root">
            {/* Top Nav */}
            <div className="cs-nav">
                <button className="cs-nav-btn" onClick={onBack} aria-label="뒤로가기">
                    <BackIcon />
                </button>
                <span className="cs-nav-title">예약하기</span>
                <button className="cs-nav-btn" onClick={onClose} aria-label="닫기">
                    <CloseIcon />
                </button>
            </div>

            {/* Scroll content */}
            <div className="cs-scroll">
                <div className="cs-body">

                    {/* Selection summary cards */}
                    <div className="cs-cards">
                        {/* Datetime */}
                        <div className="cs-card">
                            <CalendarIcon />
                            <span className="cs-card__text">{datetime}</span>
                        </div>

                        {/* Service */}
                        <div className="cs-card-override" style={{ width: "100%" }}>
                            <SelectService 
                                value={currentService} 
                                onChange={setCurrentService} 
                            />
                        </div>

                        {/* Size */}
                        <div className="cs-card-override" style={{ width: "100%" }}>
                            <SizeSelect 
                                value={currentSize} 
                                onChange={setCurrentSize} 
                                options={["소형", "중형", "대형"]}
                            />
                        </div>
                    </div>

                    {/* Estimated price */}
                    <div className="cs-price-row">
                        <span className="cs-price-label">예상 금액</span>
                        <span className="cs-price-value">{estimatedPrice}</span>
                    </div>

                    {/* Notice box */}
                    <div className="cs-notice-wrap">
                        <div className="cs-notice-title-row">
                            <InfoIcon />
                            <span className="cs-notice-title">예약 전 반드시 확인해주세요!</span>
                        </div>

                        <div className="cs-notice-box">
                            <p className="cs-notice-text">{noticeText}</p>
                        </div>

                        {/* Confirm check */}
                        <button
                            className="cs-check-row"
                            onClick={() => setChecked((prev) => !prev)}
                            aria-pressed={checked}
                        >
                            <span className={`cs-check-label ${checked ? "cs-check-label--active" : ""}`}>
                                확인했어요
                            </span>
                            <CheckCircleIcon checked={checked} />
                        </button>
                    </div>

                </div>
            </div>

            {/* Footer CTA */}
            <div className="cs-footer">
                <button
                    className={`cs-cta-btn ${checked ? "cs-cta-btn--active" : ""}`}
                    disabled={!checked}
                    onClick={() => checked && onConfirm?.()}
                >
                    {confirmLabel}
                </button>
            </div>
        </div>
    );
}
