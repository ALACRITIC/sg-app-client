/**
 * Created by Taulant on 10/4/2016.
 */
import { Component, OnInit,EventEmitter,SimpleChange,OnChanges,Output,Input,Inject } from '@angular/core';
import {ApplicationTemplate} from "../../../../shared/models/application_template.model";
import { FileUploader} from "../../../../../../node_modules/ng2-file-upload/ng2-file-upload";
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'application-form',
    templateUrl: './application-form.template.pug',
    styleUrls:['../../shared/styles/styles.css'],
})
export class AdminApplicationForm implements OnChanges {
    @Input() inputApplication:ApplicationTemplate;
    @Output() outputApplication = new EventEmitter();

    public form:FormGroup;
    public name:AbstractControl;
    public description:AbstractControl;

    public uploader:FileUploader;
    public isEditing:boolean;
    public application_template:ApplicationTemplate;

     constructor(fb:FormBuilder) {
         this.isEditing = false;
         this.application_template = new ApplicationTemplate();
         this.uploader = new FileUploader({url:'some url'});

         this.form = fb.group({
             'name': ['', Validators.compose([Validators.required])],
             'description': ['', Validators.compose([Validators.required])]
         });

         this.name = this.form.controls['name'];
         this.description = this.form.controls['description'];

    }
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputApplication'].currentValue != undefined) {
            this.isEditing= true;
            this.application_template = changes['inputApplication'].currentValue;
        }
    }

    onSubmit() {
        if(this.uploader.queue.length !== 0){
            var document =this.uploader.queue[0]._file;
        }
        this.outputApplication.emit({
            application:this.application_template,
            document:document
        });
        this.uploader = new FileUploader({url:'some url'});
        this.application_template = new ApplicationTemplate();
        this.isEditing = false;
        this.form.reset();
    }

}