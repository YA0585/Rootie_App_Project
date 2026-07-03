import { useState } from "react";
import "./ShopPrice.css";
import ShopTabBar from "../../../components/ShopTabBar/ShopTabBar";
import ShopTop from "../../../components/ShopTop/ShopTop";
import PriceDetail from "./PriceDetail/PriceDetail";
import greenhandsImg from "../../../assets/greenhands.jpg";

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
        img: greenhandsImg,
    },
    {
        id: 2,
        name: "영양제",
        price: "4,000원~",
        description: "선택하신 옵션 및 구성에 따라 가격이 달라질 수 있습니다. 상세 페이지에서 정확한 가격을 확인해 주세요.",
        img: greenhandsImg,
    },
    {
        id: 3,
        name: "가지치기",
        price: "10,000원~",
        description: "10컷 이상을 기준으로 금액이 측정됩니다. 상세페이지에서 정확한 가격을 확인해주세요.",
        img: greenhandsImg,
    },
];

export default function ShopPrice({ onBack, onGoToHome, onGoToPrice, onGoToReview, onGoToReservations }) {
    const [activeTab, setActiveTab] = useState("가격");
    const [showPriceDetail, setShowPriceDetail] = useState(false);

    if (showPriceDetail) {
        return <PriceDetail onBack={() => setShowPriceDetail(false)} onClose={() => setShowPriceDetail(false)} onReserve={onGoToReservations} />;
    }

    return (
        <div className="shopprice-root">
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

            {/* Price Section */}
            <div className="sp-price-section">
                <p className="sp-section-title">가격</p>

                <div className="sp-price-list">
                    {priceItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="sp-price-card"
                            onClick={() => {
                                if (item.name === "분갈이") setShowPriceDetail(true);
                            }}
                            style={{ cursor: item.name === "분갈이" ? "pointer" : "default" }}
                        >
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
