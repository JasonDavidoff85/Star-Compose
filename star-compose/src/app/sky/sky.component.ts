import { Component, OnInit, Attribute, Input, Output, EventEmitter } from '@angular/core';
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

  //List of constellations in menu
  constellations:Constellation[] = [];
  //List of constellations in sky
  draggableConstellations:Constellation[] = [];
  //All Constellations
  allConstellations:Constellation[] = [];
  //Temps
  currStar:Star[] = [];
  currConnection:Connection[] = [];

  boolChange = 0;

  myLat = -100000;

  //List of all constellations
  public constellationList:{height:number, width:number, month:number, nLat:number, sLat:number, quadrant:string, name:string, stars:any, connections:any}[] = data;

  //Get User Location
  callApi(Longitude: number, Latitude: number){
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
    //Call API
  }

  //Add constellation to sky on click
  onSelectedConstellation(constellation:Constellation)
  {    
   this.draggableConstellations.push(constellation)
   this.boolChange = 1 
  }

  changeStarPosition()
  {
    let height =  window.innerHeight - (0.05 * window.innerHeight);
    let width =  window.innerWidth - (0.2 * window.innerWidth);
    
    let randHeight = (Math.floor(Math.random() * ( (height -299)-(0.05 * window.innerHeight) ) +(0.05 * window.innerHeight)).toString() + "px");
    let randWidth = (Math.floor(Math.random() * (width - 299))).toString() + "px";
    
    if (height < 300)
    {
      randHeight = "0px";
    }
    if (width < 300)
    {
      randWidth = "0px";
    }
    let elem = document.getElementsByClassName("stars")
    if (elem != null)
    {
        if (elem.length > 0)
        {
        let str = "position: absolute; top:" +randHeight+ "; left:" +randWidth+ ";"
        elem[this.draggableConstellations.length - 1].setAttribute("style", str)
        }
    }
    this.boolChange = 0;
  }

  //Attempts to get user location; Gets filtered constellations if location is permitted, otherwise gets all constellations
  getLocation()
  {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("i'm tracking you!");
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.callApi(longitude, latitude);
        this.myLat = latitude
        this.getConstellations()
        if (this.constellations.length < 1)
        {
          this.constellations = this.allConstellations
        }
    },
    (error) => {
      if (error.code == error.PERMISSION_DENIED)
        console.log("You denied support for geolocation :-(")
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

  ngOnInit(): void {
    this.getLocation()
  }

  ngAfterViewChecked(): void {
    if (this.boolChange == 1)
    {
      this.changeStarPosition()
    }
  }
}
