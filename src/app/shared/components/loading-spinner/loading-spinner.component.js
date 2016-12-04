"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Centroida-2 on 10/29/2016.
 */
var core_1 = require('@angular/core');
var LoadingSpinner = (function () {
    function LoadingSpinner() {
    }
    LoadingSpinner = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.Emulated,
            selector: 'loading-spinner',
            template: "<i class=\"fa fa-circle-o-notch fa-spin fa-5x fa-fw loading\"></i>\n<span class=\"sr-only\">Loading...</span>",
            styles: [".loading {\n    font-size: 4em;\n    text-align: center;\n    width: 100%;\n    vertical-align: center;\n}"]
        })
    ], LoadingSpinner);
    return LoadingSpinner;
}());
exports.LoadingSpinner = LoadingSpinner;
