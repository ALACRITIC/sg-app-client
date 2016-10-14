/**
 * Created by hgeorgiev on 8/22/16.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostsService} from "../../shared/services/posts.service";
import {Post} from "../../shared/models/post.model";




@Component({
    selector: 'carousel',
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './carousel.template.pug',
    styleUrls: ['./carousel.styles.css']
})
export class Carousel implements OnInit{
    public myInterval:number = 5000;
    public noWrapSlides:boolean = false;
    public slides:Array<Post> = [];

    public constructor(private _post:PostsService) {

    }
    ngOnInit() {
        this._post.getFeatured(1,5).then(result => {
            console.log(this.slides);
            this.slides = result.Items;
        })
    }






}
