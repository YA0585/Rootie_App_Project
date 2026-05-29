import "./ShopTop.css";

const BackIcon = () => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2F2F2F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const BookmarkIcon = ({ saved = false }) => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill={saved ? "#6AB43A" : "none"} stroke="#6AB43A" strokeWidth="1.8">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
);

const StarIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#6AB43A" stroke="none">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
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
