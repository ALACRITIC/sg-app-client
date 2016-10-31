import  { Component, ViewEncapsulation} from '@angular/core';
import {NavRoute} from "./navroute.model";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.template.pug',
    styleUrls:require(['./navbar.styles.scss']),
    encapsulation: ViewEncapsulation.None
})

export class FrontNavbar {
    public navbarRoutes:Array<NavRoute>;
    public isCollapsed: boolean = true;
    constructor() {
        this.navbarRoutes = [
            {
                name: 'Home',
                url: '/home'
            },
            {
                name: 'Members',
                url: '/members'
            },
            {
                name: 'Clubs',
                url: '/clubs'
            },
            {
                name: 'Internships',
                url: '/internships'
            },
            {
                name: 'Applications',
                url: '/applications'
            },
            {
                name: 'Evaluations',
                url: '/evaluations'
            }
        ]
    }
}