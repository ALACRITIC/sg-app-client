import {Component, ViewEncapsulation , OnInit} from '@angular/core';
import {Listing} from '../../../shared/listing.model'
import {PostsService} from "../../../shared/services/posts.service";
import {Post} from "../../../shared/models/post.model";


@Component({
    encapsulation: ViewEncapsulation.None,

    providers: [PostsService],
    template: require('./posts.template.html'),
    styleUrls: ['./posts.styles.css']
})
export class AdminPosts implements OnInit{
    listing: Listing<Post>;
    public currentPage:number = 1;
    public post:Post;

    constructor(private _service:PostsService) {
        this.post = new Post();
    }

    ngOnInit() {
        this.listing = new Listing<Post>();
        this.loadPosts(1, 10);

    }



    public pageChanged(event:any):void {
        this.loadPosts(event.page, event.itemsPerPage);
    };


    private loadPosts(page:number, itemsPerPage: number) {

        this._service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }
    addPost($event){
        this._service.save($event.post, $event.image,$event.imageName).subscribe((res) => {
            this.post = res;
            this.loadPosts(1, 10);
        });

    }


}
