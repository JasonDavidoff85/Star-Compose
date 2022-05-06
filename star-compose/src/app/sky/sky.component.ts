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
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css'],
})
export class SkyComponent implements OnInit {

  @ViewChildren(ConstellationComponent) consts!: QueryList<ConstellationComponent>;
  @Output() getScreenCoords = new EventEmitter<boolean>();

  constructor(private synth: SynthService) { }

  currentConstellations: Constellation[] = [];
  locationConstellations: Constellation[] = []; //constellations in user's location
  activeConstellatoions: Constellation[] = []; // constellations available to user
  placedConstellations: Constellation[] = []; // constellations on screen
  playTime = 15;
  playMode: boolean = false;

  renderAudio() {
    console.log("playing audio");
    let constData: {stars: Star[], connections: Connection[]} = {stars: [], connections: []}
    this.consts.forEach((element, index) => {
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
      c.left = Math.floor(Math.random() * window.innerWidth);
      c.top = Math.floor(Math.random() * window.innerHeight)
      console.log("top:", c.top);
      console.log("left:", c.left);
      this.placedConstellations.push(c)
    }
    else {
      c = this.currentConstellations.find(elem => elem.name === cname)
      if (c) {
        this.currentConstellations.splice(this.currentConstellations.indexOf(c), 1);
        c.left = Math.floor(Math.random() * window.innerWidth);
        c.top = Math.floor(Math.random() * window.innerHeight)
        console.log("top:", c.top);
        console.log("left:", c.left);
        this.placedConstellations.push(c)
      }
    }

    
  }

  deleteC(cname: string) {
    let c = this.placedConstellations.find(elem => elem.name === cname)
    let d = this.locationConstellations.find(elem => elem.name === cname)
    console.log(d)
    if (c) {
      if (d) 
      {
        this.placedConstellations.splice(this.placedConstellations.indexOf(c), 1);
        this.currentConstellations.push(c)
      }
      else {
        this.placedConstellations.splice(this.placedConstellations.indexOf(c), 1);
        this.activeConstellatoions.push(c)
      }
    }
  }

  togglePlay($event: boolean) {
    this.playMode = $event
    console.log("playmode: ", this.playMode)
    if (this.playMode) {
      this.renderAudio();
    }
    else {
      console.log("Stopping audio")
      this.synth.stop();
    }
  }

  setPlayTime($event: number) {
    this.playTime = $event;
  }

  //Get time of day to choose background to display
  getTime() {
    const date = new Date();
    let hour = date.getHours();

    let night = document.getElementsByClassName("night")
    let day = document.getElementsByClassName("day")

    let body = document.getElementsByTagName("body")

    if (0 <= hour && hour <= 6)
    {
      night[0].setAttribute("style", "visibility:visible;")
    }
    else if (6 < hour && hour <= 12)
    {
      day[0].setAttribute("style", "visibility:visible;")
      body[0].setAttribute("style", "background-image: linear-gradient(#9cb8ea, #5f8fe3);")
    }
    else if (12 < hour && hour <= 18)
    {
      day[0].setAttribute("style", "visibility:visible;")
      body[0].setAttribute("style", "background-image: linear-gradient(#2F4090, #9284D1);")
    }
    else if (18 < hour && hour < 24)
    {
      night[0].setAttribute("style", "visibility:visible;")
      
    }
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log("Support for location");
        const latitude = position.coords.latitude;
        this.getConstellationsLocation(latitude)
    },
    (error) => {
      if (error.code == error.PERMISSION_DENIED)
        console.log("No location services")
        this.getConstellations()
    });

    
  }

  getConstellationsLocation(myLat:number) {

    let myDate = new Date();
    let month = myDate.getMonth() + 1;

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

      if (myLat != -1)
      {
        if (conste.month == month && conste.nLat > myLat && conste.sLat < myLat)
        {
          // location data effects this
          this.currentConstellations.push(conste)
        }
        else {
          this.activeConstellatoions.push(conste)
        }  
      }
      else {
        this.activeConstellatoions.push(conste)
      }
    }
    this.locationConstellations = this.currentConstellations.map(x => Object.assign({}, x))
    this.activeConstellatoions.sort()
    this.currentConstellations.sort()
  }

  getConstellations() {
    let myDate = new Date();
    let month = myDate.getMonth() + 1;

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
      
      this.activeConstellatoions.push(conste)
      }
    this.activeConstellatoions.sort()
  }

  ngOnInit(): void {    
    this.getTime();
    this.getLocation();
  }

}