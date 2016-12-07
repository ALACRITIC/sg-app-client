/**
 * Created by Taulant on 10/4/2016.
 */
import { Component, OnInit,EventEmitter,SimpleChange,OnChanges,Output,Input } from '@angular/core';
import {TeamMember} from "../../../../shared/models/team_member.model";
import {FileUploader} from "../../../../../../node_modules/ng2-file-upload/components/file-upload/file-uploader.class";
import {FileItem} from "../../../../../../node_modules/ng2-file-upload/components/file-upload/file-item.class";
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';


@Component({
    selector: 'member-form',
    templateUrl: './member-form.template.pug',
    styleUrls:['../../shared/styles/styles.css'],
})
export class AdminMemberForm implements OnChanges {
    @Input() inputMember:TeamMember;
    @Output() outputMember = new EventEmitter();

    public form:FormGroup;
    public name:AbstractControl;
    public title:AbstractControl;
    public description:AbstractControl;

    public member:TeamMember;
    public uploader:FileUploader;
    public isEditing:boolean;

    constructor(fb:FormBuilder) {
        this.isEditing = false;
        this.member = new TeamMember();
        this.uploader = new FileUploader({url:'someurl'});

        this.form = fb.group({
            'name': ['', Validators.compose([Validators.required])],
            'title': ['', Validators.compose([Validators.required])],
            'description': ['', Validators.compose([Validators.required])]
        });
        this.name = this.form.controls['name'];
        this.title = this.form.controls['title'];
        this.description = this.form.controls['description'];
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputMember'].currentValue != undefined) {
            this.isEditing= true;
            this.member = changes['inputMember'].currentValue;
        }
    }

    updateMember(){
        if(this.uploader.queue.length !== 0){
            var photo:FileItem =this.uploader.queue[0]._file;
        }
        this.outputMember.emit({
            member:this.member,
            photo:photo
        });
        this.member = new TeamMember();
        this.uploader = new FileUploader({url:'someurl'});
        this.isEditing = false;
        this.form.reset();
    }
}