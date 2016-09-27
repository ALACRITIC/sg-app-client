import {Component, ViewEncapsulation , OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Professor} from "../../../shared/models/professor.model";
import {ProfessorsService} from "../../../shared/services/professors.service";
import {Listing} from '../../../shared/listing.model'

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [ProfessorsService],
    styleUrls: ['./professors.styles.css'],
    template: require('./professor-detail.template.html'),
})
export class AdminProfessorDetail implements OnInit, OnDestroy{
    public sub: any;
    public listing:Listing<Professor>;
    public professor:Professor;

    constructor(private _profService:ProfessorsService,private _router:Router, private _route:ActivatedRoute) {
        this.professor = new Professor();
        this.listing = new Listing();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.loadProfessor(params['id'])
        })
    }
    deleteProfessor(professor:Professor) {
        this._profService
            .deleteProfessor(professor.id)
            .then(() => {
                this.listing.collection = this.listing.collection.filter(h => h !== professor);
            });
        this._router.navigate(['admin/dashboard/professors']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    private loadProfessor(id:number) {
        this._profService.get(id).then(professor => this.professor = professor);
    }


}
