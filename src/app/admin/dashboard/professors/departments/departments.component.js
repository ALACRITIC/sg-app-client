"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AdminProfessorDepartments = (function () {
    function AdminProfessorDepartments(_service) {
        this._service = _service;
        this.filteredDept = new core_1.EventEmitter();
        this.outputDepts = new core_1.EventEmitter();
        this.selectDept = "Select a Department";
    }
    AdminProfessorDepartments.prototype.ngOnInit = function () {
        var _this = this;
        this._service.departments().then(function (res) {
            _this.departments = res;
            _this.departments.unshift("ShowAll");
            _this.outputDepts.emit(_this.departments);
        });
    };
    AdminProfessorDepartments.prototype.selectItem = function (department) {
        this.selectDept = department;
        this.filteredDept.emit(department);
    };
    __decorate([
        core_1.Output()
    ], AdminProfessorDepartments.prototype, "filteredDept", void 0);
    __decorate([
        core_1.Output()
    ], AdminProfessorDepartments.prototype, "outputDepts", void 0);
    AdminProfessorDepartments = __decorate([
        core_1.Component({
            selector: 'professor-departments',
            encapsulation: core_1.ViewEncapsulation.None,
            template: require('./departments.template.pug'),
            styleUrls: ['./dept.style.css']
        })
    ], AdminProfessorDepartments);
    return AdminProfessorDepartments;
}());
exports.AdminProfessorDepartments = AdminProfessorDepartments;
