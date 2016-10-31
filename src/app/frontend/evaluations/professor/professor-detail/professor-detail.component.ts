import {Component,ViewEncapsulation} from '@angular/core';
import {Evaluation} from "../../../../shared/models/evaluation.model";

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'professor-detail',
    templateUrl: 'professor-detail.template.pug',
    styles:require(['./professor-detail.styles.scss'])
})

export class ProfessorDetailComponent {
    public evaluation:Evaluation;
    public professorName:string;

    constructor() {
        this.evaluation = new Evaluation();
    }
    getName(event){
       this.professorName = event.professorName;
    }
    getEvaluation($event){

    }


}