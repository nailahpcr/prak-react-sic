import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./layouts/Header";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Sidebar from "./layouts/Sidebar";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import { ordersData } from "./data/dummyData";

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
              <Route path="*" element={<NotFound />} />
              <Route path="/error-400" element={
                <ErrorPage
                  code="400"
                  title="Bad Request"
                  message="Server tidak memahami permintaan Anda."
                  image="https://illustrations.popsy.co/amber/falling.svg"
                />
              } />
              <Route path="/error-401" element={
                <ErrorPage
                  code="401"
                  title="Unauthorized"
                  message="Anda harus login terlebih dahulu untuk melihat ini."
                  image="http://googleusercontent.com/image_collection/image_retrieval/11323800249622538842_2"
                />
              } />

              <Route path="/error-403" element={
                <ErrorPage
                  code="403"
                  title="Forbidden"
                  message="Akses dilarang! Anda tidak punya izin di sini."
                  image="https://illustrations.popsy.co/amber/shaking-hands.svg"
                />
              } />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
