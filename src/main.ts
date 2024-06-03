import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DashBoardComponent } from './app/dash-board/dash-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashBoardComponent],
  template: `     
    <app-dash-board />
  `,
})
export class App {
  name = 'Nitesh Awasthi';
}

bootstrapApplication(App);
