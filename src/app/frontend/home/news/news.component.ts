/**
 * Created by hgeorgiev on 8/26/16.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostsService} from "../../../shared/services/posts.service";
import {Post} from "../../../shared/models/post.model";
import {Router} from "@angular/router";


@Component({
    selector: 'front-news',
    templateUrl: 'news.template.pug',
    styleUrls:['./news.styles.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FrontNews implements OnInit {
    posts:Array<Post>;
    constructor(private _post:PostsService,private _router:Router) {}

    ngOnInit() {
        this._post.getRegular(1, 10).subscribe(res => { this.posts = res.Items } , err => {});
    }
    public goToProfile(post:Post){
        this._router.navigate(['/post',  post.id, post.title.replace(/ /g, "_") ]);
    }


}