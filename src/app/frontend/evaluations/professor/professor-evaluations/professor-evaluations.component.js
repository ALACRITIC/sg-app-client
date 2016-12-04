"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Taulant on 9/21/2016.
 */
var core_1 = require('@angular/core');
var evaluations_service_1 = require("../../../../shared/services/evaluations.service");
var evaluation_model_1 = require("../../../../shared/models/evaluation.model");
var listing_model_1 = require("../../../../shared/listing.model");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var ProfessorEvaluationsComponent = (function () {
    function ProfessorEvaluationsComponent(_service, _route) {
        this._service = _service;
        this._route = _route;
        this.currentPage = 1;
        this.listing = new listing_model_1.Listing();
        this.evaluation = new evaluation_model_1.Evaluation();
    }
    ProfessorEvaluationsComponent.prototype.pageChanged = function (event) {
        this.loadEvaluations(event.page, event.itemsPerPage);
    };
    ProfessorEvaluationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            //+params['id'] is professor id
            _this.id = +params['id'];
            _this.loadEvaluations(1, 5, _this.id);
        });
    };
    ProfessorEvaluationsComponent.prototype.selectEval = function (evaluation) {
        //show more / show less toggle
        if (this.selectedEvaluation === evaluation) {
            this.selectedEvaluation = undefined;
        }
        else {
            this.selectedEvaluation = evaluation;
        }
    };
    ProfessorEvaluationsComponent.prototype.loadEvaluations = function (page, itemsPerPage) {
        var _this = this;
        this._service.query(page, itemsPerPage, this.id).then(function (listing) {
            _this.currentPage = page;
            _this.listing = listing;
        });
    };
    ProfessorEvaluationsComponent = __decorate([
        core_1.Component({
            selector: 'professor-evaluations',
            templateUrl: 'professor-evaluations.template.pug',
            styles: require(['./professor-evaluations.styles.scss']),
            providers: [evaluations_service_1.EvaluationsService],
            directives: [ng2_bootstrap_1.PAGINATION_DIRECTIVES]
        })
    ], ProfessorEvaluationsComponent);
    return ProfessorEvaluationsComponent;
}());
exports.ProfessorEvaluationsComponent = ProfessorEvaluationsComponent;
