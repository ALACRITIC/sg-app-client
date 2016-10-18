/**
 * Created by hgeorgiev on 8/22/16.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostsService} from "../../shared/services/posts.service";
import {Post} from "../../shared/models/post.model";


@Component({
    selector: 'news-carousel',
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './carousel.template.pug',
    styleUrls: ['./carousel.styles.css']
})
export class NewsCarousel implements OnInit{
    public myInterval:number = 5000;
    public noWrapSlides:boolean = false;
    public slides:Array<Post> = [];

    constructor(private _post:PostsService) {

    }
    ngOnInit() {
        console.log("we got the carousel");
        this._post.getFeatured(1,5).then(result => {
            console.log(this.slides);
            this.slides = result.Items;
        })
    }
}
