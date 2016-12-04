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
var ApplicationTemplatesService = (function () {
    function ApplicationTemplatesService(http, api) {
        this.http = http;
        this.api = api;
        this.authToken = localStorage.getItem('auth_token');
        this.applicationTemplatesUrl = this.api + '/application_templates';
    }
    ApplicationTemplatesService.prototype.query = function (page, itemsPerPage) {
        return this.http.get(this.applicationTemplatesUrl, { search: queryconstructor_1.QueryConstructor(page, itemsPerPage) })
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
    ApplicationTemplatesService.prototype.get = function (id) {
        return this.http.get(this.applicationTemplatesUrl + ("/" + id))
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApplicationTemplatesService.prototype.deleteApplicationTemplate = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
        var url = this.applicationTemplatesUrl + "/" + id;
        return this.http.delete(url, { headers: headers })
            .toPromise()
            .then(function () { return null; });
    };
    ApplicationTemplatesService.prototype.addApplicationTemplate = function (application_template, file) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("application_template[name]", application_template.name);
            formData.append("application_template[description]", application_template.description);
            formData.append("application_template[document]", file);
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
            xhr.open("POST", _this.applicationTemplatesUrl, true);
            xhr.setRequestHeader('Authorization', _this.authToken);
            xhr.send(formData);
        });
    };
    ApplicationTemplatesService.prototype.updateApplicationTemplate = function (application_template, file, id) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var url = _this.applicationTemplatesUrl + "/" + id;
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("application_template[name]", application_template.name);
            formData.append("application_template[description]", application_template.description);
            if (file !== undefined) {
                formData.append("application_template[document]", file);
            }
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
    ApplicationTemplatesService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('ApiEndpoint'))
    ], ApplicationTemplatesService);
    return ApplicationTemplatesService;
}());
exports.ApplicationTemplatesService = ApplicationTemplatesService;
