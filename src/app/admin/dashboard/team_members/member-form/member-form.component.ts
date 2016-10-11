/**
 * Created by Taulant on 10/4/2016.
 */
import { Component, OnInit,EventEmitter,SimpleChange,OnChanges,Output,Input } from '@angular/core';
import {TeamMember} from "../../../../shared/models/team_member.model";
import {FileUploader} from "../../../../../../node_modules/ng2-file-upload/components/file-upload/file-uploader.class";
import {FileItem} from "../../../../../../node_modules/ng2-file-upload/components/file-upload/file-item.class";


@Component({
    selector: 'member-form',
    templateUrl: './member-form.template.pug',
    styleUrls:['../../shared/styles/styles.css'],
})
export class AdminMemberForm implements OnInit,OnChanges {
    @Input() inputMember:TeamMember;
    @Output() outputMember = new EventEmitter();

    public member:TeamMember;
    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;

    public isEditing:boolean;
    public isChanging:boolean;

    constructor() {
        this.isEditing = false;
        this.isChanging = false;
        this.member = new TeamMember();
        this.uploader = new FileUploader({url:'someurl'})
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputMember'].currentValue != undefined) {
            this.isEditing= true;
            this.member = changes['inputMember'].currentValue;
        }
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    updateMember(){
        if(this.uploader.queue.length !== 0){
            var photo:FileItem =this.uploader.queue[0]._file;
        }
        //todo
        this.outputMember.emit({
            member:this.member,
            photo:photo
        });
        this.member = new TeamMember();
        this.uploader = new FileUploader({url:'someurl'});
        this.isEditing = false;
    }
}