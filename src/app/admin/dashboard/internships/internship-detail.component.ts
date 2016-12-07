/**
 * Created by Taulant on 9/30/2016.
 */
import { Component, OnInit } from '@angular/core';
import {InternshipsService} from "../../../shared/services/internships.service";
import {Internship} from "../../../shared/models/internship.model";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    selector: 'internship-detail',
    templateUrl: 'internship-detail.template.pug',
    providers:[InternshipsService]
})
export class AdminInternshipDetail implements OnInit {
    internship:Internship;
    public isEdit:boolean = false;
    sub:any;

    constructor(private _service: InternshipsService,private _route:ActivatedRoute) {
        this.internship = new Internship();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params =>{
            this.loadInternship(params['id']);
        });
    }
    private loadInternship(id:number){
        this._service.get(id).then((res) => this.internship = res as Internship);
    }
}