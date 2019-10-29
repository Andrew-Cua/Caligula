import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PitScoutFormComponent } from './pit-scout-form/pit-scout-form.component';
import { TeamListComponent } from './team-list/team-list.component';
import { SearchComponent } from './search/search.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';


const routes: Routes = [
  {path: '',
   component: HomeComponent
  },
  {
    path: 'post',
    component: PitScoutFormComponent
  },
  {
    path: 'teams',
    component: TeamListComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'profile/:teamNumber',
    component: TeamProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
