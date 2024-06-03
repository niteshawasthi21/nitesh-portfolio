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
  workExperiences: any = [
    {
      company: 'Knoxpo Solutions Pvt. Ltd',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr84395nmWwaeZbYF5qSeU7m07c914MpROXUiaWcVGog&s',
      position: 'Jr. Angular Developer',
      duration: 'May 2023 - Present,',
      description: [
        'Utilizing technical skills in Angular and Typescript to enhance Functionality and user experience of software applications for SLB',
        'Developed and maintained 15+ scalable, feature-rich web applications using Angular 15, resulting in the enhancement of user experience and a 25% increase in user engagement metrics over six months.',
        'Engineered a custom Angular feature for dynamic data        visualization that was integrated into the main product, resulting   in a 30% increase in user engagement and customer satisfaction ratings. ',
        'Collaborating with cross-functional teams to design and        implement new features. Debugging and resolving technical        issues to ensure software reliability and performance.',
      ],
    },
    {
      company: 'WalkingTree Technologies',
      image: 'https://shorturl.at/rFL12',
      position: 'Associate Software Engineer',
      duration: 'June 2022 - April 2023',
      description: [
        'Led software development projects within the Oil & Gas sector, overseeing bug fixes and integrating new functionalities',
        'Leveraged expertise in Front-End technologies to design intuitive user interfaces, enhancing user experience and usability.',
        'Actively participated in client meetings and discussions with managers to gather requirements and provide technical      insightsCollaborated in the development of a feature-rich      application, enhancing user experience by 30% through the      integration of real-time feedback from client meetings, ensuring      alignment with business objectives and user needs. ',
        'Collaborated with BackEnd team and senior leads to achieve      successful integration of Front-End and Back-End components.',
      ],
    },
    {
      company: 'WalkingTree Technologies',
      image: 'https://shorturl.at/rFL12',
      position: 'Trainee Associate Software Engineer',
      duration: 'Jan 2022 - June 2023',
      description: [
        'Led software development projects within the Oil & Gas sector, overseeing bug fixes and integrating new functionalities',
        'Leveraged expertise in Front-End technologies to design intuitive user interfaces, enhancing user experience and usability.',
        'Actively participated in client meetings and discussions with managers to gather requirements and provide technical      insightsCollaborated in the development of a feature-rich      application, enhancing user experience by 30% through the      integration of real-time feedback from client meetings, ensuring      alignment with business objectives and user needs. ',
        'Collaborated with BackEnd team and senior leads to achieve      successful integration of Front-End and Back-End components.',
      ],
    },
  ];
}
