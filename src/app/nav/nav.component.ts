import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  paths = [{
    name: 'Teams',
    path: 'teams'
  }, {
   name: 'Post',
   path: 'post'
 }, {
   name: 'Search',
   path: 'search'
 }, {
   name: 'Matches',
   path: 'matches'
 }];

  constructor(public routerService: RouterService) { }

  ngOnInit() {
  }

}
