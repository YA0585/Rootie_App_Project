import { useState } from "react";
import "./MyPage.css";

const MyPage = ({ navBar }) => {
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6841 17.6842V9.63156C18.6841 5.96905 15.715 3 12.0525 3C8.38996 3 5.4209 5.96905 5.4209 9.63156V17.6842" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.1053 17.6843H4" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.4739 19.5789C13.4739 20.3637 12.8377 21 12.0529 21M12.0529 21C11.2681 21 10.6318 20.3637 10.6318 19.5789M12.0529 21V19.5789" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
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
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.3639 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.3639 19.682 19.682C18.3639 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.3639 3 16.2426 3 12Z" stroke="#2F2F2F" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M12 8V16M16 12H8" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            ),
                        },
                        {
                            key: "review",
                            label: "리뷰 작성",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.3949 7.57506L12.7356 14.2344C12.228 14.7419 11.5922 15.102 10.8959 15.276L8 16L8.72397 13.1041C8.89804 12.4078 9.25807 11.772 9.76558 11.2644L16.4249 4.60509L17.4149 3.6151C18.2351 2.79497 19.5648 2.79497 20.3849 3.6151C21.205 4.43524 21.205 5.76493 20.3849 6.58507L19.3949 7.57506ZM16.4249 4.60509L19.3949 7.57506" stroke="#2F2F2F" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M18.9999 13.5C18.9999 16.7875 18.9999 18.4312 18.092 19.5376C17.9258 19.7401 17.7401 19.9258 17.5375 20.092C16.4312 21 14.7874 21 11.4999 21H11C7.22876 21 5.34316 21 4.17159 19.8284C3.00003 18.6569 3 16.7712 3 13V12.5C3 9.21252 3 7.56879 3.90794 6.46244C4.07417 6.2599 4.2599 6.07417 4.46244 5.90794C5.56879 5 7.21252 5 10.5 5" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            ),
                        },
                        {
                            key: "wishlist",
                            label: "찜한 업체",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 17.3827V9.93678C5 6.66674 5 5.03173 6.02512 4.01587C7.05026 3 8.70017 3 12 3C15.2998 3 16.9498 3 17.9748 4.01587C19 5.03173 19 6.66674 19 9.93678V17.3827C19 19.458 19 20.4956 18.3238 20.8671C17.0142 21.5863 14.5578 19.1867 13.3913 18.4642C12.7147 18.0451 12.3764 17.8356 12 17.8356C11.6236 17.8356 11.2853 18.0451 10.6087 18.4642C9.4422 19.1867 6.98579 21.5863 5.67624 20.8671C5 20.4956 5 19.458 5 17.3827Z" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 4L10.4617 6.04992C10.8535 7.7887 12.2113 9.14655 13.9501 9.53823L16 10L13.9501 10.4618C12.2113 10.8534 10.8535 12.2113 10.4617 13.9501L10 16L9.53826 13.9501C9.14654 12.2113 7.78874 10.8534 6.04994 10.4618L4 10L6.04994 9.53823C7.78866 9.14655 9.14654 7.7887 9.53826 6.04993L10 4Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
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
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0353 4.13081L15.6191 7.32464C15.8351 7.76924 16.411 8.19568 16.897 8.27734L19.7677 8.75823C21.6035 9.06673 22.0355 10.4096 20.7126 11.7343L18.4809 13.9845C18.1029 14.3655 17.8959 15.1005 18.0129 15.6268L18.6518 18.4123C19.1558 20.6171 17.9948 21.4701 16.0601 20.3177L13.3694 18.7117C12.8835 18.4214 12.0826 18.4214 11.5876 18.7117L8.89691 20.3177C6.97112 21.4701 5.80125 20.608 6.3052 18.4123L6.94412 15.6268C7.06111 15.1005 6.85413 14.3655 6.47617 13.9845L4.24442 11.7343C2.93057 10.4096 3.35352 9.06673 5.18932 8.75823L8.06 8.27734C8.53694 8.19568 9.11288 7.76924 9.32885 7.32464L10.9127 4.13081C11.7766 2.3978 13.1804 2.3978 14.0353 4.13081Z" fill="#6AB43A" />
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
            {navBar}
        </div>
    );
};

export default MyPage;
