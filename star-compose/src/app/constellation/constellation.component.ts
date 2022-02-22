import { Component, OnInit, Attribute, Input } from '@angular/core';
import { Constellation } from "../_models/constellation.model"
import { Star } from "../_models/star.model"
import {DragDropModule, DragRef, Point} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.css']
})
export class ConstellationComponent implements OnInit {

  @Input() aConst!:Constellation;
  constructor() {}

  private htmlToElement(html: string) {
    let elem = document.createElement('template');
    elem.innerHTML = html;
    return elem.content.firstChild;
  }

  computeDragRenderPos(pos: Point, dragRef:DragRef<any>) {
    return {
      x: Math.floor(pos.x / 5) * 5,
      y: Math.floor(pos.y / 5) * 5
    }; // will render the element every 30 pixels horizontally
  }

  ngOnInit(): void {
  }

}
