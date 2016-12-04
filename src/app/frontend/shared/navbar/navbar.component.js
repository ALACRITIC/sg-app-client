"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var FrontNavbar = (function () {
    function FrontNavbar() {
        this.isCollapsed = true;
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
        ];
    }
    FrontNavbar = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: './navbar.template.pug',
            styleUrls: require(['./navbar.styles.scss']),
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], FrontNavbar);
    return FrontNavbar;
}());
exports.FrontNavbar = FrontNavbar;
