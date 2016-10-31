
import {Component, OnInit, ViewEncapsulation,Input} from '@angular/core';
import {Listing} from "../../shared/listing.model";
import {ApplicationTemplate} from "../../shared/models/application_template.model";
import {ApplicationTemplatesService} from "../../shared/services/application_templates.service";
import { AccordionModule } from 'ng2-bootstrap/components/accordion';

@Component({
    providers: [ApplicationTemplatesService],
    templateUrl: './application_templates.template.pug',
    styles:require(['./application_templates.styles.scss']),
    encapsulation: ViewEncapsulation.Emulated,
    providers:[AccordionModule]
})

export class FrontApplicationTemplates implements OnInit{
    listing: Listing<ApplicationTemplate>;
    public oneAtATime:boolean = true;
    public selectedTemplate;
    public isOpened:boolean;


    constructor(private _service:ApplicationTemplatesService) {
        this.isOpened = false;
    }

    ngOnInit() {
        this.listing = new Listing<ApplicationTemplate>();
        this._service.query(1,999).then(listing => this.listing = listing);//load all
    }
    stopClick(){
        if(event.target.className === 'panel-title'){
            event.stopPropagation();
        }
    }
    selectedTemp(application_template:ApplicationTemplate){
        if(this.selectedTemplate === application_template){
            this.selectedTemplate = undefined;
        }else{
            this.selectedTemplate = application_template;
        }
    }





}