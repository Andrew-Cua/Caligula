import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Team } from './team';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getLocaleMonthNames } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamCollection: AngularFirestoreCollection<Team>;
  teams: Observable<Team[]>;
  teamDoc: AngularFirestoreDocument<Team>;
  constructor(public afs: AngularFirestore) {
    this.teamCollection = this.afs.collection('teams', ref => ref.orderBy('teamNumber', 'desc'));
    this.teams = this.teamCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Team;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }


  getTeams() {
    return this.teams;
  }

  addTeam(team: Team) {
   return this.teamCollection.add(team);
  }

  deleteTeam(team: Team) {
    this.teamDoc = this.afs.doc(`teams/${team.id}`);
    this.teamDoc.delete();
  }

  searchTeam(teamNumber: number): any {
    const query = this.afs.collection<Team>('teams', ref => ref.where('teamNumber', '==', teamNumber));
    return query.get().toPromise();
  }

  updateTeam(baseTeam: Team , updateTeam: Team) {
    this.teamDoc = this.afs.doc(`teams/${baseTeam.id}`);
    return this.teamDoc.update(updateTeam);
  }
  }
