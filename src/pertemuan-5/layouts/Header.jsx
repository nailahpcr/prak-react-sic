import { useState } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

const searchSuggestions = [
  "Dashboard Overview",
  "Order List - Today",
  "Customer Baru",
  "Revenue Report",
  "Food Menu Update",
  "Analytics Q1 2025",
];

export default function Header() {
  // [IMPROVISASI 2] State untuk buka/tutup modal search
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery]         = useState("");

  const filtered = searchSuggestions.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div id="header-container" className="flex justify-between items-center p-4">
        {/* Search Bar — [IMPROVISASI 2] klik buka modal */}
        <div id="search-bar" className="relative w-full max-w-lg">
          <input
            id="search-input"
            type="text"
            placeholder="Search Here..."
            readOnly
            onClick={() => setShowSearchModal(true)}
            className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none cursor-pointer"
          />
          <FaSearch
            id="search-icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
          />
        </div>

        {/* Icon & Profile Section */}
        <div id="icons-container" className="flex items-center space-x-4">
          <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
            <FaBell />
            <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">50</span>
          </div>
          <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
            <FcAreaChart />
          </div>
          <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
            <SlSettings />
          </div>
          <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-gray-300">
            <span id="profile-text">Hello, <b>Dewi Mega</b></span>
            <img id="profile-avatar" src="https://avatar.iran.liara.run/public/28" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>

      {/* [IMPROVISASI 2] Search Modal */}
      {showSearchModal && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-24"
          onClick={() => setShowSearchModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Cari Sesuatu</h2>
              <FaTimes
                className="text-gray-400 cursor-pointer hover:text-red-500"
                onClick={() => setShowSearchModal(false)}
              />
            </div>

            {/* Input di dalam modal */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                autoFocus
                type="text"
                placeholder="Ketik untuk mencari..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-hijau"
              />
            </div>

            {/* Hasil pencarian */}
            <ul className="mt-4 space-y-2">
              {filtered.length > 0 ? (
                filtered.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 cursor-pointer text-gray-600 hover:text-hijau"
                    onClick={() => setShowSearchModal(false)}
                  >
                    <FaSearch className="text-gray-300 text-sm" />
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <li className="text-center text-gray-400 py-4">Tidak ada hasil</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
