import { useState } from "react";
import "./MapFilter.css";

const SHOPS = [
    {
        id: 1,
        name: "꽃집",
        services: "분갈이 · 영양제",
        status: "영업중",
        closeTime: "18:00에 영업종료",
        walkTime: "도보 5분",
        address: "서울시 마포구 00동",
        rating: 4.4,
        price: "55,000원~",
    },
    {
        id: 2,
        name: "꽃집",
        services: "분갈이 · 영양제",
        status: "영업중",
        closeTime: "18:00에 영업종료",
        walkTime: "도보 5분",
        address: "서울시 마포구 00동",
        rating: 4.4,
        price: "55,000원~",
    },
    {
        id: 3,
        name: "꽃집",
        services: "분갈이 · 영양제",
        status: "영업중",
        closeTime: "18:00에 영업종료",
        walkTime: "도보 5분",
        address: "서울시 마포구 00동",
        rating: 4.4,
        price: "55,000원~",
    },
];

// Map pin positions (left%, top%) relative to the map area
const PIN_POSITIONS = [
    { left: "18%", top: "56%" },
    { left: "66%", top: "40%" },
    { left: "46%", top: "70%" },
];

const MapPin = () => (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
        <path
            d="M14 0C6.27 0 0 6.27 0 14c0 9.33 14 22 14 22S28 23.33 28 14C28 6.27 21.73 0 14 0z"
            fill="#6AB43A"
        />
        <circle cx="14" cy="14" r="5" fill="white" />
    </svg>
);

const MapFilter = () => {
    const [sortBy, setSortBy] = useState("distance");
    const [searchValue, setSearchValue] = useState("분갈이");

    return (
        <div className="mf-root">
            {/* Top Search Bar */}
            <div className="mf-topbar">
                <button className="mf-back-btn" aria-label="뒤로가기">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18l-6-6 6-6" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </button>
                <div className="mf-search-bar">
                    <input
                        type="text"
                        className="mf-search-input"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="검색어를 입력하세요"
                    />
                </div>
            </div>

            {/* Map Area */}
            <div className="mf-map-area">
                <img
                    src="https://placehold.co/898x898/e8e0d0/c0b090"
                    alt="지도"
                    className="mf-map-img"
                />

                {/* Map Pins */}
                {PIN_POSITIONS.map((pos, idx) => (
                    <div
                        key={idx}
                        className="mf-map-pin"
                        style={{ left: pos.left, top: pos.top }}
                    >
                        <MapPin />
                    </div>
                ))}

                {/* My Location Button */}
                <button className="mf-location-btn" aria-label="내 위치">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                            fill="#6AB43A"
                        />
                        <rect x="13" y="12" width="4" height="4" rx="1" fill="white" />
                    </svg>
                </button>

                {/* Bottom drag handle */}
                <div className="mf-drag-handle-wrap">
                    <div className="mf-drag-handle" />
                </div>
            </div>

            {/* Bottom Sheet */}
            <div className="mf-sheet">
                <div className="mf-sheet-handle" />

                {/* Sort Options */}
                <div className="mf-sort-row">
                    <button
                        className={`mf-sort-btn${sortBy === "distance" ? " active" : ""}`}
                        onClick={() => setSortBy("distance")}
                    >
                        거리순
                    </button>
                    <span className="mf-sort-dot">•</span>
                    <button
                        className={`mf-sort-btn${sortBy === "rating" ? " active" : ""}`}
                        onClick={() => setSortBy("rating")}
                    >
                        별점순
                    </button>
                </div>

                {/* Shop List */}
                <div className="mf-shop-list">
                    {SHOPS.map((shop) => (
                        <div key={shop.id} className="mf-shop-item">
                            <div className="mf-shop-info">
                                <div className="mf-shop-name">{shop.name}</div>
                                <div className="mf-shop-services">{shop.services}</div>
                                <div className="mf-shop-status">
                                    <span className="mf-status-open">{shop.status}</span>
                                    <span className="mf-dot-gray"> • </span>
                                    <span className="mf-status-close">{shop.closeTime}</span>
                                </div>
                                <div className="mf-shop-location">
                                    <span>{shop.walkTime}</span>
                                    <span className="mf-dot-light"> • </span>
                                    <span>{shop.address}</span>
                                </div>
                                <div className="mf-shop-rating-row">
                                    <span className="mf-rating-score">{shop.rating}</span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="#6AB43A">
                                        <path d="M7 1l1.4 2.8 3.1.45-2.25 2.19.53 3.1L7 8.05l-2.78 1.49.53-3.1L2.5 4.25l3.1-.45z" />
                                    </svg>
                                    <span className="mf-rating-price">{shop.price}</span>
                                </div>
                            </div>
                            <button className="mf-book-btn">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <rect x="3" y="5" width="14" height="12" rx="1" stroke="white" strokeWidth="1.5" />
                                    <rect x="7" y="3" width="2.5" height="4" rx="0.8" stroke="white" strokeWidth="1.2" />
                                    <rect x="10.5" y="3" width="2.5" height="4" rx="0.8" stroke="white" strokeWidth="1.2" />
                                    <rect x="7" y="10" width="4" height="3" rx="0.5" stroke="white" strokeWidth="1.2" />
                                </svg>
                                예약
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MapFilter;