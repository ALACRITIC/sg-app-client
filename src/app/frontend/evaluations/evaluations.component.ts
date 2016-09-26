/**
 * Created by hgeorgiev on 9/10/16.
 */
import {Component, OnInit,Input} from '@angular/core';

import {Listing} from "../../common/listing.model";
import {HomeFooter} from "../shared/footer/footer.component";
import {HomeNavbar} from "../shared/navbar/navbar.component";
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {Professor} from "../../common/models/professor.model";
import {ProfessorsService} from "../../common/services/professors.service";
import {ProfessorDetailComponent} from "./professor/professor-detail.component";
import {AdminProfessorDepartments} from "../../admin/dashboard/professors/departments/departments.component";





@Component({
    selector: 'team-members',
    providers: [ProfessorsService],
    directives: [HomeFooter, HomeNavbar, PAGINATION_DIRECTIVES,ProfessorDetailComponent,AdminProfessorDepartments],
    templateUrl: './evaluations.template.html'

})

export class FrontProfessors implements OnInit{
    listing: Listing<Professor>;
    public currentPage:number = 1;

    constructor(private _service:ProfessorsService) {

    }

    ngOnInit() {
        this.listing = new Listing<Professor>();
        this.loadProfessors(1, 10);

    };

    public pageChanged(event:any):void {
        this.loadProfessors(event.page, event.itemsPerPage);

    };
    public filterDepts(department:string):void {
        this.loadProfessors(1,10, department);

    }

    private loadProfessors(page:number, itemsPerPage: number, department:string) {

        this._service.query(page,itemsPerPage,department).then(listing => {this.listing = listing

        });
    }


}