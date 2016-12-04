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
var professor_model_1 = require("../../../../shared/models/professor.model");
var professors_service_1 = require("../../../../shared/services/professors.service");
var professor_evaluations_component_1 = require("../professor-evaluations/professor-evaluations.component");
var ProfessorProfileComponent = (function () {
    function ProfessorProfileComponent(_profService, _route) {
        this._profService = _profService;
        this._route = _route;
        this.professorName = new core_1.EventEmitter();
        this.professor = new professor_model_1.Professor();
    }
    ProfessorProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.loadProfessor(params['id']);
        });
    };
    ProfessorProfileComponent.prototype.loadProfessor = function (id) {
        var _this = this;
        this._profService.get(id).then(function (professor) {
            _this.professor = professor;
            _this.professorName.emit({ professorName: professor.name });
        });
    };
    __decorate([
        core_1.Output()
    ], ProfessorProfileComponent.prototype, "professorName", void 0);
    ProfessorProfileComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.Emulated,
            selector: 'professor-profile',
            templateUrl: 'professor-profile.template.pug',
            styles: require(['./professor-profile.styles.scss']),
            providers: [professors_service_1.ProfessorsService],
            directives: [professor_evaluations_component_1.ProfessorEvaluationsComponent]
        })
    ], ProfessorProfileComponent);
    return ProfessorProfileComponent;
}());
exports.ProfessorProfileComponent = ProfessorProfileComponent;
