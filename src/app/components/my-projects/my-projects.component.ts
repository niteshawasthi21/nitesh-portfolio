import { Component, OnInit } from '@angular/core';
import { PROJECTS,Project } from './projectInfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent implements OnInit {
  projectData:Project[]=[]
  ngOnInit(): void {
    this.projectData=PROJECTS;
  }

  openSourceCode(url: string): void {
    window.open(url, '_blank');
  }

}
