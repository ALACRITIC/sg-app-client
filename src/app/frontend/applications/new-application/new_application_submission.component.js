"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var application_template_model_1 = require("../../../shared/models/application_template.model");
var ng2_file_upload_1 = require("ng2-file-upload/ng2-file-upload");
var application_submissions_service_1 = require("../../../shared/services/application_submissions.service");
var NewApplicationSubmission = (function () {
    function NewApplicationSubmission(_templateService, api) {
        this._templateService = _templateService;
        this.api = api;
        this.hasBaseDropZoneOver = false;
        this.downloaded = false;
        this.template = new application_template_model_1.ApplicationTemplate();
    }
    NewApplicationSubmission.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var templateChange = changes.template.currentValue;
        if (templateChange) {
            this._templateService.get(templateChange.id).then(function (template) {
                _this.template = template;
                _this.uploader = new ng2_file_upload_1.FileUploader({ url: _this.api + ("/application_templates/" + _this.template.id + "/application_submissions") });
            });
        }
    };
    NewApplicationSubmission.prototype.fileOverBase = function (e) {
        this.downloaded = true;
        this.hasBaseDropZoneOver = e;
        event.stopPropagation();
    };
    NewApplicationSubmission.prototype.sendSubmission = function (item) {
        var _this = this;
        this.downloaded = true;
        item.alias = "application_submission[document]";
        item.upload();
        this.uploader.onCompleteAll = function () {
            _this.uploader.clearQueue();
            _this.downloaded = false;
        };
        event.stopPropagation();
    };
    __decorate([
        core_1.Input()
    ], NewApplicationSubmission.prototype, "template", void 0);
    NewApplicationSubmission = __decorate([
        core_1.Component({
            selector: 'new-application-submission',
            encapsulation: core_1.ViewEncapsulation.Emulated,
            template: require('./new_application_submission.template.pug'),
            providers: [application_submissions_service_1.ApplicationSubmissionsService],
            styles: require(['./new_application_submission.styles.scss'])
        }),
        __param(1, core_1.Inject('ApiEndpoint'))
    ], NewApplicationSubmission);
    return NewApplicationSubmission;
}());
exports.NewApplicationSubmission = NewApplicationSubmission;
