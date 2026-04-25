import React from 'react';

const PageHeader = ({ title, breadcrumb, children }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
      {/* KIRI: Judul dan Navigasi (Breadcrumb) */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{title}</h1>
        
        <nav className="text-sm text-gray-400 mt-1">
          {Array.isArray(breadcrumb) ? (
            <ol className="flex list-none p-0 items-center">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="hover:text-hijau transition-colors cursor-default">
                    {item}
                  </span>
                  {/* Munculkan garis miring jika bukan item terakhir */}
                  {index < breadcrumb.length - 1 && (
                    <span className="mx-2 text-gray-300 font-light">/</span>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <span>{breadcrumb}</span>
          )}
        </nav>
      </div>

      {/* KANAN: Tempat khusus untuk tombol atau elemen tambahan (Children) */}
      <div className="flex items-center gap-3">
        {children}
      </div>
    </div>
  );
};

export default PageHeader;