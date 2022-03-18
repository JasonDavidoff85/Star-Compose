import { Component, OnInit, Attribute } from '@angular/core';
import { ConstellationComponent } from '../constellation/constellation.component';
import { Connection } from '../_models/connection.model';
import { Constellation } from '../_models/constellation.model';
import { Star } from '../_models/star.model';
import data from './constellations.json';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css'],
})
export class SkyComponent implements OnInit {

  constructor() { }

  constellations:Constellation[] = [];
  draggableConstellations:Constellation[] = [];
  currStar:Star[] = [];
  currConnection:Connection[] = [];

  public constellationList:{height:number, width:number, name:string, stars:any, connections:any}[] = data;

  getConstellations()
  {
    for (let item in this.constellationList)
    { 
      for (let star in this.constellationList[item].stars)
      {
        let x = this.constellationList[item].stars[star][0]
        let y = this.constellationList[item].stars[star][1]
        let temp1 = new Star(x,y)
        this.currStar.push(temp1)
      }
      for (let connection in this.constellationList[item].connections)
      {
        let x = this.constellationList[item].connections[connection][0]
        let y = this.constellationList[item].connections[connection][1]
        let z = this.constellationList[item].connections[connection][2]
        let c = this.constellationList[item].connections[connection][3]
        let temp1 = new Connection(x,y,z,c)
        this.currConnection.push(temp1)
      }
      let temp: Constellation = {
        height: this.constellationList[item].height,
        width: this.constellationList[item].width,
        name: this.constellationList[item].name,
        stars: this.currStar,
        connections: this.currConnection
      }
      this.currStar = []
      this.currConnection = []
      this.constellations.push(temp)
    }
  }

  addToSky(nm:string) {
    console.log(nm)
    for (let i in this.constellations)
    {
      if (this.constellations[i].name == nm)
      {
        console.log(i)
        this.draggableConstellations.push(this.constellations[i])
      }
      // console.log(this.constellations[i].name)
    }
    this.draggableConstellations.push()
  }

  ngOnInit(): void {
    this.getConstellations()

  }
}
