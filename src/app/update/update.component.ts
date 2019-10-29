import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Input() team: Team;
  private teamSub: Subscription;
  teams: Team[];
  submitted = false;
  driveTypes = ['Tank', 'H-Drive', 'Mecanum', 'Butterfly', 'Swerve'];
  motorTypes = ['Neo', 'Cim', 'Mini-Cim', '775 Pro'];
  botTypes = ['Arm', 'elevator', 'static', 'drivetrain'];

  model: Team = {
    canDoCargo: false,
    canDoHatches: false,
    climbLvl: null,
    driveMotor: null,
    maxReach: null,
    numOfDriveMotors: null,
    teamName: null,
    teamNumber: null,
    typeOfBot: null,
    typeOfDrive: null,
  };
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamSub = this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
    });
  }

  ngOnDestroy() {
    this.teamSub.unsubscribe();
  }

  get diagnostic() { return JSON.stringify(this.model); }

  newTeam() {
    this.model = {
      averageClimbPoints: null,
      averageRankingScore: null,
      canDoCargo: false,
      canDoHatches: false,
      ccwm: null,
      climbLvl: null,
      dpr: null,
      driveMotor: null,
      maxReach: null,
      numOfDriveMotors: null,
      opr: null,
      pointsFromCargo: null,
      pointsFromHatch: null,
      rankingPoints: null,
      rankingScore: null,
      teamName: null,
      teamNumber: null,
      typeOfBot: null,
      typeOfDrive: null,
    };
    console.log('Clearing team');
  }

   submit(team: Team) {
     this.model.teamName = this.team.teamName;
     this.model.teamNumber = this.team.teamNumber;
     this.teamService.updateTeam(team, this.model);
    }

}
