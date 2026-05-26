/*
================================================================================
  Rootie Main Application & Navigation Router
  Figma Component Specced: Node 611:2123 (NavBar)
  Main Color Tokens: fin/maincolor (#6AB43A), fin/secondary text (#6B7280)
================================================================================
*/

import React, { useState } from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import MyPage from "./pages/MyPage/MyPage";
import Map from "./pages/Map/Map";
import Reservations from "./pages/Reservations/Reservations";
import LocationSetting from "./pages/Map/LocationSetting/LocationSetting";
import Shop from "./pages/Shop/Shop";
import ShopReview from "./pages/Shop/ShopReview/ShopReview";
import ShopPrice from "./pages/Shop/ShopPrice/ShopPrice";
import Chat from "./pages/Chat/Chat";
import { NavBar } from "./components/NavBar/NavBar";
import ShopOptions from "./pages/Shop/ShopOptions/ShopOptions";

function MainApp() {
  const [activeTab, setActiveTab] = useState("home"); // "home" | "reservations" | "chat" | "map" | "mypage"
  const [currentScreen, setCurrentScreen] = useState(null); // null | "locationsetting" | "shop" | "shopprice" | "shopreview"

  // Synchronization NavBar to inject as prop
  const sharedNavBar = (
    <NavBar
      activeTab={activeTab}
      onChangeTab={(tabId) => {
        setCurrentScreen(null); // Clear sub-page state when primary nav is clicked
        setActiveTab(tabId);
      }}
    />
  );

  const renderActivePage = () => {
    // 1. Sub-page screens
    if (currentScreen === "locationsetting") {
      return <LocationSetting onBack={() => setCurrentScreen(null)} />;
    }
    if (currentScreen === "shop") {
      return (
        <Shop
          onBack={() => setCurrentScreen(null)}
          onGoToPrice={() => setCurrentScreen("shopprice")}
          onGoToReview={() => setCurrentScreen("shopreview")}
        />
      );
    }
    if (currentScreen === "shopprice") {
      return <ShopPrice onBack={() => setCurrentScreen("shop")} />;
    }
    if (currentScreen === "shopreview") {
      return <ShopReview onBack={() => setCurrentScreen("shop")} />;
    }

    // 2. Primary Main screens
    switch (activeTab) {
      case "home":
        return (
          <Home
            navBar={sharedNavBar}
            onGoToMap={() => setActiveTab("map")}
            onGoToReservations={() => setActiveTab("reservations")}
            onGoToChat={() => setActiveTab("chat")}
          />
        );
      case "reservations":
        return (
          <Reservations
            navBar={sharedNavBar}
            onGoToShop={() => setCurrentScreen("shop")}
          />
        );
      case "chat":
        return (
          <Chat
            navBar={sharedNavBar}
          />
        );
      case "map":
        return (
          <Map
            navBar={sharedNavBar}
            onGoToShop={() => setCurrentScreen("shop")}
            onGoToLocationSetting={() => setCurrentScreen("locationsetting")}
          />
        );
      case "mypage":
        return (
          <MyPage
            navBar={sharedNavBar}
          />
        );
      default:
        return <Home navBar={sharedNavBar} />;
    }
  };

  return (
    <div className="app-root">
      {renderActivePage()}
    </div>
  );
}


function App() {
  return <ShopOptions />;
}

export default App;