import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

const Card = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="fundraising-container">
      <h2 className="section-title">Penggalangan Dana Mendesak</h2>

      <div className="slider-container">
        <Slider {...settings} className="card-wrapper">
          <div className="card">
            <div className="card-header">
              <span className="days-left">98 hari lagi</span>
            </div>
            <img
              src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F3a4b364d-34f6-4c54-9ac9-b517e48c1852.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75"
              alt="Pengobatan Terhenti"
              className="card-image"
            />
            
            <div className="card-body">
              <p className="card-title">
                Penghubung Kebaikan 
              </p>
              <p className="card-subtitle">
                SULIT BEROBAT,Bantu Pasien Kanker Berjuang Hidup
              </p>
              <p className="card-author">Terkumpul: <strong className="card-loey">Rp87.636.873</strong></p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="days-left">19 hari lagi</span>
            </div>
            <img
              src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Ff35cc842-93c9-49d0-b78f-315d2320f33c.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75"
              alt="Ula 10 Tahun"
              className="card-image"
            />
            <div className="card-body">
              <p className="card-title">Pande Putu Mudiana</p>
              <p className="card-subtitle">
                Idap Disabilitas Intelektual,Bantu Putu & Kadek
              </p>
              <p className="card-author">Terkumpul: <strong className="card-loey">Rp38.974.186</strong></p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '49%' }}></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="days-left">19 hari lagi</span>
            </div>
            <img
              src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Ff35cc842-93c9-49d0-b78f-315d2320f33c.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75"
              alt="Ula 10 Tahun"
              className="card-image"
            />
            <div className="card-body">
              <p className="card-title">Pande Putu Mudiana</p>
              <p className="card-subtitle">
                Idap Disabilitas Intelektual,Bantu Putu & Kadek
              </p>
              <p className="card-author">Terkumpul: <strong className="card-loey">Rp38.974.186</strong></p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '49%' }}></div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Card;