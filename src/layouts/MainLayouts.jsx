import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function MainLayouts() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 p-4">
        <Header />

        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}