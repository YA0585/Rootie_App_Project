import React, { useState, useEffect, useRef } from "react";
import "./Map.css";

const FILTERS = [
    {
        label: "관엽식물", icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2 1.8V3.4C16.2 4.88521 15.61 6.3096 14.5598 7.3598C13.5096 8.41 12.0852 9 10.6 9H9.8V9.8H13.8V15.4C13.8 15.8243 13.6314 16.2313 13.3314 16.5314C13.0313 16.8314 12.6243 17 12.2 17H5.8C5.37565 17 4.96869 16.8314 4.66863 16.5314C4.36857 16.2313 4.2 15.8243 4.2 15.4V9.8H8.2V7.4C8.2 5.91479 8.79 4.49041 9.8402 3.4402C10.8904 2.39 12.3148 1.8 13.8 1.8H16.2ZM3.8 1C4.75998 0.999224 5.70609 1.22911 6.55869 1.6703C7.41128 2.11149 8.14538 2.75108 8.6992 3.5352C7.85426 4.64626 7.39779 6.00416 7.4 7.4V8.2H7C5.4087 8.2 3.88258 7.56786 2.75736 6.44264C1.63214 5.31742 1 3.7913 1 2.2V1H3.8Z" fill="#6AB43A" />
            <path d="M4.20068 9.8H13.8007V16C13.8007 16.5523 13.353 17 12.8007 17H5.20068C4.6484 17 4.20068 16.5523 4.20068 16V9.8Z" fill="#7D4533" />
        </svg>

        )
    },
    {
        label: "진단", icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3.85719C2 3.40254 2.18061 2.9665 2.5021 2.64501C2.82359 2.32352 3.25963 2.14291 3.71429 2.14291H13.4286C13.8832 2.14291 14.3193 2.32352 14.6408 2.64501C14.9622 2.9665 15.1429 3.40254 15.1429 3.85719V15.2857C15.1429 15.7404 14.9622 16.1764 14.6408 16.4979C14.3193 16.8194 13.8832 17 13.4286 17H3.71429C3.25963 17 2.82359 16.8194 2.5021 16.4979C2.18061 16.1764 2 15.7404 2 15.2857V3.85719Z" fill="#8FBFFA" />
            <path d="M5.71493 2.14285C5.71493 1.83975 5.83533 1.54906 6.04966 1.33473C6.26399 1.12041 6.55468 1 6.85778 1H10.2864C10.5895 1 10.8801 1.12041 11.0945 1.33473C11.3088 1.54906 11.4292 1.83975 11.4292 2.14285V2.71428C11.4292 3.01738 11.3088 3.30807 11.0945 3.5224C10.8801 3.73673 10.5895 3.85713 10.2864 3.85713H6.85778C6.55468 3.85713 6.26399 3.73673 6.04966 3.5224C5.83533 3.30807 5.71493 3.01738 5.71493 2.71428V2.14285ZM7.84407 6.78855C7.78496 6.7881 7.72635 6.7994 7.67165 6.82181C7.61695 6.84422 7.56726 6.87729 7.52546 6.91909C7.48366 6.96088 7.45059 7.01058 7.42818 7.06528C7.40577 7.11997 7.39447 7.17858 7.39492 7.23769V9.02054H5.61207C5.55315 9.02024 5.49476 9.03162 5.44027 9.05403C5.38578 9.07644 5.33627 9.10942 5.29461 9.15108C5.25295 9.19275 5.21996 9.24225 5.19755 9.29674C5.17515 9.35123 5.16377 9.40963 5.16407 9.46854V10.9257C5.16407 11.1737 5.36407 11.3748 5.61207 11.3748H7.39492V13.1577C7.39492 13.4057 7.59607 13.6057 7.84293 13.6057H9.30121C9.36013 13.606 9.41852 13.5946 9.47301 13.5722C9.5275 13.5498 9.57701 13.5168 9.61867 13.4751C9.66033 13.4335 9.69332 13.384 9.71573 13.3295C9.73813 13.275 9.74951 13.2166 9.74921 13.1577V11.3748H11.5321C11.5911 11.3751 11.6496 11.3637 11.7041 11.3412C11.7587 11.3188 11.8083 11.2857 11.8499 11.2439C11.8916 11.2021 11.9246 11.1525 11.9469 11.0978C11.9693 11.0432 11.9805 10.9847 11.9801 10.9257V9.46854C11.9804 9.40963 11.969 9.35123 11.9466 9.29674C11.9242 9.24225 11.8912 9.19275 11.8495 9.15108C11.8079 9.10942 11.7584 9.07644 11.7039 9.05403C11.6494 9.03162 11.591 9.02024 11.5321 9.02054H9.74921V7.23769C9.74967 7.17868 9.7384 7.12016 9.71606 7.06554C9.69372 7.01092 9.66076 6.96128 9.61908 6.91949C9.5774 6.87771 9.52784 6.84462 9.47328 6.82214C9.41871 6.79967 9.36022 6.78825 9.30121 6.78855H7.84407Z" fill="#2859C5" />
        </svg>

        )
    },
    {
        label: "분갈이", icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.87377 8.97773C3.91878 8.92613 3.98244 8.89451 4.05075 8.88985C4.11906 8.88518 4.18643 8.90784 4.23803 8.95284L8.90782 13.0253C8.95942 13.0703 8.99103 13.134 8.9957 13.2023C9.00037 13.2706 8.97771 13.338 8.9327 13.3896L7.54689 14.9786C6.97505 15.6344 6.2602 16.15 5.45751 16.4857C4.65481 16.8214 3.78573 16.9681 2.91731 16.9147L1.69369 16.8393C1.63311 16.8356 1.57545 16.8119 1.5297 16.772C1.48395 16.7321 1.45268 16.6782 1.44075 16.6187L1.19961 15.4167C1.02854 14.5636 1.05574 13.6827 1.27912 12.8418C1.5025 12.0009 1.91608 11.2225 2.48796 10.5668L3.87377 8.97773Z" fill="#C9D6DF" stroke="#C9D6DF" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6453 6.31934L5.89417 11.7674M10.6453 6.31934C10.2716 5.99343 10.0427 5.53239 10.0088 5.03769L9.99549 4.84244C9.97701 4.57184 10.012 4.30025 10.0985 4.04318C10.185 3.7861 10.3212 3.54858 10.4995 3.34417L11.7189 1.94597C11.7414 1.92016 11.7732 1.90436 11.8074 1.90202C11.8415 1.89969 11.8752 1.91102 11.901 1.93352L14.8196 4.47881C14.8454 4.50131 14.8612 4.53314 14.8636 4.56729C14.8659 4.60145 14.8546 4.63513 14.8321 4.66094L13.6127 6.05914C13.4344 6.26356 13.2177 6.43087 12.9747 6.55152C12.7318 6.67216 12.4675 6.74377 12.1969 6.76227L12.0017 6.77561C11.507 6.80935 11.0191 6.64525 10.6453 6.31934Z" stroke="#8B5A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        )
    },
    {
        label: "영양제", icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.643 2.35702L4.43977 8.56023C3.88409 9.11591 3.5619 9.85952 3.54403 10.6275L3.52211 11.5715C3.5081 12.175 3.30584 12.7678 2.94366 13.2671L1.0751 15.8427C0.949743 16.0155 0.963601 16.2479 1.10787 16.3921C1.25213 16.5364 1.48451 16.5503 1.6573 16.4249L4.23292 14.5563C4.73216 14.1942 5.325 13.9919 5.92852 13.9779L6.87246 13.956C7.64047 13.9381 8.38408 13.6159 8.93977 13.0602L15.143 6.85702C16.4447 5.55527 16.4926 3.49264 15.25 2.25C14.0074 1.00736 11.9447 1.05528 10.643 2.35702Z" fill="#D4F2FC" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10.3828 2.61885L9.85903 3.14263L11.109 4.39263C11.2471 4.5307 11.4763 4.52538 11.6209 4.38074C11.7656 4.2361 11.7709 4.00692 11.6328 3.86885L10.3828 2.61885ZM8.28768 4.71398L9.53768 5.96398C9.67575 6.10205 9.90493 6.09673 10.0496 5.95209C10.1942 5.80745 10.1995 5.57827 10.0615 5.4402L8.81146 4.1902L8.28768 4.71398ZM7.24012 5.76154L6.71634 6.28532L7.96634 7.53532C8.10441 7.67339 8.3336 7.66807 8.47823 7.52343C8.62287 7.37879 8.62819 7.14961 8.49012 7.01154L7.24012 5.76154ZM5.14499 7.85667L6.39499 9.10667C6.53306 9.24474 6.76225 9.23942 6.90689 9.09478C7.05152 8.95014 7.05685 8.72096 6.91878 8.58289L5.66878 7.33289L5.14499 7.85667Z" fill="#64CCF3" />
            <path d="M13.6678 4.33318C13.8124 4.18854 13.8178 3.95936 13.6797 3.82129C13.5416 3.68322 13.3124 3.68854 13.1678 3.83318L6.35862 10.6424C6.21398 10.787 6.20866 11.0162 6.34673 11.1542C6.4848 11.2923 6.71398 11.287 6.85862 11.1424L13.6678 4.33318Z" fill="#64CCF3" />
            <path fillRule="evenodd" clipRule="evenodd" d="M4.69644 14.279C4.24224 13.7516 3.74952 13.2588 3.22203 12.8046C3.14393 12.9654 3.0513 13.1202 2.94485 13.267L1.07629 15.8426C0.950943 16.0154 0.964804 16.2477 1.10907 16.392C1.25333 16.5363 1.48571 16.5501 1.65849 16.4248L4.23412 14.5562C4.38085 14.4498 4.53565 14.3571 4.69644 14.279Z" fill="#77D7F5" />
        </svg>
        )
    },
];

const shops = [
    {
        id: 1,
        name: "꽃집",
        tags: "분갈이 · 영양제",
        status: "영업중",
        closes: "18:00에 영업종료",
        distance: "도보 5분",
        address: "서울시 마포구 00동",
        rating: 4.4,
        price: "55,000원~",
    },
    {
        id: 2,
        name: "꽃집",
        tags: "분갈이 · 영양제",
        status: "영업중",
        closes: "18:00에 영업종료",
        distance: "도보 5분",
        address: "서울시 마포구 00동",
        rating: 4.4,
        price: "55,000원~",
    },
];

export default function Map({ navBar, onGoToShop, onGoToLocationSetting }) {
    const [activeFilter, setActiveFilter] = useState("관엽식물");

    // Bottom Sheet Drag State
    const MIN_Y = 50; // Fully expanded (leaves 50px at top)
    const MAX_Y = 600; // Collapsed
    const [sheetY, setSheetY] = useState(MAX_Y);
    const [isDragging, setIsDragging] = useState(false);
    const isDraggingRef = useRef(false);
    const dragStartY = useRef(0);
    const startSheetY = useRef(0);

    const handlePointerDown = (e) => {
        isDraggingRef.current = true;
        setIsDragging(true);
        dragStartY.current = e.clientY;
        startSheetY.current = sheetY;
        e.target.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (!isDraggingRef.current) return;
        const delta = e.clientY - dragStartY.current;
        let newY = startSheetY.current + delta;
        if (newY < MIN_Y) newY = MIN_Y;
        if (newY > MAX_Y) newY = MAX_Y;
        setSheetY(newY);
    };

    const handlePointerUp = (e) => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDragging(false);
        e.target.releasePointerCapture(e.pointerId);

        // Snap to closest boundary
        setSheetY(prevY => {
            const threshold = (MAX_Y + MIN_Y) / 2;
            return prevY < threshold ? MIN_Y : MAX_Y;
        });
    };
    useEffect(() => {
        if (!window.kakao || !window.kakao.maps) return;

        window.kakao.maps.load(() => {
            const container = document.getElementById("map");

            const options = {
                center: new window.kakao.maps.LatLng(37.507970, 127.021722),
                level: 3,
            };

            new window.kakao.maps.Map(container, options);
        });
    }, []);

    return (
        <div className="phone-wrap">

            {/* Map Area */}
            <div className="map-area">
                <div id="map" className="map-bg"></div>

                {/* Search bar */}
                <div className="search-bar">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_451_1224)">
                            <path d="M20.6665 18.6667H19.6132L19.2399 18.3067C20.8399 16.44 21.6665 13.8933 21.2132 11.1867C20.5865 7.48 17.4932 4.52 13.7599 4.06667C8.11986 3.37334 3.37319 8.12 4.06652 13.76C4.51986 17.4933 7.47986 20.5867 11.1865 21.2133C13.8932 21.6667 16.4399 20.84 18.3065 19.24L18.6665 19.6133V20.6667L24.3332 26.3333C24.8799 26.88 25.7732 26.88 26.3199 26.3333C26.8665 25.7867 26.8665 24.8933 26.3199 24.3467L20.6665 18.6667ZM12.6665 18.6667C9.34652 18.6667 6.66652 15.9867 6.66652 12.6667C6.66652 9.34667 9.34652 6.66667 12.6665 6.66667C15.9865 6.66667 18.6665 9.34667 18.6665 12.6667C18.6665 15.9867 15.9865 18.6667 12.6665 18.6667Z" fill="#6B7280" />
                        </g>
                        <defs>
                            <clipPath id="clip0_451_1224">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <input type="text" />
                </div>

                {/* Filter chips */}
                <div className="filter-row">
                    {FILTERS.map(({ label, icon }) => (
                        <button
                            key={label}
                            className={`filter-chip ${activeFilter === label ? "active" : ""}`}
                            onClick={() => setActiveFilter(label)}
                        >
                            <span className="filter-icon">{icon}</span>
                            <span>{label}</span>
                        </button>
                    ))}
                </div>

            </div>

            {/* Bottom Sheet */}
            <div
                className="bottom-sheet"
                style={{
                    transform: `translateY(${sheetY}px)`,
                    transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
            >
                {/* Home location - Follows bottom sheet */}
                <button
                    className="home-location"
                    aria-label="위치추가"
                    style={{
                        opacity: sheetY < 100 ? 0 : 1,
                        pointerEvents: sheetY < 100 ? 'none' : 'auto',
                        transition: isDragging ? 'none' : 'opacity 0.3s ease'
                    }}
                >
                    <div className="icon-wrapper">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 11.9891V14.6316C3 18.1051 3 19.8418 4.07908 20.9209C5.15816 22 6.89492 22 10.3684 22H14.5789C18.0524 22 19.7892 22 20.8683 20.9209C21.9474 19.8418 21.9474 18.1051 21.9474 14.6316V11.9891C21.9474 10.2193 21.9474 9.33445 21.5727 8.56847C21.1981 7.8025 20.4997 7.25924 19.1027 6.17275L16.9975 4.53532C14.8243 2.84511 13.7378 2 12.4737 2C11.2096 2 10.123 2.84511 7.94992 4.53532L5.84464 6.17275C4.44772 7.25924 3.74925 7.8025 3.37463 8.56847C3 9.33445 3 10.2193 3 11.9891Z" fill="#6AB43A" stroke="#6AB43A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.4731 8.78946C12.4845 8.78946 12.4977 8.79349 12.5103 8.80606C12.5226 8.81853 12.5259 8.83092 12.5259 8.84219V13.0004H16.6841C16.6954 13.0004 16.7077 13.0037 16.7202 13.016C16.7326 13.0284 16.7367 13.0409 16.7368 13.0522C16.7368 13.0635 16.7328 13.0767 16.7202 13.0893C16.7077 13.1016 16.6954 13.1049 16.6841 13.1049H12.5259V17.2631C12.5259 17.2744 12.5226 17.2868 12.5103 17.2992C12.4977 17.3118 12.4845 17.3158 12.4731 17.3158C12.4619 17.3157 12.4494 17.3116 12.437 17.2992C12.4246 17.2867 12.4214 17.2744 12.4214 17.2631V13.1049H8.26318C8.25191 13.1049 8.23952 13.1016 8.22705 13.0893C8.21448 13.0767 8.21045 13.0635 8.21045 13.0522C8.21055 13.0409 8.21465 13.0284 8.22705 13.016C8.23953 13.0037 8.25191 13.0004 8.26318 13.0004H12.4214V8.84219C12.4214 8.83092 12.4247 8.81854 12.437 8.80606C12.4494 8.79366 12.4619 8.78956 12.4731 8.78946Z" fill="white" stroke="white" strokeWidth="2" />
                        </svg>
                    </div>
                </button>

                <div
                    className="drag-handle-area"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    style={{
                        width: '100%',
                        padding: '12px 0',
                        cursor: 'grab',
                        touchAction: 'none',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <div className="drag-handle" style={{ margin: 0 }} />
                </div>
                <div className="ai-banner">
                    <span className="ai-icon">
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.3748 3.91669L30.4298 8.60018C31.3247 12.5728 34.4269 15.6751 38.3996 16.57L43.0832 17.625L38.3996 18.68C34.4269 19.5749 31.3247 22.6771 30.4298 26.6498L29.3748 31.3334L28.3199 26.6498C27.4249 22.6771 24.3227 19.5749 20.3501 18.68L15.6665 17.625L20.3501 16.57C24.3225 15.6751 27.4249 12.5728 28.3199 8.6002L29.3748 3.91669Z" fill="#6AB43A" stroke="#6AB43A" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M13.7082 23.5L14.4618 26.8454C15.101 29.6828 17.3169 31.8989 20.1544 32.5381L23.4998 33.2917L20.1544 34.0452C17.3169 34.6844 15.101 36.9003 14.4618 39.7379L13.7082 43.0833L12.9546 39.7379C12.3154 36.9003 10.0995 34.6844 7.26187 34.0452L3.9165 33.2917L7.26187 32.5381C10.0995 31.8989 12.3154 29.683 12.9546 26.8454L13.7082 23.5Z" fill="#6AB43A" stroke="#6AB43A" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>

                    </span>
                    <div className="ai-text">
                        <p className="ai-title">우리 집 식물에게 알맞는 업체는?</p>
                        <p className="ai-sub">간단한 채팅 후, 딱 맞는 관리 전문가와 매칭 받아보세요.</p>
                    </div>
                </div>

                <div className="shop-list">
                    {shops.map((shop, i) => (
                        <div key={shop.id}>
                            <div className="shop-row" onClick={onGoToShop} style={{ cursor: 'pointer' }}>
                                <div className="shop-info">
                                    <p className="shop-name">{shop.name}</p>
                                    <p className="shop-tags">{shop.tags}</p>
                                    <p className="shop-hours">
                                        <span className="open-dot" />
                                        {shop.status} · {shop.closes}
                                    </p>
                                    <p className="shop-location">{shop.distance} · {shop.address}</p>
                                    <div className="shop-meta">
                                        <span className="star"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.03656 1.86651L9.09243 3.99573C9.23643 4.29212 9.62038 4.57642 9.94438 4.63086L11.8581 4.95145C13.082 5.15712 13.37 6.05236 12.4881 6.9355L11.0003 8.43562C10.7483 8.68966 10.6103 9.17962 10.6883 9.5305L11.1143 11.3875C11.4502 12.8574 10.6763 13.426 9.38643 12.6578L7.59262 11.5871C7.26868 11.3936 6.73474 11.3936 6.40474 11.5871L4.61096 12.6578C3.3271 13.426 2.54719 12.8513 2.88315 11.3875L3.3091 9.5305C3.38709 9.17962 3.24911 8.68966 2.99713 8.43562L1.5093 6.9355C0.6334 6.05236 0.91537 5.15712 2.13923 4.95145L4.05302 4.63086C4.37098 4.57642 4.75494 4.29212 4.89892 3.99573L5.9548 1.86651C6.53074 0.711165 7.46662 0.711165 8.03656 1.86651Z" fill="#6AB43A" />
                                        </svg>
                                        </span>
                                        <span className="shop-rating">{shop.rating}</span>
                                        <span className="shop-price">&nbsp;{shop.price}</span>
                                    </div>
                                </div>
                                <div className="btn-wrap">
                                    <button className="btn-reserve">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.1 2V4.80002M6.5 2V4.80002" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10 3.3999H8.6C5.96013 3.3999 4.6402 3.3999 3.8201 4.22001C3 5.04012 3 6.36006 3 8.99995V10.4C3 13.0398 3 14.3598 3.8201 15.1799C4.6402 16 5.96013 16 8.6 16H10C12.6398 16 13.9598 16 14.7799 15.1799C15.6 14.3598 15.6 13.0398 15.6 10.4V8.99995C15.6 6.36006 15.6 5.04012 14.7799 4.22001C13.9598 3.3999 12.6398 3.3999 10 3.3999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 7.59979H15.6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.30068 9.69989V13.8999M11.4007 11.7999H7.20068" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>예약</p>

                                    </button>
                                </div>

                            </div>
                            {i < shops.length - 1 && <div className="shop-divider" />}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Nav */}
            {navBar}

        </div>
    );
}