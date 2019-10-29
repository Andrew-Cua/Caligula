import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  goToPage(path: string) {
    this.router.navigate([`${path}`]);
  }

  goToProfile(teamNumber: number) {
    this.router.navigate([`profile`, teamNumber]);
  }
}
