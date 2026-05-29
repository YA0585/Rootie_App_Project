// PlantDetail.jsx

import "./PlantDetail.css";
import { ChevronLeft } from "lucide-react";

export default function PlantDetail() {
    return (
        <div className="plant-detail-page">
            {/* Header */}
            <header className="plant-detail-header">
                <button className="back-btn">
                    <ChevronLeft size={26} />
                </button>
            </header>

            {/* Top Content */}
            <section className="plant-top-section">
                <button className="edit-btn">편집</button>

                <div className="plant-profile">
                    <img
                        src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop"
                        alt="몬스테라"
                    />

                    <div className="plant-type-badge">몬스테라</div>
                </div>
            </section>

            {/* White Card */}
            <section className="plant-info-card">
                <div className="info-group">
                    <p className="info-label">식물 닉네임</p>
                    <h2 className="info-value">식물 닉네임</h2>
                </div>

                <div className="info-group">
                    <p className="info-label">함께한 첫 날</p>
                    <h2 className="info-value">2026.04.24</h2>
                </div>

                <div className="info-group">
                    <p className="info-label">키우는 위치</p>
                    <h2 className="info-value">거실</h2>
                </div>
            </section>

            {/* Bottom Button */}
            <div className="bottom-button-wrap">
                <button className="diagnosis-button">진단 받기</button>
            </div>
        </div>
    );
}