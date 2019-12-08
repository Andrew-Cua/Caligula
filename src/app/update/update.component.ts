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
  @Input() toUpdate: boolean;
  private teamSub: Subscription;
  teams: Team[];
  submitted = false;
  driveTypes = ['Tank', 'H-Drive', 'Mecanum', 'Butterfly', 'Swerve'];
  motorTypes = ['Neo', 'Cim', 'Mini-Cim', '775 Pro'];
  botTypes = ['Arm', 'elevator', 'static', 'drivetrain'];

  model: Team = {
    gameElementAccuracy: null,
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
      gameElementAccuracy: null,
      ccwm: null,
      climbLvl: null,
      dpr: null,
      driveMotor: null,
      maxReach: null,
      numOfDriveMotors: null,
      opr: null,
      rankingPoints: null,
      rankingScore: null,
      teamName: null,
      teamNumber: null,
      typeOfBot: null,
      typeOfDrive: null,
    };
    console.log('Clearing team');
    this.submitted = false;
  }

   submit(team: Team) {
     this.model.teamName = this.team.teamName;
     this.model.teamNumber = this.team.teamNumber;
     let notFoundFlag = true;
     if ( this.model.teamName != null && this.model.teamNumber != null) {
      this.teams.forEach(teamD => {
        if ( this.model.teamNumber === teamD.teamNumber) {
          this.teamService.updateTeam(teamD, this.model).then(_ => {
          this.submitted = true;
        });
          console.log(`updating ${team.teamNumber}`);
          notFoundFlag = false;
        } else {
          notFoundFlag = true;
        }
      });
      if (notFoundFlag) {
        this.teamService.addTeam(this.model).then(_ => {
          this.submitted = true;
        });
      }
    }
    }

}
