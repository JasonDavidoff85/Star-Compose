import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css'],
  animations: [
    trigger('play', [
      state('waiting', style({
        left: '0px',
      })),
      state('finished', style({
        left: '100%',
      })),
      transition('waiting => finished', [
        animate('20s')
      ]),
    ])
  ]
})
export class ConductorComponent implements OnInit {

  isPlaying: boolean = false;

  constructor() { }

  play($event:boolean) {
    this.isPlaying = $event;
  }
  

  ngOnInit(): void {
  }

}
