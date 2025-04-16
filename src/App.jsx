import React from 'react';
import phoneImage from './assets/phone-Photoroom1.png';
import './App.css';

const App = () => {
  return (
    <div className="main">
      <div className="desktop con">
        <div className="contentText">
          <p className="subtext">Kecerdasan visual</p>
          <p className="title">Lihat dunia dari lensa yang baru.</p>
          <p className="maintext">
            Gunakan <span>kecerdasan visual</span><br />
            melalui Kontrol Kamera untuk<br />
            langsung mempelajari tentang<br />
            semua hal yang Anda liat.<br />
            Cukup <span>arahkan iPhone 16 Pro<br />Anda untuk menemukan lebih</span><br />
            atau berinteraksi dengan<br />
            sesuatu di depan Anda. Cari<br />
            tahu di mana tempat membeli<br />
            barang baru yang Anda lihat,<br />
            identifikasikan tanaman dan hewan, dan<br />
            banyak lagi.
          </p>
        </div>
        <div className="image">
          <img 
            src={phoneImage}
            alt="image"
          />
        </div>
      </div>
      <div className="mobile con">
        <div className="contentText">
          <p className="subtext">Kecerdasan visual</p>
          <p className="title">
            Lihat dunia dari<br />lensa yang baru.
          </p>
          <p className="maintext">
            Gunakan <span>kecerdasan visual</span> melalui Kontrol Kamera<br />
            untuk langsung mempelajari tentang semua hal yang<br />
            Anda liat. Cukup <span>arahkan iPhone 16 Pro Anda untuk<br />menemukan lebih</span> atau berinteraksi dengan<br />
            sesuatu di depan Anda. Cari tahu di mana tempat<br />
            membeli barang baru yang Anda lihat,identifikasikan<br />
            tanaman dan hewan, dan banyak lagi.
          </p>
        </div>
        <div className="image">
          <img 
            src={phoneImage}
            alt="image" 
          />
        </div>
      </div>
    </div>
  );
};

export default App;
