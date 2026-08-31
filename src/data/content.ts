import type { ImageSourcePropType } from 'react-native';

export const brand = {
  name: "PRA DEEP'S",
  shortName: 'PD',
  tagline: 'Beauty Clinic & Academy',
  since: 1987,
};

export const contact = {
  address: 'Munayam Road, Aaram Kallu, Thrissur 680620',
  phones: ['+91 98509 40368'],
  email: 'buzzjomy@gmail.com',
  hours: [
    { days: 'Monday - Saturday', time: '09:30 AM - 06:30 PM' },
    { days: 'Sunday', time: '10:00 AM - 05:00 PM' },
  ],
  mapsQuery: 'Munayam Road, Aaram Kallu, Thrissur 680620',
  whatsapp: '919850940368',
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
    body: "PRA DEEP'S guarantees global standards in beauty care. Staff are trained under the best experts in the field.",
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
  image: ImageSourcePropType;
};

export const services: Service[] = [
  {
    id: 'hair-care',
    name: 'Hair Care',
    icon: 'cut-outline',
    summary: 'Cuts, colouring, and treatments for every hair type.',
    description:
      'From precision cuts to advanced colour work, our hair specialists tailor every service to your hair type and lifestyle. We were among the first in Kerala to introduce modern hair colouring techniques.',
    image: require('../../assets/services/hair-care.png'),
  },
  {
    id: 'facial-treatments',
    name: 'Facial Treatments',
    icon: 'sparkles-outline',
    summary: 'Skin care and facials using globally recognised techniques.',
    description:
      'Our facial treatments range from classic rejuvenation to advanced procedures such as microdermabrasion, designed to leave your skin refreshed and healthy.',
    image: require('../../assets/services/facial-treatments.png'),
  },
  {
    id: 'anti-aging',
    name: 'Anti-aging Treatments',
    icon: 'flower-outline',
    summary: 'Interventional and non-invasive anti-aging procedures.',
    description:
      'Backed by trained specialists and branded equipment, our anti-aging programs are built around realistic, personalised plans rather than one-size-fits-all packages.',
    image: require('../../assets/services/anti-aging.png'),
  },
  {
    id: 'event-makeup',
    name: 'Event Make Up',
    icon: 'color-palette-outline',
    summary: 'Bridal and occasion make-up packages.',
    description:
      'Our bridal section offers packages suited to every occasion, helping you feel closest to your own identity on your most treasured days.',
    image: require('../../assets/services/event-makeup.png'),
  },
];

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  body: string;
  image: ImageSourcePropType;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Choosing the Right Facial for Your Skin Type',
    excerpt:
      'A quick guide to matching common facial treatments with different skin types and concerns.',
    readTime: '4 min read',
    body:
      'Not every facial suits every skin type, and picking the wrong one can leave your skin worse off than before you started. Here is a simple way to think about it.\n\n' +
      'If your skin tends to be oily or breakout-prone, look for treatments built around deep cleansing and gentle exfoliation. These help clear excess oil and unclog pores without stripping your skin raw. Avoid anything too rich or heavily moisturising, as it can sit on the surface and contribute to more breakouts.\n\n' +
      'Dry or sensitive skin does better with hydrating, calming facials — think soothing masks, light massage, and moisture-locking serums. Skip strong exfoliants and fragranced products, which can leave sensitive skin irritated for days.\n\n' +
      'Combination skin usually benefits from a balanced approach: gentle cleansing across the whole face, with a bit of extra attention (and product) on the oilier T-zone.\n\n' +
      'And if you are unsure, that is exactly what a consultation is for. Our specialists look at your skin before recommending a treatment, rather than offering a one-size-fits-all package.',
    image: require('../../assets/blog/post-1.png'),
  },
  {
    id: 'post-2',
    title: 'Bridal Beauty: Planning Your Timeline',
    excerpt:
      'What to schedule in the weeks and days before your event so everything comes together on time.',
    readTime: '5 min read',
    body:
      'Bridal beauty prep works best when it is spread out, not crammed into the final week. Here is a timeline that keeps things stress-free.\n\n' +
      'Two to three months out, book your trial sessions for hair and makeup. This is also a good time to start any longer-term skin treatments, since results build up gradually and you do not want to test something new right before the big day.\n\n' +
      'Three to four weeks out, lock in your final look based on the trial, and schedule any hair colour or treatment touch-ups so they have time to settle.\n\n' +
      'One week out, keep things light — a simple facial, a manicure and pedicure, and nothing experimental. This is not the time to try a new product or treatment for the first time.\n\n' +
      'On the day itself, all that is left is the final hair and makeup application, ideally with plenty of buffer time built into the schedule. Plan the timeline with us in advance and we will help you work backwards from your event date.',
    image: require('../../assets/blog/post-2.png'),
  },
  {
    id: 'post-3',
    title: 'Hair Colour Aftercare Essentials',
    excerpt:
      'Simple habits that help colour-treated hair stay vibrant and healthy between salon visits.',
    readTime: '3 min read',
    body:
      'Fresh colour looks great on day one — the real challenge is keeping it that way. A few simple habits make a big difference.\n\n' +
      'Wait at least 48 hours before your first wash after colouring. This gives the colour time to fully settle into the hair shaft instead of rinsing out early.\n\n' +
      'Switch to a sulphate-free shampoo. Regular shampoos can strip colour quickly, fading vibrancy much faster than it should.\n\n' +
      'Wash with cooler water where you can. Hot water opens the hair cuticle and lets colour molecules escape, which is one of the most common causes of fast fading.\n\n' +
      'Use a weekly deep conditioning or colour-protecting mask. Coloured hair tends to be drier, and keeping it hydrated helps it hold onto pigment for longer.\n\n' +
      'Finally, limit direct heat styling, or always use a heat protectant when you do. Between salon visits, these habits are what keep colour looking as good as the day you left the chair.',
    image: require('../../assets/blog/post-3.png'),
  },
];

export const founder = {
  name: 'Nimmi Sheriff',
  title: "Founder, PRA DEEP'S",
};

export const aboutCopy = {
  intro:
    'By beauty and wellness, our focus is not on appearance. We create an experience that cherishes who we are, purely to ourselves, radiating our inner self to others. This is where skin and hair are made to complement the occasion, what we wear, and the tone of the ceremony. This is not about how we are looked at by others, but about regaining our confidence and mindfulness in our treasured moments.',
  mission:
    "PRA DEEP'S is a premium beauty service centre with a salon, spa, and clinic. We offer a full range of services in hair care, skin care, nail care, and make-up. Our bridal section offers packages that suit every occasion.",
  pioneer:
    "PRA DEEP'S is a pioneer in introducing many beauty procedures in Kerala, including hair colouring, microdermabrasion, and interventional procedures, across a three-floor centre.",
  motive:
    'We work to bring people to the forefront of society who have lost their self-esteem due to skin conditions, helping clients from around the globe feel confident again.',
};
