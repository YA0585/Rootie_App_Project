import React, { useState } from "react";
import "./Reservations.css";

const TABS = ["전체", "다가오는 예약", "지난 예약", "분갈이"];

const appointments = [
    {
        id: 1,
        company: "업체 이름",
        status: "완료",
        date: "2026. 04. 10",
        type: "방문예약",
        plant: "몬스테라",
        price: "30,000원",
    },
];

export default function Reservations({ navBar, onGoToShop }) {
    const [activeTab, setActiveTab] = useState("전체");

    return (
        <div className="phone-wrap">

            {/* Header */}
            <header className="appt-header">
                <h1 className="appt-title">예약 내역</h1>
                <button className="bell-btn" aria-label="알림">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
            </header>

            {/* Tab Bar */}
            <div className="tab-bar">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="scroll-area">
                {appointments.map((appt) => (
                    <div className="appt-card" key={appt.id}>
                        <div className="card-top">
                            <div className="card-meta">
                                <span className="company-name">{appt.company}</span>
                                <span className="card-date">{appt.date}&nbsp;&nbsp;{appt.type}</span>
                            </div>
                            <span className={`status-badge status-${appt.status}`}>{appt.status}</span>
                        </div>

                        <div className="card-divider" />

                        <div className="card-row">
                            <span className="plant-name">{appt.plant}</span>
                            <span className="plant-price">{appt.price}</span>
                        </div>

                        <div className="card-actions">
                            <button className="btn-outline">다시 예약하기</button>
                            <button className="btn-solid" onClick={() => onGoToShop && onGoToShop()}>리뷰 작성하기</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Nav */}
            {navBar}

        </div>
    );
}