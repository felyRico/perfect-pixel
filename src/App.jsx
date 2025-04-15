import React from 'react';
import phoneImage from './assets/phone-Photoroom1.png';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="rectangle">
        <div className="info">
          <p className="caption">Kecerdasan visual</p>
          <br />
          <p className="headline">Lihat dunia dari lensa yang baru.</p>
          <p className="description">
            Gunakan <span>kecerdasan visual</span>
            <br />
            melalui Kontrol Kamera untuk
            <br />
            langsung mempelajari tentang
            <br />
            semua hal yang Anda liat.
            <br />
            Cukup <span>arahkan iPhone 16 Pro
            <br />
            Anda untuk menemukan lebih</span>
            <br />
            atau berinteraksi dengan
            <br />
            sesuatu di depan Anda. Cari
            <br />
            tahu di mana tempat membeli
            <br />
            barang baru yang Anda lihat,
            <br />
            identifikasikan tanaman dan hewan, dan
            <br />
            banyak lagi.
          </p>
        </div>
        <div className="visual">
          <img className="phone-img" src={phoneImage} alt="Phone" />
        </div>
      </div>
    </div>
  );
}

export default App;
