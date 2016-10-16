/**
 * Created by Taulant on 9/27/2016.
 */

import { Component, OnInit,EventEmitter,SimpleChange,OnChanges,Output,Input } from '@angular/core';
import { FileUploader, FileItem} from "../../../../../../node_modules/ng2-file-upload/ng2-file-upload";
import {Professor} from "../../../../shared/models/professor.model";
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';


@Component({
    selector: 'professor-form',
    template: require('./professor-form.template.pug'),
    styleUrls:['../../shared/styles/styles.css'],

})
export class AdminProfessorForm implements OnChanges {
    @Input() inputProfessor:Professor;
    @Output() outputProfessor = new EventEmitter();

    public form:FormGroup;
    public name:AbstractControl;
    public department:AbstractControl;

    public professor:Professor;
    public uploader:FileUploader;
    public isEditing:boolean;

    constructor(fb:FormBuilder) {
        this.isEditing = false;
        this.professor = new Professor();
        this.uploader = new FileUploader({url:'someurl'});

        this.form = fb.group({
            'name': ['', Validators.compose([Validators.required])],
            'department': ['', Validators.compose([Validators.required])]
        });
        this.name = this.form.controls['name'];
        this.department = this.form.controls['department'];
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputProfessor'].currentValue != undefined) {
            this.isEditing= true;
            this.professor = changes['inputProfessor'].currentValue;
        }
    }

    updateProfessor(){

        if(this.uploader.queue.length !== 0){
            var photo:FileItem =this.uploader.queue[0]._file;
        }
        this.outputProfessor.emit({
            professor:this.professor,
            photo:photo});
        this.professor = new Professor();
        this.uploader = new FileUploader({url:'someurl'});
        this.isEditing = false;
        this.form.reset();
    }

}
