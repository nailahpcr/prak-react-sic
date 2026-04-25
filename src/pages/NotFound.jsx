// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '72px', margin: '0' }}>404</h1>
      <h2>Ups! Halaman Tidak Ditemukan</h2>
      <p>Sepertinya Anda tersesat. Halaman yang Anda cari tidak ada.</p>
      <Link to="/" style={{ color: '#00b894', textDecoration: 'none', fontWeight: 'bold' }}>
        Kembali ke Dashboard
      </Link>
    </div>

    
  );
};

export default NotFound;