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
var Rx_1 = require('rxjs/Rx');
var ProfessorsService = (function () {
    function ProfessorsService(http, api) {
        this.http = http;
        this.api = api;
        this.authToken = localStorage.getItem('auth_token');
        this.professorsUrl = this.api + '/professors';
    }
    ProfessorsService.prototype.query = function (page, itemsPerPage, department) {
        var params = queryconstructor_1.QueryConstructor(page, itemsPerPage);
        if (department)
            params.set('department', department);
        return this.http.get(this.professorsUrl, { search: params })
            .toPromise()
            .then(function (res) {
            var body = res.json();
            var listing = new listing_model_1.Listing();
            console.log('params', params);
            listing.collection = body.Items;
            listing.count = body.Count;
            return listing;
        })
            .catch(this.handleError);
    };
    ProfessorsService.prototype.get = function (id) {
        return this.http.get(this.professorsUrl + ("/" + id))
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProfessorsService.prototype.search = function (name) {
        var params = new http_1.URLSearchParams();
        params.set('starts_with', name);
        return this.http.get(this.professorsUrl + "?", { search: params })
            .toPromise()
            .then(function (res) {
            var body = res.json();
            var items = body.Items;
            console.log(items, 'items');
            return items;
        });
    };
    ProfessorsService.prototype.departments = function () {
        return this.http.get(this.professorsUrl + '/departments')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProfessorsService.prototype.deleteProfessor = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
        var url = this.professorsUrl + "/" + id;
        return this.http.delete(url, { headers: headers })
            .toPromise()
            .then(function () { return null; });
    };
    ProfessorsService.prototype.addProfessor = function (professor, file) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("professor[photo]", file);
            formData.append("professor[name]", professor.name);
            formData.append("professor[department]", professor.department);
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
            xhr.open("POST", _this.professorsUrl, true);
            xhr.setRequestHeader('Authorization', _this.authToken);
            xhr.send(formData);
        });
    };
    ProfessorsService.prototype.updateProfessor = function (professor, file, id) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var url = _this.professorsUrl + "/" + id;
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            if (file !== undefined) {
                formData.append("professor[photo]", file);
            }
            formData.append("professor[name]", professor.name);
            formData.append("professor[department]", professor.department);
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
    ProfessorsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('ApiEndpoint'))
    ], ProfessorsService);
    return ProfessorsService;
}());
exports.ProfessorsService = ProfessorsService;
