export default function PageHeader() {
  return (
    <div className="flex items-center justify-between p-4 mt-4">
      <div>
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2 mt-2 text-gray-500 font-medium">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-hijau">Order List</span>
        </div>
      </div>
      <button className="bg-hijau text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-green-600 transition">
        + Add Button
      </button>
    </div>
  );
}