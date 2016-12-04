// /**
//  * Created by hgeorgiev on 8/18/16.
//  */
// //injectorValue.get(API_ENDPOINT);
//
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var UserService = (function () {
    function UserService(http, api) {
        this.http = http;
        this.api = api;
        localStorage.getItem('auth_token');
    }
    UserService.prototype.login = function (email, password) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.api + "/admins_sessions", JSON.stringify({ email: email, password: password }), { headers: headers })
            .toPromise()
            .then(function (res) {
            var body = res.json();
            localStorage.setItem('auth_token', body.auth_token);
            localStorage.setItem('role', body.role);
            return body;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('role');
    };
    UserService.prototype.isLoggedIn = function () {
        var result = localStorage.getItem('auth_token') ? true : false;
        return result;
    };
    UserService.prototype.handleError = function (error) {
        var body = error.json().extract;
        return Promise.reject(body.message || body);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('ApiEndpoint'))
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
