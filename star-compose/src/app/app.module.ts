import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { SkyComponent } from './sky/sky.component';
import { ConstellationComponent } from './constellation/constellation.component';
import { ConductorComponent } from './conductor/conductor.component';

@NgModule({
  declarations: [
    AppComponent,
    SkyComponent,
    ConstellationComponent,
    ConductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
