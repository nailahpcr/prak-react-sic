import { MdDashboard, MdListAlt, MdPeople, MdBarChart, MdWarning } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
        const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
  return (
    <div className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      {/* Logo */}
      <div className="flex flex-col">
        <span className="font-poppins text-[48px] font-bold text-gray-900">
          Sedap<b className="text-hijau">.</b>
        </span>
        <span className="font-semibold text-gray-400">Modern Admin Dashboard</span>
      </div>

      {/* Menu List */}
      <div className="mt-10">
        <ul className="space-y-3">
          {[
            { name: "Dashboard", icon: <MdDashboard />, to:"/" },
            { name: "Order List", icon: <MdListAlt />, to:"/Orders" },
            { name: "Customers", icon: <MdPeople />, to:"/Customers" },
            { name: "ERROR 400", icon: <MdWarning  />, to:"/error-400" },
            { name: "ERROR 401", icon: <MdWarning  />, to:"/error-401" },
            { name: "ERROR 403", icon: <MdWarning  />, to:"/error-403" },
          ].map((item, index) => (
            <NavLink key={index} to={item.to} className={menuClass}>
              <span className="mr-4 text-xl">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Footer Card */}
      <div className="mt-auto">
        <div className="mb-10 flex flex-col items-center rounded-md bg-hijau px-4 py-6 shadow-lg text-white">
          <p className="text-center text-sm">Please organize your menus through button below!</p>
          <div className="mt-3 flex w-full items-center justify-center space-x-2 rounded-md bg-white p-2 text-gray-600 cursor-pointer">
            <FaPlus /> <span>Add Menus</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src="https://avatar.iran.liara.run/public/28" className="w-12 h-12 rounded-full" alt="profile" />
          <div>
            <p className="font-bold text-gray-800">Sedap Restaurant</p>
            <p className="text-xs text-gray-400">© 2025 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}