import {Component, ViewEncapsulation , OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Professor} from "../../../shared/models/professor.model";
import {ProfessorsService} from "../../../shared/services/professors.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [ProfessorsService],
    styleUrls: ['./professors.styles.css'],
    template: require('./professor-detail.template.pug'),
})
export class AdminProfessorDetail implements OnInit, OnDestroy{
    public sub: any;
    public isEdit:boolean = false;
    public professor:Professor;

    constructor(private _profService:ProfessorsService,private _router:Router, private _route:ActivatedRoute) {
        this.professor = new Professor();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.loadProfessor(params['id'])
        });
    }

    deleteProfessor(professor:Professor) {
        this._profService
            .deleteProfessor(professor.id)
            .then(() => this._router.navigate(['admin/dashboard/professors']) );
    }

    updateProfessor($event) {
        this._profService.updateProfessor($event.professor,$event.photo,this.professor.id).subscribe((res)=> {
            this.professor = res
            this.isEdit = false
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private loadProfessor(id:number) {
        this._profService.get(id).then(professor => this.professor = professor);
    }
}
