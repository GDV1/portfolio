import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showLogoWhite = false;
  show = false;

  constructor() {}

  clicked() {
    document.body.style.overflow = this.show ? 'initial' : 'hidden';
    this.show = !this.show;
  }

  ngOnInit() { 
    if(window.innerWidth <= 426) {
      this.showLogoWhite = true;
    }
  }

}
