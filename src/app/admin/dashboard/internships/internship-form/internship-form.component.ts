/**
 * Created by Taulant on 10/2/2016.
 */
import { Component, EventEmitter,SimpleChange,OnChanges,Output,Input } from '@angular/core';
import {Internship} from "../../../../shared/models/internship.model";
import {FileUploader} from "../../../../../../node_modules/ng2-file-upload/components/file-upload/file-uploader.class";
import {FileItem} from "../../../../../../node_modules/ng2-file-upload/components/file-upload/file-item.class";
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'internship-form',
    templateUrl: './internship-form.template.pug',
    styleUrls:['../../shared/styles/styles.css'],
})
export class AdminInternShipForm implements OnChanges {
    @Input() inputInternship:Internship;
    @Output() outputInternship = new EventEmitter();
    @Output() onDelete = new EventEmitter();

    public form:FormGroup;
    public link:AbstractControl;
    public description:AbstractControl;

    public internship:Internship;
    public uploader:FileUploader;
    public isEditing:boolean;

    constructor(fb:FormBuilder) {
        this.isEditing = false;
        this.internship = new Internship();
        this.uploader = new FileUploader({url:'someurl'});

        this.form = fb.group({
            'link': ['', Validators.compose([Validators.required])],
            'description': ['', Validators.compose([Validators.required])]
        });

        this.link = this.form.controls['link'];
        this.description = this.form.controls['description'];
    }
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputInternship'].currentValue != undefined) {
            this.isEditing= true;
            this.internship = changes['inputInternship'].currentValue;
        }
    }
    onSubmit(){}
    updateInternship(){
        if(this.uploader.queue.length !== 0){
            var photo:FileItem =this.uploader.queue[0]._file;
        }
        this.outputInternship.emit({
            internship:this.internship,
            photo:photo});
        this.internship = new Internship();
        this.uploader = new FileUploader({url:'someurl'});
        this.isEditing = false;
        this.form.reset()
    }
    deleteInternship(){
        this.onDelete.emit({internship:this.internship});
        this.internship = new Internship();
        this.uploader = new FileUploader({url:'someurl'});
        this.isEditing = false;
    }

}