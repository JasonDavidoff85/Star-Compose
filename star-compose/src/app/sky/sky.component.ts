import { Component, OnInit, Attribute } from '@angular/core';
import { Connection } from '../_models/connection.model';
import { Constellation } from '../_models/constellation.model';
import { Star } from '../_models/star.model';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css'],
})
export class SkyComponent implements OnInit {

  constructor() { }

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
    // stars: [[50,20],[75,90], [90,120], [60,190], [180,170]].map((i) => new Star(i[0],i[1]))
  };

  ngOnInit(): void {
    this.constellations.push(this.cancer);
  }

}
