/**
 * Created by hgeorgiev on 8/13/16.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import {Observable} from 'rxjs/Rx';
import { ActivatedRouteSnapshot , RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private router: Router, private user: UserService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if(this.user.isLoggedIn()) {

            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}

