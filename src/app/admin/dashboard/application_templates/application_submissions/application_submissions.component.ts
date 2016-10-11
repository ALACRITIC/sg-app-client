/**
 * Created by hgeorgiev on 8/24/16.
 */
import {Component, Input,OnChanges,OnInit} from '@angular/core';
import {ApplicationSubmission} from "../../../../shared/models/application_submission.model";
import {Listing} from "../../../../shared/listing.model";
import {ApplicationSubmissionsService} from "../../../../shared/services/application_submissions.service";
import { ActivatedRoute,Router } from '@angular/router';
@Component({
    selector: 'admin-application-submissions',
    providers: [ApplicationSubmissionsService],
    templateUrl: './application_submissions.template.pug'
})

export class AdminApplicationSubmissions implements OnInit, OnChanges{
    @Input() template_id:number;
    listing:Listing<ApplicationSubmission>;

    public currentPage:number = 1;
    public submission:ApplicationSubmission;

    constructor(private _service:ApplicationSubmissionsService) {
        this.listing = new Listing<ApplicationSubmission>();
        this.submission = new ApplicationSubmission();
    }

    ngOnChanges(changes:any):void {
        if(changes.template_id.currentValue != undefined) {
            this.template_id = changes.template_id.currentValue;
            this.loadSubmissions(1, 10);
        }
    }

    public pageChanged(event:any):void {
        this.loadSubmissions(event.page, event.itemsPerPage);
    };

    private loadSubmissions(page:number, itemsPerPage: number){
        this._service.query(page,itemsPerPage, this.template_id)
                     .then(listing => this.listing = listing);
    }

    deleteSubmission(submission:ApplicationSubmission) {
        this._service
            .deleteSubmission(this.template_id,submission.id)
            .then(() => this.loadSubmissions(1, 10));
    }
}
