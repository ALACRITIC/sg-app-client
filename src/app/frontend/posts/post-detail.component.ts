import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Post} from "../../shared/models/post.model";
import {PostsService} from "../../shared/services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'post-detail',
    providers: [PostsService],
    template:require ('./post-detail.template.pug'),
    styleUrls:['./post-detail.styles.scss']
})

export class FrontPostDetail implements OnInit, OnDestroy{
    public post:Post;
    public sub:any;

    constructor(private _service:PostsService, private _route:ActivatedRoute) {
        this.post = new Post();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
           this.getPost(params['id']);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPost(id:string){
        this._service.get(id).then(res => this.post = res);
    }
}