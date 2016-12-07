"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hgeorgiev on 9/10/16.
 */
var core_1 = require('@angular/core');
var listing_model_1 = require("../../shared/listing.model");
var professors_service_1 = require("../../shared/services/professors.service");
var FrontProfessors = (function () {
    function FrontProfessors(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.currentPage = 1;
    }
    FrontProfessors.prototype.ngOnInit = function () {
        this.listing = new listing_model_1.Listing();
        this.loadProfessors(1, 10);
    };
    ;
    FrontProfessors.prototype.pageChanged = function ($event) {
        this.loadProfessors($event.page, $event.itemsPerPage);
    };
    ;
    FrontProfessors.prototype.filterDepts = function (department) {
        //if Show All is selected return loading all the professors
        if (department === "ShowAll") {
            this.loadProfessors(1, 10);
        }
        this.loadProfessors(1, 10, department);
    };
    FrontProfessors.prototype.goToProfessor = function ($event) {
        this._router.navigate([("professor/" + $event.id)]);
    };
    FrontProfessors.prototype.goToProfile = function (professor) {
        this._router.navigate(['/professor', professor.id, professor.name.replace(/ /g, "_")]);
    };
    //-------------fetching the list of departments through outputDepts event------------>
    FrontProfessors.prototype.sideDepts = function ($event) {
        this.departments = $event;
    };
    FrontProfessors.prototype.loadDepartments = function (page, itemsPerPage, department) {
        this.loadProfessors(page, itemsPerPage, department);

        this.selectedDept = department;
    };
    FrontProfessors.prototype.loadProfessors = function (page, itemsPerPage, department) {
        var _this = this;
        this._service.query(page, itemsPerPage, department).then(function (listing) {
            _this.listing = listing;
            _this.currentPage = page;
        });
    };
    FrontProfessors = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.Emulated,
            selector: 'team-members',
            providers: [professors_service_1.ProfessorsService],
            template: require('./evaluations.template.pug'),
            style: require(['./evaluations.styles.scss'])
        })
    ], FrontProfessors);
    return FrontProfessors;
}());
exports.FrontProfessors = FrontProfessors;
