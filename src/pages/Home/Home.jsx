import React, { useState } from "react";
import "./Home.css";

const tags = ["긴급", "병해충", "과습", "분갈이", "가지치기"];

export default function Home({ navBar, onGoToMap, onGoToReservations, onGoToChat }) {
    const [activeTag, setActiveTag] = useState("긴급");

    return (
        <div className="phone-wrap">

            {/* Header */}
            <header className="header">
                <span className="logo">Rootie</span>
                <button className="bell-btn" aria-label="알림">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
            </header>

            {/* Scrollable Content */}
            <div className="scroll-area">

                {/* Notice */}
                <div className="notice">
                    <div className="notice-icon">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                            stroke="#3AB56A" strokeWidth="2.2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M11 5.882V19.24a1 1 0 001.516.86l7-4.166a1 1 0 000-1.72l-7-4.166A1 1 0 0011 5.882z" />
                        </svg>
                    </div>
                    <p>오늘의 날씨는 햇빛이 쨍쨍이에요. &nbsp;25°c</p>
                </div>

                {/* Hero Banner */}
                <div className="hero" onClick={() => onGoToChat && onGoToChat()} style={{ cursor: "pointer" }}>
                    <div className="hero-text">
                        <h2>
                            식집사님,<br />
                            <em>반려식물의 상태</em>를<br />
                            함께 알아볼까요?
                        </h2>
                        <p>전문가의 진단을 받아<br />식물의 정확한 상태를 알아보세요.</p>
                    </div>
                    <div className="hero-img-placeholder">
                        <span className="plant-illustration">🪴</span>
                    </div>
                </div>

                {/* CTA Strip */}
                <div className="cta-strip" onClick={() => onGoToReservations && onGoToReservations()}>
                    <div className="cta-icon">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"
                            stroke="#3AB56A" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                    </div>
                    <span>첫 방문예약 잡아보기</span>
                    <svg className="arrow" width="18" height="18" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                {/* Map Card */}
                <div className="map-card" onClick={() => onGoToMap && onGoToMap()} style={{ cursor: "pointer" }}>
                    <div className="map-text">
                        <p>식집사님의 위치기반<br />매칭 서비스</p>
                    </div>
                    <div className="map-visual">
                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                            <div style={{ width: 88.87, height: 40.44, left: 0.77, top: 29.34, position: 'absolute', background: '#B9E3A4', borderRadius: 2, outline: '1px #B9E3A4 solid', outlineOffset: '-0.50px' }} />
                            <div style={{ width: 48.64, height: 22.86, left: 22.88, top: 35.51, position: 'absolute', background: 'white', borderRadius: 0.20, outline: '1px white solid', outlineOffset: '-0.50px' }} />
                            <div style={{ width: 17.69, height: 23.78, left: 21.91, top: 39.69, position: 'absolute', background: 'white', borderRadius: 0.20, outline: '1px white solid', outlineOffset: '-0.50px' }} />
                            <div style={{ width: 24.73, height: 27.48, left: 43.33, top: 0, position: 'absolute', background: '#5C9D31' }} />
                            <div style={{ width: 24.73, height: 27.48, left: 42.18, top: 0, position: 'absolute', background: '#6AB43A' }} />
                            <div style={{ width: 7.86, height: 7.86, left: 50.43, top: 8.56, position: 'absolute', background: 'white', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
                            <div style={{ width: 19.75, height: 9.49, left: 54.33, top: 30.04, position: 'absolute', transform: 'rotate(1deg)', transformOrigin: 'top left', background: 'rgba(0, 0, 0, 0.10)' }} />
                            <div style={{ width: 10.35, height: 9.84, left: 49.08, top: 29.34, position: 'absolute', background: '#6AB43A', outline: '1.50px #6AB43A solid', outlineOffset: '-0.75px' }} />
                            <div style={{ width: 2.59, height: 3.62, left: 52.97, top: 35.55, position: 'absolute', background: 'white', borderRadius: 3, outline: '0.50px #6AB43A solid', outlineOffset: '-0.25px' }} />
                            <div style={{ width: 6.46, height: 1.73, left: 38.98, top: 56.90, position: 'absolute', transform: 'rotate(-5deg)', transformOrigin: 'top left', background: 'rgba(0, 0, 0, 0.10)', borderRadius: 9999 }} />
                            <div style={{ width: 8.24, height: 9.16, left: 35.66, top: 48.32, position: 'absolute', background: '#5C9D31' }} />
                            <div style={{ width: 8.24, height: 9.16, left: 35.28, top: 48.32, position: 'absolute', background: '#6AB43A' }} />
                            <div style={{ width: 1.73, height: 1.73, left: 38.73, top: 51.77, position: 'absolute', background: 'white', outline: '1px white solid', outlineOffset: '-0.50px' }} />
                            <div style={{ width: 90, height: 25.30, left: 0.01, top: 44.88, position: 'absolute', background: 'rgba(0, 0, 0, 0.10)' }} />
                        </div>
                    </div>
                </div>

                {/* Section Title */}
                <p className="section-title">
                    이번주 식집사들의 <em>PICK</em>
                </p>

                {/* Tags */}
                <div className="tags">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={`tag ${activeTag === tag ? "active" : ""}`}
                            onClick={() => setActiveTag(tag)}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Expert Card */}
                <div className="expert-card" onClick={() => onGoToMap && onGoToMap()} style={{ cursor: "pointer" }}>
                    <div className="expert-avatar">🌿</div>
                    <div className="expert-info">
                        <h3>그린핸즈 식물 케어</h3>
                        <div className="expert-location">
                            <svg width="12" height="12" fill="#3AB56A" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                            </svg>
                            서울시 서초구 00동
                        </div>
                        <div className="expert-rating">
                            <span className="star">★</span>
                            <strong>4.9</strong>
                            <span>리뷰 120건</span>
                            <span>·</span>
                            <span>응답률 89%</span>
                        </div>
                    </div>
                    <button className="bookmark" aria-label="북마크">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>
                </div>

            </div>{/* /scroll-area */}

            {/* Bottom Nav */}
            {navBar}

        </div>
    );
}