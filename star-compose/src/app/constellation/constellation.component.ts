import { Component, OnInit, Attribute, Input, ViewChild, Directive, ElementRef, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { Constellation } from "../_models/constellation.model"
import { Star } from "../_models/star.model"
import {DragDropModule, DragRef, Point} from '@angular/cdk/drag-drop';
import { CdkVirtualForOfContext } from '@angular/cdk/scrolling';
import { Connection } from '../_models/connection.model';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.css']
})

export class ConstellationComponent implements OnInit {
  rotateValue = 0;
  rotating = false;
  size = 300;
  rotated = false;

  @ViewChildren('star') circles!: QueryList<ElementRef>;
  @ViewChildren('connection') connections!: QueryList<ElementRef>;
  @Output() dataPoints = new EventEmitter<{stars: Star[], connections: Connection[]}>();

  constructor(private elem:ElementRef) {}

  @Input() aConst!:Constellation;

  public getScreenCoord(): {stars: Star[], connections: Connection[]} {
    let allStars: Star[] = [];
    let allConnections: Connection[] = [];
    this.circles.forEach((element, index) => {
      allStars.push(new Star(element.nativeElement.getBoundingClientRect().left, 0));
    });

    this.connections.forEach((element, index) => {
      allConnections.push(new Connection(
          element.nativeElement.getBoundingClientRect().left,
          0,
          element.nativeElement.getBoundingClientRect().right,
          0
      ));
    });
    return {stars: allStars, connections: allConnections};
  }

  public setScreenCoords() {
    this.aConst
  }

  computeDragRenderPos(pos: Point, dragRef:DragRef<any>) {
    // this.aConst.leftBound = this.border.nativeElement.getBoundingClientRect.left;
    // console.log("SVG Postition: ", this.aConst.leftBound);
    return {
      x: Math.floor(pos.x / 5) * 5,
      y: Math.floor(pos.y / 5) * 5
    }; // will render the element every 30 pixels horizontally
  }

  setRotate(value: string) {
    this.rotateValue = +value;
    this.rotated = true;
  }

  public style: object = {};

  resizing(event: ResizeEvent): void {''
    if (!this.rotated) {
      this.style = {
        width: `${event.rectangle.width}px`,
        height: `${event.rectangle.width}px`
      };
      let scale = this.elem.nativeElement.offsetWidth/this.size;
      let newSize = this.size*scale;

      // Reposition Stars
      this.aConst.stars.forEach((element, index) => {
        element.x += ((newSize/2) - this.size/2);       // recentering
        element.y += ((newSize/2) - this.size/2);
        
        element.x += (element.x-newSize/2)*(scale-1);   // resizing
        element.y += (element.y-newSize/2)*(scale-1);
      });

      // Reposition Connections
      this.aConst.connections.forEach((element, index) => {
        element.x1 += ((newSize/2) - this.size/2);      // recentering
        element.y1 += ((newSize/2) - this.size/2);
        element.x2 += ((newSize/2) - this.size/2);
        element.y2 += ((newSize/2) - this.size/2);

        element.x1 += (element.x1-newSize/2)*(scale-1);  // resizing
        element.y1 += (element.y1-newSize/2)*(scale-1);
        element.x2 += (element.x2-newSize/2)*(scale-1);
        element.y2 += (element.y2-newSize/2)*(scale-1);
      });

      this.size = newSize;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log("Svg left bound: ", this.border.nativeElement.getAttribute('height'));
  }
}