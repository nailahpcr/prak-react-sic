import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm">
      <div className="relative w-full max-w-lg">
        <input 
          className="border border-gray-100 p-2 pr-10 bg-gray-50 w-full rounded-md outline-none focus:ring-1 focus:ring-hijau" 
          type="text" 
          placeholder="Search Here..." 
        />
        <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
          <FaBell />
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">50</span>
        </div>
        <div className="p-3 bg-blue-100 rounded-2xl cursor-pointer text-blue-500"><FcAreaChart /></div>
        <div className="p-3 bg-red-100 rounded-2xl cursor-pointer text-red-500"><SlSettings /></div>
        
        <div className="flex items-center space-x-4 border-l pl-4 border-gray-300">
          <span className="text-sm">Hello, <b>Fikri Muhaffizh</b></span>
          <img src="https://avatar.iran.liara.run/public/28" className="w-10 h-10 rounded-full" alt="avatar" />
        </div>
      </div>
    </div>
  );
}