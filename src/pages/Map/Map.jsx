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

                {/* Home location */}
                <button className="home-location" aria-label="위치추가">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.9891V22.6316C15 26.1051 15 27.8418 16.0791 28.9209C17.1582 30 18.8949 30 22.3684 30H26.5789C30.0524 30 31.7892 30 32.8683 28.9209C33.9474 27.8418 33.9474 26.1051 33.9474 22.6316V19.9891C33.9474 18.2193 33.9474 17.3345 33.5727 16.5685C33.1981 15.8025 32.4997 15.2592 31.1027 14.1727L28.9975 12.5353C26.8243 10.8451 25.7378 10 24.4737 10C23.2096 10 22.123 10.8451 19.9499 12.5353L17.8446 14.1727C16.4477 15.2592 15.7493 15.8025 15.3746 16.5685C15 17.3345 15 18.2193 15 19.9891Z" fill="#6AB43A" stroke="#6AB43A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.4731 16.7895C24.4845 16.7895 24.4977 16.7935 24.5103 16.8061C24.5226 16.8185 24.5259 16.8309 24.5259 16.8422V21.0004H28.6841C28.6954 21.0004 28.7077 21.0037 28.7202 21.016C28.7326 21.0284 28.7367 21.0409 28.7368 21.0522C28.7368 21.0635 28.7328 21.0767 28.7202 21.0893C28.7077 21.1016 28.6954 21.1049 28.6841 21.1049H24.5259V25.2631C24.5259 25.2744 24.5226 25.2868 24.5103 25.2992C24.4977 25.3118 24.4845 25.3158 24.4731 25.3158C24.4619 25.3157 24.4494 25.3116 24.437 25.2992C24.4246 25.2867 24.4214 25.2744 24.4214 25.2631V21.1049H20.2632C20.2519 21.1049 20.2395 21.1016 20.2271 21.0893C20.2145 21.0767 20.2104 21.0635 20.2104 21.0522C20.2106 21.0409 20.2146 21.0284 20.2271 21.016C20.2395 21.0037 20.2519 21.0004 20.2632 21.0004H24.4214V16.8422C24.4214 16.8309 24.4247 16.8185 24.437 16.8061C24.4494 16.7937 24.4619 16.7896 24.4731 16.7895Z" fill="white" stroke="white" strokeWidth="2" />
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