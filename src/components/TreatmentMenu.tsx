import { useState } from 'react';
import { Clock, ArrowRight, Check } from 'lucide-react';
import { treatments, categories, type TreatmentCategory } from '@/data/clinic';
import { useBooking } from '@/context/BookingContext';

export default function TreatmentMenu() {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>('Facial & Glow');
  const { openBooking } = useBooking();

  const filtered = treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="relative py-24 lg:py-32 bg-ivory-100 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-champagne-500" />
            <span className="text-xs font-light tracking-ultra-wide text-champagne-600 uppercase">
              Our Treatments
            </span>
            <span className="h-px w-8 bg-champagne-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-espresso-800">
            Curated for Your Skin
          </h2>
          <p className="mt-4 text-espresso-700/60 font-light max-w-lg mx-auto">
            Every treatment is physician-administered and tailored to your unique skin profile.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-espresso-800 text-ivory-100 shadow-lg shadow-espresso-800/15'
                  : 'bg-ivory-200 text-espresso-700 hover:bg-ivory-300 border border-champagne-500/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Treatment cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((t, idx) => {
            const Icon = t.icon;
            return (
              <article
                key={t.id}
                className="group relative bg-ivory-50 rounded-3xl overflow-hidden border border-champagne-500/10 hover:border-champagne-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-espresso-800/8 animate-scale-in opacity-0"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Thumbnail photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory-50 via-ivory-50/20 to-transparent" />
                  <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 rounded-2xl glass border border-champagne-500/20">
                    <Icon className="w-6 h-6 text-champagne-600" />
                  </div>
                </div>

                <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-espresso-800/5 border border-champagne-500/15 group-hover:bg-espresso-800 group-hover:border-espresso-800 transition-all duration-500">
                    <Icon className="w-6 h-6 text-champagne-600 group-hover:text-champagne-300 transition-colors duration-500" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-light text-espresso-700/50 uppercase tracking-wide">From</div>
                    <div className="font-serif text-2xl text-espresso-800">{t.startingPrice}</div>
                  </div>
                </div>

                <h3 className="font-serif text-2xl lg:text-3xl text-espresso-800 mb-3">{t.name}</h3>
                <p className="text-espresso-700/70 font-light text-sm leading-relaxed mb-5">{t.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {t.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-400/10 text-sage-500 text-xs font-light"
                    >
                      <Check className="w-3 h-3" />
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-champagne-500/10">
                  <div className="flex items-center gap-2 text-espresso-700/60">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-light">{t.duration}</span>
                  </div>
                  <button
                    onClick={() => openBooking(t.id, t.name)}
                    className="group/btn inline-flex items-center gap-2 text-sm font-medium text-espresso-800 hover:text-champagne-600 transition-colors"
                  >
                    Book Now
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-espresso-800 group-hover/btn:bg-champagne-500 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-ivory-100 group-hover/btn:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
