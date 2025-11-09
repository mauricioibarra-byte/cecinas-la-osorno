import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import HistorySection from "@/components/sections/HistorySection";
import VisitSection from "@/components/sections/VisitSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        {/* Productos inmediatamente después del hero */}
        <ProductsSection />
        <HistorySection />
        <VisitSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
