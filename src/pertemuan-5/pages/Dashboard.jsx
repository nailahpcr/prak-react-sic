import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaCircle } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

// [IMPROVISASI 3] Data dummy recent orders
const recentOrders = [
  { id: "#ORD-001", customer: "Andi Pratama",   menu: "Nasi Goreng",     amount: "Rp 45.000",  status: "Delivered" },
  { id: "#ORD-002", customer: "Siti Rahayu",    menu: "Mie Ayam Spesial",amount: "Rp 32.000",  status: "Processing" },
  { id: "#ORD-003", customer: "Budi Santoso",   menu: "Ayam Bakar",      amount: "Rp 58.000",  status: "Canceled" },
  { id: "#ORD-004", customer: "Dewi Lestari",   menu: "Soto Ayam",       amount: "Rp 27.000",  status: "Delivered" },
  { id: "#ORD-005", customer: "Rizky Maulana",  menu: "Rendang + Nasi",  amount: "Rp 72.000",  status: "Processing" },
];

const statusStyle = {
  Delivered:  "bg-green-100 text-hijau",
  Processing: "bg-blue-100 text-blue-500",
  Canceled:   "bg-red-100 text-red-500",
};

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader />

      {/* Stat Cards */}
      <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="orders-icon" className="bg-hijau rounded-full p-4">
            <FaShoppingCart className="text-3xl text-white" />
          </div>
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold">75</span>
            <span id="orders-text" className="text-gray-400">Total Orders</span>
          </div>
        </div>

        <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="delivered-icon" className="bg-biru rounded-full p-4">
            <FaTruck className="text-3xl text-white" />
          </div>
          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="text-2xl font-bold">357</span>
            <span id="delivered-text" className="text-gray-400">Total Delivered</span>
          </div>
        </div>

        <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="canceled-icon" className="bg-merah rounded-full p-4">
            <FaBan className="text-3xl text-white" />
          </div>
          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="text-2xl font-bold">65</span>
            <span id="canceled-text" className="text-gray-400">Total Canceled</span>
          </div>
        </div>

        <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="revenue-icon" className="bg-kuning rounded-full p-4">
            <FaDollarSign className="text-3xl text-white" />
          </div>
          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="text-2xl font-bold">$128</span>
            <span id="revenue-text" className="text-gray-400">Total Revenue</span>
          </div>
        </div>
      </div>

      {/* [IMPROVISASI 3] Recent Orders Table */}
      <div className="mx-5 bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Recent Orders</h2>
          <span className="text-sm text-hijau font-medium cursor-pointer hover:underline">View All</span>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 text-gray-400 text-sm">
              <th className="pb-3 font-medium">Order ID</th>
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Menu</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-3 text-sm font-medium text-gray-700">{order.id}</td>
                <td className="py-3 text-sm text-gray-600">{order.customer}</td>
                <td className="py-3 text-sm text-gray-600">{order.menu}</td>
                <td className="py-3 text-sm font-semibold text-gray-700">{order.amount}</td>
                <td className="py-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
