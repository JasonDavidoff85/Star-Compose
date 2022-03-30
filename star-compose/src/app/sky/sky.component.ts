import { Component, OnInit, Attribute } from '@angular/core';
import { ConstellationComponent } from '../constellation/constellation.component';
import { Connection } from '../_models/connection.model';
import { Constellation } from '../_models/constellation.model';
import { Star } from '../_models/star.model';
import data from './constellations.json';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css'],
})
export class SkyComponent implements OnInit {

  constructor() { }

  //List of constellations in menu
  constellations:Constellation[] = [];
  //All Constellations
  allConstellations:Constellation[] = [];
  //List of constellations on screen 
  draggableConstellations:Constellation[] = [];
  //Temps
  currStar:Star[] = [];
  currConnection:Connection[] = [];

  myLat = -100000;

  //List of all constellations
  public constellationList:{height:number, width:number, month:number, nLat:number, sLat:number, quadrant:string, name:string, stars:any, connections:any}[] = data;

  //Get User Location
  callApi(Longitude: number, Latitude: number){
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
    //Call API
  }

  //Attempts to get user location; Gets filtered constellations if location is permitted, otherwise gets all constellations
  getLocation()
  {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("i'm tracking you!");
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.callApi(longitude, latitude);
        console.log(longitude)
        console.log(latitude) 
        // this.constellations = this.allConstellations
        this.myLat = latitude
        this.getConstellations()
    },
    (error) => {
      if (error.code == error.PERMISSION_DENIED)
        console.log("You denied support for geolocation :-(")
        // console.log(locationSupport)
        // this.constellations = this.allConstellations
        this.getConstellations()
        this.constellations = this.allConstellations
    });
  }

  //Gets constellations to show on the menu
  getConstellations()
  {
    //Get current date
    let myDate = new Date();
    let month = myDate.getMonth() + 1;

    //Get Constellation Data
    for (let item in this.constellationList)
    { 
      for (let star in this.constellationList[item].stars)
      {
        let temp1 = new Star(this.constellationList[item].stars[star][0],this.constellationList[item].stars[star][1])
        this.currStar.push(temp1)
      }
      for (let connection in this.constellationList[item].connections)
      {
        let temp1 = new Connection(this.constellationList[item].connections[connection][0],this.constellationList[item].connections[connection][1],this.constellationList[item].connections[connection][2],this.constellationList[item].connections[connection][3])
        this.currConnection.push(temp1)
      }
      let temp: Constellation = {
        height: this.constellationList[item].height,
        width: this.constellationList[item].width,
        name: this.constellationList[item].name,
        stars: this.currStar,
        connections: this.currConnection
      }
      if (this.constellationList[item].month == month && this.constellationList[item].nLat > this.myLat && this.constellationList[item].sLat < this.myLat)
      {
        this.constellations.push(temp)
      }

      this.currStar = []
      this.currConnection = []
      this.allConstellations.push(temp)
    }
  }

  //onClick function to add constellations to side from menu bar
  addToSky(nm:string) {
    for (let i in this.constellations)
    {
      if (this.constellations[i].name == nm)
      {
        this.draggableConstellations.push(this.constellations[i])
      }
      // console.log(this.constellations[i].name)
    }
    this.draggableConstellations.push()
  }

  ngOnInit(): void {
    this.getLocation()

  }
}
