import { useState } from "react";
import { MdDashboard, MdAnalytics, MdRateReview, MdRestaurantMenu, MdCalendarToday, MdFoodBank } from "react-icons/md";
import { HiOutlineClipboardList, HiOutlineClipboardCheck } from "react-icons/hi";
import { FaUser, FaUserCircle, FaPlus } from "react-icons/fa";

// [IMPROVISASI 1] Data menu dipindah ke array agar dinamis
const menuItems = [
  { id: 1,  label: "Dashboard",       icon: "MdDashboard" },
  { id: 2,  label: "Order List",      icon: "HiOutlineClipboardList" },
  { id: 3,  label: "Order Detail",    icon: "HiOutlineClipboardCheck" },
  { id: 4,  label: "Customer",        icon: "FaUser" },
  { id: 5,  label: "Analytics",       icon: "MdAnalytics" },
  { id: 6,  label: "Reviews",         icon: "MdRateReview" },
  { id: 7,  label: "Foods",           icon: "MdFoodBank" },
  { id: 8,  label: "Food Detail",     icon: "MdRestaurantMenu" },
  { id: 9,  label: "Customer Detail", icon: "FaUserCircle" },
  { id: 10, label: "Calendar",        icon: "MdCalendarToday" },
];

const iconMap = {
  MdDashboard: <MdDashboard />,
  HiOutlineClipboardList: <HiOutlineClipboardList />,
  HiOutlineClipboardCheck: <HiOutlineClipboardCheck />,
  FaUser: <FaUser />,
  MdAnalytics: <MdAnalytics />,
  MdRateReview: <MdRateReview />,
  MdFoodBank: <MdFoodBank />,
  MdRestaurantMenu: <MdRestaurantMenu />,
  FaUserCircle: <FaUserCircle />,
  MdCalendarToday: <MdCalendarToday />,
};

export default function Sidebar() {
  // [IMPROVISASI 1] useState untuk melacak menu aktif yang diklik
  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
          Sedap<b id="logo-dot" className="text-hijau">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <div
                onClick={() => setActiveMenu(item.id)}
                className={`flex cursor-pointer items-center rounded-xl p-4 font-medium transition-all duration-200 ${
                  activeMenu === item.id
                    ? "text-hijau bg-green-100 font-extrabold"
                    : "text-gray-600 hover:text-hijau hover:bg-green-200"
                }`}
              >
                <span className="mr-4 text-xl">{iconMap[item.icon]}</span>
                <span>{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
              <FaPlus className="text-hijau" />
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img id="footer-avatar" src="https://avatar.iran.liara.run/public/28" className="w-20 rounded-full" />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
        <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
      </div>
    </div>
  );
}
