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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var queryconstructor_1 = require("../queryconstructor");
var listing_model_1 = require("../listing.model");
var Rx_1 = require('rxjs/Rx');
var InternshipsService = (function () {
    function InternshipsService(http, api) {
        this.http = http;
        this.api = api;
        this.internshipsUrl = this.api + '/internships';
        this.authToken = localStorage.getItem('auth_token');
    }
    InternshipsService.prototype.query = function (page, itemsPerPage) {
        return this.http.get(this.internshipsUrl, { search: queryconstructor_1.QueryConstructor(page, itemsPerPage) })
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
    InternshipsService.prototype.get = function (id) {
        return this.http.get(this.internshipsUrl + ("" + id))
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    InternshipsService.prototype.deleteInternship = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
        var url = this.internshipsUrl + "/" + id;
        return this.http.delete(url, { headers: headers })
            .toPromise()
            .then(function () { return null; });
    };
    InternshipsService.prototype.addInternship = function (internship, file) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("internship[logo]", file);
            formData.append("internship[link]", internship.link);
            formData.append("internship[description]", internship.description);
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
            xhr.open("POST", _this.internshipsUrl, true);
            xhr.setRequestHeader('Authorization', _this.authToken);
            xhr.send(formData);
        });
    };
    InternshipsService.prototype.updateInternship = function (internship, file, id) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var url = _this.internshipsUrl + "/" + id;
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            if (file !== undefined) {
                formData.append("internship[logo]", file);
            }
            formData.append("internship[link]", internship.link);
            formData.append("internship[description]", internship.description);
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
    InternshipsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('ApiEndpoint'))
    ], InternshipsService);
    return InternshipsService;
}());
exports.InternshipsService = InternshipsService;
