import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from '../team';
import { environment } from 'src/environments/environment';

export const firebaseConfig = environment.firebaseConfig;

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable, Subscription } from 'rxjs';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-pit-scout-form',
  templateUrl: './pit-scout-form.component.html',
  styleUrls: ['./pit-scout-form.component.scss']
})
export class PitScoutFormComponent implements OnInit, OnDestroy {

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
  constructor(private teamService: TeamService, private afs: AngularFireStorage) { }

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
    this.submitted = false;
  }

   submit() {
    let notFoundFlag = true;
    if ( this.model.teamName != null && this.model.teamNumber != null) {
      this.teams.forEach(team => {
        if ( this.model.teamNumber === team.teamNumber) {
          this.teamService.updateTeam(team, this.model).then(_ => {
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

    upload(event) {
      const file = event.target.files[0];
      const filePath = 'photos';
      const ref = this.afs.ref(filePath);
      const task = ref.put(file, { customMetadata: { teamNumber: this.model.teamName } });
    }
  }


