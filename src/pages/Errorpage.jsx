import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ code, title, message, image }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6 bg-white rounded-2xl shadow-sm m-5">
      {/* Gambar Error */}
      <img 
        src={image || "https://illustrations.popsy.co/amber/error-404.svg"} 
        alt={`Error ${code}`} 
        className="w-64 md:w-80 mb-6 object-contain"
      />
      
      {/* Kode Error */}
      <h1 className="text-7xl font-black text-hijau mb-2">{code}</h1>
      
      {/* Deskripsi Error */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
        {message}
      </p>

      {/* Tombol Kembali */}
      <Link 
        to="/" 
        className="bg-hijau hover:bg-green-600 text-white font-bold py-3 px-10 rounded-xl transition-all duration-300 shadow-lg shadow-green-100 hover:scale-105"
      >
        Kembali ke Dashboard
      </Link>
    </div>
  );
};

export default ErrorPage;