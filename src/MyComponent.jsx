import React from "react";

function MyComponent() {
  return (
    <div className="app">

      <div className="content">
        <h1 className="main-heading">
          Saling Jaga Se-Indonesia
          <span className="highlight"> ID</span>
        </h1>
        <h2 className="sub-heading">Bantu Sesama, Dibantu Bersama</h2>
        <p className="description">
          Donasi, zakat, dan lindungi keluarga bersama jutaan orang baik melalui aplikasi Kitabisa
        </p>

        <div className="download-buttons">
          <button className="download-btn">
            <img src="store.png" alt="App Store" /> 
          </button>
          <button className="download-btn">
            <img src="play.jpg" alt="Google Play" /> 
          </button>
        </div>
      </div>

      <div className="image-container">
        <img src="hero.png" alt="Hero Image" className="hero-image" />
      </div>
    </div>
  );
}

export default MyComponent;
