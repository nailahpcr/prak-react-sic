import React, { useState } from 'react'; // Tambahkan useState
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import Header from "../layouts/Header";
import { ordersData } from "../data/dummyData";
import PageHeader from "../pertemuan-5/PageHeader";

export default function Orders() {
  const [showModal, setShowModal] = useState(false); // State untuk modal

  return (
    <>
      <div className="p-6">
        {/* PENGGUNAAN PAGEHEADER BARU DENGAN 3 PROPS */}
        <PageHeader 
          title="Order List" 
          breadcrumb={["Dashboard", "Orders", "Management"]}
        >
          {/* Ini adalah CHILDREN: Tombol Add taruh di sini */}
          <button 
            onClick={() => setShowModal(true)}
            className="bg-hijau hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg flex items-center gap-2 transition-all active:scale-95"
          >
            <span>+</span> Add Order
          </button>
        </PageHeader>

        {/* Tabel Data */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-600 font-semibold text-sm">
              <tr>
                <th className="p-4 border-b">Order ID</th>
                <th className="p-4 border-b">Customer Name</th>
                <th className="p-4 border-b">Status</th>
                <th className="p-4 border-b">Total Price</th>
                <th className="p-4 border-b">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((order) => (
                <tr key={order.orderId} className="hover:bg-gray-50 transition-colors text-sm border-b last:border-0">
                  <td className="p-4 font-medium text-gray-700">{order.orderId}</td>
                  <td className="p-4 font-semibold text-gray-800">{order.customerName}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-600' :
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 
                      'bg-red-100 text-red-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700 font-medium">{order.totalPrice}</td>
                  <td className="p-4 text-gray-500">{order.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* LOGIKA MODAL (Opsional: Bisa dipindah ke komponen tersendiri nanti) */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md animate-in fade-in zoom-in duration-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Add New Order</h2>
                <button onClick={() => setShowModal(false)} className="text-2xl text-gray-400">&times;</button>
              </div>
              <form className="space-y-4">
                <input type="text" placeholder="Customer Name" className="w-full border rounded-lg p-2.5 outline-none focus:border-hijau" />
                <input type="text" placeholder="Amount (Rp)" className="w-full border rounded-lg p-2.5 outline-none focus:border-hijau" />
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2 border rounded-lg">Cancel</button>
                  <button type="submit" className="flex-1 py-2 bg-hijau text-white rounded-lg font-bold">Save</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}