import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() type: string = '';
  @Input() label: string = '';

  redirect(type: string) {
    (type === 'linkedin') ? 
      window.open('https://www.linkedin.com/in/gabriel-dias-vieira/', '_blank') : 
      
    (type === 'envelope-at') ? 
      window.open('mailto:gabrieldv.dv@hotmail.com') :

    (type === 'whatsapp') ? 
      window.open('https://wa.me/5562994423402', '_blank') : 
      
      window.open('https://github.com/GDV1', '_blank');
  }

  ngOnInit(): void { }
}
