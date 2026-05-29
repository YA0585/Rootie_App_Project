import { useState } from "react";
import "./MyPage.css";

const MyPage = () => {
    const [activeTab, setActiveTab] = useState(null);

    const reviews = [
        {
            id: 1,
            storeName: "업체명",
            service: "분갈이 • 영양제",
            date: "2025.02.08",
            rating: 4.9,
            content:
                "사용할 시각적 때 사용하는 로렘 전에 들어가는 들어가는 용도로 글로도 차지하는 입숨을 프로젝트 사용할 문장 보여줄 실제적인 프...",
            tags: ["#다육이", "#흙 교체", "#재방문 의사"],
        },
        {
            id: 2,
            storeName: "업체명",
            service: "분갈이 • 영양제",
            date: "2025.02.08",
            rating: 4.9,
            content:
                "사용할 시각적 때 사용하는 로렘 전에 들어가는 들어가는 용도로 글로도 차지하는 입숨을 프로젝트 사용할 문장 보여줄 실제적인 프...",
            tags: ["#다육이", "#흙 교체", "#재방문 의사"],
        },
        {
            id: 3,
            storeName: "업체명",
            service: "분갈이 • 영양제",
            date: "2025.02.08",
            rating: 4.9,
            content:
                "사용할 시각적 때 사용하는 로렘 전에 들어가는 들어가는 용도로 글로도 차지하는 입숨을 프로젝트 사용할 문장 보여줄 실제적인 프...",
            tags: ["#다육이", "#흙 교체", "#재방문 의사"],
        },
    ];

    const plants = [
        { id: 1, name: "식물 이름", species: "몬스테라" },
        { id: 2, name: "식물 이름", species: "몬스테라" },
    ];

    return (
        <div className="mypage-root">
            {/* Header */}
            <header className="mypage-header">
                <h1 className="mypage-title">나의 루티</h1>
                <button className="mypage-icon-btn" aria-label="알림">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M6 10a6 6 0 1 1 12 0v2l2 3H4l2-3v-2z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 19a2 2 0 0 0 4 0"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                    </svg>
                </button>
            </header>

            <div className="mypage-content">
                {/* Profile Card */}
                <section className="card profile-card">
                    <div className="profile-avatar">
                        <img src="https://placehold.co/80x80" alt="프로필" />
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">초보 식집사</div>
                        <div className="profile-meta">Rootie 멤버 • 2026년 가입</div>
                    </div>
                </section>

                {/* Rootie Pay Card */}
                <section className="card pay-card">
                    <div className="pay-label">Rootie Pay</div>
                    <div className="pay-row">
                        <div className="pay-balance">
                            <span className="pay-amount">32,000</span>
                            <span className="pay-unit">원</span>
                        </div>
                        <div className="pay-actions">
                            <button className="btn btn-outline">충전</button>
                            <button className="btn btn-primary">송금</button>
                        </div>
                    </div>
                    <div className="pay-divider" />
                    <div className="pay-stats">
                        <div className="pay-stat">
                            <div className="pay-stat-label">적립 포인트</div>
                            <div className="pay-stat-value green">7500p</div>
                        </div>
                        <div className="pay-stat-separator" />
                        <div className="pay-stat">
                            <div className="pay-stat-label">이용내역</div>
                            <div className="pay-stat-value">3건</div>
                        </div>
                    </div>
                </section>

                {/* Quick Actions */}
                <section className="card actions-card">
                    {[
                        {
                            key: "register",
                            label: "식물 등록",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="1"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <line
                                        x1="12"
                                        y1="8"
                                        x2="12"
                                        y2="16"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <line
                                        x1="8"
                                        y1="12"
                                        x2="16"
                                        y2="12"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            ),
                        },
                        {
                            key: "review",
                            label: "리뷰 작성",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect
                                        x="4"
                                        y="5"
                                        width="13"
                                        height="13"
                                        rx="1"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <rect
                                        x="7"
                                        y="8"
                                        width="13"
                                        height="13"
                                        rx="1"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            ),
                        },
                        {
                            key: "wishlist",
                            label: "찜한 업체",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M5 5h14v14l-7-4-7 4V5z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ),
                        },
                    ].map((action, idx) => (
                        <button
                            key={action.key}
                            className="action-item"
                            onClick={() => setActiveTab(action.key)}
                        >
                            <span className="action-icon">{action.icon}</span>
                            <span className="action-label">{action.label}</span>
                            {idx < 2 && <div className="action-divider" />}
                        </button>
                    ))}
                </section>

                {/* My Plants */}
                <section className="card section-card">
                    <div className="section-header">
                        <span className="section-title">내 반려식물</span>
                        <button className="chevron-btn" aria-label="더보기">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M9 18l6-6-6-6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="plant-list">
                        {plants.map((plant, idx) => (
                            <div key={plant.id} className="plant-item">
                                <img
                                    src="https://placehold.co/60x60"
                                    alt={plant.name}
                                    className="plant-avatar"
                                />
                                <div className="plant-info">
                                    <div className="plant-name">{plant.name}</div>
                                    <div className="plant-species">{plant.species}</div>
                                </div>
                                <button className="btn-diagnose">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path
                                            d="M7 1C4 1 1 3.5 1 7s3 6 6 6 6-2.5 6-6-2.5-6-6-6z"
                                            stroke="white"
                                            strokeWidth="1.2"
                                        />
                                        <path
                                            d="M7 4v3l2 2"
                                            stroke="white"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    진단
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* My Reviews */}
                <section className="card section-card">
                    <div className="section-header">
                        <span className="section-title">내가 작성한 리뷰</span>
                        <button className="chevron-btn" aria-label="더보기">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M9 18l6-6-6-6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="review-list">
                        {reviews.map((review, idx) => (
                            <div
                                key={review.id}
                                className={`review-item${idx < reviews.length - 1 ? "" : " last"}`}
                            >
                                <div className="review-top">
                                    <div className="review-store-info">
                                        <span className="review-store-name">{review.storeName}</span>
                                        <span className="review-service">{review.service}</span>
                                    </div>
                                    <div className="review-rating">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#6AB43A">
                                            <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                                        </svg>
                                        <span className="review-score">{review.rating}</span>
                                    </div>
                                </div>
                                <div className="review-date">{review.date}</div>
                                <div className="review-content-box">
                                    <p className="review-content">{review.content}</p>
                                </div>
                                <div className="review-tags">
                                    {review.tags.map((tag) => (
                                        <span key={tag} className="review-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MyPage;
