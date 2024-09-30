import React from 'react';

const BottomNavbar = () => {
  return (
    <>
      {/* Bottom navigation bar */}
      <nav className="bottom-navbar">
        <div className="menu-item active">
          <img src="https://assets.kitabisa.cc/images/home/bottom-navigation/home_navbar_active.svg" alt="Home" className="menu-icon" />
          <span className="menu-title">Donasi</span>
        </div>
        <div className="menu-item">
          <img src="https://assets.kitabisa.cc/images/home/bottom-navigation/plus_navbar.svg" alt="Search" className="menu-icon" />
          <span className="menu-title">Galang Dana</span>
        </div>
        <div className="menu-item">
          <img src="https://assets.kitabisa.cc/images/home/bottom-navigation/donasi_navbar.svg" alt="Profile" className="menu-icon" />
          <span className="menu-title">Donasi Saya</span>
        </div>
        <div className="menu-item">
          <img src="https://assets.kitabisa.cc/images/home/bottom-navigation/inbox_navbar.svg" alt="Profile" className="menu-icon" />
          <span className="menu-title">Inbox</span>
        </div>
        <div className="menu-item">
          <img src="https://assets.kitabisa.cc/images/home/bottom-navigation/account_navbar.svg" alt="Profile" className="menu-icon" />
          <span className="menu-title">Akun</span>
        </div>
      </nav>
    </>
  );
};

export default BottomNavbar;
