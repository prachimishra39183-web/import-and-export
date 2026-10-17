export type Product = {
  id: string;
  name: string;
  category: 'Export' | 'Import';
  origin: string;
  destination: string;
  pricePerUnit: number;
  unit: string;
  minOrder: number;
  image: string;
  tag: string;
  rating: number;
};

export type Shipment = {
  id: string;
  orderRef: string;
  product: string;
  from: string;
  to: string;
  status: 'Booking Confirmed' | 'In Transit' | 'At Port' | 'Out for Delivery' | 'Delivered';
  vessel: string;
  eta: string;
  progress: number;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Arabica Coffee Beans',
    category: 'Export',
    origin: 'Santos, Brazil',
    destination: 'Rotterdam, NL',
    pricePerUnit: 3.4,
    unit: 'kg',
    minOrder: 12000,
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Agriculture',
    rating: 4.8,
  },
  {
    id: 'p2',
    name: 'Refined Cotton Textiles',
    category: 'Export',
    origin: 'Mumbai, India',
    destination: 'Hamburg, DE',
    pricePerUnit: 1.2,
    unit: 'meter',
    minOrder: 50000,
    image: 'https://images.pexels.com/photos/27130409/pexels-photo-27130409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Textiles',
    rating: 4.6,
  },
  {
    id: 'p3',
    name: 'Industrial Steel Coils',
    category: 'Import',
    origin: 'Shanghai, China',
    destination: 'Santos, Brazil',
    pricePerUnit: 680,
    unit: 'ton',
    minOrder: 500,
    image: 'https://images.pexels.com/photos/24702866/pexels-photo-24702866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Metals',
    rating: 4.7,
  },
  {
    id: 'p4',
    name: 'Premium Cocoa Beans',
    category: 'Export',
    origin: 'Abidjan, Côte d\'Ivoire',
    destination: 'Antwerp, BE',
    pricePerUnit: 5.1,
    unit: 'kg',
    minOrder: 8000,
    image: 'https://images.pexels.com/photos/20034030/pexels-photo-20034030.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Agriculture',
    rating: 4.9,
  },
  {
    id: 'p5',
    name: 'Electronics Components',
    category: 'Import',
    origin: 'Busan, South Korea',
    destination: 'Long Beach, USA',
    pricePerUnit: 0.85,
    unit: 'piece',
    minOrder: 100000,
    image: 'https://images.pexels.com/photos/34926604/pexels-photo-34926604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Electronics',
    rating: 4.5,
  },
  {
    id: 'p6',
    name: 'Organic Cashew Nuts',
    category: 'Export',
    origin: 'Dar es Salaam, Tanzania',
    destination: 'Mumbai, India',
    pricePerUnit: 7.2,
    unit: 'kg',
    minOrder: 6000,
    image: 'https://images.pexels.com/photos/27831374/pexels-photo-27831374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Agriculture',
    rating: 4.8,
  },
];

export const shipments: Shipment[] = [
  {
    id: 's1',
    orderRef: 'FRE-2041',
    product: 'Arabica Coffee Beans',
    from: 'Santos, Brazil',
    to: 'Rotterdam, NL',
    status: 'In Transit',
    vessel: 'MV Ocean Horizon',
    eta: 'Oct 29, 2026',
    progress: 64,
  },
  {
    id: 's2',
    orderRef: 'FRE-2038',
    product: 'Industrial Steel Coils',
    from: 'Shanghai, China',
    to: 'Santos, Brazil',
    status: 'At Port',
    vessel: 'MV Pacific Titan',
    eta: 'Oct 22, 2026',
    progress: 88,
  },
  {
    id: 's3',
    orderRef: 'FRE-2050',
    product: 'Premium Cocoa Beans',
    from: 'Abidjan, CI',
    to: 'Antwerp, BE',
    status: 'Booking Confirmed',
    vessel: 'MV Atlantic Crest',
    eta: 'Nov 14, 2026',
    progress: 12,
  },
  {
    id: 's4',
    orderRef: 'FRE-2019',
    product: 'Electronics Components',
    from: 'Busan, KR',
    to: 'Long Beach, USA',
    status: 'Delivered',
    vessel: 'MV Pacific Star',
    eta: 'Delivered Oct 10',
    progress: 100,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Daniel Okoro',
    role: 'Procurement Lead',
    company: 'Lagos Trade Co.',
    quote: 'They handled our 40-ton textile order end to end. Live tracking kept our buyers calm the whole voyage.',
    avatar: 'https://i.pravatar.cc/120?img=12',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Maria Silva',
    role: 'Founder',
    company: 'Café Verde Imports',
    quote: 'Booked a full container of coffee in one afternoon. Transparent pricing, arrived ahead of ETA.',
    avatar: 'https://i.pravatar.cc/120?img=47',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Arjun Mehta',
    role: 'Operations Manager',
    company: 'Mumbai Steel Works',
    quote: 'We place the order, they sail it. No surprises, no hidden demurrage.',
    avatar: 'https://i.pravatar.cc/120?img=33',
    rating: 4,
  },
];

export const stats = [
  { label: 'Containers Shipped', value: '48,200+', icon: 'Container' },
  { label: 'Trade Routes', value: '120', icon: 'Route' },
  { label: 'Partner Ports', value: '64', icon: 'Anchor' },
  { label: 'On-Time Delivery', value: '97.4%', icon: 'TrendingUp' },
];

export const tradeRoutes = [
  { from: 'Shanghai', to: 'Rotterdam', days: 28, volume: 'High' },
  { from: 'Santos', to: 'Hamburg', days: 21, volume: 'Medium' },
  { from: 'Mumbai', to: 'Long Beach', days: 24, volume: 'High' },
  { from: 'Busan', to: 'Antwerp', days: 31, volume: 'Medium' },
  { from: 'Abidjan', to: 'Mumbai', days: 18, volume: 'Growing' },
  { from: 'Dar es Salaam', to: 'Shanghai', days: 26, volume: 'Growing' },
];

export type VisionPillar = {
  id: string;
  title: string;
  desc: string;
  icon: 'Eye' | 'Target' | 'Leaf' | 'Globe';
};

export const visionPillars: VisionPillar[] = [
  {
    id: 'v1',
    title: 'Global Reach',
    desc: 'Six continents connected by reliable sea freight corridors.',
    icon: 'Globe',
  },
  {
    id: 'v2',
    title: 'Order-First',
    desc: 'You order, we sail. No subscriptions, no commitments.',
    icon: 'Target',
  },
  {
    id: 'v3',
    title: 'Full Transparency',
    desc: 'Live tracking and clear pricing from booking to delivery.',
    icon: 'Eye',
  },
  {
    id: 'v4',
    title: 'Sustainable',
    desc: 'Optimised routes to cut emissions per container.',
    icon: 'Leaf',
  },
];

export const visionStatement = {
  heading: 'Trade that flows as freely as the ocean',
  body: 'Global commerce should be accessible to every business. We remove the friction of cross-border trade by putting your order at the centre of everything.',
  body2: 'By 2030: 200+ routes, 10,000 businesses served, and the benchmark for sustainable sea freight.',
};

export type Accreditation = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  desc: string;
  icon: 'ShieldCheck' | 'Award' | 'Certificate' | 'BadgeCheck';
};

export const accreditations: Accreditation[] = [
  {
    id: 'a1',
    name: 'ISO 9001:2015',
    issuer: 'ISO',
    year: '2021',
    desc: 'Certified quality management across orders and delivery.',
    icon: 'ShieldCheck',
  },
  {
    id: 'a2',
    name: 'AEO Certified',
    issuer: 'World Customs Org.',
    year: '2022',
    desc: 'Faster customs clearance, reduced inspections.',
    icon: 'BadgeCheck',
  },
  {
    id: 'a3',
    name: 'FIATA Member',
    issuer: 'Freight Forwarders Fed.',
    year: '2020',
    desc: 'Adhering to global trade standards.',
    icon: 'Certificate',
  },
  {
    id: 'a4',
    name: 'Best Sea Freight Operator',
    issuer: 'Global Logistics Awards',
    year: '2025',
    desc: 'Awarded for on-time delivery and innovation.',
    icon: 'Award',
  },
];

export type JourneyMilestone = {
  id: string;
  year: string;
  title: string;
  desc: string;
};

export const journey: JourneyMilestone[] = [
  {
    id: 'j1',
    year: '2014',
    title: 'The First Container',
    desc: 'Founded in Hamburg. One route, one order: 40 tons of cotton to Mumbai.',
  },
  {
    id: 'j2',
    year: '2017',
    title: 'Across Oceans',
    desc: 'Expanded to South America and East Asia. 20 ports, 5,000 containers.',
  },
  {
    id: 'j3',
    year: '2020',
    title: 'Digital Platform',
    desc: 'Launched online ordering and live shipment tracking.',
  },
  {
    id: 'j4',
    year: '2023',
    title: 'Sustainability Pledge',
    desc: 'Committed to carbon-neutral sea freight by 2030.',
  },
  {
    id: 'j5',
    year: '2026',
    title: '64 Ports & Counting',
    desc: '120 routes, 48,000+ containers, 97.4% on-time.',
  },
];

export const contactInfo = {
  email: 'orders@futeretail.co',
  phone: '+1 (800) 555-0192',
  address: 'Port Plaza, Hamburg, Germany',
  hours: 'Mon–Fri, 8:00–18:00 CET',
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Elena Fischer',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/7698712/pexels-photo-7698712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'tm2',
    name: 'Kwame Boateng',
    role: 'Head of Operations',
    image: 'https://images.pexels.com/photos/16442682/pexels-photo-16442682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'tm3',
    name: 'Priya Sharma',
    role: 'Logistics Director',
    image: 'https://images.pexels.com/photos/4487516/pexels-photo-4487516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'tm4',
    name: 'Carlos Mendez',
    role: 'Port Coordinator',
    image: 'https://images.pexels.com/photos/28438249/pexels-photo-28438249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const teamGallery = [
  'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7433869/pexels-photo-7433869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6285113/pexels-photo-6285113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7108454/pexels-photo-7108454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];
