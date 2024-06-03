import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MySkillsComponent } from '../components/my-skills/my-skills.component';
import { MyProjectsComponent } from '../components/my-projects/my-projects.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';
import { MyExperienceComponent } from '../components/my-experience/my-experience.component';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ContactMeComponent,MyExperienceComponent
  ],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css',
})
export class DashBoardComponent {}
