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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5.42 8.68a6.58 6.58 0 0 1 13.16 0l.68 5.56 1.5 2.07H3.24l1.5-2.07.68-5.56Z" stroke="#2F2F2F" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10.63 19.58a1.42 1.42 0 0 0 2.84 0" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" />
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
