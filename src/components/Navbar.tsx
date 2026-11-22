import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

const navLinks = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Results', href: '#results' },
  { label: 'Our Doctors', href: '#doctors' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-[0_2px_20px_rgba(28,25,23,0.06)]' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <button onClick={() => handleNavClick('#hero')} className="flex items-center gap-2.5 group">
          <span className="relative flex items-center justify-center w-9 h-9 rounded-full border border-champagne-500/40 group-hover:border-champagne-500 transition-colors">
            <Sparkles className="w-4 h-4 text-champagne-500" />
          </span>
          <span className="font-serif text-xl tracking-wide text-espresso-800">
            Aura<span className="text-champagne-500">.</span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-light tracking-wide text-espresso-700 hover:text-champagne-600 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={() => openBooking()}
            className="px-6 py-2.5 text-sm font-medium tracking-wide text-ivory-100 bg-espresso-800 rounded-full hover:bg-espresso-900 transition-all duration-300 hover:shadow-lg hover:shadow-espresso-800/20"
          >
            Book Consultation
          </button>
        </div>

        <button
          className="lg:hidden text-espresso-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden glass border-t border-champagne-500/15 mt-3 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-light tracking-wide text-espresso-700 hover:text-champagne-600 transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openBooking();
              }}
              className="px-6 py-3 text-sm font-medium tracking-wide text-ivory-100 bg-espresso-800 rounded-full hover:bg-espresso-900 transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
