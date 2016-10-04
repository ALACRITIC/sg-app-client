import {Component,OnInit} from '@angular/core';



//declaretion imports
import {Professor} from "../../../shared/models/professor.model";
import {FrontProfessors} from '../evaluations.component';
import {ProfessorProfileComponent} from "./professor-profile.component";
import {ProfessorEvaluationsComponent} from "./professor-evaluations.component";



@Component({
    selector: 'professor-detail',
    templateUrl: './professor-detail.template.html',

})

export class ProfessorDetailComponent implements OnInit{

    constructor() {

    }

    ngOnInit() {

    }


}