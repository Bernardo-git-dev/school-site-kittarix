import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/Hero';
import { StatsSection } from './components/sections/Stats';
import { AboutSection } from './components/sections/About';
import { ProgramsSection } from './components/sections/Programs';
import { FacilitiesSection } from './components/sections/Facilities';
import { TestimonialsSection } from './components/sections/Testimonials';
import { StaffSection } from './components/sections/Staff';
import { GallerySection } from './components/sections/Gallery';
import { EventsSection } from './components/sections/Events';
import { StudentLifeSection } from './components/sections/StudentLife';
import { ContactSection } from './components/sections/Contact';
import { AdmissionsSection } from './components/sections/Admissions';
import { FAQSection } from './components/sections/FAQ';
import { CallToAction } from './components/sections/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FacilitiesSection />
        <ProgramsSection />
        <StaffSection />
        <StudentLifeSection />
        <TestimonialsSection />
        <GallerySection />
        <EventsSection />
        <AdmissionsSection />
        <FAQSection />
        <ContactSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
