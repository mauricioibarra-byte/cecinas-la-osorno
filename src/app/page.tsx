import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import QuickAccess from "@/components/sections/QuickAccess";
import HistorySection from "@/components/sections/HistorySection";
import ProductsSection from "@/components/sections/ProductsSection";
import VisitSection from "@/components/sections/VisitSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <QuickAccess />
        <HistorySection />
        <ProductsSection />
        <VisitSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
