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
import ShopOptions from "./pages/Shop/ShopOptions/ShopOptions";
import Chat from "./pages/Chat/Chat";
import { NavBar } from "./components/NavBar/NavBar";
import MyPlant from "./pages/MyPage/MyPlant";
import PlantDetail from "./pages/MyPage/PlantDetail";

// Onboarding imports
import SplashScreen from "./pages/OnBoarding/SplashScreen";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import LoginPage from "./pages/OnBoarding/LoginPage/LoginPage";
import SussPage from "./pages/OnBoarding/CreateAccount/SussPage";
import CreateAccount from "./pages/OnBoarding/CreateAccount/CreateAccount";
import Survey1 from "./pages/OnBoarding/CreateAccount/Survey-1";
import Survey2 from "./pages/OnBoarding/CreateAccount/Survey-2";
import Survey3 from "./pages/OnBoarding/CreateAccount/Survey-3";
import Survey4 from "./pages/OnBoarding/CreateAccount/Survey-4";
import Survey5 from "./pages/OnBoarding/CreateAccount/Survey-5";
import Survey6 from "./pages/OnBoarding/CreateAccount/Survey-6";

function App() {
  const [activeTab, setActiveTab] = useState("home"); // "home" | "reservations" | "chat" | "map" | "mypage"
  const [currentScreen, setCurrentScreen] = useState("splash"); // "splash" | "onboarding" | "login" | null | "locationsetting" | "shop" | "shopprice" | "shopreview" | "myplant" | "plantdetail"

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
    // 0. Onboarding flow
    if (currentScreen === "splash") {
      return <SplashScreen onFinish={() => setCurrentScreen("onboarding")} />;
    }
    if (currentScreen === "onboarding") {
      return <OnBoarding onStart={() => setCurrentScreen("login")} />;
    }
    if (currentScreen === "login") {
      return <LoginPage onLogin={() => setCurrentScreen(null)} onGoToSignup={() => setCurrentScreen("createaccount")} />;
    }
    if (currentScreen === "createaccount") {
      return <CreateAccount onNext={() => setCurrentScreen("survey1")} />;
    }
    if (currentScreen === "survey1") {
      return <Survey1 onConfirm={() => setCurrentScreen("survey2")} />;
    }
    if (currentScreen === "survey2") {
      return <Survey2 onConfirm={() => setCurrentScreen("survey3")} />;
    }
    if (currentScreen === "survey3") {
      return <Survey3 onConfirm={() => setCurrentScreen("survey4")} />;
    }
    if (currentScreen === "survey4") {
      return <Survey4 onNext={() => setCurrentScreen("survey5")} />;
    }
    if (currentScreen === "survey5") {
      return <Survey5 onNext={() => setCurrentScreen("survey6")} />;
    }
    if (currentScreen === "survey6") {
      return <Survey6 onNext={() => setCurrentScreen("susspage")} />;
    }
    if (currentScreen === "susspage") {
      return <SussPage onFinish={() => setCurrentScreen("login")} />;
    }

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
    if (currentScreen === "shopoptions") {
      return <ShopOptions onBack={() => setCurrentScreen("shop")} />;
    }
    if (currentScreen === "shopreview") {
      return <ShopReview onBack={() => setCurrentScreen("shop")} />;
    }
    if (currentScreen === "myplant") {
      return <MyPlant onBack={() => setCurrentScreen(null)} onGoToPlantDetail={() => setCurrentScreen("plantdetail")} />;
    }
    if (currentScreen === "plantdetail") {
      return <PlantDetail onBack={() => setCurrentScreen("myplant")} />;
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
            onGoToMyPlant={() => setCurrentScreen("myplant")}
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
export default App;