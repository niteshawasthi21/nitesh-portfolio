export class Project {
  index?: number;
  name!: string;
  description!: string;
  tags!: { name: string; color: string }[];
  image!: string;
  live!: string;
  iconColor?: string;
  achievements?: string;
  date?: string;
  url?: string;
}

export const PROJECTS = [
  {
    name: 'Event Management',
    description:
      'Basic UI with React.js',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'HTML & Css', color: 'green-text-gradient' },
    ],
    image: 'assets/projectImg/event.png',
    live: 'https://eventmanagement-xi.vercel.app/',
  },
  {
    name: 'BTC Calulator',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'restapi', color: 'green-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
    ],
    image: 'assets/projectImg/btc.png',
    live: 'https://btc-calculator-rho.vercel.app/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'supabase', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: 'assets/Images/nitesh.png',
    live: 'https://github.com/',
  },
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: 'assets/Images/nitesh.png',
    live: 'https://github.com/',
  },
];
