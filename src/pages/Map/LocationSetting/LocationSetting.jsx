import React, { useState } from "react";
import "./LocationSetting.css";

export default function LocationSetting({ onBack }) {
    const [address] = useState({
        main: "서울특별시 서초구 서초동 1391",
        sub: "서울특별시 서초구 서초동 1391",
    });

    return (
        <div className="phone-wrap">

            {/* Header */}
            <header className="loc-header">
                <button className="back-btn" aria-label="뒤로가기" onClick={() => onBack && onBack()}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </header>

            {/* Title */}
            <div className="loc-title-wrap">
                <h1 className="loc-title">
                    집 주소를 알려주세요.<br />
                    상세 주소는 필요 없어요.
                </h1>
            </div>

            {/* Search Bar */}
            <div className="loc-search">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"
                    stroke="#aaa" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input type="text" placeholder="" />
            </div>

            {/* Map */}
            <div className="loc-map">
                <div className="map-bg">
                    <div className="road road-h1" />
                    <div className="road road-h2" />
                    <div className="road road-h3" />
                    <div className="road road-v1" />
                    <div className="road road-diag" />
                    <div className="park-tr" />
                    {[...Array(14)].map((_, i) => (
                        <div key={i} className={`city-block blk-${i}`} />
                    ))}
                </div>

                {/* Pin */}
                <div className="pin-wrap">
                    <div className="pin-label">강남역사거리</div>
                    <div className="pin-icon">
                        <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
                            <path d="M16 0C7.163 0 0 7.163 0 16c0 10 16 24 16 24S32 26 32 16C32 7.163 24.837 0 16 0z"
                                fill="#3AB56A" />
                            <circle cx="16" cy="16" r="7" fill="white" />
                            <circle cx="16" cy="16" r="4" fill="#3AB56A" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Address Result */}
            <div className="loc-result">
                <p className="result-main">{address.main}</p>
                <p className="result-sub">{address.sub}</p>
            </div>

            {/* Confirm Button */}
            <div className="loc-confirm-wrap">
                <button className="btn-confirm" onClick={() => onBack && onBack()}>확인</button>
            </div>

        </div>
    );
}