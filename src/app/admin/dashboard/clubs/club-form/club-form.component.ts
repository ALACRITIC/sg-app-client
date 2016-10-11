/**
 * Created by Taulant on 9/29/2016.
 */
import { Component, OnInit,EventEmitter,SimpleChange,OnChanges,Output,Input } from '@angular/core';
import { FileUploader, FileItem} from "ng2-file-upload/ng2-file-upload";
import {Club} from "../../../../shared/models/club.model";
import {ClubsService} from "../../../../shared/services/clubs.service";

@Component({
    selector: 'club-form',
    templateUrl: 'club-form.template.pug',
    styleUrls:['../../shared/styles/styles.css'],
    providers:[ClubsService]
})
export class AdminClubForm implements OnChanges {
    @Input() inputClub:Club;
    @Output() outputClub = new EventEmitter();

    public club:Club;
    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;
    public isEditing:boolean;

    constructor() {
        this.isEditing = false;
        this.club = new Club();
        this.uploader = new FileUploader({url:'someurl'})
    }
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['inputClub'].currentValue != undefined) {
            this.isEditing= true;
            this.club = changes['inputClub'].currentValue;
        }
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    updateClub(){
        if(this.uploader.queue.length !== 0){
            var logo:FileItem =this.uploader.queue[0]._file;
        }

        this.club['logo'] = logo;
        this.outputClub.emit({
            club:this.club,
            logo:logo
        });
        this.isEditing = false;
        this.club = new Club();
        this.uploader = new FileUploader({url:'someurl'});
    }
}