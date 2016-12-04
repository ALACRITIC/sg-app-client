"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var posts_service_1 = require("../../shared/services/posts.service");
var Home = (function () {
    // TypeScript public modifiers
    function Home() {
        // Set our default values
        this.date = new Date();
        this.localState = { value: '' };
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            providers: [posts_service_1.PostsService],
            style: require(['./home.style.scss']),
            templateUrl: './home.template.pug'
        })
    ], Home);
    return Home;
}());
exports.Home = Home;
