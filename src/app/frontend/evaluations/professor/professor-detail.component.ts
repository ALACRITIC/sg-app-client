import {Component,OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


//declaretion imports
import {Professor} from "../../../shared/models/professor.model";
import {FrontProfessors} from '../evaluations.component';
import {ProfessorsService} from "../../../shared/services/professors.service";
import {ProfessorProfileComponent} from "./professor-profile.component";
import {ProfessorEvaluationsComponent} from "./professor-evaluations.component";



@Component({
    selector: 'professor-detail',
    templateUrl: './professor-detail.template.html',
    providers:[ProfessorsService],

})

export class ProfessorDetailComponent implements OnInit{

    constructor() {

    }

    ngOnInit() {

    }


}