import {Component, OnInit} from '@angular/core';
import {Listing} from "../../shared/listing.model";
import {InternshipsService} from "../../shared/services/internships.service";
import {Internship} from "../../shared/models/internship.model";

@Component({
    selector: 'team-members',
    providers: [InternshipsService],
    templateUrl: './internships.template.pug',
    styleUrls:['./internships.styles.scss'],
})

export class FrontInternships implements OnInit{
    public listing: Listing<Internship>;
    public currentPage:number = 1;
    public maxSize:number = 5;

    constructor(private _service:InternshipsService) {
        this.listing = new Listing<Internship>();
    }

    ngOnInit() {
        this.loadInternships(1, 10);
    };

    public pageChanged(event:any):void {
        this.loadInternships(event.page, event.itemsPerPage);
    };

    private loadInternships(page:number, itemsPerPage: number) {
        this._service.query(page,itemsPerPage).then(listing => {
            this.listing = listing;
        });
    }
}