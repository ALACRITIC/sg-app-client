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
var EvaluationsService = (function () {
    function EvaluationsService(http, api) {
        this.http = http;
        this.api = api;
        this.authToken = localStorage.getItem('auth_token');
    }
    EvaluationsService.prototype.query = function (page, itemsPerPage, professor_id) {
        return this.http.get(this.api + ("/professors/" + professor_id + "/evaluations"), { search: queryconstructor_1.QueryConstructor(page, itemsPerPage) })
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
    EvaluationsService.prototype.deleteEvaluation = function (professor_id, id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
        return this.http.delete(this.api + ("/professors/" + professor_id + "/evaluations") + ("/" + id), { headers: headers })
            .toPromise()
            .then(function () { return null; });
    };
    EvaluationsService.prototype.addEvaluation = function (evaluation, professor_id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(evaluation);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.api + ("/professors/" + professor_id + "/evaluations"), body, options)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    EvaluationsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('ApiEndpoint'))
    ], EvaluationsService);
    return EvaluationsService;
}());
exports.EvaluationsService = EvaluationsService;
