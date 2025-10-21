import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import MembersSection from "@/components/MembersSection";
import ProjectsSection from "@/components/ProjectsSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import VolunteerSection from "@/components/VolunteerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <AwardsSection />
      <MembersSection />
      <ProjectsSection />
      <EventsSection />
      <GallerySection />
      <VolunteerSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
