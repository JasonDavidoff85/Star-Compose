import { Injectable } from '@angular/core';
import * as Tone from 'tone';
import { PolySynth } from 'tone';
import { Monophonic } from 'tone/build/esm/instrument/Monophonic';
import { Connection } from '../_models/connection.model';
import { Constellation } from '../_models/constellation.model';
import { Star } from '../_models/star.model';

@Injectable({
    providedIn: 'root'
  })
  export class SynthService {
    // synth: Tone.Synth<Tone.SynthOptions>;
    // bass: Tone.PolySynth<Monophonic<any>>;
    synth = new Tone.Synth({
      oscillator : {
        volume: 5,
        count: 3,
        spread: 40,
        type : "fatsawtooth"
      }
    }).toMaster();

  // bass synth for lines
    bass = new Tone.PolySynth(Tone.Synth, { 
    oscillator : {
      type : "sawtooth"
    }
    }).toMaster();
    constructor() {
      // Melody synth for stars
    //   this.synth = new Tone.Synth({
    //     oscillator : {
    //       volume: 5,
    //       count: 3,
    //       spread: 40,
    //       type : "fatsawtooth"
    //     }
    //   }).toMaster();

    // // bass synth for lines
    //   this.bass = new Tone.PolySynth(Tone.Synth, { 
    //   oscillator : {
    //     type : "sawtooth"
    //   }
    //   }).toMaster();

      Tone.Transport.bpm.value = 120;
    }

// build the melody based on the star data (currently just x data)
playStars(constellation: Constellation):void {
    // This assumes a constellation object with valid grid data.

    let stars = constellation.stars;
    let playData = [];
    // This builds play times based on the star dat of the constellation
    for (let star of stars) {
        playData.push({'time': star.getX(), 'note': 'G5', 'duration': '16n'});
    }
    const mainMelodyPart = new Tone.Part((time, note) => {
        this.synth.triggerAttackRelease(note.note, note.duration, time);
      }, playData).start(0);

}

 // test hardcodes star:
 cancer: Constellation = {
    height: 200,
    width: 200,
    name: "Cancer",
    stars: [
      new Star(50,20), 
      new Star(75,90), 
      new Star(90,120), 
      new Star(60,190), 
      new Star(180,170)
    ],
    connections: [
      new Connection(50,20,75,90),
      new Connection(75,90,90,120),
      new Connection(90,120,60,190),
      new Connection(90,120,180,170)
    ],
    // stars: [[50,20],[75,90], [90,120], [60,190], [180,170]].map((i) => new Star(i[0],i[1]))
  };

// build the bassline based on the connection data (currently just x data)
playLines(constellation: Constellation):void {
    // This assumes a constellation object with valid grid data.

    let connections = constellation.connections;
    let playData = [];
    // This builds play times based on the line connections
    for (let line of connections) {
        let duration = line.x2 - line.x1;
        playData.push({'time': line.x1, 'note': 'C2', 'duration': duration});
    }
    const bassline = new Tone.Part((time, note) => {
        this.bass.triggerAttackRelease(note.note, note.duration, time);
      }, playData).start(0);

}

//TODO
// let playAllConstellations = function(wholeScreen) {

// }

// function for changing tempo
changeTempoTo(newTempo:number):void {
    Tone.Transport.bpm.value = newTempo;
}

// actually add listener for our will be play button
// This does not work as is, just assumed names
// document.getElementById("play-button").addEventListener("click", function() {
//   if (Tone.Transport.state !== 'started') {
//     Tone.Transport.start();
//   } else {
//     Tone.Transport.stop();
//   }
// });
ngOnInit():void {
  this.playLines(this.cancer);
  this.playStars(this.cancer);
  Tone.Transport.start();
}


    
  }

