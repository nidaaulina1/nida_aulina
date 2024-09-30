// components/PrayerSection.js
import React from 'react';

const PrayerList = () => {
  const prayers = [
    {
      name: "Anonim",
      timeAgo: "6 menit lalu",
      message: "Semoga keluarga kami menjadi keluarga sakinah mawaddah warohm",
      prayerCount: 2,
      imgSrc: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fassets.kitabisa.cc%2Fimages%2Ficons%2Ficon_anonymous-user.png&w=32&q=75", // Ganti dengan path gambar yang benar
    },
    {
      name: "Anonim",
      timeAgo: "1 jam lalu",
      message: "Semoga lekas sembuh, tetap kuat dan sehat selalu ya nak. Raihlah impianmu!",
      prayerCount: 3,
      imgSrc: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fassets.kitabisa.cc%2Fimages%2Ficons%2Ficon_anonymous-user.png&w=32&q=75", // Ganti dengan path gambar yang benar
    },
    // Tambahkan data lain jika diperlukan
  ];

  return (
    <div className="prayer-section">
      <div className="prayer-image">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdA1Cp_XCmY7H6GPZFfwDY-ERtZ19evpY-1zPQnYH8LZ0y3GST" alt="Doa-doa" className="prayer-side-image" /> 
        {/* Ganti dengan path gambar samping yang diinginkan */}
      </div>
      <div className="prayer-section-content">
        <div className="prayer-section-header">
          <h2>Doa-doa #OrangBaik</h2>
          <a href="#" className="prayer-section-see-all">Lihat semua</a>
        </div>
        <div className="prayer-section-list">
          {prayers.map((prayer, index) => (
            <div key={index} className="prayer-card">
              <img src={prayer.imgSrc} alt="Profile" className="prayer-card-img" />
              <div className="prayer-card-header">
                <p className="prayer-card-name">{prayer.name}</p>
                <p className="prayer-card-time">{prayer.timeAgo}</p>
              </div>
              <div className="prayer-card-body">
                <p>{prayer.message}</p>
                <a href="#" className="prayer-card-link">Lihat selengkapnya</a>
              </div>
              <div className="prayer-card-footer">
                <p>{prayer.prayerCount} orang mengaminkan doa ini</p>
                <button className="prayer-card-amin-btn">Amiin</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrayerList;