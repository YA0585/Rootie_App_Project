import React from 'react';
import './NavBar.css';

/**
 * NavBar Component specced from Figma (Node 611:2123)
 * Redesigned to adopt the beautiful Home bottom navigation visual layout.
 * @param {string} activeTab - The currently active tab id ("home" | "reservations" | "chat" | "map" | "mypage")
 * @param {function} onChangeTab - Callback function when a tab is clicked
 */
export function NavBar({ activeTab, onChangeTab }) {
  const tabs = [
    {
      id: "home",
      label: "홈",
      activeIcon: "http://localhost:3845/assets/c225bc898cc006beb607a3ba55792da5e272934d.svg",
      inactiveIcon: "http://localhost:3845/assets/7efa4f1f8948637c7e2aa3a0d163bc8e8f390eef.svg"
    },
    {
      id: "reservations",
      label: "예약 내역",
      activeIcon: "http://localhost:3845/assets/cb4750fa9007036a4c57724b73ea328b4b481399.svg",
      inactiveIcon: "http://localhost:3845/assets/2ed308409413093c7cd37ed00a655e13808d3d7a.svg"
    },
    {
      id: "chat",
      label: "진단 받기",
      activeIcon: "http://localhost:3845/assets/fe3544d63eff88a86ea5263d482372dc001a1c36.svg",
      inactiveIcon: "http://localhost:3845/assets/8152a1a4967dfecf5923a66a205e68510b3d4be9.svg"
    },
    {
      id: "map",
      label: "지도",
      activeIcon: "http://localhost:3845/assets/08c6c1a0abc09b43d12d301bec63c2e767cba7ad.svg",
      inactiveIcon: "http://localhost:3845/assets/79bc3ff8a161cabdb7a0ff139ee5b8c6f61e386b.svg"
    },
    {
      id: "mypage",
      label: "나의 루티",
      activeIcon: "http://localhost:3845/assets/ee105f723ebbff9bc994469baced94ceea6c7a13.svg",
      inactiveIcon: "http://localhost:3845/assets/3d8fb4dce1ade3d937a71368e995dfb854205b8e.svg"
    }
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`nav-item ${isActive ? "active" : ""} ${tab.center ? "nav-center" : ""}`}
            onClick={() => onChangeTab && onChangeTab(tab.id)}
            aria-label={tab.label}
          >
            <div className="nav-item-icon">
              <img
                src={isActive ? tab.activeIcon : tab.inactiveIcon}
                alt={tab.label}
                style={{ width: '24px', height: '24px', display: 'block' }}
              />
            </div>
            <span className="nav-label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
