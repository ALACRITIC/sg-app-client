/**
 * Created by Taulant on 9/21/2016.
 */
import { Component, OnInit } from '@angular/core';
import {EvaluationsService} from "../../../../shared/services/evaluations.service";
import {Evaluation} from "../../../../shared/models/evaluation.model";
import {Listing} from "../../../../shared/listing.model";
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import { ActivatedRoute } from '@angular/router';
import {Evaluation} from "../../../../shared/models/evaluation.model";

@Component({
    selector: 'professor-evaluations',
    templateUrl: 'professor-evaluations.template.pug',
    styles:require(['./professor-evaluations.styles.scss']),
    providers:[EvaluationsService],
    directives:[PAGINATION_DIRECTIVES]

})
export class ProfessorEvaluationsComponent implements OnInit {
    listing: Listing<Evaluation>;
    evaluation:Evaluation;
    public selectedEvaluation;
    public currentPage:number = 1;
    sub:any;
    public id:number;


    constructor(private _service:EvaluationsService,private _route:ActivatedRoute) {
        this.listing = new Listing<Evaluation>();
        this.evaluation = new Evaluation();
    }

    public pageChanged(event:any):void {
        // event.itemsPerPage = 5;
        this.loadEvaluations(event.page, event.itemsPerPage);
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.id = +params['id'];
            this.loadEvaluations(1, 5, this.id);
        });
    }
    selectEval(evaluation){
        event.stopPropagation();
        if(this.selectedEvaluation === evaluation){
            this.selectedEvaluation = undefined;
        }else{
            this.selectedEvaluation = evaluation;
        }

    }
    private loadEvaluations(page:number, itemsPerPage: number) {
        this._service.query(page,itemsPerPage,this.id).then(listing => {
            this.currentPage = page;
            this.listing = listing;
        });
    }
}