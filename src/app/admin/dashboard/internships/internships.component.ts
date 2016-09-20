
import {Component, OnInit,ViewEncapsulation} from "@angular/core";
import {Listing} from "../../../shared/listing.model";
import {Internship} from "../../../shared/models/internship.model";
import {InternshipsService} from "../../../shared/services/internships.service";


@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [InternshipsService],
    styleUrls: ['./internships.styles.css'],
    template: require('./internships.template.html'),

})

export class AdminInternships implements OnInit{
    listing: Listing<Internship>;
    public currentPage:number = 1;

    constructor(private _service:InternshipsService) {

    }

    ngOnInit() {
        this.listing = new Listing<Internship>();
        this.loadInternships(1, 10);

    };



    public pageChanged(event:any):void {
        this.loadInternships(event.page, event.itemsPerPage);
    };


    private loadInternships(page:number, itemsPerPage: number) {

        this._service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }
}