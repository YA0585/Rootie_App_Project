// MapPage.jsx
import { useState, useRef, useEffect } from "react";
import "./Map.css";
import {
    Search,
    Sprout,
    Stethoscope,
    Scissors,
    Syringe,
    Calendar,
    Star,
    Plus,
} from "lucide-react";

export default function Map({ navBar }) {
    const shops = [
        {
            id: 1,
            name: "꽃집",
            category: "분갈이 · 영양제",
            close: "영업중 · 18:00에 영업종료",
            location: "도보 5분 · 서울시 마포구 00동",
            rating: "4.4",
            price: "55,000원~",
        },
        {
            id: 2,
            name: "꽃집",
            category: "분갈이 · 영양제",
            close: "영업중 · 18:00에 영업종료",
            location: "도보 5분 · 서울시 마포구 00동",
            rating: "4.4",
            price: "55,000원~",
        },
    ];

    const [sheetHeight, setSheetHeight] = useState(46);
    const [isDragging, setIsDragging] = useState(false);
    const isDraggingRef = useRef(false);
    const startY = useRef(0);
    const startHeight = useRef(46);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDraggingRef.current) return;
            const deltaY = startY.current - e.clientY;
            const deltaVH = (deltaY / window.innerHeight) * 100;
            let newHeight = startHeight.current + deltaVH;
            if (newHeight < 20) newHeight = 20;
            if (newHeight > 90) newHeight = 90;
            setSheetHeight(newHeight);
        };
        const handleTouchMove = (e) => {
            if (!isDraggingRef.current) return;
            const deltaY = startY.current - e.touches[0].clientY;
            const deltaVH = (deltaY / window.innerHeight) * 100;
            let newHeight = startHeight.current + deltaVH;
            if (newHeight < 20) newHeight = 20;
            if (newHeight > 90) newHeight = 90;
            setSheetHeight(newHeight);
        };
        const handleMouseUp = () => {
            if (!isDraggingRef.current) return;
            isDraggingRef.current = false;
            setIsDragging(false);
            setSheetHeight(prev => {
                if (prev > 65) return 90;
                if (prev < 30) return 20;
                return 46;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    const handleDragStart = (clientY) => {
        isDraggingRef.current = true;
        setIsDragging(true);
        startY.current = clientY;
        setSheetHeight(prev => {
            startHeight.current = prev;
            return prev;
        });
    };

    return (
        <div className="map-page">
            {/* Map Background */}
            <div className="map-background">
                {/* Top Search */}
                <div className="top-section">
                    <div className="search-bar">
                        <Search size={22} className="search-icon" />
                        <input type="text" placeholder="" />
                    </div>

                    {/* Filter Chips */}
                    <div className="filter-row">
                        <button className="chip active">
                            <Sprout size={16} />
                            관엽식물
                        </button>

                        <button className="chip">
                            <Stethoscope size={16} />
                            진단
                        </button>

                        <button className="chip">
                            <Scissors size={16} />
                            분갈이
                        </button>

                        <button className="chip">
                            <Syringe size={16} />
                            영양제
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Add Button */}
            <button 
                className="floating-btn" 
                style={{ bottom: `calc(${sheetHeight}% + 10px)` }}
            >
                <Plus size={24} />
            </button>

            {/* Bottom Sheet */}
            <div 
                className="bottom-sheet" 
                style={{ height: `${sheetHeight}%`, transition: isDragging ? 'none' : 'height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
            >
                <div 
                    className="drag-bar" 
                    onMouseDown={(e) => handleDragStart(e.clientY)}
                    onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
                    style={{ cursor: 'grab', padding: '10px 0', margin: '-10px auto 8px', backgroundClip: 'content-box' }}
                />

                {/* Recommendation Card */}
                <div className="recommend-card">
                    <div className="sparkle">✦</div>

                    <div>
                        <h3>우리 집 식물에게 알맞는 업체는?</h3>
                        <p>
                            간단한 채팅 후, 딱 맞는 관리 전문가와 매칭 받아보세요.
                        </p>
                    </div>
                </div>

                {/* Shop List */}
                <div className="shop-list">
                    {shops.map((shop) => (
                        <div className="shop-card" key={shop.id}>
                            <div className="shop-info">
                                <h4>{shop.name}</h4>
                                <p>{shop.category}</p>
                                <p>{shop.close}</p>
                                <p>{shop.location}</p>

                                <div className="rating-row">
                                    <Star size={14} fill="#73B843" strokeWidth={1.5} />
                                    <span>{shop.rating}</span>
                                    <span>{shop.price}</span>
                                </div>
                            </div>

                            <button className="reserve-btn">
                                <Calendar size={16} />
                                예약
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Bottom Nav */}
            {navBar}
        </div>
    );
}