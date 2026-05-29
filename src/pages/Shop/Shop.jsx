import { useState } from "react";
import "./Shop.css";
import ShopTabBar from "../../components/ShopTabBar/ShopTabBar";
import ShopTop from "../../components/ShopTop/ShopTop";

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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" fill="#6AB43A" />
    </svg>

);

const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18l6-6-6-6" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const Shop = ({ onBack, onGoToHome, onGoToPrice, onGoToReview }) => {
    const [activeTab, setActiveTab] = useState("홈");
    const [photoFilter, setPhotoFilter] = useState("전체");
    const [copied, setCopied] = useState(false);
    const photoFilters = ["전체", "리뷰", "업체"];

    const handleCopy = () => {
        navigator.clipboard.writeText("010-1234-5678");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="shop-root">
            <ShopTop onBack={onBack} />

            {/* Tab Navigation */}
            <ShopTabBar 
                activeTab={activeTab}
                onTabChange={(tab) => {
                    setActiveTab(tab);
                    if (tab === "홈" && onGoToHome) onGoToHome();
                    if (tab === "가격" && onGoToPrice) onGoToPrice();
                    if (tab === "후기" && onGoToReview) onGoToReview();
                }}
            />

            {/* Shop Details */}
            <section className="shop-section">
                <div className="shop-detail-item">
                    <span className="shop-detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#6B7280" />
                            <path d="M12 6V12L15.5 15.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </span>
                    <div>
                        <div className="shop-detail-main">10:00 - 18:00</div>
                        <div className="shop-detail-sub">일요일 휴무</div>
                    </div>
                </div>

                <div className="shop-detail-item">
                    <span className="shop-detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.15826 5.71217L8.7556 4.80619C8.49232 4.21382 8.36068 3.91762 8.16381 3.69095C7.91708 3.40688 7.59547 3.19788 7.23568 3.08779C6.94859 2.99994 6.62446 2.99994 5.97621 2.99994C5.02791 2.99994 4.55376 2.99994 4.15573 3.18223C3.68687 3.39696 3.26344 3.86322 3.09473 4.35054C2.95151 4.76423 2.99254 5.18937 3.07458 6.03964C3.94791 15.0901 8.90982 20.052 17.9603 20.9254C18.8106 21.0074 19.2358 21.0484 19.6494 20.9052C20.1368 20.7365 20.603 20.3131 20.8178 19.8442C21 19.4462 21 18.972 21 18.0237C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8361C20.0824 15.6393 19.7862 15.5076 19.1938 15.2443L18.2878 14.8417C17.6463 14.5566 17.3255 14.414 16.9996 14.383C16.6876 14.3533 16.3731 14.3971 16.0811 14.5108C15.776 14.6296 15.5064 14.8543 14.967 15.3038C14.4302 15.7511 14.1618 15.9748 13.8338 16.0946C13.543 16.2009 13.1586 16.2402 12.8524 16.1951C12.5069 16.1442 12.2424 16.0028 11.7133 15.7201C10.0673 14.8404 9.15953 13.9327 8.27987 12.2867C7.99714 11.7576 7.85578 11.4931 7.80487 11.1476C7.75974 10.8414 7.79908 10.457 7.9053 10.1662C8.02512 9.83822 8.24881 9.5698 8.69619 9.03294C9.14562 8.49362 9.37034 8.22396 9.48915 7.91885C9.60285 7.62688 9.64662 7.31234 9.61695 7.00042C9.58594 6.67446 9.44338 6.3537 9.15826 5.71217Z" fill="#6B7280" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" />
                        </svg>

                    </span>
                    <span className="shop-detail-main">010-1234-5678</span>
                    <button className="shop-copy-btn" onClick={handleCopy}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2 12.7002V14.1002C16.2 16.41 16.2 17.565 15.4824 18.2825C14.7648 19.0001 13.6099 19.0001 11.3 19.0001C8.9902 19.0001 7.83529 19.0001 7.11766 18.2825C6.4001 17.565 6.4001 16.41 6.4001 14.1002V12.7002C6.4001 10.3904 6.4001 9.23547 7.11766 8.51784C7.83529 7.80028 8.9902 7.80028 11.3 7.80028C13.6099 7.80028 14.7648 7.80028 15.4824 8.51784C16.2 9.23547 16.2 10.3904 16.2 12.7002Z" stroke="#00469C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 16.2V9.90004C19 7.59021 19 6.4353 18.2824 5.71767C17.5648 5.00011 16.4099 5.00011 14.1001 5.00011H9.20015" stroke="#00469C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        {copied ? "복사됨" : "복사"}
                    </button>
                </div>

                <div className="shop-detail-item">
                    <span className="shop-detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8V13.9091C3 17.2518 3 18.9231 3.93037 19.9615C4.86073 21 6.35813 21 9.35294 21H14.6471C17.6418 21 19.1392 21 20.0696 19.9615C21 18.9231 21 17.2518 21 13.9091V8" fill="#6B7280" />
                            <path d="M8 18H16H8Z" fill="#6B7280" />
                            <path d="M8 18H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 8.50147C17 9.88218 15.8807 10.9996 14.5 10.9996C13.1193 10.9996 12 9.88032 12 8.49961C12 9.88032 10.8807 10.9996 9.5 10.9996C8.11929 10.9996 7 9.88032 7 8.49961C7 9.88032 5.82654 10.9996 4.379 10.9996C3.59983 10.9996 2.90007 10.6753 2.41999 10.1605C1.59461 9.27543 2.12559 7.97366 2.81446 6.98806L3.202 6.45815C4.08384 5.25234 4.52476 4.64944 5.16491 4.32457C5.80507 3.99971 6.552 3.99981 8.04586 4.00001L15.9551 4.00107C17.4485 4.00126 18.1952 4.00136 18.8351 4.32622C19.475 4.65107 19.9158 5.25378 20.7974 6.45921L21.1855 6.98992C21.8744 7.97553 22.4054 9.2773 21.58 10.1624C21.0999 10.6772 20.4001 11.0015 19.621 11.0015C18.1734 11.0015 17 9.88218 17 8.50147Z" fill="white" />
                            <path d="M17 7.50147C17 8.88218 15.8807 9.99961 14.5 9.99961C13.1193 9.99961 12 8.88032 12 7.49961C12 8.88032 10.8807 9.99961 9.5 9.99961C8.11929 9.99961 7 8.88032 7 7.49961C7 8.88032 5.82654 9.99961 4.379 9.99961C3.59983 9.99961 2.90007 9.67531 2.41999 9.16051C1.59461 8.27543 2.12559 6.97366 2.81446 5.98806L3.202 5.45815C4.08384 4.25234 4.52476 3.64944 5.16491 3.32457C5.80507 2.99971 6.552 2.99981 8.04586 3.00001L15.9551 3.00107C17.4485 3.00126 18.1952 3.00136 18.8351 3.32622C19.475 3.65107 19.9158 4.25378 20.7974 5.45921L21.1855 5.98992C21.8744 6.97553 22.4054 8.2773 21.58 9.16237C21.0999 9.67717 20.4001 10.0015 19.621 10.0015C18.1734 10.0015 17 8.88218 17 7.50147Z" fill="#6B7280" />
                        </svg>

                    </span>
                    <span className="shop-detail-main">방문진단, 온라인 진단, 분갈이, 영양제</span>
                </div>

                <div className="shop-detail-item">
                    <span className="shop-detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.001 1.5C15.7325 1.5 19.2888 3.70828 20.7754 7.18262C22.1542 10.4058 21.4172 13.1492 19.8496 15.5234C18.3069 17.8601 15.9202 19.896 13.959 21.7324C13.4312 22.2264 12.7288 22.5 12.001 22.5C11.2731 22.5 10.5708 22.2264 10.043 21.7324L10.042 21.7314C8.08715 19.8901 5.7002 17.8548 4.15625 15.5215C2.5869 13.1497 1.84601 10.4098 3.22656 7.18262C4.71302 3.70825 8.26945 1.50005 12.001 1.5Z" fill="#6B7280" stroke="#6B7280" />
                            <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" fill="white" />
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6 9.42831V7.3962C16.6 6.2482 16.6 5.6742 16.3171 5.2997C16.0343 4.9252 15.3947 4.74339 14.1155 4.37977C13.2415 4.13134 12.4711 3.83204 11.8556 3.5588C11.0164 3.18627 10.5968 3 10.3 3C10.0032 3 9.58362 3.18627 8.7444 3.5588C8.12887 3.83204 7.35849 4.13133 6.48453 4.37977C5.20535 4.74339 4.56575 4.9252 4.28288 5.2997C4 5.6742 4 6.2482 4 7.3962V9.42831C4 13.3659 7.54394 15.7284 9.3158 16.6636C9.74077 16.8879 9.95322 17 10.3 17C10.6468 17 10.8592 16.8879 11.2842 16.6636C13.056 15.7284 16.6 13.3659 16.6 9.42831Z" stroke="#00469C" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6.80029 9.19509L9.25029 11.6451L13.4503 7.09509" stroke="#00469C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                <button className="shop-more-link" onClick={onGoToPrice}>
                    가격표 더보기 <ChevronRight />
                </button>
            </section>

            {/* Reviews Section */}
            <section className="shop-section shop-review-section">
                <div className="shop-review-header">
                    <div className="shop-review-title-row">
                        <span className="shop-section-title-inline">후기</span>
                        <StarIcon size={20} />
                        <span className="shop-review-score">4.9</span>
                    </div>
                    <div className="shop-review-sort">
                        <span className="shop-sort-active">• 관련도순</span>
                        <span className="shop-sort-inactive">• 최신순</span>
                    </div>
                </div>

                {reviews.map((review) => (
                    <div key={review.id} className="shop-review-item">
                        <div className="shop-review-top">
                            <div className="shop-review-user-row">
                                <img src="https://placehold.co/61x61" alt={review.username} className="shop-review-avatar" />
                                <div className="shop-review-user-info">
                                    <div className="shop-review-rating-row">
                                        <StarIcon size={20} />
                                        <span className="shop-review-rating">{review.rating}</span>
                                    </div>
                                    <div className="shop-review-meta-row">
                                        <span className="shop-review-username">{review.username}</span>
                                        <span className="shop-review-date">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-review-right">
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

                <button className="shop-more-link" onClick={onGoToReview}>
                    후기 더보기 <ChevronRight />
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