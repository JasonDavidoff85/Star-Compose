import { 
  Component, 
  OnInit,
  Attribute, 
  Input, 
  ViewChild, 
  Directive, 
  ElementRef, 
  ViewChildren, 
  QueryList, 
  Output, 
  EventEmitter,
  HostListener } from '@angular/core';
import { Constellation } from "../_models/constellation.model"
import { Star } from "../_models/star.model"
import {DragDropModule, DragRef, Point} from '@angular/cdk/drag-drop';
import { CdkVirtualForOfContext } from '@angular/cdk/scrolling';
import { Connection } from '../_models/connection.model';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { ResizeEvent } from 'angular-resizable-element';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.css'],
  animations: [
    trigger('HideSettings', [
      state('visible', style({
        opacity: 1,
      })),
      state('invisible', style({
        opacity: 0,
      })),
      transition('* <=> *', [
        animate('0.5s')
      ])
    ]),
    trigger('HideBorder', [
      state('visible', style({
        border: 'dotted #ccc 2px',
      })),
      state('invisible', style({
        border: 'dotted #ccc 0px',
      })),
      transition('* <=> *', [
        animate('0.5s')
      ])
    ])
  ]
})

export class ConstellationComponent implements OnInit {
  @ViewChildren('star') circles!: QueryList<ElementRef>;
  @ViewChildren('connection') connections!: QueryList<ElementRef>;
  @Input() aConst!:Constellation;
  @Input() playMode!: boolean;
  @Output() dataPoints = new EventEmitter<{stars: Star[], connections: Connection[]}>();

  rotateValue = 0;
  rotating = false;
  rotated = false;
  resized = false;
  size = 300;
  minSize = 300;
  maxSize = 500;
  name = "Constellation";
  gridSize = 50;

  dragTitle = "Drag Constellation";
  rotateTitle = "Rotate Constellation";
  resizeTitle = "Resize Constellation";
  
  constructor(private elem:ElementRef) {}

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

  setRotate(value: string) {
    if (!this.resized) {
      this.rotateValue = +value;
      this.rotated = true;
      this.resizeTitle = "Resize Constellation (Disabled)";
    }
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

      if (newSize > this.minSize && newSize < this.maxSize) {
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
        this.resized = true;
        this.rotateTitle = "Rotate Constellation (Disabled)";
      }
    }
  }


  togglePlayMode($event: boolean) {
    this.playMode = $event;
  } 

  computeDragRenderPos(pos: Point, dragRef:DragRef<any>) {
    // this.aConst.leftBound = this.border.nativeElement.getBoundingClientRect.left;
    // console.log("SVG Postition: ", this.aConst.leftBound);
    let gridSize = 50;
    return {
      // x: Math.floor(pos.x / gridSize) * gridSize,
      // y: Math.floor(pos.y / gridSize) * gridSize
      x: Math.floor(pos.x),
      y: Math.floor(pos.y)
    }; // will render the element every 30 pixels horizontally
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log("Svg left bound: ", this.border.nativeElement.getAttribute('height'));

  }

}
