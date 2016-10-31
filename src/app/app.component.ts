/*
 * Angular 2 decorators and services
 */



import { Component, ViewEncapsulation } from '@angular/core';
import { Event as RouterEvent } from '@angular/router'
import {Router, NavigationStart, NavigationEnd} from "@angular/router";


@Component({
  // encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  styleUrls:require( ['./app.styles.scss']),
  template: `
 <div class="loading-overlay" *ngIf="loading"> 
   <i class="fa fa-circle-o-notch fa-spin fa-5x fa-fw text-center"></i>
   <span class="sr-only">Loading...</span>
 </div>
<router-outlet></router-outlet>`
})
export class App {
  name = 'AUBG Student Government';
  url = 'https://twitter.com/AngularClass';

  loading:boolean = true;

  constructor(public router:Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent): void => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
        this.loading = false;
    }
    // Additionally there's NavigationCancel and NavigationError
  }


}

