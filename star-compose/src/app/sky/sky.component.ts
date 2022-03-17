import { Component, OnInit, Attribute } from '@angular/core';
import { Connection } from '../_models/connection.model';
import { Constellation } from '../_models/constellation.model';
import { Star } from '../_models/star.model';
import data from './constellations.json';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css'],
})
export class SkyComponent implements OnInit {

  constructor() { }

  constellations:Constellation[] = [];

  // test hardcodes star:
  aquarius: Constellation = {
    height: 200,
    width: 200,
    name: "Aquarius",
    stars: [
      new Star(136,69), 
      new Star(172,90), 
      new Star(113,40),
      new Star(95,48), 
      new Star(93,75),
      new Star(104,104),
      new Star(91,33),
      new Star(77,37),
      new Star(56,96),
      new Star(46,79),
      new Star(46,105),
      new Star(33,131)      
    ],
    connections: [
      new Connection(136,69,172,90),
      new Connection(136,69,113,40),
      new Connection(113,40,95,48),
      new Connection(113,40,93,75),
      new Connection(93,75,104,104),
      new Connection(95,48,91,33),
      new Connection(91,33,77,37),
      new Connection(77,37,46,79),
      new Connection(46,79,56,96),
      new Connection(56,96,46,105),
      new Connection(46,105,33,131)
    ],
  };
  cancer: Constellation = {
    height: 200,
    width: 200,
    name: "Cancer",
    stars: [
      new Star(55,34), 
      new Star(65,85), 
      new Star(98,152), 
      new Star(34,139), 
      new Star(57,107)
    ],
    connections: [
      new Connection(55,34,65,85),
      new Connection(65,85,57,107),
      new Connection(57,107,34,139),
      new Connection(57,107,98,152)
    ],
  };
  aries: Constellation = {
    height: 160,
    width: 160,
    name: "Aries",
    stars: [
      new Star(56,34),
      new Star(127,67),
      new Star(109,52),
      new Star(133,80),
      new Star(33,80),
      new Star(46,69),
    ],
    connections: [
      new Connection(56,34,109,52),
      new Connection(109,52,127,67),
      new Connection(127,67,133,80),
      new Connection(56,34,46,69),
      new Connection(46,69,33,80)
    ],
  };
  capricorn: Constellation = {
    height: 200,
    width: 200,
    name: "Capricorn",
    stars: [
      new Star(164,33),
      new Star(159,48),
      new Star(152,68),
      new Star(122,119),
      new Star(102,131),
      new Star(98,76),
      new Star(78,74),
      new Star(71,110),
      new Star(47,70),
      new Star(34,66)
    ],
    connections: [
      new Connection(34,66,47,70), 
      new Connection(47,70,71,110),
      new Connection(47,70,78,74),
      new Connection(78,74,98,76),
      new Connection(98,76,152,68),
      new Connection(71,110,102,131),
      new Connection(102,131,122,119),
      new Connection(122,119,152,68),
      new Connection(152,68,159,48),
      new Connection(159,48,164,33)
    ],
  };
  gemini: Constellation = {
    height: 200,
    width: 200,
    name: "Gemini",
    stars: [
      
      new Star(127,74),
      new Star(128,134),
      new Star(115,127),
      new Star(100,105),
      new Star(98,132),
      new Star(90,71),
      new Star(83,46),
      new Star(75,34),
      new Star(68,140),
      new Star(63,68),
      new Star(59,108),
      new Star(52,63),
      new Star(52,137),
      new Star(51,86),
      new Star(48,44),   
      new Star(33,60)
    ],
    connections: [
      new Connection(33,60,52,63),
      new Connection(52,63,48,44),
      new Connection(52,63,51,86),
      new Connection(51,86,59,108),
      new Connection(59,108,52,137),
      new Connection(59,108,68,140),
      new Connection(52,63,63,68),
      new Connection(63,68,90,71),
      new Connection(90,71,83,46),
      new Connection(83,46,75,34),
      new Connection(90,71,100,105),
      new Connection(100,105,115,127),
      new Connection(100,105,98,132),
      new Connection(115,127,128,134),
      new Connection(90,71,127,74)
    ],
  };
  leo: Constellation = {
    height: 200,
    width: 200,
    name: "Leo",
    stars: [
      new Star(141,41),
      new Star(129,33),
      new Star(127,108),
      new Star(120,84),
      new Star(105,73),
      new Star(103,51),
      new Star(66,121),
      new Star(60,93),
      new Star(34,120)
    ],
    connections: [
      new Connection(34,120,60,93),
      new Connection(60,93,105,73),
      new Connection(34,120,66,121),
      new Connection(66,121,127,108),
      new Connection(127,108,120,84),
      new Connection(120,84,105,73),
      new Connection(105,73,103,51),
      new Connection(103,52,129,33),
      new Connection(129,33,141,41)
    ],
  };
  libra: Constellation = {
    height: 200,
    width: 200,
    name: "Libra",
    stars: [
      new Star(127,60),
      new Star(121,102),
      new Star(94,34),
      new Star(71,56),
      new Star(72,118),
      new Star(64,128),
      new Star(45,66),
      new Star(33,56)     
    ],
    connections: [
      new Connection(33,56,45,66),
      new Connection(45,66,71,56),
      new Connection(71,56,94,34),
      new Connection(94,34,127,60),
      new Connection(127,60,121,102),
      new Connection(94,34,121,102),
      new Connection(121,102,72,118),
      new Connection(72,118,64,128),
    ],
  };
  pisces: Constellation = {
    height: 200,
    width: 200,
    name: "Pisces",
    stars: [
      new Star(137,64),
      new Star(134,77),
      new Star(125,59),
      new Star(124,85),
      new Star(119,74),
      new Star(107,77),
      new Star(89,90),
      new Star(77,93),
      new Star(61,105),
      new Star(51,110),
      new Star(48,83),
      new Star(44,57),
      new Star(39,33),
      new Star(34,128),
      new Star(33,47)
    ],
    connections: [
      new Connection(39,33,33,47),
      new Connection(33,47,44,57),
      new Connection(39,33,44,57),
      new Connection(44,57,48,83),
      new Connection(48,83,51,110),
      new Connection(34,128,51,110),
      new Connection(51,110,61,105),
      new Connection(61,105,77,93),
      new Connection(77,93,89,90),
      new Connection(89,90,107,77),
      new Connection(107,77,119,74),
      new Connection(119,74,124,85),
      new Connection(124,85,134,77),
      new Connection(134,77,137,64),
      new Connection(137,64,125,59),
      new Connection(125,59,119,74)
    ],
  };
  sagittarius: Constellation = {
    height: 200,
    width: 200,
    name: "Sagittarius",
    stars: [
      new Star(132,96), 
      new Star(132,64),
      new Star(120,91),
      new Star(117,120),
      new Star(110,106),
      new Star(117,72),
      new Star(102,78),
      new Star(95,70),
      new Star(90,88),
      new Star(86,49),
      new Star(82,33),
      new Star(82,78),
      new Star(64,58),
      new Star(61,139),
      new Star(58,127),
      new Star(41,70),
      new Star(38,102),
      new Star(36,91),
      new Star(33,126)
    ],
    connections: [
      new Connection(33,126,58,127),
      new Connection(33,126,61,139),
      new Connection(33,126,38,102),
      new Connection(38,102,36,91),
      new Connection(36,91,41,70),
      new Connection(41,70,64,58),
      new Connection(64,58,82,78),
      new Connection(82,78,90,88),
      new Connection(82,78,86,49),
      new Connection(86,49,82,33),
      new Connection(82,78,95,70),
      new Connection(95,70,102,78),
      new Connection(102,78,90,88),
      new Connection(102,78,117,72),
      new Connection(117,72,132,64),
      new Connection(117,72,120,91),
      new Connection(120,91,132,96),
      new Connection(120,91,110,106),
      new Connection(110,106,117,120)
    ],
  };
  scorpio: Constellation = {
    height: 200,
    width: 200,
    name: "Scorpio",
    stars: [
      new Star(139,48),
      new Star(134,60),
      new Star(132,33),
      new Star(113,52),
      new Star(103,59),
      new Star(90,82),
      new Star(87,98),
      new Star(81,120),
      new Star(64,123),
      new Star(52,85),
      new Star(44,121),
      new Star(38,96),
      new Star(33,106)
    ],
    connections: [
      new Connection(52,85,38,96),
      new Connection(38,96,33,106),
      new Connection(33,106,44,121),
      new Connection(44,121,64,123),
      new Connection(64,123,81,120),
      new Connection(81,120,87,98),
      new Connection(87,98,90,82),
      new Connection(90,82,103,59),
      new Connection(103,59,113,52),
      new Connection(113,52,132,33),
      new Connection(113,52,134,60),
      new Connection(113,52,139,48)
    ],
  };
  taurus: Constellation = {
    height: 200,
    width: 200,
    name: "Taurus",
    stars: [
      new Star(132,90),
      new Star(121,87),
      new Star(120,155),
      new Star(93,130),
      new Star(85,100),
      new Star(85,112),
      new Star(80,87),
      new Star(79,68),
      new Star(75,106),
      new Star(67,96),
      new Star(61,34),
      new Star(33,50)
    ],
    connections: [
      new Connection(61,34,79,68),
      new Connection(79,68,80,87),
      new Connection(33,50,67,96),
      new Connection(67,96,80,87),
      new Connection(80,87,85,100),
      new Connection(85,100,85,112),
      new Connection(67,96,75,106),
      new Connection(85,100,121,87),
      new Connection(121,87,132,90),
      new Connection(75,106,85,112),
      new Connection(85,112,93,130),
      new Connection(93,130,120,155)
    ],
    // stars: [[50,20],[75,90], [90,120], [60,190], [180,170]].map((i) => new Star(i[0],i[1]))
  };
  virgo: Constellation = {
    height: 200,
    width: 200,
    name: "Virgo",
    stars: [
      new Star(145,33),
      new Star(130,59),
      new Star(115,72),
      new Star(109,100),
      new Star(108,117),
      new Star(99,65),
      new Star(85,96),
      new Star(85,50),
      new Star(69,121),
      new Star(66,96),
      new Star(55,130),
      new Star(34,107)
    ],
    connections: [
      new Connection(34,107,66,96),
      new Connection(66,96,85,96),
      new Connection(55,130,69,121),
      new Connection(69,121,108,117),
      new Connection(85,96,108,117),
      new Connection(108,117,109,100),
      new Connection(109,100,115,72),
      new Connection(85,96,99,65),
      new Connection(99,65,85,50),
      new Connection(99,65,115,72),
      new Connection(115,72,130,59),
      new Connection(130,59,145,33),
    ],
  };

  andromeda: Constellation = {
    height: 230,
    width: 230,
    name: "Andromeda",
    stars: [
      new Star(210,30),
      new Star(180,25),
      new Star(145,49),
      new Star(150,72),
      new Star(125,80),
      new Star(118,100),
      new Star(170,110),
      new Star(109,45),
      new Star(100,68),
      new Star(85,86),
      new Star(90,20),
      new Star(70, 15),
      new Star(120,120),
      new Star(66,56),
      new Star(110,150),
      new Star(80,155),
      new Star(34,34)
    ],
    connections: [
      new Connection(34,34,66,56),
      new Connection(66,56,85,86),
      new Connection(110,150,120,120),
      new Connection(120,120,118,100),
      new Connection(85,86,118,100),
      new Connection(118,100,125,80),
      new Connection(125,80,150,72),
      new Connection(85,86,100,68),
      new Connection(100,68,109,45),
      new Connection(109,45,90,20),
      new Connection(150,72,145,49),
      new Connection(145,49,180,25),
      new Connection(90,20,70,15),
      new Connection(118,100,170,110),
      new Connection(110,150,80,155),
      new Connection(210,30,180,25)
    ],
  };

  antlia: Constellation = {
    height: 160,
    width: 160,
    name: "Antlia",
    stars: [
      new Star(106,24),
      new Star(129,74),
      new Star(33,80),
      new Star(60,40),
    ],
    connections: [
      new Connection(106,24,129,74),
      new Connection(106,24,60,40),
      new Connection(60,40,33,80)
    ],
  };

  apus: Constellation = {
    height: 200,
    width: 200,
    name: "Apus",
    stars: [
      new Star(150,75), 
      new Star(170,105),
      new Star(160,135),
      new Star(65,50), 
      new Star(20,20), 
      new Star(40,60)
    ],
    connections: [
      new Connection(150,75,65,50),
      new Connection(65,50,40,60),
      new Connection(40,60,20,20),
      new Connection(150,75,170,105),
      new Connection(170,105,160,135)
    ],
  };

  aquila: Constellation = {
    height: 200,
    width: 200,
    name: "Aquila",
    stars: [
      new Star(60,70),
      new Star(70,45),
      new Star(80,31),
      new Star(105,73), 
      new Star(130,25),
      new Star(150,15),
      new Star(135,135),
      new Star(155,145),
      new Star(92,118),
      new Star(70,93),
      new Star(24,120)
    ],
    connections: [
      new Connection(24,120,70,93),
      new Connection(24,120,92,118),
      new Connection(92,118,135,135),
      new Connection(135,135,130,25),
      new Connection(130,25,105,73),
      new Connection(105,73,80,31),
      new Connection(80,31,70,45),
      new Connection(70,45,60,70),
      new Connection(150,15,130,25),
      new Connection(135,135,105,73),
      new Connection(105,73,70,93),
      new Connection(135,135,155,145)

    ],
  };

  ara: Constellation = {
    height: 200,
    width: 200,
    name: "Ara",
    stars: [
      new Star(20,40),
      new Star(80,30),
      new Star(95,96),
      new Star(145,104),
      new Star(159,141),
      new Star(87,170),
      new Star(96,116),
      new Star(145,66)      
    ],
    connections: [
      new Connection(87,170,96,116),
      new Connection(96,116,95,96),
      new Connection(159,141,145,104),
      new Connection(95,96,145,104),
      new Connection(95,96,80,30),
      new Connection(80,30,20,40),
      new Connection(80,30,145,66),
      new Connection(145,66,145,104)
    ],
  };

  auriga: Constellation = {
    height: 200,
    width: 200,
    name: "Auriga",
    stars: [
      new Star(34,87),
      new Star(85,65),
      new Star(85,96), 
      new Star(65,151),
      new Star(85,20),
      new Star(135,62), 
      new Star(162,70),
      new Star(168,90),
      new Star(145,85),
      new Star(160,117),
      new Star(130,151),
      
    ],
    connections: [
      new Connection(85,20,85,96),
      new Connection(85,20,135,62),
      new Connection(34,87,85,96),
      new Connection(130,151,160,117),
      new Connection(85,96,160,117),
      new Connection(160,117,145,85),
      new Connection(145,85,135,62),
      new Connection(85,96,85,65),
      new Connection(135,62,162,70),
      new Connection(162,70,168,90),
      new Connection(85,96,65,151)
    ],
  };

  bootes: Constellation = {
    height: 300,
    width: 300,
    name: "Bootes",
    stars: [
      new Star(40,87),
      new Star(70,65), 
      new Star(55,116), 
      new Star(160,230),
      new Star(128,135),
      new Star(130,250),
      new Star(125,270),
      new Star(195,235),
      new Star(215,245),
      new Star(130,88),
      new Star(150,50),
      new Star(149,10),
      new Star(100,160) 
    ],
    connections: [
      new Connection(195,235,215,245),
      new Connection(160,230,195,235),
      new Connection(130,250,125,270),
      new Connection(130,88,70,65),
      new Connection(40,87,55,116),
      new Connection(130,250,160,230),
      new Connection(100,160,160,230),
      new Connection(55,116,100,160),
      new Connection(160,230,128,135),
      new Connection(128,135,130,88),
      new Connection(55,116,70,65),
      new Connection(130,88,150,50),
      new Connection(150,50,149,10),
    ],
  };

  caelum: Constellation = {
    height: 200,
    width: 200,
    name: "Caelum",
    stars: [
      new Star(33,20),
      new Star(86,26),
      new Star(110,80),
      new Star(160,112),
      
      
    ],
    connections: [
      new Connection(110,80,160,112),
      new Connection(110,80,86,26),
      new Connection(86,26,33,20)
    ],
  };

  camelopardalis: Constellation = {
    height: 300,
    width: 300,
    name: "Camelopardalis",
    stars: [
      new Star(20,20),
      new Star(28,45),
      new Star(58,60),
      new Star(98,75),
      new Star(180,92), //
      new Star(250,115),
      new Star(165,157),
      new Star(180,200),
      new Star(210,250),
      new Star(128,122),
      new Star(66,116),
      new Star(46,87),
      new Star(73,190),
      new Star(80,205),
      new Star(150,235),
    ],
    connections: [
      new Connection(80,205,73,190),
      new Connection(80,205,150,235),
      new Connection(73,190,66,116),
      new Connection(46,87,28,45),
      new Connection(46,87,66,116),
      new Connection(66,116,128,122),
      new Connection(210,250,180,200),
      new Connection(180,200,165,157),
      new Connection(128,122,165,157),
      new Connection(165,157,180,92),
      new Connection(28,45,20,20),
      new Connection(98,75,180,92),
      new Connection(28,45,58,60),
      new Connection(98,75,58,60),
      new Connection(180,92,250,115),
    ],
  };

  canesVenatici: Constellation = {
    height: 160,
    width: 160,
    name: "CanesVenatici",
    stars: [
      new Star(20,40),
      new Star(36,50),
      new Star(86,84),
      new Star(145,30)   
    ],
    connections: [
      new Connection(86,84,145,30),
      new Connection(86,84,36,50),
      new Connection(36,50,20,40)
    ],
  };

  canisMajor: Constellation = {
    height: 300,
    width: 300,
    name: "canisMajor",
    stars: [
      new Star(73,20),
      new Star(50,50),
      new Star(70,70),
      new Star(168,80), 
      new Star(105,63), 
      new Star(82,135),
      new Star(105,135),
      new Star(145,125),
      new Star(70,170), 
      new Star(90,185),
      new Star(100,200),
      new Star(120,240),
      new Star(170,240),
      new Star(180,210),

      new Star(50,180), 
      new Star(23,210), 
      new Star(33,150), 
    ],
    connections: [
      new Connection(170,240,120,240),
      new Connection(100,200,120,240),
      new Connection(100,200,180,210),
      new Connection(100,200,90,185),
      new Connection(90,185,70,170),
      new Connection(145,125,105,135),
      new Connection(82,135,105,135),
      new Connection(23,210,50,180),
      new Connection(33,150,50,180),
      new Connection(50,180,70,170),
      new Connection(82,135,105,63),
      new Connection(70,170,82,135),
      new Connection(70,70,105,63),
      new Connection(168,80,105,63),
      new Connection(70,70,50,50),
      new Connection(50,50,73,20)
    ],
  };

  canisMinor: Constellation = {
    height: 160,
    width: 160,
    name: "CanisMinor",
    stars: [
      new Star(30,90),
      new Star(130,20),
    ],
    connections: [
      new Connection(130,20,30,90)
    ],
  };

  carina: Constellation = {
    height: 250,
    width: 250,
    name: "Carina",
    stars: [
      new Star(220,40),
      new Star(137,20),
      new Star(115,52),
      new Star(100,58),
      new Star(50,71),
      new Star(25,100),
      new Star(20,130),
      new Star(50,170),
      new Star(100,150),
      new Star(70,130),
      new Star(60,100),
    ],
    connections: [
      // new Connection(),
      new Connection(60,100,70,130),
      new Connection(70,130,100,150),
      new Connection(100,150,50,170),
      new Connection(50,170,20,130),
      new Connection(20,130,25,100),
      new Connection(100,58,115,52),
      new Connection(115,52,137,20),
      new Connection(137,20,220,40),
      new Connection(100,58,50,71),
      new Connection(50,71,25,100)
    ],
  };

  cassiopeia: Constellation = {
    height: 160,
    width: 160,
    name: "Cassiopeia",
    stars: [
      new Star(20,20),
      new Star(46,69),
      new Star(86,64),
      new Star(110,110),
      new Star(147,67),
    ],
    connections: [
      new Connection(86,64,110,110),
      new Connection(110,110,147,67),
      new Connection(86,64,46,69),
      new Connection(46,69,20,20)
    ],
  };

  centaurus: Constellation = {
    height: 300,
    width: 300,
    name: "Centaurus",
    stars: [
      new Star(33,40),
      new Star(20,20),
      new Star(57,46),
      new Star(50,66),
      new Star(80,25),
      new Star(108,14),
      new Star(115,70),
      new Star(100,75), 
      new Star(50,85),
      new Star(20,95),
      new Star(105,112),
      new Star(128,140),
      new Star(100,200),
      new Star(130,190),
      new Star(180,105),
      new Star(195,115),
      new Star(210,145),
      new Star(230,215),
      new Star(220,125),
      new Star(250,155),
      new Star(205,60),
      new Star(170,25),
      new Star(145,50),
    ],
    connections: [
      new Connection(230,215,210,145),
      new Connection(210,145,195,115),
      new Connection(220,125,250,155),
      new Connection(220,125,195,115),
      new Connection(195,115,180,105),
      new Connection(128,140,100,200),
      new Connection(128,140,130,190),
      new Connection(205,60,170,25),
      new Connection(105,112,180,105),
      new Connection(180,105,128,140),
      new Connection(50,85,20,95),
      new Connection(105,75,50,85),
      new Connection(20,20,33,40),
      new Connection(50,66,57,46),
      new Connection(108,14,80,25),
      new Connection(33,40,57,46),
      new Connection(57,46,80,25),
      new Connection(80,25,115,70),
      new Connection(115,70,105,112),
      new Connection(57,46,100,75),
      new Connection(115,70,145,50),
      new Connection(145,50,170,25),
      new Connection(100,75,105,112),
      new Connection(105,112,128,140),
    ],
  };

  cepheus: Constellation = {
    height: 200,
    width: 200,
    name: "Cepheus",
    stars: [
      new Star(150,90),
      new Star(140,115),
      new Star(100,124),
      new Star(50,148),
      new Star(40,170),
      new Star(20,150),
      new Star(25,90),
      new Star(80,63),
      new Star(30,20)
    ],
    connections: [
      new Connection(100,124,140,115),
      new Connection(20,150,40,170),
      new Connection(40,170,50,148),
      new Connection(80,63,100,124),
      new Connection(80,63,25,90),
      new Connection(30,20,80,63),
      new Connection(30,20,25,90),
      new Connection(25,90,50,148),
      new Connection(50,148,100,124),
      new Connection(140,115,150,90)
    ],
  };

  
  cetus: Constellation = {
    height: 300,
    width: 300,
    name: "Cetus",
    stars: [
      new Star(180,140),
      new Star(160,125),
      new Star(250,125),
      new Star(210,190),
      new Star(105,210),
      new Star(40,170),
      new Star(130,178),
      new Star(60,73),
      new Star(25,60),
      new Star(35,30),
      new Star(55,20),
      new Star(85,30),
      new Star(120,144),
      new Star(70,94),
      new Star(100,114)
    ],
    connections: [
      new Connection(250,125,210,190),
      new Connection(210,190,130,178),
      new Connection(250,125,180,140),
      new Connection(55,20,85,30),
      new Connection(55,20,35,30),
      new Connection(120,144,160,125),
      new Connection(40,170,105,210),
      new Connection(105,210,130,178),
      new Connection(60,73,70,94),
      new Connection(70,94,100,114),
      new Connection(100,114,120,144),
      new Connection(60,73,25,60),
      new Connection(60,73,85,30),
      new Connection(35,30,25,60),
      new Connection(130,178,120,144),
      new Connection(160,125,180,140)
    ],
  };

  chamaeleon: Constellation = {
    height: 160,
    width: 160,
    name: "Chamaeleon",
    stars: [
      new Star(66,44),
      new Star(130,50),
      new Star(139,32),
      new Star(70,80),
      new Star(16,89),
    ],
    connections: [
      new Connection(16,89,70,80),
      new Connection(66,44,139,32),
      new Connection(139,32,130,50),
      new Connection(130,50,70,80),
      new Connection(66,44,16,89),
    ],
  };

  circinus: Constellation = {
    height: 200,
    width: 200,
    name: "Circinus",
    stars: [
      new Star(106,160),
      new Star(40,20),
      new Star(90,112),
      new Star(20,40),
      new Star(36,79),
    ],
    connections: [
      new Connection(106,160,90,112),
      new Connection(90,112,40,20),
      new Connection(106,160,36,79),
      new Connection(36,79,20,40)
    ],
  };

  columba: Constellation = {
    height: 300,
    width: 300,
    name: "Columba",
    stars: [
      new Star(62,150),
      new Star(25,80),
      new Star(40,110),
      new Star(100,92),
      new Star(90,120),
      new Star(83,220),
      new Star(110,128),
      new Star(157,125),
      new Star(198,112),
      new Star(150,98),
      new Star(130,70),
      new Star(162,20),
      new Star(88,60)
    ],
    connections: [
      new Connection(40,110,100,92),
      new Connection(100,92,88,60),
      new Connection(162,20,88,60),
      new Connection(130,70,162,20),
      new Connection(150,98,130,70),
      new Connection(198,112,150,98),
      new Connection(157,125,198,112),
      new Connection(110,128,157,125),
      new Connection(83,220,110,128),
      new Connection(90,120,83,220),
      new Connection(40,110,90,120),
      new Connection(62,150,40,110),
      new Connection(40,110,25,80)
    ],
  };

  comaBerenices: Constellation = {
    height: 160,
    width: 160,
    name: "Coma Berenices",
    stars: [
      new Star(30,34),
      new Star(98,25),
      new Star(40,100),
    ],
    connections: [
      new Connection(30,34,98,25),
      new Connection(30,34,40,100),
    ],
  };

  coronaAustralis: Constellation = {
    height: 200,
    width: 200,
    name: "Corona Australis",
    stars: [
      new Star(60,120),
      new Star(38,95),
      new Star(30,70),
      new Star(43,25),
      new Star(33,45),
      new Star(83,20),   
      new Star(150,50)   
    ],
    connections: [
      new Connection(150,50,83,20),
      new Connection(30,70,33,45),
      new Connection(33,45,43,25),
      new Connection(43,25,83,20),
      new Connection(30,70,38,95),
      new Connection(38,95,60,120)
    ],
  };

  coronaBorealis: Constellation = {
    height: 200,
    width: 200,
    name: "Corona Borealis",
    stars: [
      new Star(20,40),
      new Star(38,90),
      new Star(70,110),
      new Star(125,95),
      new Star(100,105),
      new Star(140,50),   
      new Star(120,15)   
    ],
    connections: [
      new Connection(120,15,140,50),
      new Connection(70,110,100,105),
      new Connection(100,105,125,95),
      new Connection(125,95,140,50),
      new Connection(70,110,38,90),
      new Connection(38,90,20,40)
    ],
  };

  corvus: Constellation = {
    height: 200,
    width: 200,
    name: "Corvus",
    stars: [
      new Star(40,20),
      new Star(38,120),
      new Star(115,100),
      new Star(95,35),
      new Star(120,140)
    ],
    connections: [
      new Connection(115,100,120,140),
      new Connection(95,35,40,20),
      new Connection(115,100,95,35),
      new Connection(115,100,38,120),
      new Connection(38,120,40,20)
    ],
  };

  crater: Constellation = {
    height: 200,
    width: 200,
    name: "Crater",
    stars: [
      new Star(100,120),//
      new Star(60,130),
      new Star(20,100),

      new Star(140,160),
      new Star(180,115),
      new Star(120,80),
      new Star(105,40),
      new Star(70,20)
    ],
    connections: [
      new Connection(100,120,60,130),
      new Connection(60,130,20,100),
      new Connection(120,80,105,40),
      new Connection(105,40,70,20),
      new Connection(120,80,100,120),
      new Connection(180,115,120,80),
      new Connection(180,115,140,160),
      new Connection(140,160,100,120)
    ],
  };

  crux: Constellation = {
    height: 200,
    width: 200,
    name: "Crux",
    stars: [
      new Star(90,20),
      new Star(100,120),
      new Star(40,60), 
      new Star(130,40)
    ],
    connections: [
      new Connection(40,60,130,40),
      new Connection(90,20,100,120),
    ],
  };

  cygnus: Constellation = {
    height: 300,
    width: 300,
    name: "Cygnus",
    stars: [
      new Star(250,20),
      new Star(240,40),
      new Star(220,60),
      new Star(210,100), 
      new Star(140,120),
      new Star(100,160),
      new Star(60,180),
      new Star(20,185),
      new Star(110,60),
      new Star(190,190),
      new Star(260,260)
    ],
    connections: [
      new Connection(60,180,20,185),
      new Connection(100,160,60,180),
      new Connection(100,160,140,120),
      new Connection(190,190,260,260),
      new Connection(190,190,140,120),

      new Connection(140,120,210,100),
      new Connection(240,40,220,60),
      new Connection(250,20,240,40),
      new Connection(210,100,220,60),
      new Connection(110,60,140,120),
    ],
  };

  delphinus: Constellation = {
    height: 250,
    width: 250,
    name: "Delphinus",
    stars: [
      new Star(20,20),
      new Star(48,70),
      new Star(115,100),
      new Star(95,35),
      new Star(145,200)
    ],
    connections: [
      new Connection(115,100,145,200),
      new Connection(95,35,20,20),
      new Connection(115,100,95,35),
      new Connection(115,100,48,70),
      new Connection(48,70,20,20)
    ],
  };

  dorado: Constellation = {
    height: 200,
    width: 200,
    name: "Dorado",
    stars: [
      new Star(160,20),
      new Star(127,40),
      new Star(90,52),
      new Star(56,100),
      new Star(30,107),
      new Star(40,150)
    ],
    connections: [
      new Connection(56,100,40,150),
      new Connection(56,100,90,52),
      new Connection(90,52,127,40),
      new Connection(127,40,160,20),
      new Connection(56,100,30,107),
    ],
  };

  draco: Constellation = {
    height: 300,
    width: 300,
    name: "Draco",
    stars: [
      new Star(70,84),
      new Star(90,100),
      new Star(100,140),
      new Star(130,170),
      new Star(150,190),
      new Star(180,180),
      new Star(210,130),
      new Star(230,50),
      new Star(260,20),

      new Star(25,72),
      new Star(30,102),
      new Star(56,200),
      new Star(40,250),
      new Star(85,220),
      new Star(85,250),
    ],
    connections: [
      new Connection(230,50,260,20),
      new Connection(210,130,230,50),
      new Connection(180,180,210,130),
      new Connection(150,190,180,180),
      new Connection(130,170,150,190),
      new Connection(100,140,130,170),
      new Connection(90,100,100,140),
      new Connection(70,84,90,100),
      new Connection(85,250,40,250),
      new Connection(85,220,85,250),
      new Connection(56,200,85,220),
      new Connection(56,200,30,102),
      new Connection(30,102,25,72),
      new Connection(25,72,70,84),
      new Connection(56,200,40,250),
    ],
  };

  equuleus: Constellation = {
    height: 200,
    width: 200,
    name: "Equuleus",
    stars: [
      new Star(90,30),
      new Star(38,120),
      new Star(105,160),
      new Star(135,25),
    ],
    connections: [
      new Connection(135,25,90,30),
      new Connection(105,160,135,25),
      new Connection(105,160,38,120),
      new Connection(38,120,90,30)
    ],
  };

  eridanus: Constellation = {
    height: 300,
    width: 300,
    name: "Eridanus",
    stars: [
      new Star(45,78),
      new Star(35,102),
      new Star(20,120),
      new Star(35,140),
      new Star(78,74),
      new Star(112,100),
      new Star(120,80),
      new Star(135,64),
      new Star(150,53),
      new Star(170,45),
      new Star(190,90),
      new Star(180,120),

      new Star(160,115),
      new Star(145,120),
      new Star(130,135),
      new Star(115,155),
      new Star(90,195),
      new Star(85,210),
      new Star(110,215),
      new Star(115,205),
      new Star(148,200),
      new Star(153,210),
      new Star(190,220),
      new Star(200,190),
      new Star(220,173),
      new Star(230,230),
      new Star(240,250),
      new Star(250,245),
      new Star(260,280)
    ],
    connections: [
      new Connection(160,115,145,120),
      new Connection(145,120,130,135),
      new Connection(130,135,115,155),
      new Connection(115,155,90,195),
      new Connection(90,195,85,210),
      new Connection(85,210,110,215),
      new Connection(110,215,115,205),
      new Connection(115,205,148,200),
      new Connection(148,200,153,210),
      new Connection(153,210,190,220),
      new Connection(190,220,200,190),
      new Connection(200,190,220,173),
      new Connection(220,173,230,230),
      new Connection(230,230,240,250),
      new Connection(240,250,250,245),
      new Connection(250,245,260,280),      
      new Connection(180,120,160,115),
      new Connection(190,90,180,120),
      new Connection(170,45,190,90),
      new Connection(150,53,170,45),
      new Connection(135,64,150,53),
      new Connection(120,80,135,64),
      new Connection(112,100,120,80),
      new Connection(78,74,112,100),
      new Connection(20,120,35,102),
      new Connection(35,102,45,78),
      new Connection(45,78,78,74),
      new Connection(20,120,35,140),
    ],
  };

  fornax: Constellation = {
    height: 210,
    width: 210,
    name: "Fornax",
    stars: [
      new Star(20,50),
      new Star(78,110),
      new Star(195,60),
      new Star(95,35),
    ],
    connections: [
      new Connection(95,35,20,50),
      new Connection(195,60,95,35),
      new Connection(195,60,78,110),
      new Connection(78,110,20,50)
    ],
  };

  grus: Constellation = {
    height: 300,
    width: 300,
    name: "Grus",
    stars: [
      new Star(25,100),
      new Star(20,140),
      new Star(145,140),//
      new Star(135,70),
      new Star(165,50),
      new Star(210,20),

      new Star(95,95),
      new Star(70,145),
      new Star(60,190),
      new Star(40,210)
    ],
    connections: [
      new Connection(165,50,210,20),
      new Connection(135,70,165,50),
      new Connection(145,140,135,70),
      new Connection(60,190,40,210),
      new Connection(70,145,60,190),
      new Connection(145,140,70,145),
      new Connection(95,95,25,100),
      new Connection(145,140,95,95),
      new Connection(70,145,20,140),
      new Connection(20,140,25,100)
    ],
  };

  hercules: Constellation = {
    height: 300,
    width: 300,
    name: "Hercules",
    stars: [
      new Star(110,110),//top left
      new Star(96,110),
      new Star(56,107),
      new Star(75,40),
      new Star(130,160),//bot left
      new Star(120,190),
      new Star(105,185),
      new Star(85,175),
      new Star(65,165),
      new Star(55,170),
      new Star(40,200),
      new Star(60,210),
      new Star(20,210),
      new Star(15,230),
      new Star(170,155),
      new Star(170,95),
      new Star(180,70),
      new Star(195,40),
      new Star(218,50),
      new Star(185,210),
      new Star(100,290),
      new Star(205,220),
      new Star(250,240),
    ],
    connections: [
      new Connection(20,210,15,230),
      new Connection(40,200,20,210),
      new Connection(40,200,60,210),
      new Connection(55,170,40,200),
      new Connection(65,165,55,170),
      new Connection(85,175,65,165),
      new Connection(105,185,85,175),
      new Connection(120,190,105,185),
      new Connection(130,160,120,190),
      new Connection(56,107,75,40),
      new Connection(96,110,56,107),
      new Connection(110,110,96,110),
      new Connection(195,40,218,50),
      new Connection(180,70,195,40),
      new Connection(170,95,180,70),
      new Connection(205,220,250,240),
      new Connection(185,210,205,220),
      new Connection(185,210,100,290),
      new Connection(170,155,185,210),
      new Connection(170,95,110,110),
      new Connection(170,155,170,95),
      new Connection(170,155,130,160),
      new Connection(130,160,110,110)
    ],
  };
  horologium: Constellation = {
    height: 200,
    width: 200,
    name: "Horologium",
    stars: [
      new Star(127,67),
      new Star(109,52),
      new Star(133,80),
      new Star(130,100),
      new Star(90,140),
      new Star(92,180),
      new Star(20,20),
    ],
    connections: [
      new Connection(133,80,130,100),
      new Connection(90,140,92,180),
      new Connection(130,100,90,140),
      new Connection(20,20,109,52),
      new Connection(109,52,127,67),
      new Connection(127,67,133,80),
    ],
  };
  hydra: Constellation = {
    height: 300,
    width: 300,
    name: "Hydra",
    stars: [
      new Star(20,250),
      new Star(40,230),
      new Star(80,245),
      new Star(100,234),
      new Star(110,200),
      new Star(126,200),
      new Star(130,170),
      new Star(145,175),
      new Star(160,180),
      new Star(180,130),
      new Star(160,100),
      new Star(185,80),
      new Star(200,50),
      new Star(215,35),
      new Star(240,40),
      new Star(250,60),
      new Star(230,70),
    ],
    connections: [
      new Connection(230,70,200,50),
      new Connection(250,60,230,70),
      new Connection(240,40,250,60),
      new Connection(215,35,240,40),
      new Connection(200,50,215,35),
      new Connection(185,80,200,50),
      new Connection(160,100,185,80),
      new Connection(180,130,160,100),
      new Connection(160,180,180,130),
      new Connection(145,175,160,180),
      new Connection(130,170,145,175),
      new Connection(100,234,110,200),
      new Connection(126,200,130,170),
      new Connection(110,200,126,200),
      new Connection(20,250,40,230),
      new Connection(40,230,80,245),
      new Connection(80,245,100,234),
    ],
  };

  hydrus: Constellation = {
    height: 200,
    width: 200,
    name: "Hydrus",
    stars: [
      new Star(90,80),
      new Star(85,20),
      new Star(70,105),
      new Star(40,100),
      new Star(150,180),
      new Star(20,150),
    ],
    connections: [
      new Connection(70,105,40,100),
      new Connection(150,180,20,150),
      new Connection(40,100,150,180),
      new Connection(85,20,90,80),
      new Connection(90,80,70,105),
    ],
  };

  indus: Constellation = {
    height: 200,
    width: 200,
    name: "Indus",
    stars: [
      new Star(140,25), 
      new Star(105,160), 
      new Star(34,139), 
      new Star(77,107)
    ],
    connections: [
      new Connection(140,25,77,107),
      new Connection(77,107,34,139),
      new Connection(77,107,105,160)
    ],
  };

  lacerta: Constellation = {
    height: 250,
    width: 250,
    name: "Lacerta",
    stars: [
      new Star(50,46),
      new Star(25,50),
      new Star(55,80),
      new Star(80,76),
      new Star(93,125),
      new Star(145,122),
      new Star(170,150),
      new Star(20,20),
    ],
    connections: [
      new Connection(145,122,170,150),
      new Connection(55,80,80,76),
      new Connection(93,125,145,122),
      new Connection(80,76,93,125),
      new Connection(20,20,25,50),
      new Connection(25,50,50,46),
      new Connection(50,46,55,80),
    ],
  };
  leoMinor: Constellation = {
    height: 150,
    width: 150,
    name: "Leo Minor",
    stars: [
      new Star(135,40), 
      new Star(20,50), 
      new Star(80,20)
    ],
    connections: [
      new Connection(80,20,20,50),
      new Connection(80,20,135,40)
    ],
  };

  lepus: Constellation = {
    height: 200,
    width: 200,
    name: "Lepus",
    stars: [
      new Star(160,20),
      new Star(135,25),
      new Star(150,59),
      new Star(115,72), //
      new Star(75,50),
      new Star(55,40),
      new Star(20,55),

      new Star(120,100),
      new Star(170,115),
      new Star(70,95),
      new Star(85,115),
    ],
    connections: [
      new Connection(115,72,75,50),
      new Connection(75,50,55,40),
      new Connection(55,40,20,55),
      new Connection(170,115,120,100),
      new Connection(85,115,120,100),
      new Connection(120,100,115,72),
      new Connection(85,115,70,95),
      new Connection(70,95,115,72),
      new Connection(115,72,150,59),
      new Connection(150,59,135,25),
      new Connection(135,25,160,20)
    ],
  };

  lupus: Constellation = {
    height: 300,
    width: 300,
    name: "Lupus",
    stars: [
      new Star(60,25),
      new Star(112,59),
      new Star(115,95),
      new Star(90,100), 
      new Star(50,90),
      new Star(20,70),
      new Star(180,180),
      new Star(150,125),
      new Star(110,135),
      new Star(120,170),
      new Star(120,230)
    ],
    connections: [
      new Connection(90,100,115,95),
      new Connection(90,100,110,135),
      new Connection(90,100,50,90),
      new Connection(50,90,20,70),
      new Connection(120,230,180,180),
      new Connection(120,170,120,230),
      new Connection(150,125,115,95),
      new Connection(180,180,150,125),
      new Connection(120,170,110,135),
      new Connection(115,95,112,59),
      new Connection(112,59,60,25),
    ],
  };

  lynx: Constellation = {
    height: 160,
    width: 160,
    name: "Lynx",
    stars: [
      new Star(70,90),
      new Star(115,30),
      new Star(100,62),
      new Star(135,20),
      new Star(20,110),
      new Star(15,130),
      new Star(40,90),
    ],
    connections: [
      new Connection(20,110,15,130),
      new Connection(70,90,100,62),
      new Connection(100,62,115,30),
      new Connection(115,30,135,20),
      new Connection(70,90,40,90),
      new Connection(40,90,20,110)
    ],
  };

  lyra: Constellation = {
    height: 200,
    width: 200,
    name: "Lyra",
    stars: [
      new Star(120,60), 
      new Star(100,50),
      new Star(80,20),
      new Star(170,90),
      new Star(95,95),
      new Star(30,80),
      new Star(90,145),
      new Star(65,152), 
      new Star(20,100), 
      new Star(70,110)
    ],
    connections: [
      new Connection(100,50,80,20),
      new Connection(120,60,100,50),
      new Connection(120,60,170,90),
      new Connection(95,95,30,80),
      new Connection(95,95,90,145),
      new Connection(120,60,95,95),
      new Connection(95,95,70,110),
      new Connection(70,110,20,100),
      new Connection(70,110,65,152)
    ],
  };

  mensa: Constellation = {
    height: 160,
    width: 160,
    name: "Mensa",
    stars: [
      new Star(75,110),
      new Star(120,20),
      new Star(125,70),
      new Star(20,80),
    ],
    connections: [
      new Connection(75,110,125,70),
      new Connection(125,70,120,20),
      new Connection(75,110,20,80),
    ],
  };

  microscopium: Constellation = {
    height: 110,
    width: 110,
    name: "Microscopium",
    stars: [
      new Star(25,20),
      new Star(100,40),
      new Star(70,20),
      new Star(25,100),
    ],
    connections: [
      new Connection(25,20,70,20),
      new Connection(70,20,100,40),
      new Connection(25,20,25,100),
    ],
  };

  monoceros: Constellation = {
    height: 200,
    width: 200,
    name: "Monoceros",
    stars: [
      new Star(65,70),
      new Star(115,105),
      new Star(150,90),
      new Star(120,20),
      new Star(100,58),
      new Star(145,50),
      new Star(45,110),
      new Star(20,80),
    ],
    connections: [
      new Connection(65,70,115,105),
      new Connection(115,105,150,90),
      new Connection(65,70,100,58),
      new Connection(100,58,120,20),
      new Connection(120,20,145,50),
      new Connection(65,70,20,80),
      new Connection(20,80,45,110)
    ],
  };
  musca: Constellation = {
    height: 200,
    width: 200,
    name: "Musca",
    stars: [
      new Star(65,40),
      new Star(115,30),
      new Star(80,58),
      new Star(60,100),
      new Star(97,110),
      new Star(170,20),
    ],
    connections: [
      new Connection(80,58,60,100),
      new Connection(80,58,97,110),
      new Connection(65,40,80,58),
      new Connection(80,58,115,30),
      new Connection(115,30,170,20),
    ],
  };
  norma: Constellation = {
    height: 160,
    width: 160,
    name: "Norma",
    stars: [
      new Star(60,75),
      new Star(109,52),
      new Star(20,20),
      new Star(50,80),
    ],
    connections: [
      new Connection(60,75,109,52),
      new Connection(60,75,50,80),
      new Connection(50,80,20,20)
    ],
  };

  octans: Constellation = {
    height: 160,
    width: 160,
    name: "Octans",
    stars: [
      new Star(20,20),
      new Star(125,70),
      new Star(120,120),
    ],
    connections: [
      new Connection(20,20,125,70),
      new Connection(120,120,20,20),
      new Connection(120,120,125,70)
    ],
  };

  ophiuchus: Constellation = {
    height: 200,
    width: 200,
    name: "Ophiuchus",
    stars: [
      new Star(130,140),
      new Star(135,160),
      new Star(110,140),
      new Star(118,125),
      new Star(50,60),
      new Star(55,100),
      new Star(50,70),
      new Star(30,75),
      new Star(20,85),
      new Star(50,20),
      new Star(75,20),
      new Star(150,50),
      new Star(147,60),
      new Star(140,84),
      new Star(120,110),
    ],
    connections: [
      new Connection(50,60,50,70),
      new Connection(50,70,30,75),
      new Connection(30,75,20,85),
      new Connection(50,60,55,100),
      new Connection(130,140,135,160),
      new Connection(50,20,50,60),
      new Connection(50,60,120,110),
      new Connection(50,20,75,20),
      new Connection(75,20,150,50),
      new Connection(147,60,140,84),
      new Connection(150,50,147,60),
      new Connection(140,84,120,110),
      new Connection(120,110,118,125),
      new Connection(118,125,110,140),
      new Connection(110,140,130,140)
    ],
  };

  orion: Constellation = {
    height: 200,
    width: 200,
    name: "Orion",
    stars: [
      new Star(30,20),
      new Star(20,45),
      new Star(60,20),
      new Star(40,70),
      new Star(50,80),
      new Star(80,50),
      new Star(105,70),//
      new Star(135,60),
      new Star(160,50),
      new Star(170,60),
      new Star(175,75),
      new Star(170,90),
      new Star(165,110),
      new Star(150,120),
      new Star(100,120),
      new Star(90,130),
      new Star(80,140),
      new Star(70,180),
      new Star(120,170), 
    ],
    connections: [
      new Connection(105,70,135,60),
      new Connection(135,60,160,50),
      new Connection(160,50,170,60),
      new Connection(170,60,175,75),
      new Connection(175,75,170,90),
      new Connection(170,90,165,110),
      new Connection(165,110,150,120),
      new Connection(20,45,60,20),
      new Connection(120,170,100,120),
      new Connection(50,80,40,70),
      new Connection(40,70,20,45),
      new Connection(20,45,30,20),
      new Connection(80,50,50,80),
      new Connection(50,80,80,140),
      new Connection(80,50,105,70),
      new Connection(105,70,100,120),
      new Connection(100,120,90,130),
      new Connection(80,140,90,130),
      new Connection(80,140,70,180),
      new Connection(70,180,120,170),
    ],
  };

  pavo: Constellation = {
    height: 200,
    width: 200,
    name: "Pavo",
    stars: [
      new Star(51,20),
      new Star(50,50),
      new Star(51,60),
      new Star(52,90),//
      new Star(20,95),
      new Star(80,83),
      new Star(125,60),
      new Star(150,60),
      new Star(160,80), 
      new Star(180,85),
      new Star(130,140),
      new Star(85,150),
    ],
    connections: [
      new Connection(52,90,20,95),
      new Connection(160,80,150,60),
      new Connection(52,90,51,60),
      new Connection(51,60,50,50),
      new Connection(50,50,51,20),
      new Connection(80,83,52,90),
      new Connection(52,90,85,150),
      new Connection(85,150,130,140),
      new Connection(80,83,125,60),
      new Connection(125,60,150,60),
      new Connection(130,140,180,85),
      new Connection(180,85,160,80),
    ],
  };

  pegasus: Constellation = {
    height: 300,
    width: 300,
    name: "Pegasus",
    stars: [
      
      new Star(120,108),
      new Star(130,120),
      new Star(160,135),
      new Star(180,115),

      new Star(90,25),//
      new Star(105,50),
      new Star(115,55),
      new Star(180,80),
      new Star(200,60),
      new Star(175,35),
      new Star(150,40),
      new Star(110,20),
      new Star(95,92),
      new Star(35,20),
      new Star(20,90)
    ],
    connections: [
      new Connection(130,120,160,135),
      new Connection(160,135,180,115),
      new Connection(90,25,105,50),
      new Connection(105,50,115,55),
      new Connection(115,55,180,80),
      new Connection(180,80,200,60),
      new Connection(95,92,90,25),
      new Connection(20,90,35,20),
      new Connection(35,20,90,25),
      new Connection(20,90,95,92),
      new Connection(95,92,120,108),
      new Connection(120,108,130,120),
      new Connection(90,25,110,20),
      new Connection(110,20,150,40),
      new Connection(150,40,175,35)
    ],
  };

  perseus: Constellation = {
    height: 200,
    width: 200,
    name: "Perseus",
    stars: [
      new Star(20,140),
      new Star(40,150),
      new Star(65,85),
      new Star(45,105),
      new Star(90,80),
      new Star(110,50),//left do line
      new Star(80,30),
      new Star(95,20),
      new Star(135,50),
      new Star(155,40),
      new Star(175,30),
      new Star(170,55),
      new Star(145,65),
      new Star(130,100),
      new Star(115,130),
      new Star(112,145),
    ],
    connections: [
      new Connection(110,50,80,30),
      new Connection(80,30,95,20),
      new Connection(135,50,155,40),
      new Connection(155,40,175,30),
      new Connection(175,30,170,55),
      new Connection(170,55,145,65),
      new Connection(20,140,40,150),
      new Connection(90,80,65,85),
      new Connection(65,85,45,105),
      new Connection(45,105,20,140),
      new Connection(110,50,90,80),
      new Connection(90,80,115,130),
      new Connection(110,50,135,50),
      new Connection(135,50,145,65),
      new Connection(145,65,130,100),
      new Connection(115,130,130,100),
      new Connection(112,145,115,130)
    ],
  };

  phoenix: Constellation = {
    height: 200,
    width: 200,
    name: "Phoenix",
    stars: [
      new Star(20,70),
      new Star(20,45),
      new Star(37,53),
      new Star(50,60),
      new Star(100,20),
      new Star(125,60),//
      new Star(170,50),
      new Star(150,100),
      new Star(120,120),
      new Star(90,150),
      new Star(60,130)
    ],
    connections: [
      new Connection(125,60,170,50),
      new Connection(170,50,150,100),
      new Connection(150,100,120,120),
      new Connection(50,60,37,53),
      new Connection(37,53,20,45),
      new Connection(20,45,20,70),
      new Connection(100,20,50,60),
      new Connection(50,60,60,130),
      new Connection(100,20,125,60),
      new Connection(125,60,90,150),
      new Connection(90,150,60,130),
    ],
  };

  pictor: Constellation = {
    height: 200,
    width: 200,
    name: "Pictor",
    stars: [
      new Star(20,140),
      new Star(60,20),
      new Star(65,75),
      new Star(120,60)
    ],
    connections: [
      new Connection(20,140,60,20),
      new Connection(20,140,65,75),
      new Connection(20,140,120,60)
    ],
  };

  piscisAustrinus: Constellation = {
    height: 300,
    width: 300,
    name: "Piscis Austrinus",
    stars: [
      new Star(20,57),//
      new Star(70,20),
      new Star(135,25),

      new Star(170,40),
      new Star(210,90),
      new Star(215,110),

      new Star(160,110),
      new Star(100,107),
      new Star(45,120),
      new Star(30,110),

    ],
    connections: [ 
      new Connection(70,20,20,57),
      new Connection(215,110,160,110),
      new Connection(160,110,100,107),
      new Connection(100,107,45,120),
      new Connection(45,120,30,110),
      new Connection(30,110,20,57),
      new Connection(70,20,135,25),
      new Connection(135,25,170,40),
      new Connection(170,40,210,90),
      new Connection(215,110,210,90),
    ],
  };

  puppis: Constellation = {
    height: 300,
    width: 300,
    name: "Puppis",
    stars: [
      new Star(20,50),
      new Star(35,20),
      new Star(55,35),
      new Star(75,45),
      new Star(85,50),
      new Star(140,76),
      new Star(250,105),
      new Star(255,193),
      new Star(166,141),
      new Star(135,145),
      new Star(70,155)
      
    ],
    connections: [
      new Connection(55,35,75,45),
      new Connection(75,45,85,50),
      new Connection(85,50,140,76),
      new Connection(135,145,70,155),
      new Connection(70,155,140,76),
      new Connection(135,145,166,141),
      new Connection(166,141,255,193),
      new Connection(255,193,250,105),
      new Connection(250,105,140,76),
      new Connection(55,35,35,20),
      new Connection(35,20,20,50)
    ],
  };

  pyxis: Constellation = {
    height: 200,
    width: 200,
    name: "Pyxis",
    stars: [
      new Star(56,34),
      new Star(78,135),
      new Star(68,100),
    ],
    connections: [
      new Connection(56,34,68,100),
      new Connection(68,100,78,135)
    ],
  };

  reticulum: Constellation = {
    height: 200,
    width: 200,
    name: "Reticulum",
    stars: [
      new Star(30,20),
      new Star(110,67),
      new Star(90,52),
      new Star(93,94),
      new Star(150,170),
      new Star(40,110),
    ],
    connections: [
      new Connection(30,20,90,52),
      new Connection(90,52,110,67),
      new Connection(110,67,93,94),
      new Connection(30,20,40,110),
      new Connection(40,110,150,170),
      new Connection(150,170,93,94)
    ],
  };

  
  sagitta: Constellation = {
    height: 300,
    width: 300,
    name: "Sagitta",
    stars: [
      new Star(30,20),
      new Star(70,35),
      new Star(135,60),
      new Star(220,76),
      new Star(200,110),
    ],
    connections: [
      new Connection(70,35,135,60),
      new Connection(30,20,70,35),
      new Connection(200,110,220,76),
      new Connection(220,76,135,60),
      new Connection(200,110,135,60)
    ],
  };

  sculptor: Constellation = {
    height: 200,
    width: 200,
    name: "Sculptor",
    stars: [
      new Star(70,45),
      new Star(100,40),
      new Star(109,20),//
      new Star(160,25),
      new Star(160,60),
      new Star(85,75),
      new Star(20,110),
      new Star(35,69),
    ],
    connections: [
      new Connection(109,20,160,25),
      new Connection(160,25,160,60),
      new Connection(70,45,109,20),
      new Connection(109,20,100,40),
      new Connection(100,40,85,75),
      new Connection(70,45,35,69),
      new Connection(35,69,20,110)
    ],
  };

  scutum: Constellation = {
    height: 200,
    width: 200,
    name: "Scutum",
    stars: [
      new Star(20,20), 
      new Star(100,90), 
      new Star(75,165), 
      new Star(57,80)
    ],
    connections: [
      new Connection(20,20,57,80),
      new Connection(57,80,75,165),
      new Connection(57,80,100,90)
    ],
  };

  serpens: Constellation = {
    height: 220,
    width: 220,
    name: "Serpens",
    stars: [
      new Star(88,170),
      new Star(127,170),
      new Star(95,190),
      new Star(20,100),
      new Star(50,128),

      new Star(180,150),
      new Star(180,115),
      new Star(180,100),
      new Star(190,85),
      new Star(200,50),
      new Star(180,30),//
      new Star(170,15),
      new Star(160,30),

    ],
    connections: [
      new Connection(88,170,95,190),
      new Connection(95,190,127,170),
      new Connection(88,170,50,128),
      new Connection(50,128,20,100),
      new Connection(180,150,180,115),
      new Connection(180,115,180,100),
      new Connection(180,100,190,85),
      new Connection(190,85,200,50),
      new Connection(200,50,180,30),
      new Connection(180,30,170,15),
      new Connection(170,15,160,30),
      new Connection(180,30,160,30),
    ],
  };

  sextans: Constellation = {
    height: 200,
    width: 200,
    name: "Sextans",
    stars: [
      new Star(100,20),
      new Star(160,121),
      new Star(20,30),
      new Star(25,60)
    ],
    connections: [
      new Connection(25,60,20,30),
      new Connection(25,60,160,121),
      new Connection(160,121,100,20),
      new Connection(20,30,100,20)
    ],
  };
  telescopium: Constellation = {
    height: 250,
    width: 250,
    name: "Telescopium",
    stars: [
      new Star(80,100),
      new Star(127,67),
      new Star(100,90),
      new Star(180,20),
      new Star(220,25),
      new Star(20,80),
      new Star(65,30),
      new Star(46,120),
    ],
    connections: [
      new Connection(20,80,65,30),
      new Connection(180,20,220,25),
      new Connection(80,100,100,90),
      new Connection(100,90,127,67),
      new Connection(127,67,180,20),
      new Connection(80,100,46,120),
      new Connection(46,120,20,80)
    ],
  };

  triangulum: Constellation = {
    height: 300,
    width: 300,
    name: "Triangulum",
    stars: [
      
      new Star(135,150),
      new Star(60,20),
      new Star(20,60),
    ],
    connections: [
      new Connection(20,60,60,20),
      new Connection(60,20,135,150),
      new Connection(20,60,135,150)
    ],
  };

  triangulumAustrale: Constellation = {
    height: 300,
    width: 300,
    name: "Triangulum Australe",
    stars: [
      
      new Star(150,75),
      new Star(110,20),
      new Star(20,120),
      new Star(180,115),
    ],
    connections: [
      new Connection(20,120,110,20),
      new Connection(110,20,150,75),
      new Connection(180,115,150,75),
      new Connection(20,120,180,115),
    ],
  };

  tucana: Constellation = {
    height: 300,
    width: 300,
    name: "Tucana",
    stars: [
      
      new Star(70,130),
      new Star(100,20),
      new Star(20,100),
      new Star(40,125),
      new Star(180,40),
      new Star(160,110)
    ],
    connections: [
      new Connection(20,100,100,20),
      new Connection(100,20,70,130),
      new Connection(40,125,70,130),
      new Connection(20,100,40,125),
      new Connection(180,40,160,110),
      new Connection(100,20,180,40)
    ],
  };  
  ursaMajor: Constellation = {
    height: 300,
    width: 300,
    name: "Ursa Major",
    stars: [
      new Star(63,70),
      new Star(100,90), 
      new Star(80,71), 
      new Star(140,50),
      new Star(140,75),
      new Star(190,40),//
      new Star(180,63),//
      new Star(200,90),
      new Star(240,110),
      new Star(220,35),
      new Star(100,130),
      new Star(140,145),
      new Star(178,150),
      new Star(110,200),
      new Star(20,80),
      new Star(46,69),
    ],
    connections: [
      new Connection(180,63,200,90),
      new Connection(200,90,240,110),
      new Connection(190,40,220,35),
      new Connection(220,35,180,63),
      new Connection(140,50,190,40),
      new Connection(190,40,180,63),
      new Connection(180,63,140,75),
      new Connection(80,71,140,50),
      new Connection(140,50,140,75),
      new Connection(140,75,100,90),
      new Connection(140,145,178,150),
      new Connection(100,130,140,145),
      new Connection(100,130,110,200),
      new Connection(63,70,80,71),
      new Connection(80,71,100,90),
      new Connection(100,90,100,130),
      new Connection(63,70,46,69),
      new Connection(46,69,20,80)
    ],
  };

  ursaMinor: Constellation = {
    height: 200,
    width: 200,
    name: "UrsaMinor",
    stars: [
      new Star(58,82),
      new Star(170,110),
      new Star(105,110),
      new Star(173,150),
      new Star(100,149),
      new Star(20,20),
      new Star(35,50),
    ],
    connections: [
      new Connection(58,82,105,110),
      new Connection(105,110,170,110),
      new Connection(170,110,173,150),
      new Connection(58,82,35,50),
      new Connection(35,50,20,20),
      new Connection(173,150,100,149),
      new Connection(100,149,105,110)
    ],
  };
  vela: Constellation = {
    height: 300,
    width: 300,
    name: "Vela",
    stars: [
      new Star(45,35),
      new Star(110,40),
      new Star(90,20),
      new Star(150,39),
      new Star(170,45),
      new Star(210,90),
      new Star(150,150),
      new Star(110,145),
      new Star(70,140),

      new Star(20,100),
      new Star(25,85),
    ],
    connections: [
      new Connection(20,100,70,140),
      new Connection(70,140,110,145),
      new Connection(150,39,170,45),
      new Connection(170,45,210,90),
      new Connection(210,90,150,150),
      new Connection(150,150,110,145),
      new Connection(45,35,90,20),
      new Connection(90,20,110,40),
      new Connection(110,40,150,39),
      new Connection(45,35,25,85),
      new Connection(25,85,20,100)
    ],
  };

  volans: Constellation = {
    height: 160,
    width: 160,
    name: "Volans",
    stars: [
      new Star(65,60),
      new Star(115,92),
      new Star(75,110),
      new Star(120,65),
      new Star(20,20),
      new Star(55,30),
    ],
    connections: [
      new Connection(120,65,65,60),
      new Connection(65,60,75,110),
      new Connection(75,110,115,92),
      new Connection(115,92,120,65),
      new Connection(65,60,55,30),
      new Connection(55,30,20,20)
    ],
  };

  vulpecula: Constellation = {
    height: 200,
    width: 200,
    name: "Vulpecula",
    stars: [
      new Star(70,65),
      new Star(160,85),
      new Star(120,52),
      new Star(20,20),
      new Star(53,22),
    ],
    connections: [
      new Connection(70,65,120,52),
      new Connection(120,52,160,85),
      new Connection(70,65,53,22),
      new Connection(53,22,20,20)
    ],
  };

  ngOnInit(): void {
    console.log(data);
    
    this.constellations.push(this.vulpecula);
    this.constellations.push(this.volans);
    this.constellations.push(this.virgo);
    this.constellations.push(this.vela);
    // this.constellations.push(this.ursaMinor);
    // this.constellations.push(this.ursaMajor);
    // this.constellations.push(this.tucana);
    // this.constellations.push(this.triangulumAustrale);
    
    // this.constellations.push(this.triangulum);
    // this.constellations.push(this.telescopium);
    // this.constellations.push(this.taurus);
    // this.constellations.push(this.sextans);
    // this.constellations.push(this.serpens);
    // this.constellations.push(this.scutum);
    // this.constellations.push(this.sculptor);
    // this.constellations.push(this.scorpio);
    // this.constellations.push(this.sagittarius);
    // this.constellations.push(this.sagitta);

    // this.constellations.push(this.reticulum);
    // this.constellations.push(this.pyxis);
    // this.constellations.push(this.puppis);
    // this.constellations.push(this.piscisAustrinus);
    // this.constellations.push(this.pisces);
    // this.constellations.push(this.pictor);
    // this.constellations.push(this.phoenix);
    // this.constellations.push(this.perseus);
    // this.constellations.push(this.pegasus);
    // this.constellations.push(this.pavo);

    // this.constellations.push(this.orion);
    // this.constellations.push(this.ophiuchus);
    // this.constellations.push(this.octans);
    // this.constellations.push(this.norma);
    // this.constellations.push(this.musca);
    // this.constellations.push(this.monoceros);
    // this.constellations.push(this.microscopium);
    // this.constellations.push(this.mensa);
    // this.constellations.push(this.lyra);
    // this.constellations.push(this.lynx);

    // this.constellations.push(this.lupus);
    // this.constellations.push(this.libra);
    // this.constellations.push(this.lepus);
    // this.constellations.push(this.leoMinor);
    // this.constellations.push(this.leo);
    // this.constellations.push(this.lacerta);
    // this.constellations.push(this.indus);
    // this.constellations.push(this.hydrus);
    // this.constellations.push(this.hydra);
    // this.constellations.push(this.horologium);

    // this.constellations.push(this.hercules);
    // this.constellations.push(this.grus);
    // this.constellations.push(this.gemini);
    // this.constellations.push(this.fornax);
    // this.constellations.push(this.eridanus);
    // this.constellations.push(this.equuleus);
    // this.constellations.push(this.draco);
    // this.constellations.push(this.dorado);
    // this.constellations.push(this.delphinus);
    // this.constellations.push(this.cygnus);

    // this.constellations.push(this.crux);
    // this.constellations.push(this.crater);
    // this.constellations.push(this.corvus);
    // this.constellations.push(this.coronaBorealis);
    // this.constellations.push(this.coronaAustralis);
    // this.constellations.push(this.comaBerenices);
    // this.constellations.push(this.columba);
    // this.constellations.push(this.circinus);
    // this.constellations.push(this.chamaeleon);
    // this.constellations.push(this.cetus);

    // this.constellations.push(this.cepheus);
    // this.constellations.push(this.centaurus);
    // this.constellations.push(this.cassiopeia);
    // this.constellations.push(this.carina);
    // this.constellations.push(this.capricorn);
    // this.constellations.push(this.canisMinor);
    // this.constellations.push(this.canisMajor);
    // this.constellations.push(this.canesVenatici);
    // this.constellations.push(this.cancer);
    // this.constellations.push(this.camelopardalis);
    
    // this.constellations.push(this.caelum);
    // this.constellations.push(this.bootes);
    // this.constellations.push(this.auriga);
    // this.constellations.push(this.ara);
    // this.constellations.push(this.aquila);
    // this.constellations.push(this.apus);
    // this.constellations.push(this.antlia);
    // this.constellations.push(this.andromeda);
    // this.constellations.push(this.aquarius);
    // this.constellations.push(this.aries);
  }
}
