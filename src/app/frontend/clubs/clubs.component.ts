import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Listing} from "../../shared/listing.model";
import {Club} from "../../shared/models/club.model";
import {ClubsService} from "../../shared/services/clubs.service";


@Component({
    selector: 'clubs',
    providers: [ClubsService],
    templateUrl: './clubs.template.html',
    styleUrls: ['./clubs.styles.css'],
    encapsulation: ViewEncapsulation.Emulated

})

export class FrontClubs implements OnInit{
    listing: Listing<Club>;


    constructor(private _service:ClubsService) {

    }

    ngOnInit() {
        this.listing = new Listing<Club>();
        this._service.query(1,999).then(listing => this.listing = listing);//load all

    }


}