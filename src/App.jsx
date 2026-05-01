import React, { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import { ordersData } from "./data/dummyData";
//Import Layout secara langsung
import MainLayouts from "./layouts/MainLayouts";
import AuthLayout from "./layouts/AuthLayout";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
// Lazy Loading Halaman
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));
const Forgot = lazy(() => import("./pages/auth/forgot"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
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

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>

  );
}

export default App;
