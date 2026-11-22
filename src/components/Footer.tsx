import { Sparkles, MapPin, Clock, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';

const clinicHours = [
  { day: 'Monday — Friday', hours: '10:00 AM — 7:00 PM' },
  { day: 'Saturday', hours: '11:00 AM — 6:00 PM' },
  { day: 'Sunday', hours: 'By appointment only' },
];

const footerLinks = {
  Treatments: ['HydraFacial MD', 'Diode Laser Hair Removal', 'Microneedling PRP', 'Botox & Fillers'],
  Clinic: ['Our Doctors', 'Before & After', 'FAQ', 'Book Consultation'],
};

export default function Footer() {
  const whatsappNumber = '923001234567';
  const whatsappMessage = encodeURIComponent("Hello Aura Aesthetics, I'd like to book a consultation.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-espresso-900 text-ivory-100 overflow-hidden grain">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full bg-champagne-500/5 blur-[140px]" />

      {/* WhatsApp CTA bar */}
      <div className="relative border-b border-champagne-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-ivory-100">Have a question? Chat with us.</h3>
            <p className="mt-1 text-sm font-light text-ivory-100/50">
              Get instant answers on WhatsApp — our team responds within minutes.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-sage-500 text-ivory-100 rounded-full text-sm font-medium tracking-wide hover:bg-sage-400 transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/20 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Consultation
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex items-center justify-center w-9 h-9 rounded-full border border-champagne-500/40">
                <Sparkles className="w-4 h-4 text-champagne-400" />
              </span>
              <span className="font-serif text-2xl tracking-wide">
                Aura<span className="text-champagne-400">.</span>
              </span>
            </div>
            <p className="text-sm font-light text-ivory-100/50 leading-relaxed max-w-xs">
              A luxury aesthetics, laser & skin studio where clinical excellence meets serene indulgence.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full border border-champagne-500/15 flex items-center justify-center text-ivory-100/60 hover:border-champagne-500 hover:text-champagne-400 transition-all"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-light tracking-ultra-wide text-champagne-400 uppercase mb-5">Treatments</h4>
            <ul className="space-y-3">
              {footerLinks.Treatments.map((link) => (
                <li key={link}>
                  <button onClick={() => handleNavClick('#treatments')} className="text-sm font-light text-ivory-100/60 hover:text-champagne-400 transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-light tracking-ultra-wide text-champagne-400 uppercase mb-5">Clinic</h4>
            <ul className="space-y-3">
              {footerLinks.Clinic.map((link, i) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(i === 0 ? '#doctors' : i === 1 ? '#results' : i === 2 ? '#faq' : '#hero')}
                    className="text-sm font-light text-ivory-100/60 hover:text-champagne-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-light tracking-ultra-wide text-champagne-400 uppercase mb-5">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-light text-ivory-100/60 leading-relaxed">
                  MM Alam Road, Gulberg III,<br />Lahore, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                <a href="tel:+924235123456" className="text-sm font-light text-ivory-100/60 hover:text-champagne-400 transition-colors">
                  +92 42 3512 3456
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                <a href="mailto:hello@auraskin.com" className="text-sm font-light text-ivory-100/60 hover:text-champagne-400 transition-colors">
                  hello@auraskin.com
                </a>
              </div>
            </div>

            <h4 className="text-xs font-light tracking-ultra-wide text-champagne-400 uppercase mt-7 mb-4">Clinic Hours</h4>
            <div className="space-y-2">
              {clinicHours.map((item) => (
                <div key={item.day} className="flex items-start gap-3">
                  <Clock className="w-3.5 h-3.5 text-champagne-400/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-light text-ivory-100/70">{item.day}</div>
                    <div className="text-xs font-light text-ivory-100/40">{item.hours}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-champagne-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-ivory-100/40">
            © 2026 Aura Aesthetics & Skin Studio. All rights reserved.
          </p>
          <p className="text-xs font-light text-ivory-100/30 tracking-wide">
            Radiant Skin, Backed by Clinical Science
          </p>
        </div>
      </div>
    </footer>
  );
}
