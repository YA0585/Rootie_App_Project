import React, { useState } from "react";
import "./MyPage.css";

const plants = [
    { id: 1, name: "식물 이름", sub: "몬스테라" },
    { id: 2, name: "식물 이름", sub: "몬스테라" },
];

const reviews = [
    {
        id: 1,
        company: "업체명",
        tags2: "분갈이 • 영양제",
        date: "2025.02.08",
        rating: 4.9,
        content: "사용할 시각적 때 사용하는 로렘 전에 들어가는 들어가는 용도로 글로도 차지하는 입슴을 프로젝트 사용할 문장 보여줄 실제적인 프...",
        tags: ["#다육이", "#흙 교체", "#재방문 의사"],
    },
    {
        id: 2,
        company: "업체명",
        tags2: "분갈이 • 영양제",
        date: "2025.02.08",
        rating: 4.9,
        content: "사용할 시각적 때 사용하는 로렘 전에 들어가는 들어가는 용도로 글로도 차지하는 입슴을 프로젝트 사용할 문장 보여줄 실제적인 프...",
        tags: ["#다육이", "#흙 교체", "#재방문 의사"],
    },
];

export default function MyRootie({ navBar, onGoToMyPlant }) {
    const [activeNav, setActiveNav] = useState("나의 루티");

    return (
        <div className="phone-wrap">

            {/* Header */}
            <header className="my-header">
                <h1 className="my-title">나의 루티</h1>
                <button className="bell-btn" aria-label="알림">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
            </header>

            {/* Scroll */}
            <div className="scroll-area">

                {/* Profile Card */}
                <div className="card profile-card">
                    <div className="avatar">
                        <span className="avatar-emoji">👩</span>
                    </div>
                    <div className="profile-info">
                        <p className="profile-name">초보 식집사</p>
                        <p className="profile-sub">Rootie 멤버 • 2026년 가입</p>
                    </div>
                </div>

                {/* Pay Card */}
                <div className="card pay-card">
                    <p className="pay-label">Rootie Pay</p>
                    <div className="pay-row">
                        <p className="pay-amount"><strong>32,000</strong> 원</p>
                        <div className="pay-btns">
                            <button className="btn-charge">충전</button>
                            <button className="btn-send">송금</button>
                        </div>
                    </div>
                    <div className="pay-divider" />
                    <div className="pay-stats">
                        <div className="pay-stat">
                            <p className="stat-label">적립 포인트</p>
                            <p className="stat-value green">7500p</p>
                        </div>
                        <div className="stat-divider" />
                        <div className="pay-stat">
                            <p className="stat-label">이용내역</p>
                            <p className="stat-value">3건</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card actions-card">
                    {[
                        {
                            label: "식물 등록",
                            icon: (
                                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                    <rect x="3" y="3" width="18" height="18" rx="3" />
                                    <line x1="12" y1="8" x2="12" y2="16" />
                                    <line x1="8" y1="12" x2="16" y2="12" />
                                </svg>
                            ),
                        },
                        {
                            label: "리뷰 작성",
                            icon: (
                                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            ),
                        },
                        {
                            label: "찜한 업체",
                            icon: (
                                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            ),
                        },
                    ].map(({ label, icon }, i, arr) => (
                        <React.Fragment key={label}>
                            <button className="action-item">
                                <span className="action-icon">{icon}</span>
                                <span className="action-label">{label}</span>
                            </button>
                            {i < arr.length - 1 && <div className="action-divider" />}
                        </React.Fragment>
                    ))}
                </div>

                {/* My Plants */}
                <div className="card section-card">
                    <div className="section-header">
                        <span className="section-title">내 반려식물</span>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#888" strokeWidth="2" onClick={onGoToMyPlant} style={{ cursor: 'pointer' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div className="plant-list">
                        {plants.map((plant, i) => (
                            <React.Fragment key={plant.id}>
                                <div className="plant-row">
                                    <div className="plant-avatar">🌿</div>
                                    <div className="plant-info">
                                        <p className="plant-name">{plant.name}</p>
                                        <p className="plant-sub">{plant.sub}</p>
                                    </div>
                                    <button className="btn-diagnose">✦ 진단</button>
                                </div>
                                {i < plants.length - 1 && <div className="plant-divider" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* My Reviews */}
                <div className="card section-card reviews-card">
                    <div className="section-header">
                        <span className="section-title">내가 작성한 리뷰</span>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#888" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    {reviews.map((r, i) => (
                        <React.Fragment key={r.id}>
                            <div className="review-item">
                                <div className="review-top">
                                    <div>
                                        <span className="review-company">{r.company}</span>
                                        <span className="review-tags2"> {r.tags2}</span>
                                    </div>
                                    <div className="review-rating">
                                        <span className="star">★</span>
                                        <span>{r.rating}</span>
                                    </div>
                                </div>
                                <p className="review-date">{r.date}</p>
                                <p className="review-content">{r.content}</p>
                                <div className="review-tag-list">
                                    {r.tags.map((t) => (
                                        <span key={t} className="review-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                            {i < reviews.length - 1 && <div className="review-divider" />}
                        </React.Fragment>
                    ))}
                </div>

            </div>

            {/* Bottom Nav */}
            {navBar}

        </div>
    );
}