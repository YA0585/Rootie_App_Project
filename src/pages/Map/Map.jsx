// MapPage.jsx
import "./Map.css";
import {
    Search,
    Sprout,
    Stethoscope,
    Scissors,
    Syringe,
    Calendar,
    Star,
    Plus,
} from "lucide-react";

export default function MapPage() {
    const shops = [
        {
            id: 1,
            name: "꽃집",
            category: "분갈이 · 영양제",
            close: "영업중 · 18:00에 영업종료",
            location: "도보 5분 · 서울시 마포구 00동",
            rating: "4.4",
            price: "55,000원~",
        },
        {
            id: 2,
            name: "꽃집",
            category: "분갈이 · 영양제",
            close: "영업중 · 18:00에 영업종료",
            location: "도보 5분 · 서울시 마포구 00동",
            rating: "4.4",
            price: "55,000원~",
        },
    ];

    return (
        <div className="map-page">
            {/* Map Background */}
            <div className="map-background">
                {/* Top Search */}
                <div className="top-section">
                    <div className="search-bar">
                        <Search size={22} className="search-icon" />
                        <input type="text" placeholder="" />
                    </div>

                    {/* Filter Chips */}
                    <div className="filter-row">
                        <button className="chip active">
                            <Sprout size={16} />
                            반연식물
                        </button>

                        <button className="chip">
                            <Stethoscope size={16} />
                            진단
                        </button>

                        <button className="chip">
                            <Scissors size={16} />
                            분갈이
                        </button>

                        <button className="chip">
                            <Syringe size={16} />
                            영양제
                        </button>
                    </div>
                </div>

                {/* Floating Add Button */}
                <button className="floating-btn">
                    <Plus size={24} />
                </button>
            </div>

            {/* Bottom Sheet */}
            <div className="bottom-sheet">
                <div className="drag-bar" />

                {/* Recommendation Card */}
                <div className="recommend-card">
                    <div className="sparkle">✦</div>

                    <div>
                        <h3>우리 집 식물에게 알맞는 업체는?</h3>
                        <p>
                            간단한 채팅 후, 딱 맞는 관리 전문가와 매칭 받아보세요.
                        </p>
                    </div>
                </div>

                {/* Shop List */}
                <div className="shop-list">
                    {shops.map((shop) => (
                        <div className="shop-card" key={shop.id}>
                            <div className="shop-info">
                                <h4>{shop.name}</h4>
                                <p>{shop.category}</p>
                                <p>{shop.close}</p>
                                <p>{shop.location}</p>

                                <div className="rating-row">
                                    <Star size={14} fill="#73B843" strokeWidth={1.5} />
                                    <span>{shop.rating}</span>
                                    <span>{shop.price}</span>
                                </div>
                            </div>

                            <button className="reserve-btn">
                                <Calendar size={16} />
                                예약
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}