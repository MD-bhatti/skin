import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { BookingState } from '@/data/clinic';

interface BookingContextValue {
  isOpen: boolean;
  preselectedTreatmentId: string | null;
  openBooking: (treatmentId?: string, treatmentName?: string) => void;
  closeBooking: () => void;
  confirmedBooking: BookingState | null;
  setConfirmedBooking: (booking: BookingState | null) => void;
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedTreatmentId, setPreselectedTreatmentId] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingState | null>(null);

  const openBooking = useCallback((treatmentId?: string) => {
    setPreselectedTreatmentId(treatmentId ?? null);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setPreselectedTreatmentId(null);
  }, []);

  return (
    <BookingContext.Provider
      value={{ isOpen, preselectedTreatmentId, openBooking, closeBooking, confirmedBooking, setConfirmedBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}
