import { useState } from "react";
import "./ShopReview.css";
import ShopTabBar from "../../../components/ShopTabBar/ShopTabBar";
import ShopTop from "../../../components/ShopTop/ShopTop";

const StarIcon = ({ filled = true, size = 20 }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" fill="#6AB43A" />
    </svg>

);

const ThumbsUpIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10.4115C2 9.50179 2.7374 8.7644 3.64703 8.7644C5.01146 8.7644 6.11757 9.87049 6.11757 11.235V14.5291C6.11757 15.8936 5.01146 16.9997 3.64703 16.9997C2.7374 16.9997 2 16.2623 2 15.3526V10.4115Z" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.1 6.54633L12.8807 7.25463C12.701 7.83503 12.6112 8.12523 12.6803 8.35442C12.7362 8.5398 12.8589 8.69965 13.0261 8.80481C13.2328 8.93477 13.5455 8.93477 14.1709 8.93477H14.5036C16.6201 8.93477 17.6783 8.93477 18.1782 9.56131C18.2353 9.63287 18.2861 9.70905 18.33 9.78893C18.7145 10.4876 18.2774 11.4289 17.4031 13.3115C16.6008 15.0391 16.1995 15.9029 15.4547 16.4113C15.3826 16.4605 15.3085 16.507 15.2326 16.5504C14.4483 17 13.4768 17 11.5334 17H11.112C8.75761 17 7.58047 17 6.84907 16.2914C6.11768 15.5826 6.11768 14.442 6.11768 12.1609V11.3591C6.11768 10.1603 6.11768 9.5609 6.33042 9.01226C6.54317 8.46362 6.95054 8.01253 7.76527 7.11034L11.1346 3.37929C11.2191 3.28572 11.2613 3.23892 11.2986 3.2065C11.6463 2.90388 12.183 2.93794 12.4871 3.28194C12.5197 3.31879 12.5552 3.37051 12.6264 3.47397C12.7377 3.63581 12.7934 3.71673 12.842 3.79689C13.2763 4.51458 13.4077 5.36712 13.2088 6.17648C13.1865 6.26688 13.1577 6.36008 13.1 6.54633Z" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const MoreVertIcon = () => (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="5" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="19" r="2" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const BackIcon = () => (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const BookmarkIcon = () => (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="#6AB43A" stroke="#6AB43A" strokeWidth="1.5">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
);

const EditIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.10807 13.3516L3.5 17L7.14845 16.3919C7.78201 16.2864 8.36675 15.9855 8.82093 15.5312L17.0487 7.30335C17.6504 6.70161 17.6504 5.72603 17.0487 5.12431L15.3757 3.4513C14.7739 2.84956 13.7982 2.84957 13.1965 3.45132L4.96876 11.6792C4.51459 12.1334 4.21367 12.7181 4.10807 13.3516Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.0552 5.33331L15.1663 8.44442" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const PlantCoin = () => (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_541_14446)">
            <path d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z" fill="#6AB43A" />
        </g>
        <path d="M11.4548 7.00003C11.4548 9.81166 9.17549 12.0909 6.36386 12.0909C3.55223 12.0909 1.27295 9.81166 1.27295 7.00003C1.27295 4.1884 3.55223 1.90912 6.36386 1.90912C9.17549 1.90912 11.4548 4.1884 11.4548 7.00003Z" fill="#54902D" />
        <g filter="url(#filter1_ii_541_14446)">
            <path d="M12.091 7.00003C12.091 9.81166 9.81172 12.0909 7.00009 12.0909C4.18846 12.0909 1.90918 9.81166 1.90918 7.00003C1.90918 4.1884 4.18846 1.90912 7.00009 1.90912C9.81172 1.90912 12.091 4.1884 12.091 7.00003Z" fill="#8BE750" />
        </g>
        <path d="M4.45459 5.72729L5.72732 8.59093L6.84095 5.72729L7.95459 8.59093L9.22732 5.72729" stroke="#6AB43A" stroke-width="0.954545" stroke-linecap="round" stroke-linejoin="round" />
        <defs>
            <filter id="filter0_d_541_14446" x="0" y="0" width="14.6364" height="14.3182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="0.636364" dy="0.318182" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.215529 0 0 0 0 0.376602 0 0 0 0 0.111049 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_541_14446" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_541_14446" result="shape" />
            </filter>
            <filter id="filter1_ii_541_14446" x="1.90918" y="1.90912" width="10.1816" height="10.1818" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="0.318182" dy="0.318182" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.393443 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_541_14446" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-0.318182" dy="-0.318182" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.671448 0 0 0 0 1 0 0 0 0 0.458333 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_innerShadow_541_14446" result="effect2_innerShadow_541_14446" />
            </filter>
        </defs>
    </svg>

);

const reviews = [
    {
        id: 1,
        rating: 4.9,
        username: "식물러버",
        date: "2025.01.11",
        text: "화분 교체를 맡겼는데 정말 꼼꼼하게 해주셨어요. 흙도 좋은 걸 써주시고, 뿌리 상태도 확인해서 설명해 주셔서 너무 좋았습니다.",
        helpful: 3,
        hasPhoto: true,
        avatar: "https://placehold.co/61x61/e8f5e0/5F8F65?text=🌿",
    },
    {
        id: 2,
        rating: 4.9,
        username: "초보식집사",
        date: "2025.01.11",
        text: "영양제 추천도 해주시고 관리법도 알려주셔서 식물이 훨씬 건강해졌어요. 다음에 또 이용할 예정입니다.",
        helpful: 1,
        hasPhoto: false,
        avatar: "https://placehold.co/61x61/e8f5e0/5F8F65?text=🌱",
    },
];

const RatingStars = ({ rating, size = 18 }) => {
    const full = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<StarIcon key={i} filled={i < full} size={size} />);
    }
    return <div className="stars-row">{stars}</div>;
};

export default function ShopReview({ onBack, onGoToHome, onGoToPrice, onGoToReview }) {
    const [activeTab, setActiveTab] = useState("후기");
    const [sortBy, setSortBy] = useState("관련도순");
    const [photoOnly, setPhotoOnly] = useState(false);
    const [helpfulCounts, setHelpfulCounts] = useState({ 1: 3, 2: 1 });
    const [helpfulClicked, setHelpfulClicked] = useState({});

    const toggleHelpful = (id) => {
        if (helpfulClicked[id]) return;
        setHelpfulCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
        setHelpfulClicked((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <div className="ratings-root">
            <ShopTop onBack={onBack} />

            {/* Tabs */}
            <ShopTabBar
                activeTab={activeTab}
                onTabChange={(tab) => {
                    setActiveTab(tab);
                    if (tab === "홈" && onGoToHome) onGoToHome();
                    if (tab === "가격" && onGoToPrice) onGoToPrice();
                    if (tab === "후기" && onGoToReview) onGoToReview();
                }}
            />

            {/* Write Review CTA */}
            <div className="write-review-section">
                <p className="write-review-title">식집사님, 해당 업체를 이용하셨나요?</p>
                <p className="write-review-sub">다른 식집사님들에게 도움되는 생생한 후기를 남겨주세요.</p>
                <div className="star-select-row">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <StarIcon key={i} filled={false} size={38} />
                    ))}
                </div>
                <button className="write-review-btn">
                    <EditIcon />
                    <span>후기 남기기</span>
                </button>
                <div className="reward-badge">
                    <span>업체 후기를 쓰고</span>
                    <PlantCoin />
                    <span><strong>루티머니</strong>를 받아보세요</span>
                </div>
            </div>

            {/* Review Section */}
            <div className="review-section">
                <div className="review-header">
                    <div className="review-score-row">
                        <StarIcon size={22} />
                        <span className="review-score">4.9</span>
                        <span className="review-label">후기</span>
                    </div>
                    <div className="review-filters">
                        <button
                            className={`filter-btn ${sortBy === "관련도순" ? "filter-active" : ""}`}
                            onClick={() => setSortBy("관련도순")}
                        >
                            •관련도순
                        </button>
                        <button
                            className={`filter-btn ${sortBy === "최신순" ? "filter-active" : ""}`}
                            onClick={() => setSortBy("최신순")}
                        >
                            •최신순
                        </button>
                        <button
                            className={`filter-photo ${photoOnly ? "filter-photo-active" : ""}`}
                            onClick={() => setPhotoOnly(!photoOnly)}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4783 3.11304H9.44348C6.406 3.11304 4.88725 3.11304 3.94362 4.05666C3 5.00029 3 6.51903 3 9.55652C3 12.594 3 14.1127 3.94362 15.0564C4.88725 16 6.406 16 9.44348 16C12.4809 16 13.9997 16 14.9434 15.0564C15.887 14.1127 15.887 12.594 15.887 9.55652V8.19999" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M7.06885 7.4087L9.44276 9.78261L15.5472 3" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span>사진 후기만</span>
                        </button>
                    </div>
                </div>

                {/* Review Cards */}
                <div className="review-list">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <div className="review-card-header">
                                <div className="reviewer-info">
                                    <img src={review.avatar} alt={review.username} className="reviewer-avatar" />
                                    <div className="reviewer-details">
                                        <div className="reviewer-rating">
                                            <StarIcon size={16} />
                                            <span>{review.rating}</span>
                                        </div>
                                        <p className="reviewer-name">{review.username}</p>
                                        <p className="reviewer-date">{review.date}</p>
                                    </div>
                                </div>
                                <button className="icon-btn muted"><MoreVertIcon /></button>
                            </div>
                            <p className="review-text">{review.text}</p>
                            <button
                                className={`helpful-btn ${helpfulClicked[review.id] ? "helpful-active" : ""}`}
                                onClick={() => toggleHelpful(review.id)}
                            >
                                <ThumbsUpIcon />
                                <span>도움돼요</span>
                                <span className="helpful-count">{helpfulCounts[review.id]}</span>
                            </button>
                        </div>
                    ))}
                </div>

                <button className="more-reviews-btn">
                    <span>리뷰 더보기</span>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
}