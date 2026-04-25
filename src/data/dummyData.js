// 1. Definisikan daftar pelanggan terlebih dahulu
export const customersData = Array.from({ length: 30 }, (_, i) => ({
  customerId: `CUST-${String(i + 1).padStart(3, '0')}`,
  customerName: ["Surya", "Siti", "Rahma", "Mega", "Tasya", "Budi", "Ani", "Dedi", "Lia", "Eko"][i % 10],
  email: `${["surya", "siti", "rahma", "mega", "tasya", "budi", "ani", "dedi", "lia", "eko"][i % 10]}${i}@example.com`,
  phone: `0812-3456-78${String(i).padStart(2, '0')}`,
  loyalty: ["Bronze", "Silver", "Gold"][i % 3]
}));

// 2. Buat data orders yang mengambil referensi nama dari customersData
export const ordersData = Array.from({ length: 30 }, (_, i) => {
  // Mengambil customer secara acak dari customersData agar datanya sinkron
  const customerReference = customersData[i % customersData.length];

  return {
    orderId: `ORD-${String(i + 1).padStart(3, '0')}`, // ID mulai dari 001
    customerName: customerReference.customerName, // Nama diambil dari data customer
    status: ["Pending", "Completed", "Cancelled"][i % 3], // Status sesuai instruksi
    totalPrice: `Rp ${(Math.floor(Math.random() * 500000) + 50000).toLocaleString('id-ID')}`, // Format Rupiah
    orderDate: `2024-05-${String((i % 28) + 1).padStart(2, '0')}` // Atribut Order Date
  };
});