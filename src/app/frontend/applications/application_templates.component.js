"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var listing_model_1 = require("../../shared/listing.model");
var application_templates_service_1 = require("../../shared/services/application_templates.service");
var accordion_1 = require('ng2-bootstrap/components/accordion');
var FrontApplicationTemplates = (function () {
    function FrontApplicationTemplates(_service) {
        this._service = _service;
        this.oneAtATime = true;
    }
    FrontApplicationTemplates.prototype.ngOnInit = function () {
        var _this = this;
        this.listing = new listing_model_1.Listing();
        this._service.query(1, 999).then(function (listing) { return _this.listing = listing; }); //load all
    };
    FrontApplicationTemplates.prototype.selectedTemp = function (application_template) {
        //to toggle font awesome arrow
        if (this.selectedTemplate === application_template) {
            this.selectedTemplate = undefined;
        }
        else {
            this.selectedTemplate = application_template;
        }
    };
    FrontApplicationTemplates = __decorate([
        core_1.Component({
            providers: [application_templates_service_1.ApplicationTemplatesService],
            templateUrl: './application_templates.template.pug',
            styles: require(['./application_templates.styles.scss']),
            encapsulation: core_1.ViewEncapsulation.Emulated,
            providers: [accordion_1.AccordionModule]
        })
    ], FrontApplicationTemplates);
    return FrontApplicationTemplates;
}());
exports.FrontApplicationTemplates = FrontApplicationTemplates;
