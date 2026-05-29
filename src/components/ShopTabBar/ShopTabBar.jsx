import "./ShopTabBar.css";

const TABS = ["홈", "가격", "후기", "사진"];

/**
 * ShopTabBar
 * @param {string}   activeTab   - 현재 활성 탭 ("홈" | "가격" | "후기" | "사진")
 * @param {function} onTabChange - 탭 클릭 시 콜백 (tabName: string) => void
 */
export default function ShopTabBar({ activeTab = "홈", onTabChange }) {
    return (
        <nav className="shop-tabbar">
            {TABS.map((tab) => (
                <button
                    key={tab}
                    className={`shop-tabbar__item ${activeTab === tab ? "shop-tabbar__item--active" : ""}`}
                    onClick={() => onTabChange?.(tab)}
                >
                    {tab}
                    {activeTab === tab && <span className="shop-tabbar__underline" />}
                </button>
            ))}
        </nav>
    );
}