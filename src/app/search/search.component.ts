import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

export const firebaseConfig = environment.firebaseConfig;


import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { RouteReuseStrategy } from '@angular/router';
import { RouterService } from '../router.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy {

  teamNumber: number;
  edit: boolean;
  teams: Team[];
  team: Team = null;
  queryPassed = true;
  constructor(private teamService: TeamService, public routerService: RouterService) { }
  private teamSub: Subscription;
  ngOnInit() {
    this.teamSub = this.teamService.getTeams().subscribe(t => {
      this.teams = t;
    });
  }

  onSubmit() {
    this.teams.forEach(team => {
      if (team.teamNumber === this.teamNumber) {
        this.team = team;
      } else {
        this.team = null;
      }
    });
    console.log(this.team);
  }

  ngOnDestroy(): void {
    if (this.teamSub != null) {
      this.teamSub.unsubscribe();
    }
    console.log('destroyed');
  }

  deleteTeam(event, team) {
    this.teamService.deleteTeam(team);
    console.log(`deleting ${team.id}`);
    this.team = null;
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  diagonostic() {
  }

}
