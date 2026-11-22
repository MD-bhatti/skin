import { Star, ShieldCheck, ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

const heroImage = 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=900';

export default function Hero() {
  const { openBooking } = useBooking();

  const scrollToTreatments = () => {
    document.querySelector('#treatments')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden grain">
      {/* Ambient gradient backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ivory-100 via-ivory-200 to-ivory-300" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-champagne-400/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-sage-400/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + CTAs */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <span className="h-px w-10 bg-champagne-500" />
              <span className="text-xs font-light tracking-ultra-wide text-champagne-600 uppercase">
                Luxury Aesthetics · Laser · Skin
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-espresso-800 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
              Radiant Skin,
              <br />
              <span className="text-gradient-gold italic font-light">Backed by</span>
              <br />
              Clinical Science
            </h1>

            <p className="mt-8 text-lg font-light text-espresso-700/80 max-w-lg leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
              Experience physician-led dermatology and FDA-approved laser technology in
              a serene, luxury setting designed for transformation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => openBooking()}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-espresso-800 text-ivory-100 rounded-full text-sm font-medium tracking-wide hover:bg-espresso-900 transition-all duration-300 hover:shadow-xl hover:shadow-espresso-800/20 hover:-translate-y-0.5"
              >
                Book Free Skin Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToTreatments}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-espresso-800/20 text-espresso-800 rounded-full text-sm font-medium tracking-wide hover:border-champagne-500 hover:text-champagne-600 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Treatments
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-3 px-5 py-3 glass rounded-2xl border border-champagne-500/15 animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-champagne-500 text-champagne-500" />
                  <Star className="w-4 h-4 fill-champagne-500 text-champagne-500" />
                  <Star className="w-4 h-4 fill-champagne-500 text-champagne-500" />
                  <Star className="w-4 h-4 fill-champagne-500 text-champagne-500" />
                  <Star className="w-4 h-4 fill-champagne-500 text-champagne-500" />
                </div>
                <div className="h-6 w-px bg-champagne-500/20" />
                <span className="text-sm font-light text-espresso-700">4.9★ Rated Clinic</span>
              </div>

              <div className="flex items-center gap-3 px-5 py-3 glass rounded-2xl border border-champagne-500/15 animate-float" style={{ animationDelay: '1.5s' }}>
                <ShieldCheck className="w-5 h-5 text-champagne-500" />
                <span className="text-sm font-light text-espresso-700">FDA-Approved Laser Tech</span>
              </div>
            </div>
          </div>

          {/* Right: hero photo with floating badge */}
          <div className="relative animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-[2rem] border border-champagne-500/15" />
              <div className="absolute -inset-8 rounded-[2.5rem] border border-champagne-500/8" />

              <div className="relative aspect-[3/4] rounded-[1.75rem] overflow-hidden luxury-shadow">
                <img
                  src={heroImage}
                  alt="Woman with radiant glowing skin receiving facial treatment"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating glassmorphic badge */}
              <div className="absolute -bottom-5 -left-5 lg:-left-8 flex items-center gap-3 px-5 py-4 glass rounded-2xl border border-champagne-500/20 luxury-shadow animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-champagne-500/15">
                  <Sparkles className="w-5 h-5 text-champagne-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-espresso-800">HydraFacial MD</div>
                  <div className="text-xs font-light text-espresso-700/60">Certified Clinic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToTreatments}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-espresso-700/40 hover:text-champagne-600 transition-colors z-10"
      >
        <span className="text-xs tracking-ultra-wide uppercase font-light">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
