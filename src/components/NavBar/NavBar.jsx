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
      activeIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4657 2.82613L21.5133 9.9689C21.8539 10.2378 22.0526 10.6479 22.0526 11.0819C22.0526 11.8651 21.4178 12.5 20.6345 12.5H19.9474V16.1842C19.9474 19.1614 19.9474 20.6501 19.0224 21.575C18.0975 22.4999 16.6088 22.4999 13.6316 22.4999H9.42105C6.44376 22.4999 4.95512 22.4999 4.03019 21.575C3.10526 20.6501 3.10526 19.1614 3.10526 16.1842V12.5H2.41806C1.63489 12.5 1 11.8651 1 11.0819C1 10.6479 1.19874 10.2378 1.53937 9.9689L10.5869 2.82613C10.8544 2.61489 11.1854 2.5 11.5263 2.5C11.8673 2.5 12.1982 2.61489 12.4657 2.82613Z" fill="#6AB43A" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.1577 22.5002V17.7634C14.1577 16.7796 14.1577 16.2877 13.9461 15.9213C13.8076 15.6813 13.6082 15.4819 13.3682 15.3434C13.0018 15.1318 12.5099 15.1318 11.5261 15.1318C10.5423 15.1318 10.0504 15.1318 9.684 15.3434C9.444 15.4819 9.24465 15.6813 9.10607 15.9213C8.89453 16.2877 8.89453 16.7796 8.89453 17.7634V22.5002" fill="white" />
      </svg>),
inactiveIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4657 2.82613L21.5133 9.9689C21.8539 10.2378 22.0526 10.6479 22.0526 11.0819C22.0526 11.8651 21.4178 12.5 20.6345 12.5H19.9474V16.1842C19.9474 19.1614 19.9474 20.6501 19.0224 21.575C18.0975 22.4999 16.6088 22.4999 13.6316 22.4999H9.42105C6.44376 22.4999 4.95512 22.4999 4.03019 21.575C3.10526 20.6501 3.10526 19.1614 3.10526 16.1842V12.5H2.41806C1.63489 12.5 1 11.8651 1 11.0819C1 10.6479 1.19874 10.2378 1.53937 9.9689L10.5869 2.82613C10.8544 2.61489 11.1854 2.5 11.5263 2.5C11.8673 2.5 12.1982 2.61489 12.4657 2.82613Z" fill="#6B7280" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.1577 22.5002V17.7634C14.1577 16.7796 14.1577 16.2877 13.9461 15.9213C13.8076 15.6813 13.6082 15.4819 13.3682 15.3434C13.0018 15.1318 12.5099 15.1318 11.5261 15.1318C10.5423 15.1318 10.0504 15.1318 9.684 15.3434C9.444 15.4819 9.24465 15.6813 9.10607 15.9213C8.89453 16.2877 8.89453 16.7796 8.89453 17.7634V22.5002" fill="white" />
      </svg>)
    },
    {
      id: "reservations",
      label: "예약 내역",
      activeIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2V6M8 2V6" stroke="#6AB43A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" fill="#6AB43A" stroke="#6AB43A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 10H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 16.5C9 16.5 10.5 17 11 18.5C11 18.5 13.1765 14.5 16 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ),
      inactiveIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2V6M8 2V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" fill="#6B7280" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 10H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 16.5C9 16.5 10.5 17 11 18.5C11 18.5 13.1765 14.5 16 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      )
    },
    {
      id: "chat",
      label: "진단 받기",
      activeIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5L12.7696 4.91653C13.4224 7.8145 15.6854 10.0776 18.5834 10.7304L22 11.5L18.5834 12.2696C15.6854 12.9224 13.4224 15.1854 12.7696 18.0834L12 21.5L11.2304 18.0834C10.5776 15.1854 8.31457 12.9224 5.41657 12.2696L2 11.5L5.41657 10.7304C8.31443 10.0776 10.5776 7.8145 11.2304 4.91654L12 1.5Z" fill="#6AB43A" stroke="#6AB43A" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      ),
      inactiveIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5L12.7696 4.91653C13.4224 7.8145 15.6854 10.0776 18.5834 10.7304L22 11.5L18.5834 12.2696C15.6854 12.9224 13.4224 15.1854 12.7696 18.0834L12 21.5L11.2304 18.0834C10.5776 15.1854 8.31457 12.9224 5.41657 12.2696L2 11.5L5.41657 10.7304C8.31443 10.0776 10.5776 7.8145 11.2304 4.91654L12 1.5Z" fill="#6B7280" stroke="#6B7280" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      )
    },
    {
      id: "map",
      label: "지도",
      activeIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" fill="#6AB43A" />
        <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" fill="white" />
      </svg>),
inactiveIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" fill="#6B7280" />
        <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" fill="white" />
      </svg>
      )
    },
    {
      id: "mypage",
      label: "나의 루티",
      activeIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" fill="#6AB43A" />
        <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" fill="#6AB43A" />
        <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke="#6AB43A" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      ),
      inactiveIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" fill="#6B7280" />
        <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" fill="#6B7280" />
        <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke="#6B7280" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      )
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
              {isActive ? tab.activeIcon : tab.inactiveIcon}
            </div>
            <span className="nav-label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
