import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/clinic';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-ivory-100 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-champagne-400/5 blur-[130px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-champagne-500" />
            <span className="text-xs font-light tracking-ultra-wide text-champagne-600 uppercase">
              Questions & Answers
            </span>
            <span className="h-px w-8 bg-champagne-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-espresso-800">
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-champagne-500/30 bg-ivory-50'
                    : 'border-champagne-500/10 bg-ivory-50/50 hover:border-champagne-500/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-serif text-lg lg:text-xl transition-colors ${
                    isOpen ? 'text-champagne-600' : 'text-espresso-800'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-espresso-800 rotate-180' : 'bg-champagne-500/10'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-ivory-100" />
                    ) : (
                      <Plus className="w-4 h-4 text-champagne-600" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-sm font-light text-espresso-700/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
