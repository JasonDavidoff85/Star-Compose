import { 
  Component, 
  OnInit, 
  Attribute, 
  Input, 
  Output, 
  EventEmitter, 
  ViewChildren, 
  QueryList,
  ElementRef
} from '@angular/core';
import { ConstellationComponent } from '../constellation/constellation.component';
// import { EventEmitter } from 'stream';
import { Connection } from '../_models/connection.model';
import { Constellation } from '../_models/constellation.model';
import { Star } from '../_models/star.model';
import {SynthService} from '../_services/tone.service';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css'],
})
export class SkyComponent implements OnInit {

  @ViewChildren(ConstellationComponent) consts!: QueryList<ConstellationComponent>;
  @Output() getScreenCoords = new EventEmitter<boolean>();

  constructor(private synth: SynthService) { }

  constellations:Constellation[] = [];

  // test hardcodes star:
  cancer: Constellation = {
    height: 200,
    width: 200,
    name: "Cancer",
    stars: [
      new Star(50,20), 
      new Star(75,90), 
      new Star(90,120), 
      new Star(60,190), 
      new Star(180,170)
    ],
    connections: [
      new Connection(50,20,75,90),
      new Connection(75,90,90,120),
      new Connection(90,120,60,190),
      new Connection(90,120,180,170)
    ],
    leftBound: 0
    // stars: [[50,20],[75,90], [90,120], [60,190], [180,170]].map((i) => new Star(i[0],i[1]))
  };

  renderAudio($event: boolean) {
    let constData: {stars: Star[], connections: Connection[]} = {stars: [], connections: []}
    // console.log("sky got button press");
    // this.consts.forEach((element, index) => console.log(element.getScreenCoord()));
    this.consts.forEach((element, index) => {
      // console.log(element.getScreenCoord().stars);
      constData.stars.push(...element.getScreenCoord().stars);
      constData.connections.push(...element.getScreenCoord().connections);
    });
    console.log(constData);
    
    this.synth.playStars(constData);
  }

  ngOnInit(): void {
    this.constellations.push(this.cancer);
    this.constellations.push(this.cancer);
    console.log(window.innerWidth);
  }

}