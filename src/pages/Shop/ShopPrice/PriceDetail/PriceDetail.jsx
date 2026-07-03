import { useState } from "react";
import "./PriceDetail.css";
import SizeSelect from "../../../../components/SizeSelect/SizeSelect";

const BackIcon = () => (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const CloseIcon = () => (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const PotIllustration = () => (
    <svg viewBox="0 0 160 160" width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* outer diameter arrow */}
        <line x1="20" y1="48" x2="140" y2="48" stroke="#2F2F2F" strokeWidth="1" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
        <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 Z" fill="#2F2F2F" />
            </marker>
        </defs>
        <text x="46" y="44" fontSize="9" fill="#2F2F2F" fontFamily="Noto Sans KR, sans-serif">외경</text>
        <text x="46" y="55" fontSize="9" fill="#2F2F2F" fontFamily="Noto Sans KR, sans-serif">지름</text>
        {/* pot rim */}
        <ellipse cx="80" cy="62" rx="58" ry="10" stroke="#2F2F2F" strokeWidth="1.5" fill="none" />
        {/* pot body */}
        <path d="M22 62 Q24 130 80 134 Q136 130 138 62" stroke="#2F2F2F" strokeWidth="1.5" fill="none" />
        {/* bottom ellipse */}
        <ellipse cx="80" cy="134" rx="42" ry="6" stroke="#2F2F2F" strokeWidth="1.2" fill="none" />
    </svg>
);

const sizeRows = [
    { size: "~10.0 cm", price: "4,000원" },
    { size: "~15.0 cm", price: "6,000원" },
    { size: "~17.5 cm", price: "8,000원" },
    { size: "~20.0 cm", price: "10,000원" },
    { size: "~22.5 cm", price: "12,000원" },
    { size: "~25.0 cm", price: "15,000원" },
    { size: "~27.5 cm", price: "20,000원" },
    { size: "~30.0 cm", price: "25,000원" },
    { size: "~32.5 cm", price: "30,000원" },
    { size: "~35.0 cm", price: "35,000원" },
    { size: "~37.5 cm", price: "40,000원" },
    { size: "~40.0 cm", price: "45,000원" },
];

const sizeOptions = [
    "~10.0 cm (4,000원)",
    "~15.0 cm (6,000원)",
    "~17.5 cm (8,000원)",
    "~20.0 cm (10,000원)",
    "~22.5 cm (12,000원)",
    "~25.0 cm (15,000원)",
    "~27.5 cm (20,000원)",
    "~30.0 cm (25,000원)",
    "~32.5 cm (30,000원)",
    "~35.0 cm (35,000원)",
    "~37.5 cm (40,000원)",
    "~40.0 cm (45,000원)",
];

export default function PriceDetail({ onBack, onClose, onReserve }) {
    const [selectedSize, setSelectedSize] = useState("");

    return (
        <div className="pd-root">
            {/* Top Nav */}
            <div className="pd-nav">
                <button className="pd-nav-btn" onClick={onBack}><BackIcon /></button>
                <span className="pd-nav-title">분갈이</span>
                <button className="pd-nav-btn" onClick={onClose}><CloseIcon /></button>
            </div>

            {/* Content scroll area */}
            <div className="pd-scroll">
                {/* Price table image area */}
                <div className="pd-table-section">
                    <ul className="pd-notes">
                        <li>화분의 사이즈를 기준으로 비용이 계산됩니다.</li>
                        <li>원형 화분은 입구의 지름(외경), 사각 화분은 한 변의 길이(외경)를 측정하세요.</li>
                    </ul>

                    <div className="pd-table-wrapper">
                        <table className="pd-table">
                            <thead>
                                <tr>
                                    <th className="pd-th pd-th-pot">화분</th>
                                    <th className="pd-th">외경 지름</th>
                                    <th className="pd-th">비 용</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sizeRows.map((row, i) => (
                                    <tr key={i}>
                                        {i === 0 && (
                                            <td className="pd-td pd-td-pot" rowSpan={sizeRows.length}>
                                                <PotIllustration />
                                            </td>
                                        )}
                                        <td className="pd-td pd-td-size">{row.size}</td>
                                        <td className="pd-td pd-td-price">{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="pd-footnote">* 아래위로 긴 형태의 화분의 경우 20%의 추가비용이 발생합니다.</p>
                </div>

                {/* Detail section */}
                <div className="pd-detail-section">
                    <div className="pd-detail-header">
                        <p className="pd-detail-name">분갈이</p>
                        <p className="pd-detail-price">4,000원~</p>
                    </div>
                    <p className="pd-detail-desc">
                        화분의 사이즈를 기준으로 비용이 계산됩니다. 정확한 비용 측정을 위해 화분의 입구의 지름(외경), 사각 화분은 한 변의 길이(외경)를 측정하세요.
                    </p>

                    {/* Size selector */}
                    <div className="pd-size-group">
                        <SizeSelect
                            label="사이즈"
                            placeholder="사이즈 선택하기"
                            value={selectedSize}
                            onChange={(val) => setSelectedSize(val)}
                            options={sizeOptions}
                            showArrow={false}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="pd-footer">
                <button
                    className={`pd-cta-btn ${selectedSize ? "pd-cta-active" : ""}`}
                    disabled={!selectedSize}
                    onClick={() => selectedSize && onReserve?.()}
                >
                    {selectedSize ? `${selectedSize.split("(")[1]?.replace(")", "")} 예약하기` : "사이즈를 선택해 주세요"}
                </button>
            </div>
        </div>
    );
}