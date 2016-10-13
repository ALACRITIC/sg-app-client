/**
 * Created by Taulant on 9/21/2016.
 */
import { Component, OnInit,Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Professor} from "../../../shared/models/professor.model";
import {FrontProfessors} from '../evaluations.component';
import {ProfessorsService} from "../../../shared/services/professors.service";
import {ProfessorEvaluationsComponent} from "./professor-evaluations.component";

@Component({
    selector: 'professor-profile',
    templateUrl: 'professor-profile.template.pug',
    providers:[ProfessorsService],
    directives:[ProfessorEvaluationsComponent]
})
export class ProfessorProfileComponent implements OnInit {
    public  professor: Professor;
    sub:any;

    constructor(private _profService:ProfessorsService,private _route:ActivatedRoute) {
        this.professor = new Professor();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.loadProfessor(params['id']);
        });

    }
    loadProfessor(id:number) {
        this._profService.get(id).then(professor => {this.professor = professor});
    }
}