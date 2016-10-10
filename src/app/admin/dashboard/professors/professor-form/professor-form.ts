/**
 * Created by Taulant on 9/27/2016.
 */

import { Component, OnInit,EventEmitter,SimpleChange,OnChanges,Output,Input } from '@angular/core';
import { FileUploader, FileItem} from "../../../../../../node_modules/ng2-file-upload/ng2-file-upload";
import {Professor} from "../../../../shared/models/professor.model";

@Component({
    selector: 'professor-form',
    templateUrl: './professor-form.template.html',
    styleUrls:['../../shared/styles/styles.css'],

})
export class AdminProfessorForm implements OnChanges {
    @Input() inputProfessor:Professor;
    @Output() outputProfessor = new EventEmitter();

    public professor:Professor;
    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;


    public isEditing:boolean;
    public isChanging:boolean;

    constructor() {

        this.isEditing = false;
        this.isChanging = false;
        this.professor = new Professor();
        this.uploader = new FileUploader({url:'someurl'})
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputProfessor'].currentValue != undefined) {
            this.isEditing= true;
            this.professor = changes['inputProfessor'].currentValue;
        }
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    updateProfessor(){

        if(this.uploader.queue.length !== 0){
            var photo:FileItem =this.uploader.queue[0]._file;
        }
        console.log(this.uploader.queue[0]);
        //todo
        this.outputProfessor.emit({
            professor:this.professor,
            photo:photo});
        this.professor = new Professor();
        this.uploader = new FileUploader({url:'someurl'});
        this.isEditing = false;
    }

}
