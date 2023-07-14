import { Component, OnInit } from '@angular/core';
import { learning, mySkills } from 'src/constants/skills';
import { Skills } from 'src/typings/skills';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mySkills: Skills[] = mySkills;
  learning: Skills[] = learning;

  constructor() { }

  ngOnInit(): void {

  }
}
