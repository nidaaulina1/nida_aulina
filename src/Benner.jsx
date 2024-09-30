import React from 'react';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-text">
          <div className="banner-label">Rekomendasi Kegiatan Baik</div>
        </div>
        <button>
        <div className="banner-image">
          <img
            src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.kitabisa.com%2Fimages%2F7be3a3f9-7a1b-11ef-9b0d-3e503950e173_657E5722E5010686.jpg%3Fauto%3Dcompress%2Cformat%26cs%3Dtinysrgb%26fm%3Dpjpg%26fit%3Dclip%26w%3D448%26dpr%3D2%26sharp%3D15&w=1080&q=75"
            alt="Pasien Anak"
            className="patient-image"
          />
        </div>
        </button>
      </div>
      <div className="banner-pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Banner;
