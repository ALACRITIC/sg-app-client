/**
 * Created by hgeorgiev on 8/24/16.
 */
import {Component, ViewEncapsulation , OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ApplicationTemplate} from "../../../shared/models/application_template.model";
import {ApplicationTemplatesService} from "../../../shared/services/application_templates.service";
import {AdminApplicationSubmissions} from "./application_submissions/application_submissions.component";


@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [ApplicationTemplatesService],
    directives: [AdminApplicationSubmissions],
    template: require('./application_template-detail.template.html'),
})
export class AdminApplicationTemplateDetail implements OnInit, OnDestroy{
    sub: any;
    public application_template:ApplicationTemplate;

    constructor(private _service:ApplicationTemplatesService,private _router:Router, private _route:ActivatedRoute) {
        this.application_template = new ApplicationTemplate();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.loadApplicationTemplate(params['id'])
        })
    }
    deleteApplicationTemplate(application_template:ApplicationTemplate) {
        this._service
            .deleteApplicationTemplate(application_template.id)
            .then(() =>  this._router.navigate(['admin/dashboard/applications']) );


    }
    updateApplicationTemplate($event) {
        this._service.updateApplicationTemplate($event.application,$event.document,this.application_template.id).subscribe((res)=> {
            this.application_template = res;
            this.isEdit = false
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private loadApplicationTemplate(id:number) {
        this._service.get(id).then(application_template => this.application_template = application_template);
    }


}
