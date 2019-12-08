import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PitScoutFormComponent } from './pit-scout-form/pit-scout-form.component';
import { TeamListComponent } from './team-list/team-list.component';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UpdateComponent } from './update/update.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { StandScoutFormComponent } from './stand-scout-form/stand-scout-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PitScoutFormComponent,
    TeamListComponent,
    SearchComponent,
    NavComponent,
    UpdateComponent,
    TeamProfileComponent,
    StandScoutFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
