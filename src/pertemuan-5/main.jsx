import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './Footer'
import Header from '../layouts/Header'
import Dashboard from './pertemuan-5/pages/Dashboard'
import './assets/tailwind.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  </React.StrictMode>
)