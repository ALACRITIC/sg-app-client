"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var listing_model_1 = require("../../shared/listing.model");
var clubs_service_1 = require("../../shared/services/clubs.service");
var FrontClubs = (function () {
    function FrontClubs(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    FrontClubs.prototype.ngOnInit = function () {
        var _this = this;
        this.listing = new listing_model_1.Listing();
        this._service.query(1, 999).then(function (listing) { return _this.listing = listing; }); //load all
        if (this.listing) {
        }
    };
    FrontClubs.prototype.goToProfile = function (club) {
        this._router.navigate(['/club', club.id, club.name.replace(/ /g, "_")]);
    };
    FrontClubs = __decorate([
        core_1.Component({
            selector: 'clubs',
            providers: [clubs_service_1.ClubsService],
            templateUrl: './clubs.template.pug',
            style: require(['./clubs.styles.scss']),
            encapsulation: core_1.ViewEncapsulation.Emulated
        })
    ], FrontClubs);
    return FrontClubs;
}());
exports.FrontClubs = FrontClubs;
