import { useRef, useState, useCallback, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

const skinPhoto = 'https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1400';

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [imgLoaded, setImgLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (isDragging.current) e.preventDefault();
    };
    document.addEventListener('touchmove', preventScroll, { passive: false });
    return () => document.removeEventListener('touchmove', preventScroll);
  }, []);

  return (
    <section id="results" className="relative py-24 lg:py-32 bg-espresso-800 overflow-hidden grain">
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-champagne-500/8 blur-[130px]" />
      <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-champagne-400/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-champagne-500" />
            <span className="text-xs font-light tracking-ultra-wide text-champagne-400 uppercase">
              Real Results
            </span>
            <span className="h-px w-8 bg-champagne-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-ivory-100">
            Before & After Transformations
          </h2>
          <p className="mt-4 text-ivory-100/50 font-light max-w-lg mx-auto">
            Drag the slider to see the difference clinical dermatology makes.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none luxury-shadow border border-champagne-500/20 bg-espresso-900"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {/* After (glowing skin) — base layer with bright luminous filter */}
            <div className="absolute inset-0">
              <img
                src={skinPhoto}
                alt="After treatment — glowing clear skin"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1.08) contrast(1.04) saturate(1.05)' }}
                onLoad={() => setImgLoaded(true)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-champagne-500/10 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6 z-10">
                <span className="px-4 py-2 glass-dark rounded-full text-xs font-medium tracking-wide text-ivory-100">
                  After — Glowing Skin
                </span>
              </div>
            </div>

            {/* Before (dull skin) — clipped layer with dull/blemished filter */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <div className="absolute inset-0 h-full" style={{ width: containerRef.current?.offsetWidth ?? '100%' }}>
                <img
                  src={skinPhoto}
                  alt="Before treatment — dull textured skin"
                  className="w-full h-full object-cover"
                  style={{ filter: 'contrast(1.15) saturate(0.75) brightness(0.82) sepia(0.25)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso-900/10" />
              </div>
              <div className="absolute bottom-6 left-6 z-10">
                <span className="px-4 py-2 glass-dark rounded-full text-xs font-medium tracking-wide text-ivory-100">
                  Before — Dull & Textured
                </span>
              </div>
            </div>

            {/* Loading shimmer */}
            {!imgLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-espresso-700 to-espresso-900 animate-pulse" />
            )}

            {/* Divider line + handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-ivory-100 shadow-2xl z-20 pointer-events-none"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory-100 shadow-xl flex items-center justify-center">
                <MoveHorizontal className="w-5 h-5 text-espresso-800" />
              </div>
            </div>
          </div>

          {/* Hint */}
          <p className="text-center mt-6 text-ivory-100/40 text-sm font-light">
            Drag ← → to compare
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
          {[
            { stat: '8,000+', label: 'Patients Treated' },
            { stat: '98%', label: 'Satisfaction Rate' },
            { stat: '15+', label: 'Years of Excellence' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-serif text-3xl lg:text-4xl text-gradient-gold">{item.stat}</div>
              <div className="mt-2 text-xs tracking-wide text-ivory-100/50 uppercase font-light">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
