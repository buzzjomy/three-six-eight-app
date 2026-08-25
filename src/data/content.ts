export const brand = {
  name: 'Three Six Eight',
  shortName: '368',
  tagline: 'Beauty & Wellness',
  since: 1987,
};

export const contact = {
  address: 'Thekkemadam Rd, Thrissur, Kerala 680001',
  phones: ['0487 2441629', '0487 2424505', '+91 90723 49494'],
  email: 'info@threesixeight.in',
  hours: [
    { days: 'Monday - Saturday', time: '09:30 AM - 06:30 PM' },
    { days: 'Sunday', time: '10:00 AM - 05:00 PM' },
  ],
  mapsQuery: 'Thekkemadam Rd, Thrissur, Kerala 680001',
  whatsapp: '919072349494',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
  },
};

export const stats = [
  { label: 'Customers', value: '25,000+' },
  { label: 'Bridal Makeups Monthly', value: '40+' },
  { label: 'Years of Experience', value: '35+' },
  { label: 'Staff', value: '60+' },
];

export const highlights = [
  {
    title: 'International standards',
    body: 'Three Six Eight guarantees global standards in beauty care. Staff are trained under the best experts in the field.',
    icon: 'globe-outline' as const,
  },
  {
    title: 'Branded cosmetics',
    body: 'All products, cosmetics, and equipment are procured from reputed brands and leading manufacturers.',
    icon: 'ribbon-outline' as const,
  },
  {
    title: 'Realistic pricing',
    body: 'Premium quality services at realistic pricing, so customers get the best value for top-notch care.',
    icon: 'pricetag-outline' as const,
  },
];

export type Service = {
  id: string;
  name: string;
  icon: 'cut-outline' | 'sparkles-outline' | 'flower-outline' | 'color-palette-outline';
  summary: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 'hair-care',
    name: 'Hair Care',
    icon: 'cut-outline',
    summary: 'Cuts, colouring, and treatments for every hair type.',
    description:
      'From precision cuts to advanced colour work, our hair specialists tailor every service to your hair type and lifestyle. We were among the first in Kerala to introduce modern hair colouring techniques.',
  },
  {
    id: 'facial-treatments',
    name: 'Facial Treatments',
    icon: 'sparkles-outline',
    summary: 'Skin care and facials using globally recognised techniques.',
    description:
      'Our facial treatments range from classic rejuvenation to advanced procedures such as microdermabrasion, designed to leave your skin refreshed and healthy.',
  },
  {
    id: 'anti-aging',
    name: 'Anti-aging Treatments',
    icon: 'flower-outline',
    summary: 'Interventional and non-invasive anti-aging procedures.',
    description:
      'Backed by trained specialists and branded equipment, our anti-aging programs are built around realistic, personalised plans rather than one-size-fits-all packages.',
  },
  {
    id: 'event-makeup',
    name: 'Event Make Up',
    icon: 'color-palette-outline',
    summary: 'Bridal and occasion make-up packages.',
    description:
      'Our bridal section offers packages suited to every occasion, helping you feel closest to your own identity on your most treasured days.',
  },
];

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Choosing the Right Facial for Your Skin Type',
    excerpt:
      'A quick guide to matching common facial treatments with different skin types and concerns.',
    readTime: '4 min read',
  },
  {
    id: 'post-2',
    title: 'Bridal Beauty: Planning Your Timeline',
    excerpt:
      'What to schedule in the weeks and days before your event so everything comes together on time.',
    readTime: '5 min read',
  },
  {
    id: 'post-3',
    title: 'Hair Colour Aftercare Essentials',
    excerpt:
      'Simple habits that help colour-treated hair stay vibrant and healthy between salon visits.',
    readTime: '3 min read',
  },
];

export const founder = {
  name: 'Nimmi Sheriff',
  title: 'Founder, Three Six Eight',
};

export const aboutCopy = {
  intro:
    'By beauty and wellness, our focus is not on appearance. We create an experience that cherishes who we are, purely to ourselves, radiating our inner self to others. This is where skin and hair are made to complement the occasion, what we wear, and the tone of the ceremony. This is not about how we are looked at by others, but about regaining our confidence and mindfulness in our treasured moments.',
  mission:
    'Three Six Eight is a premium beauty service centre with a salon, spa, and clinic. We offer a full range of services in hair care, skin care, nail care, and make-up. Our bridal section offers packages that suit every occasion.',
  pioneer:
    'Three Six Eight is a pioneer in introducing many beauty procedures in Kerala, including hair colouring, microdermabrasion, and interventional procedures, across a three-floor centre.',
  motive:
    'We work to bring people to the forefront of society who have lost their self-esteem due to skin conditions, helping clients from around the globe feel confident again.',
};
