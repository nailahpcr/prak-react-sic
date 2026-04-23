import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from '../pertemuan-5/PageHeader';

export default function Customers() {
  const stats = [
    { label: "Total Orders", count: "75", icon: <FaShoppingCart />, color: "bg-hijau" },
    { label: "Total Delivered", count: "357", icon: <FaTruck />, color: "bg-blue-500" },
    { label: "Total Canceled", count: "65", icon: <FaBan />, color: "bg-red-500" },
    { label: "Total Revenue", count: "$128", icon: <FaDollarSign />, color: "bg-gray-800" },
  ];

  return (
    <div className="p-5">
      <PageHeader />
       <p>Ini halaman customers</p>
    </div>
  );
}