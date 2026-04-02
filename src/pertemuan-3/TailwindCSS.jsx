import React from 'react';

export default function AngryBirdsDashboard() {
  return (
    // Background Langit Biru Khas Game dengan rumput di bawah
    <div className="min-h-screen bg-sky-400 p-4 md:p-8 font-sans selection:bg-red-500 selection:text-white relative overflow-hidden">
      
      {/* Navbar Gaya Balok Kayu */}
      <FlexboxGrid />

      <div className="max-w-6xl mx-auto mt-10 mb-20">
        <header className="mb-12 text-center relative group">
          {/* Efek "Ledakan" di belakang judul */}
          <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
          
          <h1 className="relative text-6xl md:text-8xl font-black text-white drop-shadow-[0_8px_0_rgba(0,0,0,0.2)] tracking-tighter italic uppercase">
            Angry <span className="text-red-600">Devs</span>
          </h1>
          <p className="relative text-sky-900 mt-2 font-bold text-xl uppercase tracking-widest bg-white/30 backdrop-blur-md inline-block px-6 py-2 rounded-full border-2 border-white/50">
            Level 4-1: The Bug Fortress
          </p>
        </header>

        {/* Layout Grid - Struktur Bangunan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Red Bird Typography */}
          <div className="bg-white border-b-[12px] border-gray-300 p-8 rounded-[3rem] shadow-2xl hover:-translate-y-3 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-bl-full opacity-50" />
            <Typography />
            <div className="mt-8">
              <BorderRadius />
            </div>
          </div>

          {/* Card 2: Bad Piggies Spacing */}
          <Spacing />

          {/* Card 3: TNT Box (Backgrounds) */}
          <BackgroundColors />

          {/* Card 4: Golden Egg (Shadow Effects) */}
          <ShadowEffects />

          {/* Banner Utama: Slingshot / Ketapel */}
          <div className="lg:col-span-2 bg-gradient-to-r from-amber-800 to-amber-700 p-10 rounded-[4rem] shadow-2xl flex flex-col md:flex-row items-center justify-between border-4 border-amber-400 relative overflow-hidden group">
            {/* Tekstur Kayu */}
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,black_20px,black_40px)]" />
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">Tarik Ketapelnya!</h3>
              <p className="text-amber-200 mt-2 font-bold text-lg text-shadow">Siap hancurkan barisan bug hijau hari ini?</p>
            </div>
            
            <button className="relative z-10 mt-8 md:mt-0 bg-yellow-400 hover:bg-yellow-300 text-amber-950 text-2xl font-black px-12 py-5 rounded-full border-b-[10px] border-yellow-600 active:border-b-0 active:translate-y-2 transition-all shadow-xl uppercase">
              Launch!
            </button>
          </div>

        </div>
      </div>

      {/* Lantai Rumput Bawah */}
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-green-500 border-t-8 border-green-600 z-50">
        <div className="h-full w-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grass.png')]" />
      </div>
    </div>
  );
}

// --- Sub-Komponen dengan Styling Tematik ---

function Spacing() {
  return (
    <div className="bg-lime-400 shadow-[0_12px_0_rgba(77,124,15,1)] p-8 rounded-[2.5rem] border-4 border-lime-200 group hover:rotate-3 transition-transform cursor-pointer">
      <div className="w-16 h-16 bg-white rounded-full mb-4 flex items-center justify-center border-4 border-lime-600 shadow-inner">
        <div className="flex space-x-2">
            <div className="w-3 h-3 bg-black rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-black rounded-full animate-bounce delay-75" />
        </div>
      </div>
      <h2 className="text-3xl font-black text-lime-950 uppercase italic">Piggy Space</h2>
      <p className="mt-3 text-lime-900 font-bold leading-snug">
        Gunakan <span className="bg-lime-500 px-2 rounded">p-8</span> agar babi-babi ini tidak sesak napas!
      </p>
    </div>
  );
}

function Typography() {
  return (
    <div className="relative z-10">
      <h1 className="text-5xl font-black text-red-600 leading-none uppercase italic drop-shadow-[0_3px_0_rgba(0,0,0,0.1)]">Bold Text</h1>
      <p className="text-gray-700 text-xl mt-4 font-bold leading-tight">
        Ketik kode sekuat <span className="text-red-600 underline decoration-4">hantaman Red Bird</span> pada tumpukan kayu!
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <button className="w-full bg-yellow-400 text-amber-900 font-black text-xl px-6 py-4 rounded-full border-b-8 border-yellow-600 hover:bg-yellow-300 transition-all uppercase tracking-tighter active:scale-95">
      Bulatkan Semua!
    </button>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-red-600 text-white p-8 rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center border-[10px] border-red-700 relative group cursor-pointer aspect-square">
      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity" />
      <h3 className="text-7xl font-black italic tracking-tighter uppercase mb-2 drop-shadow-lg">TNT</h3>
      <p className="font-black text-red-200 uppercase tracking-widest text-sm">Awas Meledak!</p>
      {/* Sumbu TNT */}
      <div className="absolute -top-6 w-2 h-8 bg-gray-800 rounded-full">
         <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full animate-ping" />
      </div>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="flex justify-between items-center bg-amber-900 shadow-[0_8px_0_rgba(69,26,3,1)] p-5 rounded-[2rem] border-4 border-amber-600 relative z-[100]">
      <div className="flex items-center space-x-3">
         <div className="w-12 h-12 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center font-black text-white italic">R</div>
         <h1 className="text-3xl font-black text-white italic tracking-tighter hidden sm:block">BIRD_OS</h1>
      </div>
      <ul className="flex space-x-6 text-sm font-black text-amber-100 uppercase tracking-tighter">
        <li className="hover:text-yellow-400 cursor-pointer transition hidden md:block">Maps</li>
        <li className="hover:text-yellow-400 cursor-pointer transition hidden md:block">Birds</li>
        <li className="bg-red-600 text-white px-8 py-3 rounded-full border-b-4 border-red-800 hover:scale-110 active:translate-y-1 transition-all cursor-pointer shadow-lg">PLAY</li>
      </ul>
    </nav>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-yellow-400 p-8 rounded-[4rem] border-4 border-white group cursor-pointer shadow-2xl hover:shadow-[0_0_60px_rgba(253,224,71,1)] transition-all duration-500 flex flex-col items-center text-center justify-center">
      <div className="text-7xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 drop-shadow-xl">🥚</div>
      <h3 className="text-3xl font-black text-yellow-950 uppercase tracking-tighter">Golden Egg</h3>
      <p className="text-yellow-900 font-bold mt-2">Shadow bercahaya untuk rahasia kodingmu!</p>
    </div>
  );
}