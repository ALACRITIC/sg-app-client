/**
 * Created by hgeorgiev on 8/26/16.
 */
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
var http_1 = require('@angular/http');
var listing_model_1 = require('../listing.model');
var queryconstructor_1 = require('../queryconstructor');
var Rx_1 = require('rxjs/Rx');
var PostsService = (function () {
    function PostsService(http, api) {
        this.http = http;
        this.api = api;
        this.authToken = localStorage.getItem('auth_token');
        this.postsUrl = this.api + '/posts';
    }
    //get all POSTS
    PostsService.prototype.query = function (page, itemsPerPage) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.postsUrl, { search: queryconstructor_1.QueryConstructor(page, itemsPerPage) }, options)
            .toPromise()
            .then(function (res) {
            var body = res.json();
            var listing = new listing_model_1.Listing();
            listing.collection = body.Items;
            listing.count = body.Count;
            return listing;
        })
            .catch(this.handleError);
    };
    //get Featured
    PostsService.prototype.getFeatured = function (page, itemsPerPage) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.postsUrl + '/featured', { search: queryconstructor_1.QueryConstructor(page, itemsPerPage) }, options)
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    PostsService.prototype.getRegular = function (page, itemsPerPage) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.postsUrl + '/regular', { search: queryconstructor_1.QueryConstructor(page, itemsPerPage) }, options)
            .map(function (res) { return res.json(); });
    };
    //get POST
    PostsService.prototype.get = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.postsUrl + ("/" + id), options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PostsService.prototype.deletePost = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
        var url = this.postsUrl + "/" + id;
        return this.http.delete(url, { headers: headers })
            .toPromise()
            .then(function () { return null; });
    };
    //post POST
    PostsService.prototype.save = function (post, file, fileName) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("post[image]", file, fileName);
            formData.append("post[title]", post.title);
            formData.append("post[content]", post.content);
            formData.append("post[featured]", post.featured);
            formData.append("post[styles]", post.styles);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open("POST", _this.postsUrl, true);
            xhr.setRequestHeader('Authorization', _this.authToken);
            xhr.send(formData);
        });
    };
    PostsService.prototype.edit = function (post, file, fileName, id) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var formData = new FormData();
            var url = _this.postsUrl + "/" + id;
            var xhr = new XMLHttpRequest();
            formData.append("post[image]", file, fileName);
            formData.append("post[title]", post.title);
            formData.append("post[content]", post.content);
            formData.append("post[featured]", post.featured);
            formData.append("post[styles]", post.styles);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open("PUT", url, true);
            xhr.setRequestHeader('Authorization', _this.authToken);
            xhr.send(formData);
        });
    };
    PostsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('ApiEndpoint'))
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
