import { useState } from "react";
import "./ShopReview.css";
import ShopTabBar from "../../../components/ShopTabBar/ShopTabBar";
import ShopTop from "../../../components/ShopTop/ShopTop";

const StarIcon = ({ filled = true, size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#6AB43A" : "none"} stroke="#6AB43A" strokeWidth="1.5">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
);

const ThumbsUpIcon = () => (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
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
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
);

const PlantCoin = () => (
    <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="7" fill="#6AB43A" />
        <path d="M4.5 9C5.5 7 7 6 9.5 5.5C9 8 7.5 9.5 5 10" stroke="#fff" strokeWidth="1" fill="none" />
        <path d="M7 9.5V11" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
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
                            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
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