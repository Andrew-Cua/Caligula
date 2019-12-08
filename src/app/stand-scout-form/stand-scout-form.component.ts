import { Component, OnInit } from '@angular/core';
import { TeamMatchData } from '../TeamMatchData';

@Component({
  selector: 'app-stand-scout-form',
  templateUrl: './stand-scout-form.component.html',
  styleUrls: ['./stand-scout-form.component.scss']
})
export class StandScoutFormComponent implements OnInit {

  model: TeamMatchData = {
    teamNumber: null,
    approxCargoScored: null,
    approxHatchScored: null,
    canClimb: false,
    climbHeight: null,
    commonlyDropGameElements: false,
    flag: null,
    won: null
  };
  constructor() { }

  ngOnInit() {
  }

}
