import React, { useState } from "react";
import "./ShopOptions.css";

const PRICE_TABLE = [
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

const SIZE_OPTIONS = PRICE_TABLE.map((r) => r.size);

export default function ShopOptions() {
    const [selectedSize, setSelectedSize] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const selectedPrice = PRICE_TABLE.find((r) => r.size === selectedSize)?.price;

    return (
        <div className="phone-wrap">

            {/* Header */}
            <header className="so-header">
                <button className="so-back-btn">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="so-header-title">분갈이</h1>
                <button className="so-close-btn">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </header>

            {/* Scroll Body */}
            <div className="scroll-area">

                {/* Description */}
                <div className="so-desc-block">
                    <p className="so-desc-line">- 화분의 사이즈를 기준으로 비용이 계산됩니다.</p>
                    <p className="so-desc-line">- 원형 화분은 입구의 지름(외경), 사각 화분은 한 변의<br />&nbsp;&nbsp;길이(외경)를 측정하세요.</p>
                </div>

                {/* Price Table */}
                <div className="so-table-wrap">
                    <table className="so-table">
                        <thead>
                            <tr>
                                <th className="th-pot">화분</th>
                                <th>외경 지름</th>
                                <th>비 용</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PRICE_TABLE.map((row, idx) => (
                                <tr key={idx}>
                                    {idx === 0 && (
                                        <td className="td-pot" rowSpan={PRICE_TABLE.length}>
                                            <div className="pot-illustration">
                                                <div className="pot-arrow-label">외경<br />지름</div>
                                                <svg width="90" height="80" viewBox="0 0 90 80" fill="none">
                                                    <line x1="10" y1="20" x2="80" y2="20" stroke="#555" strokeWidth="1.2"
                                                        markerEnd="url(#arr)" markerStart="url(#arrl)" />
                                                    <defs>
                                                        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                                                            <path d="M0,0 L6,3 L0,6 Z" fill="#555" />
                                                        </marker>
                                                        <marker id="arrl" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
                                                            <path d="M0,0 L6,3 L0,6 Z" fill="#555" />
                                                        </marker>
                                                    </defs>
                                                    <ellipse cx="45" cy="30" rx="35" ry="8" stroke="#333" strokeWidth="1.5" fill="#f5f5f5" />
                                                    <path d="M10 30 Q8 70 20 74 Q45 80 70 74 Q82 70 80 30" stroke="#333" strokeWidth="1.5" fill="#f5f5f5" />
                                                    <ellipse cx="45" cy="75" rx="25" ry="5" stroke="#333" strokeWidth="1.2" fill="#ebebeb" />
                                                    <ellipse cx="45" cy="30" rx="35" ry="8" stroke="#333" strokeWidth="1.5" fill="none" />
                                                </svg>
                                            </div>
                                        </td>
                                    )}
                                    <td className="td-size">{row.size}</td>
                                    <td className="td-price">{row.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Note */}
                <p className="so-note">* 아래위로 긴 형태의 화분의 경우 20%의 추가비용이 발생합니다.</p>

                <div className="so-divider" />

                {/* Service Info */}
                <div className="so-service-block">
                    <p className="so-service-name">분갈이</p>
                    <p className="so-service-price">4,000원~</p>
                    <p className="so-service-desc">
                        화분의 사이즈를 기준으로 비용이 계산됩니다. 정확한 비용 측정을 위해 화분의
                        입구의 지름(외경), 사각 화분은 한 변의 길이(외경)를 측정하세요.
                    </p>
                </div>

                {/* Size Selector */}
                <div className="so-size-block">
                    <p className="so-size-label">사이즈</p>
                    <div className="so-dropdown-wrap">
                        <button className="so-dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <span className={selectedSize ? "selected" : "placeholder"}>
                                {selectedSize || "사이즈 선택하기"}
                            </span>
                            <svg className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}
                                width="18" height="18" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {dropdownOpen && (
                            <div className="so-dropdown-list">
                                {SIZE_OPTIONS.map((opt) => (
                                    <button key={opt}
                                        className={`so-dropdown-item ${selectedSize === opt ? "active" : ""}`}
                                        onClick={() => { setSelectedSize(opt); setDropdownOpen(false); }}>
                                        {opt}
                                        {selectedSize === opt && (
                                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                                                stroke="#3AB56A" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div style={{ height: 100 }} />
            </div>

            {/* Bottom CTA */}
            <div className="so-cta">
                <button className={`btn-select ${selectedSize ? "active" : ""}`} disabled={!selectedSize}>
                    {selectedSize ? `${selectedPrice} 선택하기` : "text"}
                </button>
            </div>

        </div>
    );
}