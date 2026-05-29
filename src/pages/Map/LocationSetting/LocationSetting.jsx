import { useState, useEffect } from "react";
import "./LocationSetting.css";

const LocationSetting = ({ onBack, navBar }) => {
    const [searchValue, setSearchValue] = useState("");

    const address = "서울특별시 서초구 서초동 1391";

    useEffect(() => {
        const initMap = () => {
            const container = document.getElementById("loc-map");
            if (!container) return;

            // React 18 StrictMode 두 번 실행 방지
            if (container.children.length > 0) return;

            const options = {
                center: new window.kakao.maps.LatLng(37.4979, 127.0276), // 강남역 부근
                level: 3,
            };
            new window.kakao.maps.Map(container, options);
        };

        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(initMap);
        } else {
            const interval = setInterval(() => {
                if (window.kakao && window.kakao.maps) {
                    clearInterval(interval);
                    window.kakao.maps.load(initMap);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <div className="loc-root">
            {/* Header area */}
            <div className="loc-header">
                <button className="loc-back-btn" aria-label="뒤로가기" onClick={onBack}>
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
                <div id="loc-map" style={{ width: "100%", height: "100%" }}></div>
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
            {navBar}
        </div>
    );
};

export default LocationSetting;