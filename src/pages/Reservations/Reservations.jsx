// import React, { useState } from "react";
// import "./Reservations.css";

// const TABS = ["전체", "다가오는 예약", "지난 예약", "분갈이"];

// const appointments = [
//     {
//         id: 1,
//         company: "업체 이름",
//         status: "완료",
//         date: "2026. 04. 10",
//         type: "방문예약",
//         plant: "몬스테라",
//         price: "30,000원",
//     },
// ];

// export default function Appointments() {
//     const [activeTab, setActiveTab] = useState("전체");

//     return (
//         <div className="phone-wrap">

//             {/* Header */}
//             <header className="appt-header">
//                 <h1 className="appt-title">예약 내역</h1>
//                 <button className="bell-btn" aria-label="알림">
//                     <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
//                         stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round"
//                             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                     </svg>
//                 </button>
//             </header>

//             {/* Tab Bar */}
//             <div className="tab-bar">
//                 {TABS.map((tab) => (
//                     <button
//                         key={tab}
//                         className={`tab-btn ${activeTab === tab ? "active" : ""}`}
//                         onClick={() => setActiveTab(tab)}
//                     >
//                         {tab}
//                     </button>
//                 ))}
//             </div>

//             {/* Content */}
//             <div className="scroll-area">
//                 {appointments.map((appt) => (
//                     <div className="appt-card" key={appt.id}>
//                         <div className="card-top">
//                             <div className="card-meta">
//                                 <span className="company-name">{appt.company}</span>
//                                 <span className="card-date">{appt.date}&nbsp;&nbsp;{appt.type}</span>
//                             </div>
//                             <span className={`status-badge status-${appt.status}`}>{appt.status}</span>
//                         </div>

//                         <div className="card-divider" />

//                         <div className="card-row">
//                             <span className="plant-name">{appt.plant}</span>
//                             <span className="plant-price">{appt.price}</span>
//                         </div>

//                         <div className="card-actions">
//                             <button className="btn-outline">다시 예약하기</button>
//                             <button className="btn-solid">리뷰 작성하기</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Bottom Nav */}
//             <nav className="bottom-nav">
//                 {[
//                     { icon: "🏠", label: "홈" },
//                     { icon: "📋", label: "예약 내역", active: true },
//                     { icon: "✦", label: "진단 받기", center: true },
//                     { icon: "📍", label: "지도" },
//                     { icon: "👤", label: "나의 루티" },
//                 ].map(({ icon, label, active, center }) => (
//                     <div
//                         key={label}
//                         className={`nav-item ${active ? "active" : ""} ${center ? "nav-center" : ""}`}
//                     >
//                         <span className="nav-icon">{icon}</span>
//                         <span className="nav-label">{label}</span>
//                     </div>
//                 ))}
//             </nav>

//         </div>
//     );
// }

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
