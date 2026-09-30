export interface ContactInfo {
  primaryPhone: string;
  landline: string;
  whatsapp: string;
  email: string;
}

export interface OfficeLocation {
  type: 'primary' | 'secondary';
  title: string;
  addressLines: string[];
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export interface WorkingHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description?: string;
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category?: string;
  description: string;
  features?: string[];
  iconName: string;
}

export interface CorePracticeArea {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  services: string[];
  iconName: string;
}

export interface PricingItem {
  id: string;
  service: string;
  startingPrice: string;
  unit?: string;
  description: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle?: string;
  iconName: string;
}

export interface AdvocateProfile {
  name: string;
  title: string;
  jurisdiction: string;
  city: string;
  state: string;
  country: string;
  experienceYears: string;
  tagline: string;
  summary: string;
  contacts: ContactInfo;
  offices: OfficeLocation[];
  workingHours: WorkingHours;
  stats: StatItem[];
  navItems: NavItem[];
}
