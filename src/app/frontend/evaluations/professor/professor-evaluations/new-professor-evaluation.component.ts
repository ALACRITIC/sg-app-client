/**
 * Created by Centroida-2 on 10/28/2016.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import {Evaluation} from "../../../../shared/models/evaluation.model";
import {EvaluationsService} from "../../../../shared/services/evaluations.service";
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'new-evaluation',
    template: require('./new-evaluation.template.pug'),
    styleUrls: ['./new-evaluation.styles.scss']
})
export class NewProfessorEvaluation {
    @Output() outputEvaluation = new EventEmitter();
    public evaluation: Evaluation;

    constructor(private _service: EvaluationsService,private _route:ActivatedRoute) {
        this.evaluation = new Evaluation();
    }

    addEvaluation(evaluation: Evaluation) {
        //getting professor id with route params and assigning it to addEvaluation from service
         this._route.params.subscribe(params => {
            evaluation.professor_id = +params['id'];
            this._service.addEvaluation(evaluation, +params['id']).then(res => {
                this.evaluation = res;
                this.outputEvaluation.emit(this.evaluation);
                this.evaluation = new Evaluation();
            });
        });
    }

}