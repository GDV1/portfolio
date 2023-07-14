import { Component, OnInit } from '@angular/core';
import { track } from 'src/constants/track';
import { Track } from 'src/typings/track';

@Component({
  selector: 'app-my-track',
  templateUrl: './my-track.component.html',
  styleUrls: ['./my-track.component.css']
})
export class MyTrackComponent {

  tracks: Track[] = track;
  
}
