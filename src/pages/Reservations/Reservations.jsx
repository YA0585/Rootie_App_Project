
import { useState } from "react";
import "./Reservations.css";

// ── Icons ────────────────────────────────────────────────────────────────────
const IconBell = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6841 17.6842V9.63156C18.6841 5.96905 15.7151 3 12.0526 3C8.39005 3 5.42099 5.96905 5.42099 9.63156V17.6842" fill="#6B7280" />
        <path d="M18.6841 17.6842V9.63156C18.6841 5.96905 15.7151 3 12.0526 3C8.39005 3 5.42099 5.96905 5.42099 9.63156V17.6842" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.1053 17.6843H4" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.4736 19.5789C13.4736 20.3637 12.8374 21 12.0526 21M12.0526 21C11.2678 21 10.6315 20.3637 10.6315 19.5789M12.0526 21V19.5789" stroke="#6B7280" stroke-width="1.5" stroke-linejoin="round" />
    </svg>
);


// ── Data ─────────────────────────────────────────────────────────────────────
const FILTERS = ["전체", "다가오는 예약", "지난 예약", "분갈이"];

const RESERVATIONS = [
    {
        id: 1,
        shopName: "업체 이름",
        date: "2026. 04. 10",
        type: "방문예약",
        status: "완료",
        plant: "몬스테라",
        price: "30,000원",
    },
];

// ── Reservation Card ─────────────────────────────────────────────────────────
function ReservationCard({ item }) {
    return (
        <div className="res-card">
            {/* Top: shop info + status badge */}
            <div className="res-card__top">
                <div className="res-card__info">
                    <span className="res-card__shop-name">{item.shopName}</span>
                    <span className="res-card__date">{item.date}</span>
                    <span className="res-card__type">{item.type}</span>
                </div>
                <span className={`res-card__badge res-card__badge--${item.status}`}>
                    {item.status}
                </span>
            </div>

            {/* Plant + price row */}
            <div className="res-card__detail">
                <span className="res-card__plant">{item.plant}</span>
                <span className="res-card__price">{item.price}</span>
            </div>

            {/* Action buttons */}
            <div className="res-card__actions">
                <button className="res-card__btn res-card__btn--outline">다시 예약하기</button>
                <button className="res-card__btn res-card__btn--fill">리뷰 작성하기</button>
            </div>
        </div>
    );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function Reservations({ navBar }) {
    const [activeFilter, setActiveFilter] = useState("전체");


    return (
        <div className="rootie-screen">
            {/* Header */}
            <header className="res-header">
                <span className="res-header__title">예약 내역</span>
                <button className="res-header__bell"><IconBell /></button>
            </header>

            {/* Content */}
            <main className="res-main">
                {/* Filter chips */}
                <div className="res-filters">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            className={`res-filter-btn ${activeFilter === f ? "res-filter-btn--active" : ""}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Reservation cards */}
                <div className="res-list">
                    {RESERVATIONS.map((item) => (
                        <ReservationCard key={item.id} item={item} />
                    ))}
                </div>
            </main>

            {/* Tab bar (Passed from App) */}
            {navBar}
        </div>
    );
}
