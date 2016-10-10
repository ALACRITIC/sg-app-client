/**
 * Created by Taulant on 10/4/2016.
 */
import { Component, OnInit,EventEmitter,SimpleChange,OnChanges,Output,Input,Inject } from '@angular/core';
import {ApplicationTemplate} from "../../../../shared/models/application_template.model";
import { FileUploader, FileItem} from "../../../../../../node_modules/ng2-file-upload/ng2-file-upload";

@Component({
    selector: 'application-form',
    templateUrl: './application-form.template.html',
    styleUrls:['../../shared/styles/styles.css'],
})
export class AdminApplicationForm implements OnChanges {
    @Input() inputApplication:ApplicationTemplate;
    @Output() outputApplication = new EventEmitter();

    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;

    public isChanging:boolean;
    public isEditing:boolean;

    public application_template:ApplicationTemplate;

     constructor() {
         this.isChanging = false;
         this.isEditing = false;
         this.application_template = new ApplicationTemplate();
         this.uploader = new FileUploader({url:'some url'});

    }
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputApplication'].currentValue != undefined) {
            this.isEditing= true;
            this.application_template = changes['inputApplication'].currentValue;
        }
    }
    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    updateApplication(){
        if(this.uploader.queue.length !== 0){
            var document:FileItem =this.uploader.queue[0]._file;
        }

        this.outputApplication.emit({
            application:this.application_template,
            document:document
        });

        this.uploader = new FileUploader({url:'some url'});
        this.application_template = new ApplicationTemplate();
        this.isEditing = false;
    }

}