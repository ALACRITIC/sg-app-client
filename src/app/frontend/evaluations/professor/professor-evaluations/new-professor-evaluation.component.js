"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Centroida-2 on 10/28/2016.
 */
var core_1 = require('@angular/core');
var evaluation_model_1 = require("../../../../shared/models/evaluation.model");
var NewProfessorEvaluation = (function () {
    function NewProfessorEvaluation(_service, _route) {
        this._service = _service;
        this._route = _route;
        this.outputEvaluation = new core_1.EventEmitter();
        this.evaluation = new evaluation_model_1.Evaluation();
    }
    NewProfessorEvaluation.prototype.addEvaluation = function (evaluation) {
        var _this = this;
        //getting professor id with route params and assigning it to addEvaluation from service
        this._route.params.subscribe(function (params) {
            evaluation.professor_id = +params['id'];
            _this._service.addEvaluation(evaluation, +params['id']).then(function (res) {
                _this.evaluation = res;
                _this.outputEvaluation.emit(_this.evaluation);
                _this.evaluation = new evaluation_model_1.Evaluation();
            });
        });
    };
    __decorate([
        core_1.Output()
    ], NewProfessorEvaluation.prototype, "outputEvaluation", void 0);
    NewProfessorEvaluation = __decorate([
        core_1.Component({
            selector: 'new-evaluation',
            template: require('./new-evaluation.template.pug'),
            styles: require(['./new-evaluation.styles.scss'])
        })
    ], NewProfessorEvaluation);
    return NewProfessorEvaluation;
}());
exports.NewProfessorEvaluation = NewProfessorEvaluation;
