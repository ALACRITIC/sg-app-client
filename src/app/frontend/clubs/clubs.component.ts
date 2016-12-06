import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Listing} from "../../shared/listing.model";
import {Club} from "../../shared/models/club.model";
import {ClubsService} from "../../shared/services/clubs.service";
import {Router} from "@angular/router";

@Component({
    selector: 'clubs',
    providers: [ClubsService],
    templateUrl: './clubs.template.pug',
    style:require(['./clubs.styles.scss']),
    encapsulation: ViewEncapsulation.Emulated

})

export class FrontClubs implements OnInit{
    listing: Listing<Club>;

    constructor(private _service:ClubsService,private _router:Router) {}

    ngOnInit() {
        this.listing = new Listing<Club>();
        this._service.query(1,999).then(listing => this.listing = listing as Listing<Club>);//load all


    }
    public goToProfile(club:Club){
        this._router.navigate(['/club',  club.id, club.name.replace(/ /g, "_") ]);
    }


}