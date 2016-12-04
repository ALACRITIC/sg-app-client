"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Taulant on 9/29/2016.
 */
var core_1 = require('@angular/core');
var club_model_1 = require("../../../shared/models/club.model");
var FrontClubProfile = (function () {
    function FrontClubProfile(_service, _route) {
        this._service = _service;
        this._route = _route;
        this.club = new club_model_1.Club();
    }
    FrontClubProfile.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.loadClub(params['id']);
        });
    };
    FrontClubProfile.prototype.loadClub = function (id) {
        var _this = this;
        this._service.get(id).then(function (club) { return _this.club = club; });
    };
    FrontClubProfile = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.Emulated,
            selector: 'club-profile',
            template: require('./club-profile.template.pug'),
            styles: require(['./club-profile.styles.scss'])
        })
    ], FrontClubProfile);
    return FrontClubProfile;
}());
exports.FrontClubProfile = FrontClubProfile;
