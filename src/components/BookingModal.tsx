import { useState, useEffect, useMemo } from 'react';
import { X, Check, Calendar, Clock, User, Phone, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { treatments, timeSlots, type BookingState } from '@/data/clinic';
import { useBooking } from '@/context/BookingContext';

type Step = 'treatment' | 'schedule' | 'details' | 'confirmation';

export default function BookingModal() {
  const { isOpen, preselectedTreatmentId, closeBooking, confirmedBooking, setConfirmedBooking } = useBooking();
  const [step, setStep] = useState<Step>('treatment');
  const [booking, setBooking] = useState<BookingState>({
    treatmentId: '',
    treatmentName: '',
    date: '',
    time: '',
    name: '',
    phone: '',
  });

  useEffect(() => {
    if (isOpen && preselectedTreatmentId) {
      const treatment = treatments.find((t) => t.id === preselectedTreatmentId);
      if (treatment) {
        setBooking((prev) => ({
          ...prev,
          treatmentId: treatment.id,
          treatmentName: treatment.name,
        }));
        setStep('schedule');
      }
    } else if (isOpen) {
      setStep('treatment');
    }
  }, [isOpen, preselectedTreatmentId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    closeBooking();
    setTimeout(() => {
      setStep('treatment');
      setBooking({ treatmentId: '', treatmentName: '', date: '', time: '', name: '', phone: '' });
    }, 300);
  };

  const today = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }, []);

  const maxDate = useMemo(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + 3);
    return d.toISOString().split('T')[0];
  }, []);

  const canProceed = (): boolean => {
    if (step === 'treatment') return booking.treatmentId !== '';
    if (step === 'schedule') return booking.date !== '' && booking.time !== '';
    if (step === 'details') return booking.name.trim().length >= 2 && booking.phone.trim().length >= 7;
    return false;
  };

  const handleNext = () => {
    if (step === 'treatment') setStep('schedule');
    else if (step === 'schedule') setStep('details');
    else if (step === 'details') {
      setConfirmedBooking(booking);
      setStep('confirmation');
    }
  };

  const handleBack = () => {
    if (step === 'schedule') setStep('treatment');
    else if (step === 'details') setStep('schedule');
  };

  const selectedTreatment = treatments.find((t) => t.id === booking.treatmentId);

  if (!isOpen) return null;

  const steps: Step[] = ['treatment', 'schedule', 'details', 'confirmation'];
  const currentStepIndex = steps.indexOf(step);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso-900/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-ivory-100 rounded-3xl luxury-shadow animate-scale-in no-scrollbar">
        {/* Header */}
        <div className="sticky top-0 z-10 glass px-7 py-5 border-b border-champagne-500/10 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-champagne-500" />
            <span className="font-serif text-lg text-espresso-800">
              {step === 'confirmation' ? 'Booking Confirmed' : 'Book Consultation'}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-espresso-700/60 hover:bg-champagne-500/10 hover:text-espresso-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-7 py-7">
          {/* Progress indicator */}
          {step !== 'confirmation' && (
            <div className="flex items-center gap-2 mb-7">
              {steps.slice(0, 3).map((s, i) => (
                <div key={s} className="flex-1">
                  <div
                    className={`h-1 rounded-full transition-colors duration-300 ${
                      i <= currentStepIndex ? 'bg-champagne-500' : 'bg-champagne-500/15'
                    }`}
                  />
                  <span className={`mt-1.5 block text-[10px] tracking-wide uppercase font-light transition-colors ${
                    i <= currentStepIndex ? 'text-champagne-600' : 'text-espresso-700/30'
                  }`}>
                    {s === 'treatment' ? 'Treatment' : s === 'schedule' ? 'Schedule' : 'Details'}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Step: Treatment selection */}
          {step === 'treatment' && (
            <div className="animate-fade-in">
              <h3 className="font-serif text-xl text-espresso-800 mb-1">Choose a Treatment</h3>
              <p className="text-sm font-light text-espresso-700/60 mb-5">Select what you'd like to book.</p>
              <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1 -mr-1 no-scrollbar">
                {treatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setBooking((prev) => ({ ...prev, treatmentId: t.id, treatmentName: t.name }))}
                    className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 ${
                      booking.treatmentId === t.id
                        ? 'border-champagne-500 bg-champagne-500/5'
                        : 'border-champagne-500/15 hover:border-champagne-500/35 bg-ivory-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-espresso-800 text-sm">{t.name}</div>
                        <div className="text-xs font-light text-espresso-700/50 mt-0.5">{t.duration} · From {t.startingPrice}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        booking.treatmentId === t.id ? 'border-champagne-500 bg-champagne-500' : 'border-champagne-500/30'
                      }`}>
                        {booking.treatmentId === t.id && <Check className="w-3 h-3 text-ivory-100" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step: Schedule */}
          {step === 'schedule' && (
            <div className="animate-fade-in">
              <h3 className="font-serif text-xl text-espresso-800 mb-1">Pick Date & Time</h3>
              <p className="text-sm font-light text-espresso-700/60 mb-5">
                Booking for <span className="text-champagne-600 font-medium">{booking.treatmentName}</span>
              </p>

              <div className="mb-6">
                <label className="flex items-center gap-2 text-sm font-light text-espresso-700 mb-2">
                  <Calendar className="w-4 h-4 text-champagne-500" /> Preferred Date
                </label>
                <input
                  type="date"
                  min={today}
                  max={maxDate}
                  value={booking.date}
                  onChange={(e) => setBooking((prev) => ({ ...prev, date: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-champagne-500/20 bg-ivory-50 text-espresso-800 text-sm focus:outline-none focus:border-champagne-500 focus:ring-2 focus:ring-champagne-500/10 transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-light text-espresso-700 mb-2">
                  <Clock className="w-4 h-4 text-champagne-500" /> Preferred Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setBooking((prev) => ({ ...prev, time: slot }))}
                      className={`px-2 py-2.5 rounded-xl text-xs font-light tracking-wide transition-all duration-200 ${
                        booking.time === slot
                          ? 'bg-espresso-800 text-ivory-100'
                          : 'bg-ivory-50 border border-champagne-500/15 text-espresso-700 hover:border-champagne-500/35'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step: Details */}
          {step === 'details' && (
            <div className="animate-fade-in">
              <h3 className="font-serif text-xl text-espresso-800 mb-1">Your Details</h3>
              <p className="text-sm font-light text-espresso-700/60 mb-5">We'll use these to confirm your appointment.</p>

              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-light text-espresso-700 mb-2">
                    <User className="w-4 h-4 text-champagne-500" /> Full Name
                  </label>
                  <input
                    type="text"
                    value={booking.name}
                    onChange={(e) => setBooking((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Ayesha Siddiqui"
                    className="w-full px-4 py-3 rounded-xl border border-champagne-500/20 bg-ivory-50 text-espresso-800 text-sm focus:outline-none focus:border-champagne-500 focus:ring-2 focus:ring-champagne-500/10 transition-all"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-light text-espresso-700 mb-2">
                    <Phone className="w-4 h-4 text-champagne-500" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    value={booking.phone}
                    onChange={(e) => setBooking((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="e.g. +92 300 1234567"
                    className="w-full px-4 py-3 rounded-xl border border-champagne-500/20 bg-ivory-50 text-espresso-800 text-sm focus:outline-none focus:border-champagne-500 focus:ring-2 focus:ring-champagne-500/10 transition-all"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 p-4 rounded-2xl bg-ivory-200 border border-champagne-500/10">
                <div className="text-xs font-light text-espresso-700/50 uppercase tracking-wide mb-2">Summary</div>
                <div className="text-sm text-espresso-800 font-light space-y-1">
                  <div>Treatment: <span className="font-medium">{booking.treatmentName}</span></div>
                  <div>Date: <span className="font-medium">{booking.date}</span></div>
                  <div>Time: <span className="font-medium">{booking.time}</span></div>
                </div>
              </div>
            </div>
          )}

          {/* Step: Confirmation */}
          {step === 'confirmation' && confirmedBooking && (
            <div className="animate-fade-in text-center py-6">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 rounded-full bg-sage-400/15 animate-ping" />
                <div className="relative w-20 h-20 rounded-full bg-sage-500 flex items-center justify-center">
                  <Check className="w-9 h-9 text-ivory-100" />
                </div>
              </div>
              <h3 className="font-serif text-2xl text-espresso-800 mb-2">You're All Set!</h3>
              <p className="text-sm font-light text-espresso-700/60 mb-6">
                We've reserved your appointment. Our team will call you shortly to confirm.
              </p>

              <div className="text-left p-5 rounded-2xl bg-ivory-200 border border-champagne-500/10 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-light text-espresso-700/50 uppercase tracking-wide">Treatment</span>
                  <span className="text-sm font-medium text-espresso-800">{confirmedBooking.treatmentName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-light text-espresso-700/50 uppercase tracking-wide">Date</span>
                  <span className="text-sm font-medium text-espresso-800">{confirmedBooking.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-light text-espresso-700/50 uppercase tracking-wide">Time</span>
                  <span className="text-sm font-medium text-espresso-800">{confirmedBooking.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-light text-espresso-700/50 uppercase tracking-wide">Name</span>
                  <span className="text-sm font-medium text-espresso-800">{confirmedBooking.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-light text-espresso-700/50 uppercase tracking-wide">Phone</span>
                  <span className="text-sm font-medium text-espresso-800">{confirmedBooking.phone}</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="mt-6 w-full py-3.5 rounded-full bg-espresso-800 text-ivory-100 text-sm font-medium tracking-wide hover:bg-espresso-900 transition-colors"
              >
                Done
              </button>
            </div>
          )}

          {/* Navigation buttons */}
          {step !== 'confirmation' && (
            <div className="flex gap-3 mt-7">
              {step !== 'treatment' && (
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-champagne-500/20 text-espresso-800 text-sm font-medium hover:bg-ivory-200 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-espresso-800 text-ivory-100 text-sm font-medium tracking-wide hover:bg-espresso-900 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {step === 'details' ? 'Confirm Booking' : 'Continue'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
