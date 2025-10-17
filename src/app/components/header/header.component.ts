import { Component, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
  // Rotating career titles for typewriter animation
  careers: string[] = [
    "Angular Developer",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer",
  ];

  careerIndex: number = 0;
  charIndex: number = 0;
  displayText: string = "";

  // Experience counter (auto-calculated)
  experienceYears: number = 0;

  // Professional summary (for binding or displaying dynamically)
  professionalSummary: string = `
    Results-driven Angular Developer with 3.5+ years of experience building scalable, high-performance web applications. 
    Proven track record of reducing operational costs by 80% through innovative solutions and delivering reusable component 
    architectures that improve development efficiency by 40%. Expert in Angular, TypeScript, and modern frontend technologies 
    with hands-on exposure to Node.js backend development. Recognized for rapid learning and exceptional problem-solving 
    abilities, winning "Newbie Award" for outstanding early contributions.
  `;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.animateText();
    this.calculateExperience();
  }

  /**
   * Typewriter animation effect for rotating career titles.
   */
  animateText(): void {
    const currentCareer = this.careers[this.careerIndex];
    this.displayText = currentCareer.slice(0, ++this.charIndex);

    // When the current title finishes, move to the next one
    if (this.charIndex === currentCareer.length) {
      this.careerIndex = (this.careerIndex + 1) % this.careers.length;
      this.charIndex = 0;
      setTimeout(() => this.animateText(), 800); // brief pause before next title
    } else {
      setTimeout(() => this.animateText(), 120); // typing speed
    }
  }

  /**
   * Calculates years of experience dynamically from a given start date.
   */
  calculateExperience(): void {
    const startDate = new Date("2022-01-10");
    const currentDate = new Date();
    const diffInMs = currentDate.getTime() - startDate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    this.experienceYears = parseFloat(diffInYears.toFixed(1));
  }
}
