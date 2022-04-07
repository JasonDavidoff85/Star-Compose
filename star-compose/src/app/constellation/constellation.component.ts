import { Component, OnInit, Attribute, Input, ViewChild, Directive, ElementRef, ViewChildren, QueryList, Output, EventEmitter, HostListener } from '@angular/core';
import { Constellation } from "../_models/constellation.model"
import { Star } from "../_models/star.model"
import {DragDropModule, DragRef, Point} from '@angular/cdk/drag-drop';
import { CdkVirtualForOfContext } from '@angular/cdk/scrolling';
import { Connection } from '../_models/connection.model';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.css']
})

export class ConstellationComponent implements OnInit {
  @ViewChildren('star') circles!: QueryList<ElementRef>;
  @ViewChildren('connection') connections!: QueryList<ElementRef>;
  @Input() aConst!:Constellation;
  @Output() dataPoints = new EventEmitter<{stars: Star[], connections: Connection[]}>();

  gridSize = 50;


  rotateValue = 0;
  rotating = false;

  constructor() {}
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
    let gridSize = 50;
    return {
      x: Math.floor(pos.x / gridSize) * gridSize,
      y: Math.floor(pos.y / gridSize) * gridSize
    }; // will render the element every 30 pixels horizontally
  }

  setRotate(value: string) {
    this.rotateValue = +value;
  }

  public style: object = {};

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log("Svg left bound: ", this.border.nativeElement.getAttribute('height'));

  }

}
