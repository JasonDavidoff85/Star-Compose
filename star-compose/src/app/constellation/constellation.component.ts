import { Component, OnInit, Attribute, Input } from '@angular/core';
import { Constellation } from "../_models/constellation.model"
import { Star } from "../_models/star.model"

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.css']
})
export class ConstellationComponent implements OnInit {

  RADIUS:number = 10;
  @Input() aConst!:Constellation;
  constructor() {}

  private htmlToElement(html: string) {
    let elem = document.createElement('template');
    elem.innerHTML = html;
    return elem.content.firstChild;
  }

  // drawStar() { 
  //   let boundary = this.htmlToElement('<div class="star-box" cdkDragBoundary=".example-boundary" cdkDrag>');
  //   let svg = document.createElement('svg');
  //   svg.classList.add('boundary');
  //   svg.setAttribute('height', this.cancer.height.toString());
  //   svg.setAttribute('width', this.cancer.width.toString());
  //   for (let i = 0 ; i < this.cancer.stars.length ; i++) {
  //     let star = document.createElement('circle');
  //     star.setAttribute('cx', (this.cancer.stars[i].getX()).toString());
  //     star.setAttribute('cy', (this.cancer.stars[i].getY()).toString());
  //     star.setAttribute('r', this.RADIUS.toString());
  //     star.setAttribute('fill', 'white');
  //     svg.appendChild(star);
  //   }
  //   if (boundary) {
  //     boundary.appendChild(svg);
  //     const final = document.getElementById('stars');
  //     if (final) final.appendChild(boundary);
  //   }
  // }

  ngOnInit(): void {
  }

}
