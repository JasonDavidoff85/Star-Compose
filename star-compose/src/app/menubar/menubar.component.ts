import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Output() buttonPressed = new EventEmitter<boolean>();

  constructor() { }

  runConductor() {
    this.buttonPressed.emit(true);
  }

  ngOnInit(): void {
  }

}
