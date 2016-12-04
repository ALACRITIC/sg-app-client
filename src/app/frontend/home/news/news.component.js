"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hgeorgiev on 8/26/16.
 */
var core_1 = require('@angular/core');
var FrontNews = (function () {
    function FrontNews(_post, _router) {
        this._post = _post;
        this._router = _router;
    }
    FrontNews.prototype.ngOnInit = function () {
        var _this = this;
        this._post.getRegular(1, 10).subscribe(function (res) { _this.posts = res.Items; }, function (err) { });
    };
    FrontNews.prototype.goToProfile = function (post) {
        this._router.navigate(['/post', post.id, post.title.replace(/ /g, "_")]);
    };
    FrontNews = __decorate([
        core_1.Component({
            selector: 'front-news',
            templateUrl: 'news.template.pug',
            styles: require(['./news.styles.scss']),
            encapsulation: core_1.ViewEncapsulation.Emulated
        })
    ], FrontNews);
    return FrontNews;
}());
exports.FrontNews = FrontNews;
