import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';

const DetailProduk = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate();

  // Mencari produk yang ID-nya sama dengan parameter URL
  const produk = productsData.find((item) => item.id === parseInt(id));

  if (!produk) {
    return <div className="p-6">Produk tidak ditemukan!</div>;
  }

  return (
    <div className="p-6">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-4 text-blue-500 underline"
      >
        ← Kembali ke Daftar
      </button>

      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-3xl font-bold mb-2">{produk.title}</h2>
        <p className="text-gray-500 mb-4">Kode Produk: {produk.code}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Brand:</p>
            <p>{produk.brand}</p>
          </div>
          <div>
            <p className="font-semibold">Kategori:</p>
            <p>{produk.category}</p>
          </div>
          <div>
            <p className="font-semibold">Harga:</p>
            <p className="text-green-600 font-bold">Rp {produk.price.toLocaleString()}</p>
          </div>
          <div>
            <p className="font-semibold">Stok:</p>
            <p>{produk.stock} pcs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;