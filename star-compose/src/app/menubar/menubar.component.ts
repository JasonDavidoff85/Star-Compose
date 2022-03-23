import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SynthService} from '../_services/tone.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Output() buttonPressed = new EventEmitter<boolean>();
  @Output() renderAudio = new EventEmitter<boolean>();

  constructor(
    private synth: SynthService
    ) {}

  runConductor() {
    this.buttonPressed.emit(true);
    this.renderAudio.emit(true);
  }

  playSound() {
    // this.synth.playStars();
  }

  ngOnInit(): void {
  }

}
