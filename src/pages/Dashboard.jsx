import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import { ordersData } from "../data/dummyData";
import PageHeader from "../pertemuan-5/PageHeader";

export default function Dashboard() {
  // Logic untuk menghitung statistik secara dinamis dari dummyData
  const stats = [
    { label: "Total Orders", count: ordersData.length, icon: <FaShoppingCart />, color: "bg-hijau" },
    { label: "Total Delivered", count: ordersData.filter(o => o.status === "Completed").length, icon: <FaTruck />, color: "bg-blue-500" },
    { label: "Total Canceled", count: ordersData.filter(o => o.status === "Cancelled").length, icon: <FaBan />, color: "bg-red-500" },
    { label: "Total Revenue", count: "Rp 12.5M", icon: <FaDollarSign />, color: "bg-gray-800" },
  ];

  return (
    <div className="p-6">
      {/* 1. PageHeader dengan 3 Props (Tanpa Children karena dashboard biasanya cuma info) */}
      <PageHeader 
        title="Dashboard Overview" 
        breadcrumb={["Home", "Dashboard"]} 
      />

      {/* 2. Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              <h3 className="text-xl font-bold text-gray-800">{stat.count}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Recent Orders Table */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
          <span className="text-xs font-medium text-gray-400">Showing last 10 orders</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-600 font-semibold text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4 border-b">Order ID</th>
                <th className="p-4 border-b">Customer</th>
                <th className="p-4 border-b">Status</th>
                <th className="p-4 border-b">Amount</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.slice(0, 10).map((order) => (
                <tr key={order.orderId} className="hover:bg-gray-50 transition-colors text-sm border-b last:border-0">
                  <td className="p-4 font-medium text-gray-700">{order.orderId}</td>
                  <td className="p-4 text-gray-800">{order.customerName}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-600' :
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-gray-800">{order.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}