"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var post_model_1 = require("../../shared/models/post.model");
var posts_service_1 = require("../../shared/services/posts.service");
var FrontPostDetail = (function () {
    function FrontPostDetail(_service, _route) {
        this._service = _service;
        this._route = _route;
        this.post = new post_model_1.Post();
    }
    FrontPostDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.getPost(params['id']);
        });
    };
    FrontPostDetail.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FrontPostDetail.prototype.getPost = function (id) {
        var _this = this;
        this._service.get(id).then(function (res) { return _this.post = res; });
    };
    FrontPostDetail = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.Emulated,
            selector: 'post-detail',
            providers: [posts_service_1.PostsService],
            template: require('./post-detail.template.pug'),
            styles: require(['./post-detail.styles.scss'])
        })
    ], FrontPostDetail);
    return FrontPostDetail;
}());
exports.FrontPostDetail = FrontPostDetail;
