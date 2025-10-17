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
  sourceCode?: string;

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
    name: 'Simple Calulator',
    description:
      ' The Responsive Calculator App is a sleek, mobile-first web-based calculator featuring essential arithmetic operations. It includes buttons for digits, decimal points, and operators, allowing users to perform addition, subtraction, multiplication, and division.      ',
    tags: [
      { name: 'Angular', color: 'blue-text-gradient' },
      { name: 'HTNL&CSS', color: 'green-text-gradient' },
      { name: 'TypeScript', color: 'pink-text-gradient' },
    ],
    image: 'assets/projectImg/calcy.png',
    live: 'https://calcysimple.vercel.app/',
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
