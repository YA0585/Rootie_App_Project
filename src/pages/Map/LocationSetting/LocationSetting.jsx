import { useState } from "react";
import "./LocationSetting.css";

const NAV_ITEMS = [
    {
        key: "home",
        label: "홈",
        icon: (active) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M3 10.5L12 3l9 7.5V21H15v-5h-6v5H3V10.5z"
                    fill={active ? "#6AB43A" : "#6B7280"}
                    stroke={active ? "#6AB43A" : "#6B7280"}
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        key: "booking",
        label: "예약 내역",
        icon: (active) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="16" rx="1" fill={active ? "#6AB43A" : "#6B7280"} />
                <rect x="8" y="4" width="3" height="4" rx="1" fill={active ? "#6AB43A" : "#6B7280"} />
                <rect x="13" y="4" width="3" height="4" rx="1" fill={active ? "#6AB43A" : "#6B7280"} />
                <rect x="7" y="13" width="5" height="4" rx="0.5" stroke="white" strokeWidth="1.2" fill="none" />
            </svg>
        ),
    },
    {
        key: "diagnose",
        label: "진단 받기",
        icon: (active) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M12 2l2.4 6.6H21l-5.4 4 2.1 6.4L12 15l-5.7 4 2.1-6.4L3 8.6h6.6z"
                    fill={active ? "#6AB43A" : "#6B7280"}
                    stroke={active ? "#6AB43A" : "#6B7280"}
                    strokeWidth="1"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        key: "map",
        label: "지도",
        icon: (active) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    fill={active ? "#6AB43A" : "#6B7280"}
                />
                <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
        ),
    },
    {
        key: "mypage",
        label: "나의 루티",
        icon: (active) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" fill={active ? "#6AB43A" : "#6B7280"} />
                <rect x="5" y="15" width="14" height="7" rx="3" fill={active ? "#6AB43A" : "#6B7280"} />
            </svg>
        ),
    },
];

const LocationSetting = () => {
    const [activeNav, setActiveNav] = useState("map");
    const [searchValue, setSearchValue] = useState("");

    const address = "서울특별시 서초구 서초동 1391";

    return (
        <div className="loc-root">
            {/* Header area */}
            <div className="loc-header">
                <button className="loc-back-btn" aria-label="뒤로가기">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18l-6-6 6-6" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </button>
                <h2 className="loc-title">
                    집 주소를 알려주세요.<br />상세 주소는 필요 없어요.
                </h2>
                <div className="loc-search-bar">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="loc-search-icon">
                        <circle cx="11" cy="11" r="7" stroke="#8F8F8F" strokeWidth="1.8" />
                        <path d="M16.5 16.5l3.5 3.5" stroke="#8F8F8F" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    <input
                        type="text"
                        className="loc-search-input"
                        placeholder="주소를 검색하세요"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
            </div>

            {/* Map area */}
            <div className="loc-map-area">
                <img
                    src="https://placehold.co/898x898/e8e0d0/c0b090"
                    alt="지도"
                    className="loc-map-img"
                />
                {/* Map pin label */}
                <div className="loc-pin-wrapper">
                    <div className="loc-pin-label">강남역사거리</div>
                    <div className="loc-pin-tail" />
                    <div className="loc-pin-marker">
                        <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
                            <path
                                d="M14 0C6.27 0 0 6.27 0 14c0 9.33 14 22 14 22S28 23.33 28 14C28 6.27 21.73 0 14 0z"
                                fill="#6AB43A"
                            />
                            <circle cx="14" cy="14" r="5" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Address result area */}
            <div className="loc-result">
                <div className="loc-address-main">{address}</div>
                <div className="loc-address-sub">{address}</div>
                <button className="loc-confirm-btn">확인</button>
            </div>

            {/* Bottom Nav */}
            <nav className="loc-bottom-nav">
                {NAV_ITEMS.map((item) => {
                    const isActive = activeNav === item.key;
                    return (
                        <button
                            key={item.key}
                            className={`loc-nav-item${isActive ? " active" : ""}`}
                            onClick={() => setActiveNav(item.key)}
                            aria-label={item.label}
                        >
                            {item.icon(isActive)}
                            <span className="loc-nav-label">{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default LocationSetting;