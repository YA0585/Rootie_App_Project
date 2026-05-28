// import React, { useState } from "react";
// import "./Home.css";

// const tags = ["긴급", "병해충", "과습", "분갈이", "가지치기"];

// export default function Home({ navBar, onGoToMap, onGoToReservations, onGoToChat }) {
//     const [activeTag, setActiveTag] = useState("긴급");

//     return (
//         <div className="phone-wrap">

//             {/* Header */}
//             <header className="header">
//                 <span className="logo">Rootie</span>
//                 <button className="bell-btn" aria-label="알림">
//                     <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
//                         stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round"
//                             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                     </svg>
//                 </button>
//             </header>

//             {/* Scrollable Content */}
//             <div className="scroll-area">

//                 {/* Notice */}
//                 <div className="notice">
//                     <div className="notice-icon">
//                         <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
//                             stroke="var(--fin-maincolor)" strokeWidth="2.2">
//                             <path strokeLinecap="round" strokeLinejoin="round"
//                                 d="M11 5.882V19.24a1 1 0 001.516.86l7-4.166a1 1 0 000-1.72l-7-4.166A1 1 0 0011 5.882z" />
//                         </svg>
//                     </div>
//                     <p>오늘의 날씨는 햇빛이 쨍쨍이에요. &nbsp;25°c</p>
//                 </div>

//                 {/* Hero Banner */}
//                 <div className="hero" onClick={() => onGoToChat && onGoToChat()} style={{ cursor: "pointer" }}>
//                     <div className="hero-text">
//                         <h2>
//                             식집사님,<br />
//                             <em>반려식물의 상태</em>를<br />
//                             함께 알아볼까요?
//                         </h2>
//                         <p>전문가의 진단을 받아<br />식물의 정확한 상태를 알아보세요.</p>
//                     </div>
//                     <div className="hero-img-placeholder">
//                         <span className="plant-illustration">🪴</span>
//                     </div>
//                 </div>

//                 {/* CTA Strip */}
//                 <div className="cta-strip" onClick={() => onGoToReservations && onGoToReservations()}>
//                     <div className="cta-icon">
//                         <svg width="18" height="18" fill="none" viewBox="0 0 24 24"
//                             stroke="var(--fin-maincolor)" strokeWidth="2">
//                             <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                             <line x1="16" y1="2" x2="16" y2="6" />
//                             <line x1="8" y1="2" x2="8" y2="6" />
//                             <line x1="3" y1="10" x2="21" y2="10" />
//                         </svg>
//                     </div>
//                     <span>첫 방문예약 잡아보기</span>
//                     <svg className="arrow" width="18" height="18" fill="none"
//                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                     </svg>
//                 </div>

//                 {/* Map Card */}
//                 <div className="map-card" onClick={() => onGoToMap && onGoToMap()} style={{ cursor: "pointer" }}>
//                     <div className="map-text">
//                         <p>식집사님의 위치기반<br />매칭 서비스</p>
//                     </div>
//                     <div className="map-visual">
//                         <svg width="91" height="71" viewBox="0 0 91 71" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M0.766022 45.6145L50.1963 29.4218C50.5919 29.2922 51.0211 29.31 51.4047 29.472L89.637 45.6145V47.9048C89.637 48.6067 89.2118 49.2387 88.5616 49.5032L38.7303 69.7736L1.69226 50.4128C1.12291 50.1152 0.766022 49.5259 0.766022 48.8835V45.6145Z" fill="#B9E3A4" />
//                             <path d="M38.7303 69.7736L88.5616 49.5032C89.2118 49.2387 89.637 48.6067 89.637 47.9048V45.6145L51.4047 29.472C51.0211 29.31 50.5919 29.2922 50.1963 29.4218L0.766022 45.6145V48.8835C0.766022 49.5259 1.12291 50.1152 1.69226 50.4128L38.7303 69.7736ZM0.766022 45.6145L38.7303 64.5966M89.637 45.6145L38.7303 64.5966M38.7303 64.5966V69.7736" stroke="#B9E3A4" stroke-linecap="round" />
//                             <path d="M36.0802 40.1302L24.1447 62.6556L1.19446 50.6585C0.460574 50.2747 0.000416174 49.515 0.00012207 48.6868V45.055L0.344849 44.9427L27.6661 35.9925L36.0802 40.1302Z" fill="#ABCEFC" />
//                             <path d="M71.3928 52.5818L29.2685 35.5401C29.2258 35.5229 29.1786 35.5209 29.1346 35.5344L23.4131 37.2949C23.2336 37.3501 23.2224 37.6001 23.3963 37.6711L66.2165 55.1701C66.2917 55.2008 66.3408 55.274 66.3408 55.3552V58.0895C66.3408 58.2292 66.4804 58.3259 66.6112 58.2767L71.3881 56.4811C71.4661 56.4518 71.5178 56.3772 71.5178 56.2939V52.7672C71.5178 52.6858 71.4683 52.6124 71.3928 52.5818Z" fill="white" stroke="white" stroke-linecap="round" />
//                             <path d="M21.949 56.3778L35.1864 39.8061C35.2415 39.7372 35.3351 39.7125 35.417 39.7452L39.3534 41.3198C39.4748 41.3683 39.5177 41.5185 39.4402 41.6239L26.8093 58.8117C26.7839 58.8463 26.7703 58.8881 26.7705 58.931L26.7888 63.1359C26.7895 63.2881 26.6267 63.3853 26.4931 63.3124L22.0096 60.8677C21.9453 60.8327 21.9053 60.7654 21.9053 60.6922V56.5026C21.9053 56.4572 21.9207 56.4132 21.949 56.3778Z" fill="white" stroke="white" stroke-linecap="round" />
//                             <path d="M57.92 26.6102C57.3243 27.168 56.5278 27.4799 55.6989 27.4799C54.8699 27.4799 54.0736 27.168 53.4777 26.6102C48.0209 21.4701 40.7082 15.7281 44.2744 7.39176C46.2026 2.8844 50.8311 0.000183105 55.6989 0.000183105C60.5666 0.000183105 65.1952 2.8844 67.1234 7.39176C70.6851 15.7176 63.3903 21.4878 57.92 26.6102Z" fill="#5C9D31" />
//                             <path d="M56.7699 26.61C56.1741 27.1679 55.3776 27.4798 54.5487 27.4798C53.7198 27.4798 52.9234 27.1679 52.3275 26.61C46.8708 21.47 39.558 15.7279 43.1242 7.39163C45.0524 2.88428 49.681 6.10352e-05 54.5487 6.10352e-05C59.4165 6.10352e-05 64.045 2.88428 65.9733 7.39163C69.5349 15.7175 62.2402 21.4877 56.7699 26.61Z" fill="#6AB43A" />
//                             <path d="M58.2845 12.4885C58.2845 14.6585 56.5254 16.4177 54.3554 16.4177C52.1853 16.4177 50.4262 14.6585 50.4262 12.4885C50.4262 10.3185 52.1853 8.55939 54.3554 8.55939C56.5254 8.55939 58.2845 10.3185 58.2845 12.4885Z" fill="white" stroke="white" stroke-width="1.5" />
//                             <path d="M73.9591 38.4325L54.6322 30.1712C54.4941 30.1122 54.3427 30.2207 54.3542 30.3704L55.043 39.348C55.0513 39.4567 55.1452 39.5387 55.2541 39.5323L73.9591 38.4325Z" fill="black" fill-opacity="0.1" />
//                             <path d="M54.7229 29.4965L59.1726 33.0094C59.3401 33.1416 59.4379 33.3433 59.4379 33.5567C59.4379 33.9419 59.1256 34.2542 58.7404 34.2542H58.4025V36.0661C58.4025 37.5303 58.4025 38.2625 57.9476 38.7174C57.4927 39.1723 56.7605 39.1723 55.2963 39.1723H53.2255C51.7612 39.1723 51.0291 39.1723 50.5742 38.7174C50.1193 38.2625 50.1193 37.5303 50.1193 36.0661V34.2542H49.7814C49.3962 34.2542 49.084 33.9419 49.084 33.5567C49.084 33.3433 49.1817 33.1416 49.3492 33.0094L53.7989 29.4965C53.9305 29.3926 54.0932 29.3361 54.2609 29.3361C54.4286 29.3361 54.5913 29.3926 54.7229 29.4965Z" fill="#6AB43A" stroke="#6AB43A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                             <path d="M55.5551 39.1723V36.8426C55.5551 36.3588 55.5551 36.1169 55.4511 35.9367C55.383 35.8186 55.2849 35.7206 55.1669 35.6525C54.9867 35.5484 54.7447 35.5484 54.2609 35.5484C53.7771 35.5484 53.5352 35.5484 53.3549 35.6525C53.2369 35.7206 53.1389 35.8186 53.0707 35.9367C52.9667 36.1169 52.9667 36.3588 52.9667 36.8426V39.1723" fill="white" />
//                             <path d="M55.5551 39.1723V36.8426C55.5551 36.3588 55.5551 36.1169 55.4511 35.9367C55.383 35.8186 55.2849 35.7206 55.1669 35.6525C54.9867 35.5484 54.7447 35.5484 54.2609 35.5484C53.7771 35.5484 53.5352 35.5484 53.3549 35.6525C53.2369 35.7206 53.1389 35.8186 53.0707 35.9367C52.9667 36.1169 52.9667 36.3588 52.9667 36.8426V39.1723" stroke="#6AB43A" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
//                             <ellipse cx="42.2724" cy="57.4677" rx="3.23021" ry="0.862825" transform="rotate(-5.19856 42.2724 57.4677)" fill="black" fill-opacity="0.1" />
//                             <path d="M40.5251 57.1883C40.3265 57.3742 40.061 57.4782 39.7847 57.4782C39.5084 57.4782 39.243 57.3742 39.0443 57.1883C37.2254 55.4749 34.7878 53.5609 35.9765 50.7822C36.6193 49.2797 38.1622 48.3183 39.7847 48.3183C41.4073 48.3183 42.9502 49.2797 43.593 50.7822C44.7802 53.5574 42.3486 55.4808 40.5251 57.1883Z" fill="#5C9D31" />
//                             <path d="M40.1418 57.1882C39.9432 57.3741 39.6777 57.4781 39.4014 57.4781C39.1251 57.4781 38.8596 57.3741 38.661 57.1882C36.842 55.4748 34.4044 53.5608 35.5932 50.782C36.2359 49.2796 37.7788 48.3182 39.4014 48.3182C41.024 48.3182 42.5668 49.2796 43.2096 50.782C44.3968 53.5573 41.9652 55.4807 40.1418 57.1882Z" fill="#6AB43A" />
//                             <path d="M40.4558 52.6325C40.4558 53.109 40.0695 53.4953 39.5929 53.4953C39.1164 53.4953 38.7301 53.109 38.7301 52.6325C38.7301 52.156 39.1164 51.7697 39.5929 51.7697C40.0695 51.7697 40.4558 52.156 40.4558 52.6325Z" fill="white" stroke="white" />
//                             <path d="M38.614 65.0324L0.0131836 44.8793V49.7442L38.614 70.1766L90.0132 49.2577V44.8793L38.614 65.0324Z" fill="black" fill-opacity="0.1" />
//                         </svg>

//                     </div>
//                 </div>

//                 {/* Section Title */}
//                 <p className="section-title">
//                     이번주 식집사들의 <em>PICK</em>
//                 </p>

//                 {/* Tags */}
//                 <div className="tags">
//                     {tags.map((tag) => (
//                         <span
//                             key={tag}
//                             className={`tag ${activeTag === tag ? "active" : ""}`}
//                             onClick={() => setActiveTag(tag)}
//                         >
//                             {tag}
//                         </span>
//                     ))}
//                 </div>

//                 {/* Expert Card */}
//                 <div className="expert-card" onClick={() => onGoToMap && onGoToMap()} style={{ cursor: "pointer" }}>
//                     <div className="expert-avatar">🌿</div>
//                     <div className="expert-info">
//                         <h3>그린핸즈 식물 케어</h3>
//                         <div className="expert-location">
//                             <svg width="12" height="12" fill="var(--fin-maincolor)" viewBox="0 0 24 24">
//                                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
//                             </svg>
//                             서울시 서초구 00동
//                         </div>
//                         <div className="expert-rating">
//                             <span className="star">★</span>
//                             <strong>4.9</strong>
//                             <span>리뷰 120건</span>
//                             <span>·</span>
//                             <span>응답률 89%</span>
//                         </div>
//                     </div>
//                     <button className="bookmark" aria-label="북마크">
//                         <svg width="18" height="18" fill="none" viewBox="0 0 24 24"
//                             stroke="currentColor" strokeWidth="2">
//                             <path strokeLinecap="round" strokeLinejoin="round"
//                                 d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
//                         </svg>
//                     </button>
//                 </div>

//             </div>{/* /scroll-area */}

//             {/* Bottom Nav */}
//             {navBar}

//         </div>
//     );
// }


import { useState } from "react";
import "./Home.css";

// ── Icons (inline SVG helpers) ──────────────────────────────────────────────
const IconBell = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5.42 8.68a6.58 6.58 0 0 1 13.16 0l.68 5.56 1.5 2.07H3.24l1.5-2.07.68-5.56Z" stroke="#6B7280" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10.63 19.58a1.42 1.42 0 0 0 2.84 0" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const IconWeather = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="0" y="1" width="13.5" height="12" rx="2" stroke="#2F2F2F" strokeWidth="1.5" />
        <rect x="3.75" y="9.63" width="3.75" height="3.38" rx="1" stroke="#2F2F2F" strokeWidth="1.5" />
    </svg>
);

const IconCalendar = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="16" rx="2" stroke="#2F2F2F" strokeWidth="1.5" />
        <rect x="8" y="2" width="4" height="4" rx="1" stroke="#2F2F2F" strokeWidth="1.5" />
        <rect x="13" y="14" width="4" height="4" rx="1" fill="#2F2F2F" />
    </svg>
);

const IconPin = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5A4.3 4.3 0 0 0 3.7 5.8C3.7 9.2 8 14.5 8 14.5s4.3-5.3 4.3-8.7A4.3 4.3 0 0 0 8 1.5Z" fill="#6B7280" />
        <circle cx="8" cy="6" r="1.5" fill="white" />
    </svg>
);

const IconStar = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#6AB43A">
        <path d="M7 1l1.5 4H13L9.5 7.5l1.5 4L7 9.5 3 11.5l1.5-4L1 5h4.5z" />
    </svg>
);

const IconBookmark = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 3h10a1 1 0 0 1 1 1v13l-6-4-6 4V4a1 1 0 0 1 1-1Z" stroke="#D9D9D9" strokeWidth="1.5" />
    </svg>
);



// ── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES = ["긴급", "병해충", "과습", "분갈이"];

const SHOPS = [
    {
        id: 1,
        name: "그린핸즈 식물 케어",
        location: "서울시 서초구 00동",
        rating: 4.9,
        reviews: 120,
        responseRate: 89,
        isOpen: false,
        avatar: "https://placehold.co/80x80/b9e3a4/5c9d31?text=🌿",
    },
    {
        id: 2,
        name: "그린핸즈 식물 케어",
        location: "서울시 서초구 00동",
        rating: 4.9,
        reviews: 120,
        responseRate: 89,
        isOpen: true,
        avatar: "https://placehold.co/80x80/b9e3a4/5c9d31?text=🌱",
    },
];

const BANNERS = [
    { id: 1, text1: "식집사님의  위치기반", text2: "매칭 서비스", type: "map" },
    { id: 2, text1: "리뷰 작성시 선물처럼", text2: "적립되는 루티 포인트", type: "point" },
];

// ── Sub-components ───────────────────────────────────────────────────────────
function ShopCard({ shop }) {
    return (
        <div className="shop-card">
            <img className="shop-avatar" src={shop.avatar} alt={shop.name} />
            {shop.isOpen && <span className="shop-open-badge">영업중</span>}
            {!shop.isOpen && <span className="shop-bookmark"><IconBookmark /></span>}
            <div className="shop-info">
                <div className="shop-name">{shop.name}</div>
                <div className="shop-location">
                    <IconPin />
                    <span>{shop.location}</span>
                </div>
                <div className="shop-meta">
                    <span className="shop-rating">{shop.rating}</span>
                    <IconStar />
                    <span>리뷰 {shop.reviews}건</span>
                    <span>응답률 {shop.responseRate}%</span>
                </div>
            </div>
        </div>
    );
}

function BannerSlider() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="banner-slider">
            <div
                className="banner-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {BANNERS.map((b) => (
                    <div key={b.id} className={`banner-item banner-item--${b.type}`}>
                        <div className="banner-text">
                            <p>{b.text1}</p>
                            <p>{b.text2}</p>
                        </div>
                        {b.type === "map" && (
                            <div className="banner-illustration banner-illustration--map">
                                <div className="map-blob map-blob--lg" />
                                <div className="map-blob map-blob--sm" />
                                <div className="map-pin" />
                            </div>
                        )}
                        {b.type === "point" && (
                            <div className="banner-illustration banner-illustration--point">
                                <div className="point-bar point-bar--1" />
                                <div className="point-bar point-bar--2" />
                                <div className="point-bar point-bar--3" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="banner-dots">
                {BANNERS.map((_, i) => (
                    <button
                        key={i}
                        className={`banner-dot ${i === current ? "banner-dot--active" : ""}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
            <span className="banner-counter">{current + 1}/{BANNERS.length}</span>
        </div>
    );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function Home({ navBar }) {
    const [activeCategory, setActiveCategory] = useState("긴급");

    return (
        <div className="rootie-screen">
            {/* Header */}
            <header className="rootie-header">
                <span className="rootie-logo">Rootie</span>
                <button className="rootie-bell"><IconBell /></button>
            </header>

            {/* Scrollable content */}
            <main className="rootie-main">
                {/* Weather bar */}
                <div className="weather-bar">
                    <IconWeather />
                    <span>오늘의 날씨는 햇빛이 쨍쨍이에요.</span>
                    <span className="weather-temp">25°c</span>
                </div>

                {/* Hero banner */}
                <div className="hero-banner">
                    <div className="hero-text">
                        <p>
                            식집사님,<br />
                            <span className="hero-green">반려식물의 상태</span>를<br />
                            함께 알아볼까요?
                        </p>
                        <p className="hero-sub">전문가의 진단을 받아<br />식물의 정확한 상태를 알아보세요.</p>
                    </div>
                    <img
                        className="hero-img"
                        src="https://placehold.co/200x220/d6eac8/5c9d31?text=🪴"
                        alt="plant"
                    />
                </div>

                {/* CTA */}
                <div className="cta-bar">
                    <IconCalendar />
                    <span>첫 방문예약 잡아보기</span>
                </div>

                {/* Banner slider */}
                <BannerSlider />

                {/* This week's pick */}
                <div className="pick-section">
                    <div className="pick-title">
                        <span>이번주 식집사들의</span>
                        <span className="pick-label">PICK</span>
                    </div>

                    {/* Category filters */}
                    <div className="category-filters">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                className={`category-btn ${activeCategory === cat ? "category-btn--active" : ""}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Shop cards */}
                    <div className="shop-list">
                        {SHOPS.map((shop) => (
                            <ShopCard key={shop.id} shop={shop} />
                        ))}
                    </div>
                </div>
            </main>

            {/* Bottom tab bar */}
            {navBar}
        </div>
    );
}
