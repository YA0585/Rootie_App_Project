import React, { useState } from "react";
import "./ShopReview.css";

const NAV_TABS = ["홈", "가격", "후기", "사진"];

const REVIEWS = [
    {
        id: 1, author: "사용자이름", date: "2025.01.11", rating: 4.9, likes: 1,
        content: "시각 출판이나 글로도 최종 들어가는 입솜은 디자인 들어가는 결과물에 결과물에 보여줄 모형의 채워지기 그리킹이라고도 입솜을 이용된다...",
    },
    {
        id: 2, author: "사용자이름", date: "2025.01.11", rating: 4.9, likes: 1,
        content: "시각 출판이나 글로도 최종 들어가는 입솜은 디자인 들어가는 결과물에 결과물에 보여줄 모형의 채워지기 그리킹이라고도 입솜을 이용된다...",
    },
];

export default function ShopReview() {
    const [activeTab, setActiveTab] = useState("후기");
    const [bookmarked, setBookmarked] = useState(true);
    const [userRating, setUserRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [sortBy, setSortBy] = useState("관련도순");
    const [photoOnly, setPhotoOnly] = useState(false);

    return (
        <div className="phone-wrap">

            {/* Header */}
            <header className="sr-header">
                <button className="hd-btn">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="hd-btn bookmark" onClick={() => setBookmarked(!bookmarked)}>
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
                <div className="sr-title-block">
                    <div className="sr-name-row">
                        <h1 className="sr-name">그린핸즈 식물 케어</h1>
                        <span className="sr-status">영업중</span>
                    </div>
                    <p className="sr-category">분갈이 · 영양제</p>
                    <div className="sr-meta">
                        <span className="star-fill">★</span>
                        <span className="sr-rating">4.9</span>
                        <span className="sr-sub">리뷰 120건</span>
                        <span className="sr-dot">·</span>
                        <span className="sr-sub">응답률 89%</span>
                    </div>
                </div>

                {/* Hero Photos */}
                <div className="sr-hero">
                    <div className="hero-img hero-left"><span>🪴</span></div>
                    <div className="hero-img hero-right"><span>🌿</span></div>
                </div>

                {/* Nav Tabs */}
                <div className="sr-nav-tabs">
                    {NAV_TABS.map((t) => (
                        <button key={t} className={`sr-tab ${activeTab === t ? "active" : ""}`}
                            onClick={() => setActiveTab(t)}>{t}</button>
                    ))}
                </div>

                {/* Write Review CTA */}
                <div className="write-review-section">
                    <p className="wr-title">식집사님, 해당 업체를 이용하셨나요?</p>
                    <p className="wr-sub">다른 식집사님들에게 도움되는 생생한 후기를 남겨주세요.</p>

                    <div className="star-rating-row">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <button key={n}
                                className={`star-btn ${(hoveredStar || userRating) >= n ? "filled" : ""}`}
                                onMouseEnter={() => setHoveredStar(n)}
                                onMouseLeave={() => setHoveredStar(0)}
                                onClick={() => setUserRating(n)}>★</button>
                        ))}
                    </div>

                    <button className="btn-write-review">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        후기 남기기
                    </button>

                    <div className="reward-banner">
                        <span className="reward-text">업체 후기를 쓰고</span>
                        <span className="reward-icon">🌿</span>
                        <span className="reward-brand">루티머니</span>
                        <span className="reward-text">를 받아보세요</span>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="reviews-section">
                    <div className="reviews-header">
                        <div className="reviews-score-row">
                            <span className="reviews-label">후기</span>
                            <span className="star-fill">★</span>
                            <span className="reviews-score">4.9</span>
                        </div>
                        <div className="reviews-sort-row">
                            <span className={`sort-btn ${sortBy === "관련도순" ? "active" : ""}`}
                                onClick={() => setSortBy("관련도순")}>·관련도순</span>
                            <span className={`sort-btn ${sortBy === "최신순" ? "active" : ""}`}
                                onClick={() => setSortBy("최신순")}>·최신순</span>
                            <button className={`photo-only-btn ${photoOnly ? "active" : ""}`}
                                onClick={() => setPhotoOnly(!photoOnly)}>
                                <svg width="12" height="12" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>
                                사진 후기만
                            </button>
                        </div>
                    </div>

                    {REVIEWS.map((r, idx) => (
                        <div key={r.id} className={`review-card ${idx < REVIEWS.length - 1 ? "bordered" : ""}`}>
                            <div className="review-card-top">
                                <div className="reviewer-left">
                                    <div className="reviewer-thumb">🌿</div>
                                    <div className="reviewer-meta">
                                        <div className="reviewer-score">
                                            <span className="star-fill">★</span>
                                            <span className="reviewer-rating">{r.rating}</span>
                                        </div>
                                        <p className="reviewer-name">{r.author}</p>
                                        <p className="reviewer-date">{r.date}</p>
                                    </div>
                                </div>
                                <button className="menu-btn">
                                    <span /><span /><span />
                                </button>
                            </div>
                            <p className="review-body">{r.content}</p>
                            <button className="like-btn">
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
                                </svg>
                                도움돼요 {r.likes}
                            </button>
                        </div>
                    ))}

                    <button className="more-reviews-btn">
                        리뷰 더보기
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div style={{ height: 88 }} />
            </div>

            {/* Bottom CTA */}
            <div className="sr-cta">
                <button className="btn-reserve">예약하기</button>
            </div>

        </div>
    );
}