/**
 * Created by Centroida-2 on 10/28/2016.
 */
import {Component, Output,EventEmitter} from '@angular/core';
import {Evaluation} from "../../../../shared/models/evaluation.model";


@Component({
    selector: 'new-evaluation',
    template:require('./new-evaluation.template.pug'),
    styles:require(['./new-evaluation.styles.scss'])
})
export class NewProfessorEvaluation  {
    @Output() outputEvaluation = new EventEmitter();
    public evaluation:Evaluation;

    constructor() {
        this.evaluation = new Evaluation();
    }

    addEvaluation(){
        console.log(this.evaluation);
        this.outputEvaluation.emit(this.evaluation);
    }

}