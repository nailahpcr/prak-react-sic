export default function PageHeader() {
  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-4"
    >
      {/* Left Side */}
      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold">
          Dashboard
        </span>
        <div
          id="breadcrumb-links"
          className="flex items-center font-medium space-x-2 mt-2"
        >
          <span id="breadcrumb-home" className="text-gray-500">
            Home
          </span>
          <span id="breadcrumb-separator" className="text-gray-500">
            /
          </span>
          <span id="breadcrumb-current" className="text-gray-500">
            Home Detail
          </span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-500">Home Very Detail</span>
        </div>
      </div>

      {/* Right Side */}
      <div id="action-button">
        <button
          id="add-button"
          className="bg-hijau text-white px-4 py-2 rounded-lg"
        >
          + Add Button
        </button>
      </div>
    </div>
  );
}
