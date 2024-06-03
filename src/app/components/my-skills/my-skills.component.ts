import { Component, OnInit } from '@angular/core';
import { TECHNICAL_SKILLS, SOFT_SKILLS_DATA } from './skills-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css',
})
export class MySkillsComponent implements OnInit {
  public technicalSkills: any;
  softSkills: any;
  constructor() {}
  data = 'fa-brands fa-angular fa-bounce fa-2xl';
  ngOnInit() {
    this.technicalSkills = TECHNICAL_SKILLS.categories;
    this.softSkills = SOFT_SKILLS_DATA;
  }
}
