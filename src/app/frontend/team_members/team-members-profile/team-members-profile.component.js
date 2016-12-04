"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Taulant on 10/3/2016.
 */
var core_1 = require('@angular/core');
var team_member_model_1 = require("../../../shared/models/team_member.model");
var team_members_service_1 = require("../../../shared/services/team_members.service");
var FrontTeamMembersProfile = (function () {
    function FrontTeamMembersProfile(_service, _route) {
        this._service = _service;
        this._route = _route;
        this.member = new team_member_model_1.TeamMember();
    }
    FrontTeamMembersProfile.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.loadTeamMember(params['id']);
        });
    };
    FrontTeamMembersProfile.prototype.loadTeamMember = function (id) {
        var _this = this;
        this._service.get(id).then(function (member) {
            _this.member = member;
        });
    };
    FrontTeamMembersProfile = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.Emulated,
            selector: 'team-profile',
            templateUrl: './team-members-profile.template.pug',
            providers: [team_members_service_1.TeamMembersService],
        })
    ], FrontTeamMembersProfile);
    return FrontTeamMembersProfile;
}());
exports.FrontTeamMembersProfile = FrontTeamMembersProfile;
