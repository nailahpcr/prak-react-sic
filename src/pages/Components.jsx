import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../pertemuan-5/PageHeader"; // -> JALUR DIPERBAIKI KE FOLDER COMPONENTS UTAMA
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Components() {
  // Data produk simulasi untuk dikirim ke komponen ProductCard
  const dummyProduct = {
    name: "Sepatu Sneakers Modern",
    price: "Rp 450.000",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    rating: 5,
  };

  return (
    <Container id="dashboard-container">
      {/* 1. Bagian Header Halaman */}
      <PageHeader title="Components" />
      <p className="mb-4 text-gray-600">Ini halaman components</p>

      {/* 2. Bagian Button */}
      <div className="flex gap-2 mb-4">
        <Button>Simpan</Button>
        <Button type="secondary">Simpan</Button>
        <Button type="success">Simpan</Button>
        <Button type="danger">Simpan</Button>
        <Button type="warning">Simpan</Button>
      </div>

      {/* 3. Bagian Badge */}
      <div className="flex gap-2 mb-4">
        <Badge type="primary">Badge</Badge>
        <Badge type="secondary">Badge</Badge>
        <Badge type="success">Badge</Badge>
        <Badge type="danger">Badge</Badge>
        <Badge type="warning">Badge</Badge>
      </div>

      {/* 4. Bagian Avatar */}
      <div className="flex gap-2 mb-6">
        <Avatar name="budi">MH</Avatar>
        <Avatar name="joko">MH</Avatar>
      </div>

      {/* 5. Bagian Card Biasa */}
      <div className="mb-6 max-w-sm">
        <Card>
          <h2 className="text-xl font-bold">Judul Card</h2>
          <p className="text-gray-600">Ini adalah isi dari card.</p>
        </Card>
      </div>

      {/* 6. Bagian Product Card */}
      <ProductCard
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        title="Sepatu Sport"
        category="Fashion"
        price="Rp 450.000"
        description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
      />

      <ProductCard
        image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        title="Smartphone"
        category="Elektronik"
        price="Rp 4.500.000"
        description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
      />

      {/* 7. Bagian Footer */}
      <Footer />
    </Container>
  );
}
