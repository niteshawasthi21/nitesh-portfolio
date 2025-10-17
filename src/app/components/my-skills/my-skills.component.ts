import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechnicalSkill {
  icon: string;
  tech: string;
  style: string;
}

interface SkillCategory {
  title: string;
  technicalSkills: TechnicalSkill[];
}

interface SoftSkill {
  title: string;
}

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css',
})
export class MySkillsComponent {
  technicalSkills: SkillCategory[] = [
    {
      title: 'Frontend Technologies',
      technicalSkills: [
        { icon: 'fab fa-angular fa-lg', tech: 'Angular 2+', style: 'color: #dd0031;' },
        { icon: 'fa-solid fa-t fa-lg', tech: 'TypeScript', style: 'color: #3178c6;' },
        { icon: 'fab fa-js fa-lg', tech: 'JavaScript (ES6+)', style: 'color: #f7df1e;' },
        { icon: 'fab fa-html5 fa-lg', tech: 'HTML5', style: 'color: #e44d26;' },
        { icon: 'fab fa-css3-alt fa-lg', tech: 'CSS3', style: 'color: #1572b6;' },
        { icon: 'fab fa-sass fa-lg', tech: 'SCSS / SASS', style: 'color: #cc6699;' },
        { icon: 'fas fa-code-branch fa-lg', tech: 'RxJS', style: 'color: #b7178c;' },
        { icon: 'fas fa-globe fa-lg', tech: 'RESTful APIs', style: 'color: #009688;' },
        { icon: 'fas fa-laptop-code fa-lg', tech: 'Responsive Web Design', style: 'color: #00bcd4;' },
        { icon: 'fas fa-window-maximize fa-lg', tech: 'SPA / PWA', style: 'color: #ff9800;' },
      ],
    },
    {
      title: 'Backend Technologies',
      technicalSkills: [
        { icon: 'fab fa-node-js fa-lg', tech: 'Node.js', style: 'color: #339933;' },
        { icon: 'fas fa-network-wired fa-lg', tech: 'Express.js', style: 'color: #8bc34a;' },
        { icon: 'fas fa-server fa-lg', tech: 'API Development', style: 'color: #03a9f4;' },
        { icon: 'fas fa-plug fa-lg', tech: 'RESTful Services', style: 'color: #4caf50;' },
        { icon: 'fas fa-fire fa-lg', tech: 'Firebase', style: 'color: #ffca28;' },
         { icon: 'fas fa-database fa-lg', tech: 'MySQL', style: 'color: #00758f;' },
        { icon: 'fas fa-fire fa-lg', tech: 'Firestore', style: 'color: #ffca28;' },
        { icon: 'fas fa-bolt fa-lg', tech: 'Firebase Realtime DB', style: 'color: #ffa000;' },
      ],
    },
    {
      title: 'UI Frameworks & Libraries',
      technicalSkills: [
        { icon: 'fas fa-layer-group fa-lg', tech: 'Angular Material', style: 'color: #0081cb;' },
        { icon: 'fas fa-cubes fa-lg', tech: 'PrimeNG', style: 'color: #ff6f00;' },
        { icon: 'fas fa-chart-bar fa-lg', tech: 'Wijmo UI', style: 'color: #3f51b5;' },
        { icon: 'fab fa-bootstrap fa-lg', tech: 'Bootstrap', style: 'color: #7952b3;' },
        { icon: 'fas fa-wind fa-lg', tech: 'Tailwind CSS', style: 'color: #06b6d4;' },
        { icon: 'fas fa-project-diagram fa-lg', tech: 'Flux Pattern', style: 'color: #764abc;' },
      ],
    },
    {
      title: 'Development Tools',
      technicalSkills: [
        { icon: 'fab fa-git-alt fa-lg', tech: 'Git', style: 'color: #f05032;' },
        { icon: 'fab fa-github fa-lg', tech: 'GitHub', style: 'color: #181717;' },
        { icon: 'fab fa-bitbucket fa-lg', tech: 'Bitbucket', style: 'color: #2684ff;' },
        { icon: 'fab fa-microsoft fa-lg', tech: 'VS Code', style: 'color: #007acc;' },
        { icon: 'fab fa-jenkins fa-lg', tech: 'Jenkins', style: 'color: #d24939;' },
        { icon: 'fab fa-docker fa-lg', tech: 'Docker', style: 'color: #0db7ed;' },
        { icon: 'fas fa-cloud fa-lg', tech: 'Azure DevOps', style: 'color: #0078d7;' },
        { icon: 'fab fa-npm fa-lg', tech: 'npm / nvm', style: 'color: #cb3837;' },
      ],
    },
    // {
    //   title: 'Database',
    //   technicalSkills: [
    //     { icon: 'fas fa-leaf fa-lg', tech: 'MongoDB', style: 'color: #47a248;' },
    //     { icon: 'fas fa-database fa-lg', tech: 'MySQL', style: 'color: #00758f;' },
    //     { icon: 'fas fa-fire fa-lg', tech: 'Firestore', style: 'color: #ffca28;' },
    //     { icon: 'fas fa-bolt fa-lg', tech: 'Firebase Realtime DB', style: 'color: #ffa000;' },
    //   ],
    // },
    {
      title: 'Testing & Quality',
      technicalSkills: [
        { icon: 'fas fa-vial fa-lg', tech: 'Jasmine', style: 'color: #8a4182;' },
        { icon: 'fas fa-check-circle fa-lg', tech: 'Karma', style: 'color: #4caf50;' },
        { icon: 'fas fa-bug fa-lg', tech: 'Debugging Tools', style: 'color: #ff5722;' },
        { icon: 'fas fa-tasks fa-lg', tech: 'Unit Testing', style: 'color: #03a9f4;' },
        { icon: 'fas fa-code fa-lg', tech: 'Code Reviews', style: 'color: #2196f3;' },
      ],
    },
    {
      title: 'Project Management & Practices',
      technicalSkills: [
        { icon: 'fas fa-project-diagram fa-lg', tech: 'Agile / Scrum', style: 'color: #795548;' },
        { icon: 'fab fa-jira fa-lg', tech: 'Jira', style: 'color: #0052cc;' },
        { icon: 'fas fa-infinity fa-lg', tech: 'CI/CD Pipelines', style: 'color: #9c27b0;' },
        { icon: 'fas fa-code-branch fa-lg', tech: 'Component-Driven Development', style: 'color: #607d8b;' },
        { icon: 'fas fa-layer-group fa-lg', tech: 'Modular Architecture', style: 'color: #009688;' },
        { icon: 'fas fa-bolt fa-lg', tech: 'Performance Optimization', style: 'color: #e91e63;' },
        { icon: 'fas fa-universal-access fa-lg', tech: 'Accessibility (WCAG)', style: 'color: #ff9800;' },
        { icon: 'fas fa-mobile-alt fa-lg', tech: 'Responsive / Mobile-First Design', style: 'color: #3f51b5;' },
      ],
    },
  ];

  softSkills: SoftSkill[] = [
    { title: 'Problem-Solving' },
    { title: 'Team Collaboration' },
    { title: 'Excellent Communication' },
    { title: 'Adaptability' },
    { title: 'Attention to Detail' },
    { title: 'Time Management' },
    { title: 'Stakeholder Management' },
    { title: 'Continuous Learning' },
  ];
}
