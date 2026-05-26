import React, { useState } from "react";
import "./Map.css";

const FILTERS = [
    { label: "관엽식물", emoji: "🌿" },
    { label: "진단", emoji: "🧪" },
    { label: "분갈이", emoji: "🪴" },
    { label: "영양제", emoji: "💉" },
];

const shops = [
    {
        id: 1,
        name: "꽃집",
        tags: "분갈이 · 영양제",
        status: "영업중",
        closes: "18:00에 영업종료",
        distance: "도보 5분",
        address: "서울시 마포구 00동",
        rating: 4.4,
        price: "55,000원~",
    },
    {
        id: 2,
        name: "꽃집",
        tags: "분갈이 · 영양제",
        status: "영업중",
        closes: "18:00에 영업종료",
        distance: "도보 5분",
        address: "서울시 마포구 00동",
        rating: 4.4,
        price: "55,000원~",
    },
];

export default function Map({ navBar }) {
    const [activeFilter, setActiveFilter] = useState("관엽식물");

    return (
        <div className="phone-wrap">

            {/* Map Area */}
            <div className="map-area">
                <div className="map-bg">
                    <div className="road road-v1" />
                    <div className="road road-v2" />
                    <div className="road road-h1" />
                    <div className="road road-h2" />
                    <div className="road road-diag" />
                    <div className="park-block" />
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className={`city-block block-${i}`} />
                    ))}
                </div>

                {/* Search bar */}
                <div className="search-bar">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"
                        stroke="#aaa" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input type="text" placeholder="업체 또는 지역 검색" />
                </div>

                {/* Filter chips */}
                <div className="filter-row">
                    {FILTERS.map(({ label, emoji }) => (
                        <button
                            key={label}
                            className={`filter-chip ${activeFilter === label ? "active" : ""}`}
                            onClick={() => setActiveFilter(label)}
                        >
                            <span>{emoji}</span> {label}
                        </button>
                    ))}
                </div>

                {/* Zoom button */}
                <button className="zoom-btn" aria-label="확대">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"
                        stroke="white" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>

            </div>

            {/* Bottom Sheet */}
            <div className="bottom-sheet">
                <div className="drag-handle" />
                <div className="ai-banner">
                    <span className="ai-icon">✦</span>
                    <div className="ai-text">
                        <p className="ai-title">우리 집 식물에게 알맞는 업체는?</p>
                        <p className="ai-sub">간단한 체팅 후, 딱 맞는 관리 전문가와 매칭 받아보세요.</p>
                    </div>
                </div>

                <div className="shop-list">
                    {shops.map((shop, i) => (
                        <div key={shop.id}>
                            <div className="shop-row">
                                <div className="shop-info">
                                    <p className="shop-name">{shop.name}</p>
                                    <p className="shop-tags">{shop.tags}</p>
                                    <p className="shop-hours">
                                        <span className="open-dot" />
                                        {shop.status} · {shop.closes}
                                    </p>
                                    <p className="shop-location">{shop.distance} · {shop.address}</p>
                                    <div className="shop-meta">
                                        <span className="star">★</span>
                                        <span className="shop-rating">{shop.rating}</span>
                                        <span className="shop-price">&nbsp;{shop.price}</span>
                                    </div>
                                </div>
                                <div className="btn-wrap">
                                    <button className="btn-reserve">
                                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24"
                                            stroke="white" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                        예약
                                    </button>
                                </div>

                            </div>
                            {i < shops.length - 1 && <div className="shop-divider" />}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Nav */}
            {navBar}

        </div>
    );
}