import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContacSection";
import HomeSection from "./sections/HomeSection";
import PortfolioSection from "./sections/PortfolioSection";

export default function MainPage() {
  return (
    <div className="bg-[#030014]">
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
