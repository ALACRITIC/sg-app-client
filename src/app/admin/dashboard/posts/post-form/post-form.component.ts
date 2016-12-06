/**
 * Created by Taulant on 10/5/2016.
 */
import { Component,EventEmitter,SimpleChange,OnChanges,Output,Input  } from '@angular/core';
import {Post} from "../../../../shared/models/post.model";
import { FileUploader, FileItem} from "../../../../../../node_modules/ng2-file-upload/ng2-file-upload";
import '../ckeditor.loader.ts';
import {PostsService} from "../../../../shared/services/posts.service";
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'post-form',
    templateUrl: 'post-form.template.pug',
    styleUrls:['../../shared/styles/styles.css'],
})
export class AdminPostForm implements OnChanges {
    @Input() inputPost:Post;
    @Output() outputPost = new EventEmitter();

    public form:FormGroup;
    public title:AbstractControl;
    public styles:AbstractControl;
    public featured:AbstractControl;

    public post:Post;
    public uploader:FileUploader;
    public isEditing:boolean;

    constructor(private _service:PostsService,fb:FormBuilder,private _router:Router) {
        this.isEditing = false;
        this.post = new Post();
        this.uploader = new FileUploader({url:'someurl'});

        this.form = fb.group({
            'title': ['', Validators.compose([Validators.required])],
            'styles': ['', Validators.compose([Validators.required])],
            'featured': ['', Validators.nullValidator()]
        });
        this.title = this.form.controls['title'];
        this.styles = this.form.controls['styles'];
        this.featured = this.form.controls['featured'];
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputPost'].currentValue != undefined) {
            this.isEditing= true;
            this.post = changes['inputPost'].currentValue;
        }
    }

    onChange() {}

    onReady() {}

    updatePost(){
        if(this.uploader.queue.length !== 0){
            var image:FileItem =this.uploader.queue[0]._file;
            var imageName =this.uploader.queue[0].file.name;
        }
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
            this._router.navigate(['admin/dashboard/posts']);
        });
    }

}