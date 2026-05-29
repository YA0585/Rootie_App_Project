import { useState } from "react";
import "./Shop.css";

const services = [
    { name: "분갈이", price: "4,000원~", desc: "화분의 사이즈를 기준으로 비용이 계산됩니다. 정확한 비용 측정을 위해 화분의 입구의 지름(외경) ..." },
    { name: "영양제", price: "4,000원~", desc: "선택하신 옵션 및 구성에 따라 가격이 달라질 수 있습니다. 상세 페이지에서 자세한 가격을 확인해주세요." },
    { name: "가지치기", price: "10,000원~", desc: "10컷 이상을 기준으로 금액이 측정됩니다. 상세페이지에서 정확한 가격을 확인해주세요." },
];

const reviews = [
    {
        id: 1,
        rating: 4.9,
        username: "사용자이름",
        date: "2025.01.11",
        content: "식물 상태가 안 좋아서 걱정이 많았는데 관리 받고 나서 눈에 띄게 건강해졌어요. 방문할 때마다 꼼꼼하게 체크해주시고 관리 방법도 친절하게 알려주셔서 만족합니다.",
        helpful: 1,
    },
    {
        id: 2,
        rating: 4.9,
        username: "사용자이름",
        date: "2025.01.11",
        content: "처음에는 단순 관리 서비스인 줄 알았는데 식물 상태를 정말 세심하게 봐주셔서 놀랐어요. 잎 상태나 물 주기까지 꼼꼼하게 체크해주시고 공간에 맞는 관리 방법도 추천해주셨습니다",
        helpful: 1,
    },
];

const StarIcon = ({ size = 16, color = "#6AB43A" }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
        <path d="M8 1.5l1.545 3.13 3.455.503-2.5 2.437.59 3.44L8 9.27l-3.09 1.74.59-3.44L3 5.133l3.455-.503z" />
    </svg>
);

const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18l6-6-6-6" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const Shop = () => {
    const [activeTab, setActiveTab] = useState("홈");
    const [photoFilter, setPhotoFilter] = useState("전체");
    const [copied, setCopied] = useState(false);

    const tabs = ["홈", "가격", "후기", "사진"];
    const photoFilters = ["전체", "리뷰", "업체"];

    const handleCopy = () => {
        navigator.clipboard.writeText("010-1234-5678");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="shop-root">
            {/* Top Nav */}
            <div className="shop-topnav">
                <button className="shop-back-btn" aria-label="뒤로가기">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18l-6-6 6-6" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
                <button className="shop-bookmark-btn" aria-label="북마크">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 5h14v14l-7-4-7 4V5z" fill="#6AB43A" stroke="#6AB43A" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Shop Info Header */}
            <div className="shop-info-header">
                <div className="shop-title-row">
                    <h1 className="shop-name">그린핸즈 식물 케어</h1>
                    <span className="shop-open-badge">영업중</span>
                </div>
                <div className="shop-meta-row">
                    <span className="shop-category">분갈이 • 영양제</span>
                    <div className="shop-rating-row">
                        <StarIcon size={14} />
                        <span className="shop-rating-score">4.9</span>
                        <span className="shop-meta-text">리뷰 120건</span>
                        <span className="shop-meta-text">응답률 89%</span>
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            <div className="shop-gallery">
                <img src="https://placehold.co/250x250" alt="업체 사진 1" className="shop-gallery-img" />
                <img src="https://placehold.co/250x250" alt="업체 사진 2" className="shop-gallery-img" />
            </div>

            {/* Tab Navigation */}
            <div className="shop-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`shop-tab${activeTab === tab ? " active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Shop Details */}
            <section className="shop-section">
                <div className="shop-detail-item">
                    <span className="shop-detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="9" fill="#6B7280" />
                            <line x1="12" y1="7" x2="12" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="12" y1="13" x2="15" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </span>
                    <div>
                        <div className="shop-detail-main">10:00 - 18:00</div>
                        <div className="shop-detail-sub">일요일 휴무</div>
                    </div>
                </div>

                <div className="shop-detail-item">
                    <span className="shop-detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="18" height="18" rx="2" fill="#6B7280" />
                        </svg>
                    </span>
                    <span className="shop-detail-main">010-1234-5678</span>
                    <button className="shop-copy-btn" onClick={handleCopy}>
                        {copied ? "복사됨" : "복사"}
                    </button>
                </div>

                <div className="shop-detail-item">
                    <span className="shop-detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="3" width="20" height="7" rx="1" fill="#6B7280" />
                            <rect x="3" y="8" width="18" height="13" rx="1" fill="#6B7280" />
                        </svg>
                    </span>
                    <span className="shop-detail-main">방문진단, 온라인 진단, 분갈이, 영양제</span>
                </div>

                <div className="shop-detail-item">
                    <span className="shop-detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#6B7280" />
                            <circle cx="12" cy="9" r="2.5" fill="white" />
                        </svg>
                    </span>
                    <span className="shop-detail-main">서울시 강남구 논현로</span>
                </div>

                {/* Map Placeholder */}
                <div className="shop-map">
                    <img src="https://placehold.co/390x120" alt="지도" className="shop-map-bg" />
                    <div className="shop-map-label">
                        <span className="shop-map-pin-label">강남역사거리</span>
                        <div className="shop-map-pin-tail" />
                    </div>
                    <div className="shop-map-marker">
                        <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
                            <path d="M14 0C6.27 0 0 6.27 0 14c0 9.33 14 22 14 22S28 23.33 28 14C28 6.27 21.73 0 14 0z" fill="#6AB43A" />
                            <circle cx="14" cy="14" r="5" fill="white" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Business Info */}
            <section className="shop-section shop-biz-section">
                <div className="shop-biz-header">
                    <div>
                        <div className="shop-biz-title">업체소개</div>
                        <div className="shop-biz-date">생성일: 2025년 1월 1일</div>
                    </div>
                    <img src="https://placehold.co/60x60" alt="업체 로고" className="shop-biz-logo" />
                </div>
                <div className="shop-biz-cert">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="3" y="2" width="11" height="14" rx="1" stroke="#00469C" strokeWidth="1.5" />
                        <path d="M7 8h4M7 11h2" stroke="#00469C" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span className="shop-biz-cert-text">사업자 등록증 및 인증 정보</span>
                </div>
                <p className="shop-biz-desc">
                    전문적인 식물 관리 서비스를 통해 공간에 최적화된 그린 환경을 제공합니다. 정기적인 케어와 세심한 유지관리를 바탕으로 식물의 건강한 생장을 돕습니다. 오랜 경험과 체계적인 관리 시스템으로 더욱 ...{" "}
                    <button className="shop-more-btn">더보기</button>
                </p>
            </section>

            {/* Price Section */}
            <section className="shop-section shop-price-section">
                <h2 className="shop-section-title">가격</h2>
                <div className="shop-price-list">
                    {services.map((svc) => (
                        <div key={svc.name} className="shop-price-item">
                            <div className="shop-price-info">
                                <div className="shop-price-name">{svc.name}</div>
                                <div className="shop-price-amount">{svc.price}</div>
                                <div className="shop-price-desc">{svc.desc}</div>
                            </div>
                            <img src="https://placehold.co/98x98" alt={svc.name} className="shop-price-img" />
                        </div>
                    ))}
                </div>
                <button className="shop-more-link">
                    가격표 더보기 <ChevronRight />
                </button>
            </section>

            {/* Reviews Section */}
            <section className="shop-section shop-review-section">
                <div className="shop-review-header">
                    <div className="shop-review-title-row">
                        <span className="shop-section-title-inline">리뷰</span>
                        <StarIcon size={20} />
                        <span className="shop-review-score">4.9</span>
                    </div>
                    <div className="shop-review-sort">
                        <span className="shop-sort-active">관련도순</span>
                        <span className="shop-sort-inactive">최신순</span>
                    </div>
                </div>

                {reviews.map((review) => (
                    <div key={review.id} className="shop-review-item">
                        <div className="shop-review-top">
                            <div className="shop-review-user-row">
                                <StarIcon size={20} />
                                <span className="shop-review-rating">{review.rating}</span>
                                <span className="shop-review-username">{review.username}</span>
                                <span className="shop-review-date">{review.date}</span>
                            </div>
                            <div className="shop-review-right">
                                <img src="https://placehold.co/61x61" alt={review.username} className="shop-review-avatar" />
                                <button className="shop-review-menu" aria-label="더보기">
                                    <span />
                                    <span />
                                    <span />
                                </button>
                            </div>
                        </div>
                        <p className="shop-review-content">{review.content}</p>
                        <button className="shop-helpful-btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2 9h3v7H2zM5 9l3-6h1a1 1 0 011 1v4h5l-1.5 6H5z" stroke="#2F2F2F" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                            <span>도움돼요</span>
                            <span>{review.helpful}</span>
                        </button>
                    </div>
                ))}

                <button className="shop-more-link">
                    리뷰 더보기 <ChevronRight />
                </button>
            </section>

            {/* Photos Section */}
            <section className="shop-section shop-photo-section">
                <h2 className="shop-section-title-inline">사진</h2>
                <div className="shop-photo-filters">
                    {photoFilters.map((f) => (
                        <button
                            key={f}
                            className={`shop-photo-filter${photoFilter === f ? " active" : ""}`}
                            onClick={() => setPhotoFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
                <div className="shop-photo-grid">
                    <div className="shop-photo-col">
                        <img src="https://placehold.co/190x172" alt="사진1" className="shop-photo-img" />
                        <img src="https://placehold.co/190x191" alt="사진2" className="shop-photo-img" />
                    </div>
                    <div className="shop-photo-col">
                        <img src="https://placehold.co/190x221" alt="사진3" className="shop-photo-img" />
                        <img src="https://placehold.co/190x172" alt="사진4" className="shop-photo-img" />
                    </div>
                </div>
                <button className="shop-more-link">
                    사진 더보기 <ChevronRight />
                </button>
            </section>
        </div>
    );
};

export default Shop;