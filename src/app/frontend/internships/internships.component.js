"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var listing_model_1 = require("../../shared/listing.model");
var internships_service_1 = require("../../shared/services/internships.service");
var FrontInternships = (function () {
    function FrontInternships(_service) {
        this._service = _service;
        this.currentPage = 1;
        this.maxSize = 5;
        this.listing = new listing_model_1.Listing();
    }
    FrontInternships.prototype.ngOnInit = function () {
        this.loadInternships(1, 10);
    };
    ;
    FrontInternships.prototype.pageChanged = function (event) {
        this.loadInternships(event.page, event.itemsPerPage);
    };
    ;
    FrontInternships.prototype.loadInternships = function (page, itemsPerPage) {
        var _this = this;
        this._service.query(page, itemsPerPage).then(function (listing) {
            _this.listing = listing;
        });
    };
    FrontInternships = __decorate([
        core_1.Component({
            selector: 'team-members',
            providers: [internships_service_1.InternshipsService],
            templateUrl: './internships.template.pug',
            styles: require(['./internships.styles.scss']),
        })
    ], FrontInternships);
    return FrontInternships;
}());
exports.FrontInternships = FrontInternships;
