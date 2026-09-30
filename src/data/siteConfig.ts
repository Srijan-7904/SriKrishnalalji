import type {
  AdvocateProfile,
  CorePracticeArea,
  ServiceItem,
  PricingItem,
  TestimonialItem,
  ExpertiseItem,
} from '../types';

export const siteConfig: AdvocateProfile = {
  name: 'Sri Krishna Lal Ji',
  title: 'Tax Advocate',
  jurisdiction: 'High Court & Tax Tribunals Advocate',
  city: 'Varanasi',
  state: 'Uttar Pradesh',
  country: 'India',
  experienceYears: '25+',
  tagline: 'TAX ADVOCATE • VARANASI',
  summary:
    'Sri Krishna Lal Ji is a practicing Tax Advocate in Varanasi with over 25 years of expertise in Income Tax and Goods & Services Tax (GST). He provides professional legal assistance for tax compliance, GST registration, return filing, tax notices, appeals, and financial advisory services for individuals, businesses, and organizations.',
  contacts: {
    primaryPhone: '+91 7398841058',
    landline: '0542-2210780',
    whatsapp: '+91 9415996748',
    email: 'babalujaiswal@gmail.com',
  },
  offices: [
    {
      type: 'primary',
      title: 'Primary Chamber',
      addressLines: ['Nae Basti, Chet Ganj, Ishwar Gangi'],
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      pincode: '221001',
      landmark: 'Near Ishwar Gangi Crossing',
    },
    {
      type: 'secondary',
      title: 'Secondary Office',
      addressLines: ['S, Teliyabag'],
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      pincode: '221001',
    },
  ],
  workingHours: {
    weekdays: '10:00 AM – 7:00 PM',
    saturday: '10:00 AM – 5:00 PM',
    sunday: 'Closed',
  },
  stats: [
    {
      id: 'experience',
      value: '25+',
      label: 'Years of Practice',
      description: 'Dedicated legal counsel and tax representation.',
      highlight: true,
    },
    {
      id: 'clients',
      value: '2,000+',
      label: 'Happy Clients',
      description: 'Individuals, merchants, firms, and companies served.',
      highlight: false,
    },
    {
      id: 'gst',
      value: '800+',
      label: 'GST Registrations',
      description: 'Seamless registration & regular compliance.',
      highlight: false,
    },
    {
      id: 'returns',
      value: '5,000+',
      label: 'Tax Returns Filed',
      description: 'Meticulous, on-time submissions and reconciliations.',
      highlight: true,
    },
    {
      id: 'success',
      value: '95%',
      label: 'Success Rate',
      description: 'Proven track record in notices and assessment closures.',
      highlight: true,
    },
  ],
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Practice', href: '#practice' },
    { label: 'Services', href: '#services' },
    { label: 'Notices', href: '#notices' },
    { label: 'Deadlines', href: '#compliance' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'exp-1',
    title: 'Experienced Tax Advocate',
    subtitle: '25+ Years',
    iconName: 'Award',
  },
  {
    id: 'exp-2',
    title: 'Expert in GST & Income Tax',
    subtitle: 'Statutory Mastery',
    iconName: 'Scale',
  },
  {
    id: 'exp-3',
    title: 'Transparent Legal Advice',
    subtitle: 'Uncompromising Ethics',
    iconName: 'ShieldCheck',
  },
  {
    id: 'exp-4',
    title: 'Timely Filing & Compliance',
    subtitle: 'Zero Penalty Focus',
    iconName: 'ClockCheck',
  },
  {
    id: 'exp-5',
    title: 'Personalized Consultation',
    subtitle: 'Direct Legal Counsel',
    iconName: 'UserCheck',
  },
  {
    id: 'exp-6',
    title: 'Reliable Documentation Support',
    subtitle: 'Flawless Paperwork',
    iconName: 'FileCheck',
  },
];

export const corePracticeAreas: CorePracticeArea[] = [
  {
    id: 'income-tax',
    number: '01',
    category: 'Direct Taxation',
    title: 'Income Tax',
    description:
      'Authoritative representation and compliance solutions covering all facets of direct tax law, audits, and tribunal defense.',
    services: [
      'Income Tax Return Filing',
      'Tax Notices',
      'Tax Assessments',
      'Tax Appeals',
      'Refund Assistance',
    ],
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'gst-services',
    number: '02',
    category: 'Indirect Taxation',
    title: 'GST Services',
    description:
      'Strategic Goods & Services Tax compliance, input tax credit audits, dispute resolution, and departmental representations.',
    services: [
      'GST Registration',
      'Monthly & Annual Returns',
      'GST Compliance',
      'GST Audits',
      'GST Litigation',
    ],
    iconName: 'ReceiptText',
  },
  {
    id: 'financial-advisory',
    number: '03',
    category: 'Corporate & Legal',
    title: 'Financial Advisory',
    description:
      'Preventative legal consulting designed to structure transactions, safeguard assets, and minimize tax liability legitimately.',
    services: [
      'Business Tax Planning',
      'Compliance Advisory',
      'Tax Documentation',
      'Legal Consultation',
    ],
    iconName: 'TrendingUp',
  },
];

export const professionalServices: ServiceItem[] = [
  {
    id: 's-1',
    title: 'GST Registration',
    description: 'Fast, hassle-free registration and documentation for new and expanding businesses in Varanasi.',
    iconName: 'Store',
  },
  {
    id: 's-2',
    title: 'GST Return Filing',
    description: 'Accurate monthly (GSTR-1, 3B) and annual (GSTR-9/9C) filing with thorough input tax credit reconciliation.',
    iconName: 'CalendarCheck',
  },
  {
    id: 's-3',
    title: 'Income Tax Return (ITR) Filing',
    description: 'Comprehensive return filing for salaried individuals, business proprietors, professionals, and corporate bodies.',
    iconName: 'FileCheck2',
  },
  {
    id: 's-4',
    title: 'Income Tax Notices & Replies',
    description: 'Strategic analysis and formal legal responses to scrutiny notices under Sections 143(2), 148, and 156.',
    iconName: 'AlertCircle',
  },
  {
    id: 's-5',
    title: 'GST Notices & Compliance',
    description: 'Expert departmental responses to ASMT-10, show cause notices (DRC-01), and demand orders.',
    iconName: 'ShieldAlert',
  },
  {
    id: 's-6',
    title: 'Tax Appeals & Litigation',
    description: 'Skilled drafting and legal representation before CIT (Appeals) and Appellate Tribunals.',
    iconName: 'Scale',
  },
  {
    id: 's-7',
    title: 'Representation Before Tax Authorities',
    description: 'In-person advocacy and defense during departmental hearings, assessments, and audit proceedings.',
    iconName: 'Briefcase',
  },
  {
    id: 's-8',
    title: 'Financial & Tax Advisory',
    description: 'Strategic counseling for lawful tax minimization, asset protection, and financial structuring.',
    iconName: 'Compass',
  },
  {
    id: 's-9',
    title: 'Business Tax Planning',
    description: 'Forward-looking tax roadmaps to reduce overhead and prevent unexpected fiscal liabilities.',
    iconName: 'LineChart',
  },
  {
    id: 's-10',
    title: 'MSME Tax Consultation',
    description: 'Tailored compliance advisory and governmental subsidy guidance for small and medium enterprises.',
    iconName: 'Factory',
  },
  {
    id: 's-11',
    title: 'PAN & TAN Assistance',
    description: 'Seamless registration, corrections, and TDS statutory compliance filing for enterprises.',
    iconName: 'CreditCard',
  },
  {
    id: 's-12',
    title: 'Tax Documentation Support',
    description: 'Comprehensive preparation and verification of statutory books, audit trails, and legal declarations.',
    iconName: 'FolderCheck',
  },
];

export const pricingItems: PricingItem[] = [
  {
    id: 'p-1',
    service: 'Initial Tax Consultation',
    startingPrice: '₹500',
    description: 'Comprehensive case review, preliminary legal evaluation, and strategic roadmap for your tax matter.',
    featured: true,
  },
  {
    id: 'p-2',
    service: 'GST Registration',
    startingPrice: '₹1,500',
    description: 'End-to-end documentation, application submission, and departmental follow-up for new GSTIN issuance.',
    featured: false,
  },
  {
    id: 'p-3',
    service: 'GST Return Filing',
    startingPrice: '₹800',
    unit: '/ month',
    description: 'Monthly GSTR-1, GSTR-3B filings, sales/purchase reconciliation, and e-way bill oversight.',
    featured: false,
  },
  {
    id: 'p-4',
    service: 'Income Tax Return Filing',
    startingPrice: '₹1,000',
    description: 'Accurate computation, deduction optimization, and electronic filing of ITR for individuals & entities.',
    featured: false,
  },
  {
    id: 'p-5',
    service: 'Tax Notice Reply',
    startingPrice: '₹2,500',
    description: 'In-depth statutory review of departmental notice, legal reply drafting, and supporting evidence compilation.',
    featured: false,
  },
  {
    id: 'p-6',
    service: 'GST Appeal Assistance',
    startingPrice: '₹5,000',
    description: 'Drafting of formal grounds of appeal, legal synopsis, and tribunal preparation for contested demands.',
    featured: false,
  },
  {
    id: 'p-7',
    service: 'Business Tax Advisory',
    startingPrice: '₹2,000',
    unit: '/ session',
    description: 'Executive consultation on tax structuring, corporate compliance roadmaps, and risk mitigation.',
    featured: false,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'Professional guidance for GST registration. The entire process was smooth and hassle-free.',
    author: 'Rajesh Gupta',
  },
  {
    id: 't-2',
    quote: 'Very knowledgeable advocate. Helped resolve my Income Tax notice quickly.',
    author: 'Anjali Singh',
  },
  {
    id: 't-3',
    quote: 'Explained every legal step clearly and completed all documentation on time.',
    author: 'Vivek Mishra',
  },
  {
    id: 't-4',
    quote: 'Highly recommended for GST compliance and tax planning for businesses.',
    author: 'Pooja Agarwal',
  },
];

export const dailyWorkingHours = [
  { day: 'Monday', hours: '10:00 AM – 7:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM – 7:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM – 7:00 PM' },
  { day: 'Thursday', hours: '10:00 AM – 7:00 PM' },
  { day: 'Friday', hours: '10:00 AM – 7:00 PM' },
  { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export const serviceDropdownOptions = [
  'GST Registration',
  'GST Return Filing',
  'Income Tax Return Filing',
  'Income Tax Notice',
  'GST Notice',
  'Tax Appeal',
  'Business Tax Advisory',
  'Other',
];
