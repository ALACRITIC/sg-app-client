/**
 * Created by hgeorgiev on 8/22/16.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostsService} from "../../../shared/services/posts.service";
import {Post} from "../../../shared/models/post.model";
import {Router} from "@angular/router";
import {Listing} from "../../../shared/listing.model";


@Component({
    selector: 'news-carousel',
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: 'carousel.template.pug',
    styleUrls:['./carousel.styles.scss']
})
export class NewsCarousel implements OnInit{
    public myInterval:number = 5000;
    public noWrapSlides:boolean = false;
    public slides:Array<any> = [];

    constructor(private _post:PostsService,private _router:Router) {}

    ngOnInit() {
        this._post.getFeatured(1,5).then(result => {
            this.slides = result['Items'];
        })
    }
    public goToProfile(post:Post){
        this._router.navigate(['/post',  post.id, post.title.replace(/ /g, "_") ]);
    }
}
