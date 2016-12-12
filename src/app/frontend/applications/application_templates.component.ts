
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Listing} from "../../shared/listing.model";
import {ApplicationTemplate} from "../../shared/models/application_template.model";
import {ApplicationTemplatesService} from "../../shared/services/application_templates.service";

@Component({
    providers: [ApplicationTemplatesService],
    templateUrl: './application_templates.template.pug',
    styleUrls:['application_templates.styles.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class FrontApplicationTemplates implements OnInit{
    public listing: Listing<ApplicationTemplate>;
    public oneAtATime:boolean = true;
    public selectedTemplate;

    constructor(private _service:ApplicationTemplatesService) {
        this.listing = new Listing<ApplicationTemplate>()
    }

    ngOnInit() {
        this._service.query(1,999).then(listing => {
            console.log(listing);
            this.listing = listing;
        } );//load all
    }

    selectedTemp(application_template:ApplicationTemplate){
        //to toggle font awesome arrow
        if(this.selectedTemplate === application_template){
            this.selectedTemplate = undefined;
        }else{
            this.selectedTemplate = application_template;
        }
    }

}