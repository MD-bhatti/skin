import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TreatmentMenu from '@/components/TreatmentMenu';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Dermatologists from '@/components/Dermatologists';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { BookingProvider } from '@/context/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-ivory-100">
        <Navbar />
        <main>
          <Hero />
          <TreatmentMenu />
          <BeforeAfterSlider />
          <Dermatologists />
          <FAQSection />
        </main>
        <Footer />
        <BookingModal />
      </div>
    </BookingProvider>
  );
}
