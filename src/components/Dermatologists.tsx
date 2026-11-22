import { Award, Briefcase } from 'lucide-react';
import { dermatologists } from '@/data/clinic';
import { useBooking } from '@/context/BookingContext';

export default function Dermatologists() {
  const { openBooking } = useBooking();

  return (
    <section id="doctors" className="relative py-24 lg:py-32 bg-ivory-200 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-champagne-400/8 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-champagne-500" />
            <span className="text-xs font-light tracking-ultra-wide text-champagne-600 uppercase">
              Our Specialists
            </span>
            <span className="h-px w-8 bg-champagne-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-espresso-800">
            Meet Our Dermatologists
          </h2>
          <p className="mt-4 text-espresso-700/60 font-light max-w-lg mx-auto">
            Board-certified physicians dedicated to your skin health and aesthetic goals.
          </p>
        </div>

        {/* Doctor cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {dermatologists.map((doc, idx) => (
            <article
              key={doc.id}
              className="group relative bg-ivory-50 rounded-3xl p-8 border border-champagne-500/10 hover:border-champagne-500/25 transition-all duration-500 hover:shadow-xl hover:shadow-espresso-800/8 animate-fade-up opacity-0"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Real portrait */}
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-champagne-300 to-champagne-500 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-ivory-200">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-espresso-800 flex items-center justify-center border-4 border-ivory-50">
                  <Award className="w-4 h-4 text-champagne-400" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-2xl text-espresso-800">{doc.name}</h3>
                <p className="mt-1 text-xs font-light tracking-wide text-champagne-600 uppercase">{doc.credentials}</p>
                <p className="mt-3 text-sm font-light text-espresso-700/70">{doc.specialty}</p>

                <div className="flex items-center justify-center gap-2 mt-3 text-espresso-700/50">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span className="text-xs font-light">{doc.experience}</span>
                </div>

                <p className="mt-5 text-sm font-light text-espresso-700/60 leading-relaxed">
                  {doc.bio}
                </p>
              </div>

              <button
                onClick={() => openBooking()}
                className="mt-6 w-full py-3 rounded-full text-sm font-medium tracking-wide border border-champagne-500/20 text-espresso-800 hover:bg-espresso-800 hover:text-ivory-100 hover:border-espresso-800 transition-all duration-300"
              >
                Book with {doc.name.split(' ').slice(0, 2).join(' ').replace('Dr.', 'Dr.')}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
