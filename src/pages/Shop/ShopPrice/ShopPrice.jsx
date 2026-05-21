import React, { useState } from "react";
import "./ShopPrice.css";

const NAV_TABS = ["홈", "가격", "후기", "사진"];

const SERVICES = [
    {
        id: 1,
        name: "분갈이",
        price: "4,000원~",
        desc: "화분의 사이즈를 기준으로 비용이 계산됩니다. 정확한 비용 측정을 위해 화분의 입구의 지름(외경) ...",
        bg: "linear-gradient(160deg, #4a3520 0%, #6b4c1e 100%)",
        emoji: "🪴",
    },
    {
        id: 2,
        name: "영양제",
        price: "4,000원~",
        desc: "선택하신 옵션 및 구성에 따라 가격이 달라질 수 있습니다. 상세 페이지에서 정확한 가격을 확인해 주세요.",
        bg: "linear-gradient(160deg, #2d4a20 0%, #4a6b30 100%)",
        emoji: "🌱",
    },
    {
        id: 3,
        name: "가지치기",
        price: "10,000원~",
        desc: "10컷 이상을 기준으로 금액이 측정됩니다. 상세페이지에서 정확한 가격을 확인해주세요.",
        bg: "linear-gradient(160deg, #3d5a2e 0%, #5a3a1a 100%)",
        emoji: "✂️",
    },
];

export default function ShopPrice() {
    const [activeTab, setActiveTab] = useState("가격");
    const [bookmarked, setBookmarked] = useState(true);

    return (
        <div className="phone-wrap">

            {/* Header */}
            <header className="sp-header">
                <button className="hd-btn">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="hd-btn" onClick={() => setBookmarked(!bookmarked)}>
                    <svg width="22" height="22"
                        fill={bookmarked ? "#3AB56A" : "none"}
                        viewBox="0 0 24 24"
                        stroke={bookmarked ? "#3AB56A" : "currentColor"}
                        strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>
            </header>

            {/* Scroll Body */}
            <div className="scroll-area">

                {/* Shop Title */}
                <div className="sp-title-block">
                    <div className="sp-name-row">
                        <h1 className="sp-name">그린핸즈 식물 케어</h1>
                        <span className="sp-status">영업중</span>
                    </div>
                    <p className="sp-category">분갈이 · 영양제</p>
                    <div className="sp-meta">
                        <span className="star-fill">★</span>
                        <span className="sp-rating">4.9</span>
                        <span className="sp-sub">리뷰 120건</span>
                        <span className="sp-dot">·</span>
                        <span className="sp-sub">응답률 89%</span>
                    </div>
                </div>

                {/* Hero Photos */}
                <div className="sp-hero">
                    <div className="hero-img hero-left"><span>🪴</span></div>
                    <div className="hero-img hero-right"><span>🌿</span></div>
                </div>

                {/* Nav Tabs */}
                <div className="sp-nav-tabs">
                    {NAV_TABS.map((t) => (
                        <button key={t}
                            className={`sp-tab ${activeTab === t ? "active" : ""}`}
                            onClick={() => setActiveTab(t)}>{t}</button>
                    ))}
                </div>

                {/* Price Section */}
                <div className="price-section">
                    <p className="price-section-title">가격</p>
                    <div className="service-list">
                        {SERVICES.map((svc, idx) => (
                            <div key={svc.id}
                                className={`service-item ${idx < SERVICES.length - 1 ? "bordered" : ""}`}>
                                <div className="svc-info">
                                    <p className="svc-name">{svc.name}</p>
                                    <p className="svc-price">{svc.price}</p>
                                    <p className="svc-desc">{svc.desc}</p>
                                </div>
                                <div className="svc-img" style={{ background: svc.bg }}>
                                    <span>{svc.emoji}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="more-btn">
                        가격표 더보기
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div style={{ height: 88 }} />
            </div>

            {/* Bottom CTA */}
            <div className="sp-cta">
                <button className="btn-reserve">예약하기</button>
            </div>

        </div>
    );
}