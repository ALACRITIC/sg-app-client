/**
 * Created by hgeorgiev on 8/24/16.
 */

import {Component, OnInit,ViewEncapsulation} from "@angular/core";
import {Listing} from "../../../shared/listing.model";
import {ApplicationTemplate} from "../../../shared/models/application_template.model";
import {ApplicationTemplatesService} from "../../../shared/services/application_templates.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [ApplicationTemplatesService],
    templateUrl:'./application_templates.template.pug',
})

export class AdminApplicationTemplates implements OnInit{
    listing:ApplicationTemplate[];
    public currentPage:number = 1;
    public application_template:ApplicationTemplate;
    public isCollapsed:boolean;

    constructor(private _service:ApplicationTemplatesService) {
        this.application_template = new ApplicationTemplate();
        this.isCollapsed = true;
    }

    ngOnInit() {
        this.loadApplicationTemplates(1, 10);
    };

    public pageChanged(event:any):void {
        this.loadApplicationTemplates(event.page, event.itemsPerPage);
    };

    private loadApplicationTemplates(page:number, itemsPerPage: number) {
        this._service.query(page,itemsPerPage).then(listing => this.listing = listing as ApplicationTemplate[]);
    }
    addApplication($event){
        this._service.addApplicationTemplate($event.application,$event.document).subscribe((res) => {
            this.application_template = res as ApplicationTemplate;
            this.isCollapsed = true;
        });
    }
}