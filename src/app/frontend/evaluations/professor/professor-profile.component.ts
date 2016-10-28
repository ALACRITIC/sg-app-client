/**
 * Created by Taulant on 9/21/2016.
 */
import { Component, OnInit,ViewEncapsulation ,Output,EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Professor} from "../../../shared/models/professor.model";
import {ProfessorsService} from "../../../shared/services/professors.service";
import {ProfessorEvaluationsComponent} from "./professor-evaluations.component";


@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'professor-profile',
    templateUrl: 'professor-profile.template.pug',
    styles:require(['./professor-profile.styles.scss']),
    providers:[ProfessorsService],
    directives:[ProfessorEvaluationsComponent]
})
export class ProfessorProfileComponent implements OnInit {
    @Output() professorName = new EventEmitter();
    public  professor: Professor;

    constructor(private _profService:ProfessorsService,private _route:ActivatedRoute) {
        this.professor = new Professor();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.loadProfessor(params['id']);
        });

    }
    loadProfessor(id:number) {
        this._profService.get(id).then(professor => {
            this.professor = professor;
            this.professorName.emit(professor.name);
        });
    }
}