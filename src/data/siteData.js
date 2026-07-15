import image1 from '../assets/images/image1.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import image8 from '../assets/images/image8.jpg'
import image9 from '../assets/images/image9.jpg'
import image10 from '../assets/images/image10.jpg'
import image11 from '../assets/images/image11.jpg'
import image13 from '../assets/images/image13.jpg'
import image14 from '../assets/images/image14.jpg'
import image15 from '../assets/images/image15.jpg'
import image16 from '../assets/images/image16.jpg'
import image17 from '../assets/images/image17.jpg'
import image18 from '../assets/images/image18.jpg'
import image19 from '../assets/images/image19.jpg'
import image20 from '../assets/images/image20.jpg'
import image22 from '../assets/images/image22.jpg'
import image23 from '../assets/images/image23.jpg'

export const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Products', to: '/products' },
  { name: 'Manufacturing', to: '/manufacturing' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Contact', to: '/contact' },
]

export const heroData = {
  eyebrow: 'Industrial manufacturing',
  title: 'Precision electronics production for modern B2B supply chains.',
  description:
    'A premium manufacturing partner focused on ferrite transformers, toroids, chokes for demanding applications.',
  image: image1,
  slides: [image22,image1, image19, image15,image14, image16],
  primaryAction: { label: 'Explore products', to: '/products' },
  secondaryAction: { label: 'Request a quote', to: '/contact' },
}

export const overviewItems = [
  {
    title: 'Engineering trust',
    text: 'Our work is built for repeatable quality, low tolerances, and industrial reliability.',
  },
  {
    title: 'Manufacturing clarity',
    text: 'All production steps are documented, validated, and designed for efficient delivery.',
  },
  {
    title: 'Certification-ready',
    text: 'We support certified supply chains with disciplined inspection and traceability.',
  },
]

export const productCategories = [
  {
    name: 'Ferrite Transformers',
    description: 'High-efficiency magnetic cores designed for power conditioning and electronics integration.',
    applications: [
      'Industrial power supplies',
      'LED drivers',
      'Telecom electronics',
    ],
    features: [
      'Low loss core materials',
      'Precision wound coils',
      'Compact industrial design',
    ],
    specifications: [
      'Input voltage: 12–48 V',
      'Operating temp: -40° to 105°C',
      'Available in standard and custom bobbins',
    ],
    image: image3,
  },
  {
    name: 'Chokes',
    description: 'Noise suppression inductors for clean power and stable signal operation.',
    applications: [
      'Switch-mode power supplies',
      'EMI filtering',
      'Industrial control systems',
    ],
    features: [
      'High current capacity',
      'Tight impedance control',
      'Robust insulation',
    ],
    specifications: [
      'Current range: 0.5 A – 25 A',
      'Inductance: 1 μH – 10 mH',
      'Custom winding available',
    ],
    image: image4,
  },
  {
    name: 'Toroids',
    description: 'Precision-wound toroidal cores for efficient energy transfer and thermal stability.',
    applications: [
      'Power electronics',
      'Audio transformers',
      'High-frequency converters',
    ],
    features: [
      'Uniform magnetic field',
      'Low audible noise',
      'Superior thermal performance',
    ],
    specifications: [
      'Diameter: 15 mm – 120 mm',
      'Material: ferrite and powdered iron',
      'Custom specifications on demand',
    ],
    image: image5,
  },
]

export const aboutSections = [
  {
    title: 'Company History',
    text: 'Since 2011, the team has delivered manufacturing solutions for electronics platforms that require precision components and dependable delivery.',
  },
  {
    title: 'Mission',
    text: 'To provide B2B customers with manufacturing capabilities that combine engineering depth and industrial-quality control.',
  },
  {
    title: 'Vision',
    text: 'To become a trusted partner for electronics manufacturers seeking premium, long-term supply chain reliability.',
  },
  {
    title: 'Manufacturing Facility',
    text: 'Our facility supports compact transformer production, toroidal winding, assembly, testing, and packaging workflows.',
  },
  {
    title: 'Core Values',
    text: 'Precision, consistency, transparency, and service alignment are at the center of every project.',
  },
  {
    title: 'Leadership',
    text: 'Experienced technical leadership ensures every product is supported by strong engineering and disciplined manufacturing.',
  },
]

export const aboutTimeline = [
  { year: '2011', event: 'Facility opened with focus on industrial components.' },
  { year: '2014', event: 'Expanded into toroidal and choke manufacturing.' },
  { year: '2018', event: 'Added Inductors and Line Filter manufacturing.' },
  { year: '2022', event: 'Introduced formal quality inspection and traceability protocols.' },
]

export const manufacturingSections = [

  {
    title: 'Quality Control',
    text: 'Every unit passes documented checks for electrical performance, insulation integrity, and dimensional accuracy.',
    image: image9,
  },
    {
    title: 'Manufacturing Process',
    text: 'A disciplined workflow from material preparation through assembly, inspection, and dispatch.',
    image: image8,
  },
  {
    title: 'Testing',
    text: 'Routine testing ensures repeatable performance across extended production runs.',
    image: image10,
  },
  {
    title: 'Packaging',
    text: 'Protective packaging and clear labeling keep components safe through logistics and installation.',
    image: image11,
  },
]

export const manufacturingTimeline = [
  { step: 'Design Review', detail: 'Review specifications and tolerance requirements before production.' },
  { step: 'Material Sourcing', detail: 'Select premium ferrite, copper, and insulation materials for every batch.' },
  { step: 'Winding & Assembly', detail: 'Precision winding and component assembly in controlled production lines.' },
  { step: 'Inspection & Test', detail: 'End-of-line testing for electrical performance and reliability.' },
  { step: 'Packaging & Dispatch', detail: 'Secure packaging with documentation for safe delivery.' },
]

export const galleryItems = [
  { image: image22, label: 'S.R. Magnatech Factory Entrance' },
  { image: image13, label: 'Production line 01' },
  { image: image14, label: 'Component inspection' },
  { image: image15, label: 'Finished Ferrite Rod' },
  { image: image16, label: 'Finished Line Filter' },
  { image: image17, label: 'Testing 1' },
  { image: image18, label: 'Testing 2' },
  { image: image19, label: 'Finished Transformer' },
  { image: image20, label: 'Transformer winding' },
  { image: image23, label: 'Factory floor' },

]

export const companyStats = [
  { label: 'Years of experience', value: 15, suffix: '+' },
  { label: 'Product categories', value: 5, suffix: '+' },
  { label: 'Quality checks per batch', value: 10, suffix: '+' },
  { label: 'Client delivery success', value: 99, suffix: '%' },
]

export const contactInfo = {
  address: '59, 1st floor, 1st Main, Pipeline West, Kasthuriba Nagar, Mysore Rd, Bengaluru, Karnataka 560026, India',
  phone: '+91 9964727076',
  email: 'srmagnatech@gmail.com',
}

export const footerLinks = [
  
  { name: 'Instagram', to: 'https://www.instagram.com/s.r.m2011?igsh=MWFlcnpkYmxraTN6eQ==', external: true },
  { name: 'LinkedIn', to: 'https://www.linkedin.com/in/s-r-magnatech-srm-a15b25103?', external: true },
]








export const footerProducts = [
  'Ferrite Transformers',
  'Chokes',
  'Toroids',
  'Line Filters',
  'Industrial Inductors',
  'Ferrite Rods',
  'Power Transformers',
]
