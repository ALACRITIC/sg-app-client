"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Taulant on 10/13/2016.
 */
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
var ProfessorSearch = (function () {
    function ProfessorSearch(_service) {
        var _this = this;
        this._service = _service;
        this.selectedSearchItem = new core_1.EventEmitter();
        this.asyncSelected = '';
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.dataSource = Observable_1.Observable.create(function (observer) {
            observer.next(_this.firstLetter(_this.asyncSelected));
        }).mergeMap(function (token) { return _this._service.search(token); });
    }
    ProfessorSearch.prototype.firstLetter = function (str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    ProfessorSearch.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
        console.log('typeahead loading', e);
    };
    ProfessorSearch.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
        console.log(e);
    };
    ProfessorSearch.prototype.typeaheadOnSelect = function (e) {
        this.selectedSearchItem.emit(e.item);
        console.log('Selected value: ', e.value);
    };
    __decorate([
        core_1.Output()
    ], ProfessorSearch.prototype, "selectedSearchItem", void 0);
    ProfessorSearch = __decorate([
        core_1.Component({
            selector: 'professor-search',
            templateUrl: './professor-search.template.pug',
            styles: require(['./professor-search.styles.scss'])
        })
    ], ProfessorSearch);
    return ProfessorSearch;
}());
exports.ProfessorSearch = ProfessorSearch;
