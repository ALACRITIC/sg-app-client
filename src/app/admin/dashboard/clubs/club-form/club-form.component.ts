/**
 * Created by Taulant on 9/29/2016.
 */
import { Component, OnInit,EventEmitter,SimpleChange,OnChanges,Output,Input } from '@angular/core';
import { FileUploader} from "ng2-file-upload/ng2-file-upload";
import {Club} from "../../../../shared/models/club.model";
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'club-form',
    templateUrl: 'club-form.template.pug',
    styleUrls:['../../shared/styles/styles.css'],
})
export class AdminClubForm implements OnChanges {
    @Input() inputClub:Club;
    @Output() outputClub = new EventEmitter();

    public form:FormGroup;
    public name:AbstractControl;
    public president:AbstractControl;

    public club:Club;
    public uploader:FileUploader;
    public isEditing:boolean;

    constructor(fb:FormBuilder) {
        this.isEditing = false;
        this.club = new Club();
        this.uploader = new FileUploader({url:'someurl'})

        this.form = fb.group({
            'name': ['', Validators.compose([Validators.required])],
            'president': ['', Validators.compose([Validators.required])]
        });
        this.name = this.form.controls['name'];
        this.president = this.form.controls['president'];
    }
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputClub'].currentValue != undefined) {
            this.isEditing= true;
            this.club = changes['inputClub'].currentValue;
        }
    }

    updateClub(){
        if(this.uploader.queue.length !== 0){
            var logo =this.uploader.queue[0]._file;
        }
        this.outputClub.emit({
            club:this.club,
            logo:logo
        });
        this.isEditing = false;
        this.club = new Club();
        this.uploader = new FileUploader({url:'someurl'});
        this.form.reset()
    }
}