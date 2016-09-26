import {Component,OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


//declaretion imports
import {Professor} from "../../../common/models/professor.model";
import {FrontProfessors} from '../evaluations.component';
import {ProfessorsService} from "../../../common/services/professors.service";
import {ProfessorProfileComponent} from "./professor-profile.component";
import {ProfessorEvaluationsComponent} from "./professor-evaluations.component";
import {HomeNavbar} from "../../shared/navbar/navbar.component";
import {HomeFooter} from "../../shared/footer/footer.component";



@Component({
    selector: 'professor-detail',
    templateUrl: './professor-detail.template.html',
    providers:[ProfessorsService],
    directives:[ProfessorProfileComponent,ProfessorEvaluationsComponent,HomeFooter, HomeNavbar,]

})

export class ProfessorDetailComponent implements OnInit{

    constructor() {

    }


}