export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  audience: ('children' | 'teens' | 'adults')[];
  keyFocusAreas: string[];
  signsOrIndicators: string[];
  iconName: string;
}

export interface ConditionItem {
  name: string;
  category: 'Speech' | 'Language' | 'Fluency & Voice' | 'Neuro & Adults' | 'Developmental';
  description: string;
  recommendedServiceId: string;
}

export interface ApproachStep {
  stepNumber: string;
  title: string;
  summary: string;
  details: string;
  timeframe?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ScreeningQuestion {
  id: number;
  category: 'toddler' | 'child' | 'adult';
  question: string;
  context: string;
}

export interface ClinicVerifiedInfo {
  therapistName: string;
  professionalTitle: string;
  qualifications: string;
  experience: string;
  specialInterests: string;
  phone: string;
  whatsapp: string;
  email: string;
  clinicAddress: string;
  workingHours: string;
}

export interface AppointmentRequest {
  id: string;
  fullName: string;
  parentGuardianName?: string;
  age: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  mode: 'in-person' | 'online';
  mainConcern: string;
  additionalMessage?: string;
  createdAt: string;
}
