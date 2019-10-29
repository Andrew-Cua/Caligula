import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { Team } from '../team';
import { QuerySnapshot } from 'angularfire2/firestore';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss']
})

export class TeamProfileComponent implements OnInit, OnDestroy {

  teamNumber: number;
  private sub: any;
  private promise: Promise<firebase.firestore.QuerySnapshot>;
  team: Team = null;
  constructor(private route: ActivatedRoute, private teamSerivce: TeamService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.teamNumber = +params['teamNumber']; // (+) converts string 'id' to a number
       this.promise = this.teamSerivce.searchTeam(this.teamNumber);
       this.promise.then(snapshot => {
         snapshot.forEach(team => {
           const data = team.data() as Team;
           data.id = team.id;
           this.team = data;
         });
       });
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
