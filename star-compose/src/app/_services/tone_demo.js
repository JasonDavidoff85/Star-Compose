
// Melody synth for stars
const synth = new Tone.Synth({
    oscillator : {
      volume: 5,
      count: 3,
      spread: 40,
      type : "fatsawtooth"
    }
  }).toMaster();

  // bass synth for lines
  const bass = new Tone.PolySynth(5, Tone.Synth, { 
    oscillator : {
      type : "sawtooth"
    }
  }).toMaster();
Tone.Transport.bpm.value = 120;

// build the melody based on the star data (currently just x data)
let playStars = function(constellation) {
    // This assumes a constellation object with valid grid data.

    let stars = constellation.stars;
    let playData = [];
    // This builds play times based on the star dat of the constellation
    for (let star of stars) {
        playData.push({'time': star.getX(), 'note': 'G5', 'duration': '16n'});
    }
    const mainMelodyPart = new Tone.Part(function(time, note) {
        synth.triggerAttackRelease(note.note, note.duration, time);
      }, mainMelody).start(0);

}

// build the bassline based on the connection data (currently just x data)
let playLines = function(constellation) {
    // This assumes a constellation object with valid grid data.

    let connections = constellation.connections;
    let playData = [];
    // This builds play times based on the line connections
    for (let line of connections) {
        let duration = line.x2 - line.x1;
        playData.push({'time': line.x1, 'note': 'C2', 'duration': duration});
    }
    const bassline = new Tone.Part(function(time, note) {
        bass.triggerAttackRelease(note.note, note.duration, time);
      }, bassline).start(0);

}

//TODO
let playAllConstellations = function(wholeScreen) {

}

// function for changing tempo
let changeTempoTo = function(newTempo) {
    Tone.Transport.bpm.value = newTempo;
}

// actually add listener for our will be play button
// This does not work as is, just assumed names
document.getElementById("play-button").addEventListener("click", function() {
  if (Tone.Transport.state !== 'started') {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});