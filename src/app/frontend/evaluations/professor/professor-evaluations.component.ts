/**
 * Created by Taulant on 9/21/2016.
 */
import { Component, OnInit,Input } from '@angular/core';
import {EvaluationsService} from "../../../common/services/evaluations.service";
import {Evaluation} from "../../../common/models/evaluation.model";
import {Listing} from "../../../common/listing.model";
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'professor-evaluations',
    templateUrl: 'professor-evaluations.template.html',
    providers:[EvaluationsService],
    directives:[PAGINATION_DIRECTIVES]

})
export class ProfessorEvaluationsComponent implements OnInit {
    listing: Listing<Evaluation>;
    public currentPage:number = 1;
    sub:any;
    public id:number;

    constructor(private _service:EvaluationsService,private _route:ActivatedRoute) {

        this.listing = new Listing<Evaluation>();
    }

    public pageChanged(event:any):void {

        this.loadEvaluations(event.page, event.itemsPerPage);
    };
    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.id = +params['id'];
            this.loadEvaluations(1,10,this.id);
        });
    }

    private loadEvaluations(page:number, itemsPerPage: number) {

        this._service.query(page,itemsPerPage,this.id).then(listing => this.listing = listing);
    }
}