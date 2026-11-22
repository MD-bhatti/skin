import { Droplets, Sparkles, Zap, Waves, Wand2, Syringe } from 'lucide-react';

export type TreatmentCategory = 'Facial & Glow' | 'Laser & Hair' | 'Anti-Aging & PRP';

export interface Treatment {
  id: string;
  name: string;
  category: TreatmentCategory;
  description: string;
  duration: string;
  startingPrice: string;
  icon: typeof Droplets;
  highlights: string[];
  image: string;
}

export const treatments: Treatment[] = [
  {
    id: 'hydrafacial-md',
    name: 'HydraFacial MD',
    category: 'Facial & Glow',
    description: 'A multi-step resurfacing treatment that cleanses, exfoliates, extracts, and hydrates — delivering an instant luminous glow with zero downtime.',
    duration: '45 min',
    startingPrice: 'Rs. 8,000',
    icon: Droplets,
    highlights: ['Instant glow', 'No downtime', 'Suitable for all skin types'],
    image: 'https://images.pexels.com/photos/37229279/pexels-photo-37229279.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'carbon-laser-peel',
    name: 'Carbon Laser Peel',
    category: 'Facial & Glow',
    description: 'A gentle laser facial that uses liquid carbon to draw out impurities, refine pores, and restore a smooth, radiant complexion.',
    duration: '30 min',
    startingPrice: 'Rs. 12,000',
    icon: Sparkles,
    highlights: ['Pore refinement', 'Oil control', 'Smooth texture'],
    image: 'https://images.pexels.com/photos/30809946/pexels-photo-30809946.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'diode-laser-hair-removal',
    name: 'Diode Laser Hair Removal',
    category: 'Laser & Hair',
    description: 'FDA-approved diode laser technology for safe, permanent hair reduction across all skin tones — precise, comfortable, and clinically proven.',
    duration: '30–60 min',
    startingPrice: 'Rs. 5,000',
    icon: Zap,
    highlights: ['FDA-approved', 'All skin tones', 'Permanent reduction'],
    image: 'https://images.pexels.com/photos/4586746/pexels-photo-4586746.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'pigmentation-laser',
    name: 'Pigmentation Correction',
    category: 'Laser & Hair',
    description: 'Targeted laser therapy that breaks down melanin clusters, fading dark spots, melasma, and uneven pigmentation for a balanced, even tone.',
    duration: '40 min',
    startingPrice: 'Rs. 10,000',
    icon: Waves,
    highlights: ['Melasma safe', 'Even tone', 'Visible results in 3 sessions'],
    image: 'https://images.pexels.com/photos/3985356/pexels-photo-3985356.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'microneedling-prp',
    name: 'Microneedling with PRP',
    category: 'Anti-Aging & PRP',
    description: 'The vampire facial — micro-channeling combined with platelet-rich plasma from your own blood to stimulate collagen and deeply rejuvenate skin.',
    duration: '75 min',
    startingPrice: 'Rs. 18,000',
    icon: Wand2,
    highlights: ['Collagen boost', 'Natural PRP', 'Scar & wrinkle reduction'],
    image: 'https://images.pexels.com/photos/7446676/pexels-photo-7446676.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'botox-fillers',
    name: 'Botox & Dermal Fillers',
    category: 'Anti-Aging & PRP',
    description: 'Physician-administered neuromodulators and hyaluronic acid fillers to soften lines, restore volume, and sculpt facial contours — subtly and naturally.',
    duration: '30 min',
    startingPrice: 'Rs. 25,000',
    icon: Syringe,
    highlights: ['Wrinkle relaxation', 'Volume restoration', 'Natural-looking'],
    image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const categories: TreatmentCategory[] = ['Facial & Glow', 'Laser & Hair', 'Anti-Aging & PRP'];

export interface Dermatologist {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  experience: string;
  bio: string;
  initials: string;
  image: string;
}

export const dermatologists: Dermatologist[] = [
  {
    id: 'dr-aisha',
    name: 'Dr. Aisha Khan',
    credentials: 'MBBS, FCPS Dermatology',
    specialty: 'Laser & Pigmentation Specialist',
    experience: '12+ years',
    bio: 'Pioneering laser protocols for South Asian skin tones, Dr. Khan has treated over 8,000 patients with FDA-approved technologies.',
    initials: 'AK',
    image: 'https://images.pexels.com/photos/5214964/pexels-photo-5214964.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'dr-sana',
    name: 'Dr. Sana Malik',
    credentials: 'MBBS, FCPS Dermatology',
    specialty: 'Anti-Aging & Aesthetic Medicine',
    experience: '10+ years',
    bio: 'A master of natural-looking injectables, Dr. Malik blends anatomical precision with an artist\'s eye for facial harmony.',
    initials: 'SM',
    image: 'https://images.pexels.com/photos/7108283/pexels-photo-7108283.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'dr-omair',
    name: 'Dr. Omair Raza',
    credentials: 'MBBS, FCPS Dermatology',
    specialty: 'PRP & Skin Rejuvenation',
    experience: '9+ years',
    bio: 'Internationally trained in regenerative aesthetics, Dr. Raza specializes in PRP and collagen-stimulating protocols.',
    initials: 'OR',
    image: 'https://images.pexels.com/photos/14438788/pexels-photo-14438788.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'Is laser hair removal safe for all skin tones?',
    answer: 'Yes. We use FDA-approved diode laser technology with adjustable wavelengths that are clinically validated for safe, effective treatment across all skin types — from fair to deep complexions. Your dermatologist will customize settings based on your skin assessment.',
  },
  {
    question: 'How many sessions will I need for visible results?',
    answer: 'Most clients see noticeable improvement after 2–3 sessions. A full treatment course is typically 6–8 sessions spaced 4–6 weeks apart, depending on the treatment type and your individual skin goals. Your consultation includes a personalized timeline.',
  },
  {
    question: 'Is there any downtime after treatments?',
    answer: 'Most of our treatments — HydraFacial, Carbon Laser Peel, and laser hair removal — have zero downtime. You can return to your daily routine immediately. Microneedling PRP and injectables may have 24–48 hours of mild redness or swelling.',
  },
  {
    question: 'Are your treatments performed by qualified doctors?',
    answer: 'Every treatment is performed or directly supervised by a board-certified dermatologist with MBBS and FCPS Dermatology qualifications. Injectables and laser procedures are always physician-administered — never by technicians or assistants.',
  },
  {
    question: 'Do you offer a free consultation?',
    answer: 'Yes. Your first skin consultation is complimentary. Our dermatologists will assess your skin, discuss your concerns, and create a personalized treatment plan with transparent pricing — no obligation to book.',
  },
  {
    question: 'How do I prepare for my first appointment?',
    answer: 'Avoid sun exposure, retinol products, and exfoliating treatments for 48 hours before your visit. Arrive 10 minutes early to complete a brief skin intake form. Bring a list of any products you currently use and questions you\'d like to ask.',
  },
];

export interface BookingState {
  treatmentId: string;
  treatmentName: string;
  date: string;
  time: string;
  name: string;
  phone: string;
}

export const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
];
