"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hgeorgiev on 8/22/16.
 */
var core_1 = require('@angular/core');
var NewsCarousel = (function () {
    function NewsCarousel(_post, _router) {
        this._post = _post;
        this._router = _router;
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.slides = [];
    }
    NewsCarousel.prototype.ngOnInit = function () {
        var _this = this;
        this._post.getFeatured(1, 5).then(function (result) {
            _this.slides = result.Items;
        });
    };
    NewsCarousel.prototype.goToProfile = function (post) {
        this._router.navigate(['/post', post.id, post.title.replace(/ /g, "_")]);
    };
    NewsCarousel = __decorate([
        core_1.Component({
            selector: 'news-carousel',
            encapsulation: core_1.ViewEncapsulation.Emulated,
            templateUrl: 'carousel.template.pug',
            style: require(['./carousel.styles.scss'])
        })
    ], NewsCarousel);
    return NewsCarousel;
}());
exports.NewsCarousel = NewsCarousel;
