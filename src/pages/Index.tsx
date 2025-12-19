import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HostsSection from "@/components/HostsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <HostsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
