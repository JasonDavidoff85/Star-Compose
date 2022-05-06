import { ConstantPool } from '@angular/compiler';
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
import data from './constellations.json'; 

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css'],
})
export class SkyComponent implements OnInit {

  @ViewChildren(ConstellationComponent) consts!: QueryList<ConstellationComponent>;
  @Output() getScreenCoords = new EventEmitter<boolean>();

  constructor(private synth: SynthService) { }

  constellations:Constellation[] = []; // all constelaltions (maybe not needed)
  activeConstellatoions: Constellation[] = []; // constellations available to user
  placedConstellations: Constellation[] = []; // constellations on screen
  playTime = 120;
  playMode: boolean = false;

  renderAudio() {
    console.log("playing audio");
    let constData: {stars: Star[], connections: Connection[]} = {stars: [], connections: []}
    // console.log("sky got button press");
    // this.consts.forEach((element, index) => console.log(element.getScreenCoord()));
    this.consts.forEach((element, index) => {
      // console.log(element.getScreenCoord().stars);
      constData.stars.push(...element.getScreenCoord().stars);
      constData.connections.push(...element.getScreenCoord().connections);
    });
    console.log(constData);
    // this.playMode = true;
    this.synth.playStars(constData, this.playTime);
  }

  add(cname: string) {
    let c = this.activeConstellatoions.find(elem => elem.name === cname)
    if (c) {
      this.activeConstellatoions.splice(this.activeConstellatoions.indexOf(c), 1);
      this.placedConstellations.push(c)
    }
  }

  deleteC(cname: string) {
    let c = this.placedConstellations.find(elem => elem.name === cname)
    if (c) {
      this.placedConstellations.splice(this.placedConstellations.indexOf(c), 1);
      this.activeConstellatoions.push(c)
    }
  }

  togglePlay($event: boolean) {
    this.playMode = $event
    console.log("playmode: ", this.playMode)
    if (this.playMode) {
      this.renderAudio();
    }
  }

  setPlayTime($event: number) {
    this.playTime = $event;
  }

  ngOnInit(): void {
    for (let i = 0 ; i < data.constellations.length ; i++) {
      let conste: any = data.constellations[i]
      let stars: Star[] = []
      let connections: Connection[] = []
      for (let j = 0 ; j < conste.stars.length ; j++) {
        stars.push(new Star(conste.stars[j][0], conste.stars[j][1]) )
      }
      for (let j = 0 ; j < conste.connections.length ; j++) {
        connections.push(new Connection(conste.connections[j][0], conste.connections[j][1], conste.connections[j][2], conste.connections[j][3]));
      }
      conste.stars = stars;
      conste.connections = connections;
      // location data effects this
      this.activeConstellatoions.push(conste);
    }
  }

}