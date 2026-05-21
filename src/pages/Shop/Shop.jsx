import React, { useState } from "react";
import "./Shop.css";

const NAV_TABS = ["홈", "가격", "후기", "사진"];
const PHOTO_FILTER = ["전체", "리뷰", "업체"];

const SERVICES = [
    {
        id: 1, name: "분갈이", price: "4,000원~", img: "🪴", bg: "#5a3e2b",
        desc: "화분의 사이즈를 기준으로 비용이 책정됩니다. 정확한 비용 측정을 위해 화분의 규격과 식물(관엽)...",
    },
    {
        id: 2, name: "영양제", price: "4,000원~", img: "💊", bg: "#3d5a3e",
        desc: "선택하신 용도 및 구성에 따라 가격이 달라질 수 있습니다. 상세 페이지에서 자세한 가격을 확인해보세요.",
    },
    {
        id: 3, name: "가지치기", price: "10,000원~", img: "✂️", bg: "#2d4a3e",
        desc: "10인 이상의 기준으로 금액이 측정됩니다. 상세페이지에서 정확한 가격을 확인해주세요.",
    },
];

const REVIEWS = [
    {
        id: 1, author: "사용자이름", date: "2025.01.11", rating: 4.9, likes: 1,
        content: "식물 상태가 안 좋아서 걱정이 되어 관리 받고 나서 눈에 띄게 건강해졌어요. 방문할 때마다 꼼꼼하게 체크해주시고 관리 방법도 친절하게 알려주셔서 만족합니다.",
    },
    {
        id: 2, author: "사용자이름", date: "2025.01.11", rating: 4.9, likes: 1,
        content: "처음에는 단순 관리 서비스인 줄 알았는데 식물 상태를 정말 세심하게 봐주셔서 놀랐어요. 잎 상태나 물 주기까지 꼼꼼하게 체크해주시고 관리에 맞는 관리 방법도 알려주셔서 감사합니다.",
    },
];

const GRID_PHOTOS = [
    { bg: "#5a3e2b", icon: "🪴" }, { bg: "#3d5a3e", icon: "🌿" },
    { bg: "#2d4a3e", icon: "🌱" }, { bg: "#4a3520", icon: "🌾" },
    { bg: "#3a5030", icon: "🌵" }, { bg: "#5a4030", icon: "🎋" },
];

export default function ShopDetail2() {
    const [activeTab, setActiveTab] = useState("홈");
    const [bookmarked, setBookmarked] = useState(false);
    const [activePhotoFilter, setActivePhotoFilter] = useState("전체");

    return (
        <div className="phone-wrap">

            {/* Header */}
            <header className="sd2-header">
                <button className="hd-btn">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="hd-btn" onClick={() => setBookmarked(!bookmarked)}>
                    <svg width="20" height="20" fill={bookmarked ? "#3AB56A" : "none"}
                        viewBox="0 0 24 24" stroke={bookmarked ? "#3AB56A" : "currentColor"} strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>
            </header>

            {/* Scroll Body */}
            <div className="scroll-area">

                {/* Title */}
                <div className="sd2-title-block">
                    <div className="sd2-name-row">
                        <h1 className="sd2-name">그린핸즈 식물 케어</h1>
                        <span className="sd2-status open">영업중</span>
                    </div>
                    <p className="sd2-category">분갈이 · 영양제</p>
                    <div className="sd2-meta">
                        <span className="star">★</span>
                        <span className="sd2-rating">4.9</span>
                        <span className="sd2-reviews">리뷰 120건</span>
                        <span className="sd2-dot">·</span>
                        <span className="sd2-response">응답률 89%</span>
                    </div>
                </div>

                {/* Hero Photos */}
                <div className="sd2-hero-photos">
                    <div className="hero-photo hero-main" style={{ background: "linear-gradient(160deg,#3d5a2e,#5a3e1a)" }}>
                        <span className="hero-emoji">🪴</span>
                    </div>
                    <div className="hero-photo hero-side" style={{ background: "linear-gradient(160deg,#5a3a1a,#3a2a10)" }}>
                        <span className="hero-emoji">🌿</span>
                    </div>
                </div>

                {/* Nav Tabs */}
                <div className="sd2-nav-tabs">
                    {NAV_TABS.map((t) => (
                        <button key={t} className={`sd2-tab ${activeTab === t ? "active" : ""}`}
                            onClick={() => setActiveTab(t)}>{t}</button>
                    ))}
                </div>

                {/* Info */}
                <div className="sd2-info-block">
                    <div className="sd2-info-row">
                        <span className="info-dot green" />
                        <div><span className="info-main">10:00 - 18:00</span><span className="info-sub">  일요일 휴무</span></div>
                    </div>
                    <div className="sd2-info-row">
                        <span className="info-icon-wrap">📞</span>
                        <span className="info-main">010-1234-5678</span>
                        <button className="copy-tag">복사</button>
                    </div>
                    <div className="sd2-info-row">
                        <span className="info-icon-wrap">🏷️</span>
                        <span className="info-main">방문진단, 온라인 진단, 분갈이, 영양제</span>
                    </div>
                    <div className="sd2-info-row">
                        <span className="info-icon-wrap">📍</span>
                        <span className="info-main">서울시 강남구 논현로</span>
                    </div>
                </div>

                {/* Mini Map */}
                <div className="sd2-minimap">
                    <div className="mmap-bg">
                        <div className="mmap-road mh" /><div className="mmap-road mv" /><div className="mmap-road md" />
                        {[...Array(6)].map((_, i) => <div key={i} className={`mmap-block mb${i}`} />)}
                        <div className="mmap-pin">
                            <div className="mmap-pin-label">강남역사거리</div>
                            <svg width="24" height="30" viewBox="0 0 32 40" fill="none">
                                <path d="M16 0C7.163 0 0 7.163 0 16c0 10 16 24 16 24S32 26 32 16C32 7.163 24.837 0 16 0z" fill="#3AB56A" />
                                <circle cx="16" cy="16" r="7" fill="white" /><circle cx="16" cy="16" r="4" fill="#3AB56A" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 업체소개 */}
                <div className="sd2-section">
                    <div className="section-header-row">
                        <span className="sd2-section-title">업체소개</span>
                        <div className="intro-avatar">🌿</div>
                    </div>
                    <div className="intro-meta-row">
                        <span className="intro-verified">✓</span>
                        <span className="intro-meta-text">생성일: 2025년 1월 1일</span>
                    </div>
                    <div className="intro-location-row">
                        <span className="intro-location-icon">📍</span>
                        <span className="intro-location-text">사업자 등록증 및 인증 정보</span>
                    </div>
                    <p className="intro-body">전문적인 식물 관리 서비스를 통해 관리하여 최적화된 그린 환경을 제공합니다. 장기적인 케어와 세심한 토지관리를 바탕으로 식물에 건강한 성장을 돕습니다.</p>
                    <button className="more-link">더보기</button>
                </div>

                {/* 가격 */}
                <div className="sd2-section">
                    <p className="sd2-section-title">가격</p>
                    <div className="service-cards">
                        {SERVICES.map((svc) => (
                            <div key={svc.id} className="service-card">
                                <div className="svc-info">
                                    <p className="svc-name">{svc.name}</p>
                                    <p className="svc-price">{svc.price}</p>
                                    <p className="svc-desc">{svc.desc}</p>
                                </div>
                                <div className="svc-img" style={{ background: svc.bg }}><span>{svc.img}</span></div>
                            </div>
                        ))}
                    </div>
                    <button className="more-link arrow">가격표 더보기 &gt;</button>
                </div>

                {/* 리뷰 */}
                <div className="sd2-section">
                    <div className="review-header">
                        <span className="sd2-section-title">리뷰</span>
                        <span className="review-score-badge"><span className="star">★</span> 4.9</span>
                    </div>
                    <div className="review-filter-row">
                        <span className="review-filter-label">· 관련도순</span>
                        <span className="review-filter-label active">별점순</span>
                    </div>
                    {REVIEWS.map((r) => (
                        <div key={r.id} className="review-card">
                            <div className="review-card-top">
                                <div className="reviewer-info">
                                    <div className="reviewer-ava">👤</div>
                                    <div>
                                        <p className="reviewer-name">{r.author}</p>
                                        <p className="reviewer-date">{r.date}</p>
                                    </div>
                                </div>
                                <div className="review-score-sm"><span className="star">★</span><span>{r.rating}</span></div>
                            </div>
                            <p className="review-body">{r.content}</p>
                            <button className="like-btn">
                                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
                                </svg>
                                도움돼요 {r.likes}
                            </button>
                        </div>
                    ))}
                    <button className="more-link arrow">리뷰 더보기 &gt;</button>
                </div>

                {/* 사진 */}
                <div className="sd2-section">
                    <p className="sd2-section-title">사진</p>
                    <div className="photo-filter-row">
                        {PHOTO_FILTER.map((f) => (
                            <button key={f} className={`photo-filter-btn ${activePhotoFilter === f ? "active" : ""}`}
                                onClick={() => setActivePhotoFilter(f)}>{f}</button>
                        ))}
                    </div>
                    <div className="photo-grid">
                        {GRID_PHOTOS.map((p, i) => (
                            <div key={i} className="photo-cell" style={{ background: p.bg }}><span>{p.icon}</span></div>
                        ))}
                    </div>
                    <button className="more-link arrow">사진 더보기 &gt;</button>
                </div>

                <div style={{ height: 88 }} />
            </div>

            {/* Bottom CTA */}
            <div className="sd2-cta">
                <button className="btn-reserve">예약하기</button>
            </div>

        </div>
    );
}