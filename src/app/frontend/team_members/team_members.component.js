"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var team_members_service_1 = require("../../shared/services/team_members.service");
var listing_model_1 = require("../../shared/listing.model");
var FrontTeamMembers = (function () {
    function FrontTeamMembers(_service) {
        this._service = _service;
        this.currentPage = 1;
    }
    FrontTeamMembers.prototype.ngOnInit = function () {
        this.listing = new listing_model_1.Listing();
        this.loadMembers(1, 10);
    };
    FrontTeamMembers.prototype.pageChanged = function (event) {
        this.loadMembers(event.page, event.itemsPerPage);
    };
    ;
    FrontTeamMembers.prototype.expandClick = function (member) {
        this.selectedMember = member;
        event.stopPropagation();
    };
    FrontTeamMembers.prototype.loadMembers = function (page, itemsPerPage) {
        var _this = this;
        this._service.query(page, itemsPerPage).then(function (listing) {
            _this.listing = listing;
            _this.currentPage = page;
        });
    };
    FrontTeamMembers = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.Emulated,
            selector: 'team-members',
            providers: [team_members_service_1.TeamMembersService],
            templateUrl: './team_members.template.pug',
            style: require(['./team-members.styles.scss'])
        })
    ], FrontTeamMembers);
    return FrontTeamMembers;
}());
exports.FrontTeamMembers = FrontTeamMembers;
