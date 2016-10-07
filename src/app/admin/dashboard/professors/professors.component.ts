import {Component, ViewEncapsulation , OnInit} from '@angular/core';

import {Listing} from '../../../shared/listing.model'
import {Professor} from "../../../shared/models/professor.model";
import {ProfessorsService} from "../../../shared/services/professors.service";
import { FileUploader, FileItem} from "../../../../../../node_modules/ng2-file-upload/ng2-file-upload";


@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [ProfessorsService],
    styleUrls: ['./professors.styles.css'],
    template: require('./professors.template.html'),
})
export class AdminProfessors implements OnInit{
     listing: Listing<Professor>;
     professor:Professor;
     public currentPage:number = 1;

    constructor(private _service:ProfessorsService) {
     this.professor = new Professor();
    }
    
    ngOnInit() {
        this.listing = new Listing<Professor>();
        this.loadProfessors(1, 10);
       
    }

    public pageChanged(event:any):void {
        this.loadProfessors(event.page, event.itemsPerPage);
    };

    public filterDepts(department:string):void {
        this.loadProfessors(1,10, department);
    }

    addProfessor($event) {
        console.log($event.photo);
        this._service.addProfessor($event.professor,$event.photo).subscribe((res)=>
        {this.professor = res;
            console.log(this.professor);
           }
        );

    }
    private loadProfessors(page:number, itemsPerPage: number, department?:string) {
        this._service.query(page,itemsPerPage, department).then(listing => this.listing = listing);
    }

}
