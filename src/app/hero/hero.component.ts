import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  constructor() { }

  redirect(button: string) {
    if(button === 'linkedin') {
      window.open('https://www.linkedin.com/in/gabriel-dias-vieira/', '_blank');
    } else {
      window.open('https://github.com/GDV1', '_blank');
    }
  }

  ngOnInit(): void {

  }
}




