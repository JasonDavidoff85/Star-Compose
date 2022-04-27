import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SynthService} from '../_services/tone.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Output() buttonPressed = new EventEmitter<boolean>();
  @Output() menuOpened = new EventEmitter<boolean>();
  @Output() settingsOpened = new EventEmitter<boolean>();
  @Output() renderAudio = new EventEmitter<boolean>();
  playStatus = "Play"

  constructor(
    private synth: SynthService
    ) {}

  runConductor() {
    if (this.playStatus === "Play") {
      // chnage button to stop and start audio
      this.playStatus = "Stop";
      this.buttonPressed.emit(true);
      
    }
    else if (this.playStatus === "Stop") {
      this.playStatus = "Play"
      this.buttonPressed.emit(false);
      this.renderAudio.emit(false);
    }
    
  }

  openMenu() {
    this.menuOpened.emit(true);
  }

  openSettings() {
    this.settingsOpened.emit(true);
  }

  ngOnInit(): void {
  }

}
