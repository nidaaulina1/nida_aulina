import React from 'react';

const DonationCard = () => {
  return (
    <div className="donation-card">
      <div className="donation-card-content">
        <img
          src="https://kitabisa.com/images/illustration/galang-dana-sekarang.svg" // Path untuk gambar icon (megaphone)
          alt="Icon"
          className="donation-card-icon"
        />
        <div className="donation-card-text">
          <p className="donation-title">
            Buat galang dana untuk ajak ribuan orang baik berdonasi
          </p>
        </div>
        <div className="donation-card-arrow">
          <span>➔</span> {/* Ini simbol panah */}
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
