/**
 * Created by Taulant on 10/2/2016.
 */
import { Component, EventEmitter,SimpleChange,OnChanges,Output,Input } from '@angular/core';
import {Internship} from "../../../../shared/models/internship.model";
import {FileUploader} from "../../../../../../node_modules/ng2-file-upload/components/file-upload/file-uploader.class";
import {FileItem} from "../../../../../../node_modules/ng2-file-upload/components/file-upload/file-item.class";

@Component({
    selector: 'internship-form',
    templateUrl: './internship-form.template.html',
    styleUrls:['./internship-form.component.css'],
})
export class AdminInternShipForm implements OnChanges {
    @Input() inputInternship:Internship;
    @Output() outputInternship = new EventEmitter();
    @Output() onDelete = new EventEmitter();

    public internship:Internship;
    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;
    public isEditing:boolean;
    public isChanging:boolean;

    constructor() {
        this.isEditing = false;
        this.isChanging = false;
        this.internship = new Internship();
        this.uploader = new FileUploader({url:'someurl'})
    }
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputInternship'].currentValue != undefined) {
            this.isEditing= true;
            this.internship = changes['inputInternship'].currentValue;
        }
    }
    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }
    updateInternship(){

        if(this.uploader.queue.length !== 0){
            var photo:FileItem =this.uploader.queue[0]._file;
        }
        //todo
        this.outputInternship.emit({
            internship:this.internship,
            photo:photo});
        this.internship = new Internship();
        this.uploader = new FileUploader({url:'someurl'});
        this.isEditing = false;
    }
    deleteInternship(){
        this.onDelete.emit({internship:this.internship});
        this.internship = new Internship();
        this.uploader = new FileUploader({url:'someurl'});
        this.isEditing = false;
    }

}