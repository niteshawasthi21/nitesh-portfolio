import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-experience.component.html',
  styleUrl: './my-experience.component.css',
})
export class MyExperienceComponent {
expandedStates: boolean[] = [];
 workExperiences: any = [
  {
    company: 'QX Global Group Ltd',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_oYvAG49WIO9dzgJ01xeh7CbiDq3yQXllVg&s', // Replace with actual logo URL
    position: 'Software Engineer - Angular',
    duration: 'Nov 2024 - Present',
    description: [
      'Reduced client operational costs by 80% by developing custom PDF/CSV export module and client address configuration feature, eliminating dependencies on expensive third-party services.',
      'Collaborated with cross-functional UK-based team including QA Engineers, Developers, Product Owner, and Head of Engineering to deliver high-quality frontend features meeting international standards.',
      'Created comprehensive reusable component library including popup menus, pagination controls, and breadcrumb navigation, reducing development time by 40% across multiple features.',
      'Led complete application rebranding initiative, implementing modern UI/UX design system with consistent styling and improved user experience across entire web application.',
      'Awarded "Newbie Award" within 2 weeks for rapidly mastering complex codebase, resolving 3 critical production bugs, and implementing new feature ahead of schedule.',
      'Conducted thorough code reviews and enforced high code quality standards, improving team code maintainability and reducing technical debt.',
    ],
  },
  {
    company: 'Knoxpo Solutions Pvt Ltd',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr84395nmWwaeZbYF5qSeU7m07c914MpROXUiaWcVGog&s',
    position: 'Angular Developer',
    duration: 'May 2023 - Oct 2024',
    description: [
      'Developed and maintained complex enterprise web applications using Angular, improving overall application performance by 30% through optimization techniques.',
      'Built 3 core reusable components (File Uploader with drag-drop functionality, Data Visualizer with multiple chart types, Interactive Dashboard) utilized across 10+ application modules.',
      'Implemented custom Angular directives, services, and dependency injection patterns to streamline application functionality and reduce code duplication by 25%.',
      'Collaborated with cross-functional teams including UX designers, backend developers, and product managers to design and implement new product features while maintaining zero critical bugs in production.',
      'Optimized application performance through implementation of lazy loading modules, OnPush change detection strategy, and bundle size reduction, achieving 40% faster initial load time.',
      'Integrated RESTful APIs and handled asynchronous operations using RxJS observables and operators.',
      'Mentored junior developers on Angular best practices and conducted knowledge-sharing sessions.',
    ],
  },
  {
    company: 'WalkingTree Technologies',
    image: 'https://shorturl.at/rFL12',
    position: 'Associate Software Engineer',
    duration: 'Jan 2022 - Apr 2023',
    description: [
      'Coordinated with backend development teams to ensure seamless API integration and efficient data flow between frontend Angular applications and backend systems (Node.js, Java).',
      'Led frontend development initiatives for bug fixes and new feature implementations, reducing production issues by 35% through proactive testing and code quality measures.',
      'Designed intuitive and user-friendly interfaces with strong focus on usability, accessibility standards (WCAG 2.1), and responsive design principles.',
      'Integrated third-party Angular libraries including Angular Material and PrimeNG into existing enterprise applications, enhancing UI consistency and development speed.',
      'Participated actively in code reviews and implemented best practices including coding standards, design patterns, and documentation, improving team productivity and code maintainability.',
      'Developed custom Angular pipes and filters for data transformation and presentation.',
      'Implemented authentication and authorization mechanisms using JWT tokens and route guards.',
    ],
  },
];



  toggleDescription(index: number) {
    this.expandedStates[index] = !this.expandedStates[index];
  }
}
