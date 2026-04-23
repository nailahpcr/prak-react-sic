import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./layouts/Header";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Sidebar from "./layouts/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar di sisi kiri */}
        <Sidebar />

        {/* Konten utama di sisi kanan */}
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
