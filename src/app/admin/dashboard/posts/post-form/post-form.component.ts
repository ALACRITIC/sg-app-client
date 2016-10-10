/**
 * Created by Taulant on 10/5/2016.
 */
import { Component,EventEmitter,SimpleChange,OnChanges,Output,Input  } from '@angular/core';
import {Post} from "../../../../shared/models/post.model";
import { FileUploader, FileItem} from "../../../../../../node_modules/ng2-file-upload/ng2-file-upload";
import '../ckeditor.loader.ts';
import {PostsService} from "../../../../shared/services/posts.service";

@Component({
    selector: 'post-form',
    templateUrl: 'post-form.template.html',
    styleUrls:['../../shared/styles/styles.css'],
})
export class AdminPostForm implements OnChanges {
    @Input() inputPost:Post;
    @Output() outputPost = new EventEmitter();

    public post:Post;
    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;

    public isEditing:boolean;
    public isChanging:boolean;

    constructor(private _service:PostsService) {
        this.isEditing = false;
        this.isChanging = false;
        this.post = new Post();
        this.uploader = new FileUploader({url:'someurl'})

    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputPost'].currentValue != undefined) {
            this.isEditing= true;
            this.post = changes['inputPost'].currentValue;
        }
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    onChange() {}

    onReady() {}

    updatePost(){
        if(this.uploader.queue.length !== 0){
            var image:FileItem =this.uploader.queue[0]._file;
            var imageName =this.uploader.queue[0].file.name;
        }
        //todo
        this.outputPost.emit({
            post:this.post,
            image:image,
            imageName:imageName
        });
        this.post = new Post();
        this.uploader = new FileUploader({url:'someurl'});
        this.isEditing = false;
    }

    addPost(){
        var image:FileItem =this.uploader.queue[0]._file;
        var imageName =this.uploader.queue[0].file.name;
        this._service.save(this.post, image,imageName).subscribe((res) => {
            this.post = res;
        });
    }

}