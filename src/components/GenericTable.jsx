import React from 'react';

export default function GenericTable({ columns, data, renderRow }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 overflow-hidden">
        <thead className="text-white bg-emerald-600">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-6 py-3 text-left text-sm font-semibold tracking-wider">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-700">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                {renderRow(item, index)}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-6 py-10 text-center text-gray-400">
                Belum ada data tersedia.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}