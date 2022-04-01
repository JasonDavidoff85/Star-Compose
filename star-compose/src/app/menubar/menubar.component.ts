import { Component, OnInit, Output, EventEmitter, HostBinding, HostListener, Input } from '@angular/core';
import { Constellation } from '../_models/constellation.model';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  @Output() buttonPressed = new EventEmitter<boolean>();
  @HostBinding('class.navbar-opened') navbarOpened = false;  
  @Input() constellations:Constellation[] = [];
  
  draggableConstellations:Constellation[] = [];
  @Output() onSelected = new EventEmitter<any>();
  constructor() { }

  runConductor() {
    this.buttonPressed.emit(true);
  }

  //Add constellation to sky on click
  onSelectedConstellation(cst:Constellation){
    console.log("CLICKED")
    let nm = cst.name
    for (let i in this.constellations)
    {
      if (this.constellations[i].name == nm)
      {
        this.onSelected.emit(this.constellations[i])
      }
    }
  }

  ngOnInit(): void {
  }


  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

}


