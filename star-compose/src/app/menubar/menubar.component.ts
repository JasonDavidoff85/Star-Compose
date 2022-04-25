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
  
  @Output() onSelected = new EventEmitter<any>();
  constructor() { }

  runConductor() {
    this.buttonPressed.emit(true);

    //Twinkling background on run
    // let twink = document.getElementsByClassName("twinkling")
    // twink[0].setAttribute("style", "animation:move-twink-back 200s linear infinite;");


    //Disable Buttons
    let constellationButton = document.getElementsByClassName("constellationButton")
    constellationButton[0].setAttribute("disabled", "")
    
    //Close Menu Bar
    this.navbarOpened = false

    //Hide Icons
    let icons = [];
    icons.push(document.getElementsByClassName("outside"))
    icons.push(document.getElementsByClassName("drag-icon"))
    icons.push(document.getElementsByClassName("rotate-icon"))
    icons.push(document.getElementsByClassName("resize-grip"))
    icons.push(document.getElementsByClassName("custom-range  my-2"))

    if (icons[0] != null) {
      for (var i = 0; i < icons.length; i++) {
        for (var j = 0; j < icons[i].length; j++) {
          if (i == 0) {
            var str = icons[i][j].getAttribute("style")
            if ( str == null) {
              str = ""
            }
            icons[i][j].setAttribute("style", str + "border: 2px solid transparent;")
          }
          else {
            var str = icons[i][j].getAttribute("style")
            if ( str == null) {
              str = ""
            }
            icons[i][j].setAttribute("style", str + "visibility: hidden;")
          }
        }
      }
    }
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

  playSound() {
    // this.synth.playStars();
  }

  ngOnInit(): void {
  }

  
  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

}


