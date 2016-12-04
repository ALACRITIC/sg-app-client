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
var ApplicationSubmissionsService = (function () {
    function ApplicationSubmissionsService(http, api) {
        this.http = http;
        this.api = api;
        this.authToken = localStorage.getItem('auth_token');
    }
    ApplicationSubmissionsService.prototype.query = function (page, itemsPerPage, templateId) {
        return this.http.get(this.api + ("/application_templates/" + templateId + "/application_submissions"), { search: queryconstructor_1.QueryConstructor(page, itemsPerPage) })
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
    ApplicationSubmissionsService.prototype.get = function (templateId, submissionId) {
        return this.http.get(this.api + ("/application_templates/" + templateId + "/application_submissions/" + submissionId))
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApplicationSubmissionsService.prototype.deleteSubmission = function (templateId, submissionId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
        var url = this.api + ("/application_templates/" + templateId + "/application_submissions/" + submissionId);
        return this.http.delete(url, { headers: headers })
            .toPromise()
            .then(function () { return null; });
    };
    ApplicationSubmissionsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('ApiEndpoint'))
    ], ApplicationSubmissionsService);
    return ApplicationSubmissionsService;
}());
exports.ApplicationSubmissionsService = ApplicationSubmissionsService;
