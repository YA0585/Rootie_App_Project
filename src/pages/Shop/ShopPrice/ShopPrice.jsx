import { useState } from "react";
import "./ShopPrice.css";
import ShopTabBar from "../../../components/ShopTabBar/ShopTabBar";

const StarIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#6AB43A" stroke="none">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
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

const ChevronRightIcon = () => (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const priceItems = [
    {
        id: 1,
        name: "분갈이",
        price: "4,000원~",
        description: "화분의 사이즈를 기준으로 비용이 계산됩니다. 정확한 비용 측정을 위해 화분의 입구의 지름(외경) ...",
        img: "https://placehold.co/98x98/c8e6a0/4a7c3f?text=🌿",
    },
    {
        id: 2,
        name: "영양제",
        price: "4,000원~",
        description: "선택하신 옵션 및 구성에 따라 가격이 달라질 수 있습니다. 상세 페이지에서 정확한 가격을 확인해 주세요.",
        img: "https://placehold.co/98x98/b5d990/3d6b34?text=🪴",
    },
    {
        id: 3,
        name: "가지치기",
        price: "10,000원~",
        description: "10컷 이상을 기준으로 금액이 측정됩니다. 상세페이지에서 정확한 가격을 확인해주세요.",
        img: "https://placehold.co/98x98/a8d578/2e5a1f?text=✂️",
    },
];

export default function ShopPrice({ onBack }) {
    const [activeTab, setActiveTab] = useState("가격");

    return (
        <div className="shopprice-root">
            {/* Header */}
            <div className="shopprice-header">
                <button className="sp-icon-btn" onClick={onBack}><BackIcon /></button>
                <button className="sp-icon-btn"><BookmarkIcon /></button>
            </div>

            {/* Business Info */}
            <div className="sp-business-info">
                <div className="sp-title-row">
                    <div>
                        <h1 className="sp-business-name">그린핸즈 식물 케어</h1>
                        <p className="sp-business-category">분갈이 • 영양제</p>
                        <div className="sp-meta">
                            <StarIcon size={14} />
                            <span className="sp-meta-rating">4.9</span>
                            <span className="sp-meta-dot">·</span>
                            <span className="sp-meta-item">리뷰 120건</span>
                            <span className="sp-meta-dot">·</span>
                            <span className="sp-meta-item">응답률 89%</span>
                        </div>
                    </div>
                    <span className="sp-open-badge">영업중</span>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="sp-gallery">
                <img src="https://placehold.co/250x250/c8e6a0/4a7c3f?text=🌿" alt="식물 케어 1" className="sp-gallery-img" />
                <img src="https://placehold.co/250x250/b5d990/3d6b34?text=🪴" alt="식물 케어 2" className="sp-gallery-img" />
            </div>

            {/* Tabs */}
            <ShopTabBar 
                activeTab={activeTab} 
                onTabChange={setActiveTab} 
            />

            {/* Price Section */}
            <div className="sp-price-section">
                <p className="sp-section-title">가격</p>

                <div className="sp-price-list">
                    {priceItems.map((item) => (
                        <div key={item.id} className="sp-price-card">
                            <div className="sp-price-info">
                                <p className="sp-item-name">{item.name}</p>
                                <p className="sp-item-price">{item.price}</p>
                                <p className="sp-item-desc">{item.description}</p>
                            </div>
                            <img src={item.img} alt={item.name} className="sp-item-img" />
                        </div>
                    ))}
                </div>

                <button className="sp-more-btn">
                    <span>가격표 더보기</span>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
}
