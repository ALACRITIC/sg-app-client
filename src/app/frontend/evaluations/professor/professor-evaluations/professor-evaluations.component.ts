/**
 * Created by Taulant on 9/21/2016.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EvaluationsService} from "../../../../shared/services/evaluations.service";
import {Evaluation} from "../../../../shared/models/evaluation.model";
import {Listing} from "../../../../shared/listing.model";
import { ActivatedRoute } from '@angular/router';
;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'professor-evaluations',
    templateUrl: 'professor-evaluations.template.pug',
    styleUrls:['./professor-evaluations.styles.scss'],
})
export class ProfessorEvaluationsComponent implements OnInit {
    public listing: Listing<Evaluation>;
    public evaluation:Evaluation;
    public selectedEvaluation:Evaluation;
    public currentPage:number = 1;
    public sub:any;
    public id:number;

    constructor(private _service:EvaluationsService,private _route:ActivatedRoute) {
        this.listing = new Listing<Evaluation>();
        this.evaluation = new Evaluation();
    }

    public pageChanged(event:any):void {
        this.loadEvaluations(event.page, event.itemsPerPage);
    }

    ngOnInit() {
        //TODO change to route snapshot
        this.sub = this._route.params.subscribe(params => {
            //+params['id'] is professor id
            this.id = +params['id'];
            this.loadEvaluations(1, 5);
        });
    }
    selectEval(evaluation){
        //show more / show less toggle
        if(this.selectedEvaluation === evaluation){
            this.selectedEvaluation = undefined;
        }else{
            this.selectedEvaluation = evaluation;
        }
    }
    private loadEvaluations(page:number, itemsPerPage: number) {
        this._service.query(page,itemsPerPage,this.id).then(listing => {
            this.currentPage = page;
            this.listing = listing as Listing<Evaluation>;
        });
    }
}