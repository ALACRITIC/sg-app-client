/**
 * Created by hgeorgiev on 9/10/16.
 */
import {Component, OnInit,Input} from '@angular/core';
import {Listing} from "../../shared/listing.model";
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {Professor} from "../../shared/models/professor.model";
import {ProfessorsService} from "../../shared/services/professors.service";
import { Router } from '@angular/router';

@Component({
    selector: 'team-members',
    providers: [ProfessorsService],
    template: require('./evaluations.template.pug'),
    style:require('./evaluations.styles.scss')
})

export class FrontProfessors implements OnInit {
    listing:Listing<Professor>;
    professor:Professor;
    public currentPage:number = 1;

    constructor(private _service:ProfessorsService,private _router:Router) {
    }

    ngOnInit() {
        this.listing = new Listing<Professor>();
        this.loadProfessors(1, 10);

    };

    public pageChanged(event:any):void {
        this.loadProfessors(event.page, event.itemsPerPage);
    };

    public filterDepts(department:string):void {
        this.loadProfessors(1, 10, department);
    }
    goToProfessor($event){
        this._router.navigate([`professor/${$event.id}`]);
    }

    private loadProfessors(page:number, itemsPerPage:number, department?:string) {
        this._service.query(page, itemsPerPage, department).then(listing => {
            this.listing = listing
        });
    }

}