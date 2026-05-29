import "./ShopTop.css";

const BackIcon = () => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2F2F2F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const BookmarkIcon = ({ saved = false }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 18.1818V10.3222C5 6.87045 5 5.14461 6.09835 4.0723C7.1967 3 8.96446 3 12.5 3C16.0355 3 17.8033 3 18.9016 4.0723C20 5.14461 20 6.87045 20 10.3222V18.1818C20 20.3724 20 21.4676 19.2755 21.8597C17.8723 22.6188 15.2405 20.0859 13.9906 19.3233C13.2657 18.881 12.9033 18.6598 12.5 18.6598C12.0967 18.6598 11.7343 18.881 11.0094 19.3233C9.7595 20.0859 7.12763 22.6188 5.72455 21.8597C5 21.4676 5 20.3724 5 18.1818Z" fill="#6AB43A" stroke="#6AB43A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const StarIcon = ({ size = 14 }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.20932 2.01092L10.4412 4.49501C10.6092 4.84081 11.0571 5.17249 11.4351 5.236L13.6678 5.61002C15.0957 5.84997 15.4317 6.89442 14.4028 7.92475L12.667 9.67489C12.373 9.97127 12.212 10.5429 12.303 10.9522L12.8 13.1187C13.1919 14.8336 12.289 15.497 10.7842 14.6007L8.69139 13.3516C8.31346 13.1258 7.69053 13.1258 7.30553 13.3516L5.21279 14.6007C3.71495 15.497 2.80505 14.8265 3.19701 13.1187L3.69396 10.9522C3.78494 10.5429 3.62396 9.97127 3.32999 9.67489L1.59419 7.92475C0.5723 6.89442 0.901265 5.84997 2.3291 5.61002L4.56186 5.236C4.93282 5.17249 5.38077 4.84081 5.54875 4.49501L6.7806 2.01092C7.45253 0.663025 8.54439 0.663025 9.20932 2.01092Z" fill="#6AB43A" />
    </svg>

);

/**
 * ShopHeader
 *
 * @param {string}   shopName      - 업체명            (기본: "그린핸즈 식물 케어")
 * @param {string}   category      - 카테고리           (기본: "분갈이 • 영양제")
 * @param {number}   rating        - 별점              (기본: 4.9)
 * @param {number}   reviewCount   - 리뷰 수            (기본: 120)
 * @param {number}   responseRate  - 응답률(%)          (기본: 89)
 * @param {boolean}  isOpen        - 영업중 여부         (기본: true)
 * @param {boolean}  saved         - 북마크 저장 여부    (기본: false)
 * @param {string[]} images        - 갤러리 이미지 URL 배열
 * @param {function} onBack        - 뒤로가기 클릭 콜백
 * @param {function} onBookmark    - 북마크 클릭 콜백
 */
export default function ShopHeader({
    shopName = "그린핸즈 식물 케어",
    category = "분갈이 • 영양제",
    rating = 4.9,
    reviewCount = 120,
    responseRate = 89,
    isOpen = true,
    saved = false,
    images = [
        "https://placehold.co/250x250/c8e6a0/4a7c3f?text=🌿",
        "https://placehold.co/250x250/b5d990/3d6b34?text=🪴",
    ],
    onBack,
    onBookmark,
}) {
    return (
        <div className="shop-header">
            {/* Nav row */}
            <div className="shop-header__nav">
                <button className="shop-header__nav-btn" onClick={onBack} aria-label="뒤로가기">
                    <BackIcon />
                </button>
                <button className="shop-header__nav-btn" onClick={onBookmark} aria-label="북마크">
                    <BookmarkIcon saved={saved} />
                </button>
            </div>

            {/* Info + gallery */}
            <div className="shop-header__body">
                {/* Info row */}
                <div className="shop-header__info-row">
                    <div className="shop-header__info">
                        <div className="shop-header__titles">
                            <h1 className="shop-header__name">{shopName}</h1>
                            <p className="shop-header__category">{category}</p>
                        </div>
                        <div className="shop-header__meta">
                            <span className="shop-header__rating">{rating}</span>
                            <StarIcon size={14} />
                            <span className="shop-header__meta-dot">·</span>
                            <span className="shop-header__meta-item">리뷰 {reviewCount}건</span>
                            <span className="shop-header__meta-dot">·</span>
                            <span className="shop-header__meta-item">응답률 {responseRate}%</span>
                        </div>
                    </div>
                    {isOpen && (
                        <span className="shop-header__open-badge">영업중</span>
                    )}
                </div>

                {/* Gallery */}
                <div className="shop-header__gallery">
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`${shopName} 사진 ${i + 1}`}
                            className="shop-header__gallery-img"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
