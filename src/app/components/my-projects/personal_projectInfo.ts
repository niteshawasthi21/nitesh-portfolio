export class Project {
  index?: number;
  name!: string;
  description!: string;
  technologies?: string;
  duration?: string;
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
    name: "Spot Drop",
    description:
      "A business promotion and deal management platform built with Angular and Firebase. It allows businesses to create profiles, post promotional deals, and manage them through an intuitive dashboard integrated with Google Maps and Firestore.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Firebase (Authentication)", color: "pink-text-gradient" },
      { name: "Firebase (Firestore)", color: "green-text-gradient" },
      { name: "Firebase (Cloud Functions)", color: "red-text-gradient" },
      { name: "Google Maps API", color: "green-text-gradient" },
      { name: "Angular Material", color: "purple-text-gradient" },
    ],
    image: "assets/Images/spotdrop.png",
    live: "https://spotdrop-1c62f.web.app/home",
  },
  {
    name: "CarePlus",
    description:
      "A sleek healthcare management demo built with React, TypeScript, and Firebase.It helps users explore patient records, dashboard insights, and analytics in a clean and responsive interface.A business promotion and deal management platform built with Angular and Firebase. It allows businesses to create profiles, post promotional deals, and manage them through an intuitive dashboard integrated with Google Maps and Firestore.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Firebase (Authentication)", color: "pink-text-gradient" },
      { name: "Firebase (Firestore)", color: "green-text-gradient" },
      { name: "Firebase (Cloud Functions)", color: "red-text-gradient" },
      { name: "Material UI", color: "purple-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: "assets/projectImg/careplus.png",
    live: "https://meditrack-ec246.web.app/",
  },
  {
    name: "NodeQuest",
    description:
      "A NodeQuest app uilt with React, TypeScript, and Firebase.It helps users explore patient records, dashboard insights, and analytics in a clean and responsive interface.A business promotion and deal management platform built with Angular and Firebase. It allows businesses to create profiles, post promotional deals, and manage them through an intuitive dashboard integrated with Google Maps and Firestore.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Material UI", color: "purple-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: "assets/projectImg/nodequest.png",
    live: "https://nodequest.vercel.app/",
  },
  {
    name: "Event Management",
    description:
      "A responsive event management web app built with React.js, designed to help users create, organize, and manage events seamlessly with a clean and modern user interface.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "HTML & CSS", color: "green-text-gradient" },
    ],
    image: "assets/projectImg/event.png",
    live: "https://eventmanagement-xi.vercel.app/",
  },
  {
    name: "BTC Calculator",
    description:
      "A cryptocurrency calculator built with React that allows users to convert Bitcoin value into various global currencies using real-time exchange rates with a minimal and intuitive design.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
      { name: "SCSS", color: "pink-text-gradient" },
    ],
    image: "assets/projectImg/btc.png",
    live: "https://btc-calculator-rho.vercel.app/",
  },
  {
    name: "Simple Calculator",
    description:
      "A responsive calculator built with Angular that performs basic arithmetic operations with a clean and modern UI. Designed for fast calculations and optimized for both desktop and mobile screens.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "HTML & CSS", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    image: "assets/projectImg/calcy.png",
    live: "https://calcysimple.vercel.app/",
  } 
];
