import { useState } from 'react'
import Dashboard from './pertemuan-5/pages/Dashboard';
import Sidebar from './Footer';
import Header from '../layouts/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar di sisi kiri */}
            <Sidebar />
      
            {/* Konten utama di sisi kanan */}
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 overflow-y-auto">
                <Dashboard />
              </main>
            </div>
          </div>
    </>
  )
}

export default App
