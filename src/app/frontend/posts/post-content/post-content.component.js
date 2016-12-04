"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Centroida-2 on 10/31/2016.
 */
var core_1 = require('@angular/core');
var FrontPostContent = (function () {
    function FrontPostContent() {
    }
    __decorate([
        core_1.Input()
    ], FrontPostContent.prototype, "postContent", void 0);
    FrontPostContent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.Emulated,
            selector: 'post-content',
            template: require('./post-content.template.pug'),
            styles: require(['./post-content.styles.scss'])
        })
    ], FrontPostContent);
    return FrontPostContent;
}());
exports.FrontPostContent = FrontPostContent;
