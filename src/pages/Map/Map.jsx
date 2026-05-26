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
                    <input type="text" />
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
                    <div className="icon-wrapper">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_451_1217)">
                                <rect x="4" width="40" height="40" rx="20" fill="white" />
                                <path d="M15 19.9891V22.6316C15 26.1051 15 27.8418 16.0791 28.9209C17.1582 30 18.8949 30 22.3684 30H26.5789C30.0524 30 31.7892 30 32.8683 28.9209C33.9474 27.8418 33.9474 26.1051 33.9474 22.6316V19.9891C33.9474 18.2193 33.9474 17.3345 33.5727 16.5685C33.1981 15.8025 32.4997 15.2592 31.1027 14.1727L28.9975 12.5353C26.8243 10.8451 25.7378 10 24.4737 10C23.2096 10 22.123 10.8451 19.9499 12.5353L17.8446 14.1727C16.4477 15.2592 15.7493 15.8025 15.3746 16.5685C15 17.3345 15 18.2193 15 19.9891Z" fill="#6AB43A" stroke="#6AB43A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24.4731 16.7895C24.4845 16.7895 24.4977 16.7935 24.5103 16.8061C24.5226 16.8185 24.5259 16.8309 24.5259 16.8422V21.0004H28.6841C28.6954 21.0004 28.7077 21.0037 28.7202 21.016C28.7326 21.0284 28.7367 21.0409 28.7368 21.0522C28.7368 21.0635 28.7328 21.0767 28.7202 21.0893C28.7077 21.1016 28.6954 21.1049 28.6841 21.1049H24.5259V25.2631C24.5259 25.2744 24.5226 25.2868 24.5103 25.2992C24.4977 25.3118 24.4845 25.3158 24.4731 25.3158C24.4619 25.3157 24.4494 25.3116 24.437 25.2992C24.4246 25.2867 24.4214 25.2744 24.4214 25.2631V21.1049H20.2632C20.2519 21.1049 20.2395 21.1016 20.2271 21.0893C20.2145 21.0767 20.2104 21.0635 20.2104 21.0522C20.2106 21.0409 20.2146 21.0284 20.2271 21.016C20.2395 21.0037 20.2519 21.0004 20.2632 21.0004H24.4214V16.8422C24.4214 16.8309 24.4247 16.8185 24.437 16.8061C24.4494 16.7937 24.4619 16.7896 24.4731 16.7895Z" fill="white" stroke="white" stroke-width="2" />
                            </g>
                            <defs>
                                <filter id="filter0_d_451_1217" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_451_1217" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_451_1217" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                    </div>
                </button>

            </div>

            {/* Bottom Sheet */}
            <div className="bottom-sheet">
                <div className="drag-handle" />
                <div className="ai-banner">
                    <span className="ai-icon">✦</span>
                    <div className="ai-text">
                        <p className="ai-title">우리 집 식물에게 알맞는 업체는?</p>
                        <p className="ai-sub">간단한 채팅 후, 딱 맞는 관리 전문가와 매칭 받아보세요.</p>
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
                                        <svg width="62" height="27" viewBox="0 0 62 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="61" height="26" rx="13" fill="#6AB43A" />
                                            <rect x="0.5" y="0.5" width="61" height="26" rx="13" stroke="white" />
                                            <path d="M20.1005 6V8.80003M14.5005 6V8.80003" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18 7.3999H16.6C13.9601 7.3999 12.6402 7.3999 11.8201 8.22001C11 9.04012 11 10.3601 11 13V14.4C11 17.0398 11 18.3598 11.8201 19.1799C12.6402 20 13.9601 20 16.6 20H18C20.6398 20 21.9598 20 22.7799 19.1799C23.6 18.3598 23.6 17.0398 23.6 14.4V13C23.6 10.3601 23.6 9.04012 22.7799 8.22001C21.9598 7.3999 20.6398 7.3999 18 7.3999Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11 11.5999H23.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17.3007 13.6999V17.8999M19.4007 15.7999H15.2007" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M31.74 10.488H34.218V11.44H31.74V10.488ZM31.74 14.338H34.218V15.304H31.74V14.338ZM36.346 7.422H37.466V20.092H36.346V7.422ZM33.854 7.688H34.96V19.448H33.854V7.688ZM29.542 8.486C30.0927 8.486 30.5687 8.66333 30.97 9.018C31.3807 9.37267 31.698 9.88133 31.922 10.544C32.146 11.2067 32.258 11.986 32.258 12.882C32.258 13.7873 32.146 14.5713 31.922 15.234C31.698 15.8967 31.3807 16.41 30.97 16.774C30.5687 17.1287 30.0927 17.306 29.542 17.306C29.01 17.306 28.5387 17.1287 28.128 16.774C27.7267 16.41 27.414 15.8967 27.19 15.234C26.966 14.5713 26.854 13.7873 26.854 12.882C26.854 11.986 26.966 11.2067 27.19 10.544C27.414 9.88133 27.7267 9.37267 28.128 9.018C28.5387 8.66333 29.01 8.486 29.542 8.486ZM29.542 9.564C29.2153 9.564 28.926 9.69933 28.674 9.97C28.4313 10.2407 28.2447 10.6233 28.114 11.118C27.9833 11.6127 27.918 12.2007 27.918 12.882C27.918 13.5633 27.9833 14.156 28.114 14.66C28.2447 15.1547 28.4313 15.5373 28.674 15.808C28.926 16.0787 29.2153 16.214 29.542 16.214C29.8873 16.214 30.1813 16.0787 30.424 15.808C30.6667 15.5373 30.8533 15.1547 30.984 14.66C31.124 14.156 31.194 13.5633 31.194 12.882C31.194 12.2007 31.124 11.6127 30.984 11.118C30.8533 10.6233 30.6667 10.2407 30.424 9.97C30.1813 9.69933 29.8873 9.564 29.542 9.564ZM49.0569 9.354H51.2409V10.32H49.0569V9.354ZM49.0569 12.056H51.2409V13.036H49.0569V12.056ZM48.2449 7.422H49.4069V14.94H48.2449V7.422ZM41.1749 15.542H49.4069V20.092H48.2449V16.494H41.1749V15.542ZM43.1069 8.178C43.7509 8.178 44.3202 8.30867 44.8149 8.57C45.3096 8.822 45.6969 9.172 45.9769 9.62C46.2662 10.068 46.4109 10.586 46.4109 11.174C46.4109 11.7713 46.2662 12.294 45.9769 12.742C45.6969 13.19 45.3096 13.54 44.8149 13.792C44.3202 14.044 43.7509 14.17 43.1069 14.17C42.4816 14.17 41.9169 14.044 41.4129 13.792C40.9182 13.54 40.5262 13.19 40.2369 12.742C39.9476 12.294 39.8029 11.7713 39.8029 11.174C39.8029 10.586 39.9476 10.068 40.2369 9.62C40.5262 9.172 40.9182 8.822 41.4129 8.57C41.9169 8.30867 42.4816 8.178 43.1069 8.178ZM43.1069 9.172C42.6962 9.172 42.3276 9.256 42.0009 9.424C41.6742 9.592 41.4129 9.83 41.2169 10.138C41.0302 10.4367 40.9369 10.782 40.9369 11.174C40.9369 11.5753 41.0302 11.93 41.2169 12.238C41.4129 12.5367 41.6742 12.77 42.0009 12.938C42.3276 13.106 42.6962 13.19 43.1069 13.19C43.5269 13.19 43.9002 13.106 44.2269 12.938C44.5536 12.77 44.8102 12.5367 44.9969 12.238C45.1929 11.93 45.2909 11.5753 45.2909 11.174C45.2909 10.782 45.1929 10.4367 44.9969 10.138C44.8102 9.83 44.5536 9.592 44.2269 9.424C43.9002 9.256 43.5269 9.172 43.1069 9.172Z" fill="white" />
                                        </svg>
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