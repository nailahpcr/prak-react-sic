import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from '../PageHeader';

export default function Dashboard() {
  const stats = [
    { label: "Total Orders", count: "75", icon: <FaShoppingCart />, color: "bg-hijau" },
    { label: "Total Delivered", count: "357", icon: <FaTruck />, color: "bg-blue-500" },
    { label: "Total Canceled", count: "65", icon: <FaBan />, color: "bg-red-500" },
    { label: "Total Revenue", count: "$128", icon: <FaDollarSign />, color: "bg-gray-800" },
  ];

  return (
    <div className="p-5">
      <PageHeader />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-5 bg-white rounded-xl shadow-md p-6">
            <div className={`${stat.color} rounded-full p-4 text-white text-3xl`}>
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800">{stat.count}</span>
              <span className="text-gray-400 text-sm">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}