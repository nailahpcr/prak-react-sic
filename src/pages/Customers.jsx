import React, { useState } from 'react'; // Tambahkan useState
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import { customersData } from "../data/dummyData";
import PageHeader from "../pertemuan-5/PageHeader";

export default function Customers() {
  const [showModal, setShowModal] = useState(false); // State untuk mengontrol modal

  return (
    <>
      <div className="p-6">
        {/* PENGGUNAAN PAGEHEADER BARU DENGAN 3 PROPS */}
        <PageHeader 
          title="Customer" 
          breadcrumb={["Dashboard", "Customers", "Management"]}
        >
          {/* Ini adalah CHILDREN: Tombol diletakkan di sini */}
          <button 
            onClick={() => setShowModal(true)}
            className="bg-hijau hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg flex items-center gap-2 transition-all active:scale-95"
          >
            <span>+</span> Add Customer
          </button>
        </PageHeader>

        {/* Tabel Data */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-600 font-semibold text-sm">
              <tr>
                <th className="p-4 border-b">ID</th>
                <th className="p-4 border-b">Name</th>
                <th className="p-4 border-b">Email</th>
                <th className="p-4 border-b">Phone</th>
                <th className="p-4 border-b">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {customersData.map((cust) => (
                <tr key={cust.customerId} className="hover:bg-gray-50 transition-colors text-sm border-b last:border-0">
                  <td className="p-4 font-medium text-gray-700">{cust.customerId}</td>
                  <td className="p-4 font-semibold text-gray-800">{cust.customerName}</td>
                  <td className="p-4 text-gray-500">{cust.email}</td>
                  <td className="p-4 text-gray-600">{cust.phone}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      cust.loyalty === 'Gold' ? 'bg-amber-100 text-amber-600' :
                      cust.loyalty === 'Silver' ? 'bg-gray-200 text-gray-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {cust.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL FORM CUSTOMER (Hanya muncul jika showModal true) */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Add New Customer</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-hijau/20 outline-none" placeholder="Enter full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-hijau/20 outline-none" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loyalty Level</label>
                  <select className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-hijau/20">
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
                  </select>
                </div>

                <div className="flex gap-3 mt-8">
                  <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-bold hover:bg-gray-50">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 px-4 py-2.5 bg-hijau text-white rounded-lg font-bold hover:bg-green-600 shadow-md">
                    Save Customer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}