/**
 * Created by hgeorgiev on 8/19/16.
 */
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
var listing_model_1 = require('../listing.model');
var queryconstructor_1 = require('../queryconstructor');
require('rxjs/add/operator/toPromise');
var Rx_1 = require('rxjs/Rx');
var ClubsService = (function () {
    function ClubsService(http, api) {
        this.http = http;
        this.api = api;
        this.authToken = localStorage.getItem('auth_token');
        this.clubsUrl = this.api + '/clubs';
    }
    ClubsService.prototype.query = function (page, itemsPerPage) {
        return this.http.get(this.clubsUrl, { search: queryconstructor_1.QueryConstructor(page, itemsPerPage) })
            .toPromise()
            .then(function (res) {
            var body = res.json();
            var listing = new listing_model_1.Listing();
            listing.collection = body.Items;
            listing.count = body.Count;
            return listing;
        })
            .catch(this.handleError);
    };
    ClubsService.prototype.get = function (id) {
        return this.http.get(this.clubsUrl + ("/" + id))
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ClubsService.prototype.deleteClub = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
        var url = this.clubsUrl + "/" + id;
        return this.http.delete(url, { headers: headers })
            .toPromise()
            .then(function () { return null; });
    };
    ClubsService.prototype.addClub = function (club, file, professor_id) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("club[logo]", file);
            formData.append("club[name]", club.name);
            formData.append("club[president]", club.president);
            formData.append("club[professor_id]", professor_id);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open("POST", _this.clubsUrl, true);
            xhr.setRequestHeader('Authorization', _this.authToken);
            xhr.send(formData);
        });
    };
    ClubsService.prototype.updateClub = function (club, file, id) {
        var _this = this;
        var url = this.clubsUrl + "/" + id;
        return Rx_1.Observable.create(function (observer) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            if (file !== undefined) {
                formData.append("club[logo]", file);
            }
            formData.append("club[name]", club.name);
            formData.append("club[president]", club.president);
            formData.append("club[professor_id]", club.professor_id);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open("PUT", url, true);
            xhr.setRequestHeader('Authorization', _this.authToken);
            xhr.send(formData);
        });
    };
    ClubsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('ApiEndpoint'))
    ], ClubsService);
    return ClubsService;
}());
exports.ClubsService = ClubsService;
