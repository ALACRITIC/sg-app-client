import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {Listing} from "../../shared/listing.model";

import {ApplicationTemplate} from "../../shared/models/application_template.model";
import {ApplicationTemplatesService} from "../../shared/services/application_templates.service";




@Component({
    providers: [ApplicationTemplatesService],
    templateUrl: './application_templates.template.html',
    encapsulation: ViewEncapsulation.Emulated

})

export class FrontApplicationTemplates implements OnInit{
    listing: Listing<ApplicationTemplate>;
    
    


    constructor(private _service:ApplicationTemplatesService) {

    }

    ngOnInit() {
        this.listing = new Listing<ApplicationTemplate>();
        this._service.query(1,999).then(listing => this.listing = listing);//load all

    }


}