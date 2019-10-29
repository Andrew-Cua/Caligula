import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

export const firebaseConfig = environment.firebaseConfig;

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { TeamService } from '../team.service';
import { Team } from '../team';
import { TouchSequence } from 'selenium-webdriver';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit, OnDestroy {
  teams: Team[];
  private teamSub: Subscription;
  constructor(private teamService: TeamService, private routerService: RouterService ) {
  }
  ngOnInit() {
    this.teamSub = this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
    });
  }

  ngOnDestroy() {
    this.teamSub.unsubscribe();
  }

  goToTeamProfile(teamNumber: number) {
    this.routerService.goToProfile(teamNumber);
  }

}
