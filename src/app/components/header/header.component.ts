import { Component, HostListener, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
  // image:string=''
  careers: string[] = [
    "Software Developer",
    "Web Developer",
    "FrontEnd Developer",
    "Angular Developer",
  ];

  careerIndex: number = 0;
  charIndex: number = 0;
  displayText: string = "";

  experienceYears: number=0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.animateText();
    this.calculateExperience()
  }

  animateText(): void {
    this.charIndex++;

    this.displayText = `${this.careers[this.careerIndex].slice(
      0,
      this.charIndex
    )}`;

    if (this.charIndex === this.careers[this.careerIndex].length) {
      this.careerIndex = (this.careerIndex + 1) % this.careers.length;
      this.charIndex = 0;
    }
    setTimeout(() => this.animateText(), 400);
  }

  calculateExperience(): void {
    const startDate = new Date('2022-01-10');  
    const currentDate = new Date();  
    const diffInMs = currentDate.getTime() - startDate.getTime();    
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);    
    this.experienceYears = parseFloat(diffInYears.toFixed(1));
  }

  // @HostListener('mousemove', ['$event'])
  // onMouseMove(event: MouseEvent): void {
  //   const xPosition = event.offsetX;
  //   const yPosition = event.offsetY;
  //   const spanElmnt = this.renderer.createElement('span');
  
  //   const imageUrls = ['assets/Images/nitesh.png'];
  //   const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)]
    
  //   // Directly set the background using the image URL
  //   this.renderer.setStyle(spanElmnt, 'background', `url('${randomImageUrl}')`);
  //   this.renderer.setStyle(spanElmnt, 'background-size', 'cover');
  
  //   this.renderer.setStyle(spanElmnt, 'left', `${xPosition}px`);
  //   this.renderer.setStyle(spanElmnt, 'top', `${yPosition}px`);
  
  //   const size = Math.random() * 100;
  //   this.renderer.setStyle(spanElmnt, 'width', `${size}px`);
  //   this.renderer.setStyle(spanElmnt, 'height', `${size}px`);
  
  //   this.renderer.setStyle(spanElmnt, 'filter', `sepia(100%) saturate(100%) hue-rotate(${Math.random() * 360}deg) brightness(100%) contrast(100%)`);
  //   this.renderer.addClass(spanElmnt, 'effect-span');
  
  //   const bodyElmnt = this.renderer.selectRootElement('body', true);
  //   this.renderer.appendChild(bodyElmnt, spanElmnt);
  
  //   setTimeout(() => {
  //     this.renderer.removeChild(bodyElmnt, spanElmnt);
  //   }, 3000);

  //   console.log()
  // }

}
