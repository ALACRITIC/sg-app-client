/**
 * Created by hgeorgiev on 8/19/16.
 */
import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Listing} from "../../../shared/listing.model";
import {Club} from "../../../shared/models/club.model";
import {ClubsService} from "../../../shared/services/clubs.service";
import {ClassArray} from "../../../../../node_modules/awesome-typescript-loader/issues/product-designer/typings-custom/classnames";

@Component({
    selector: 'clubs',
    template:require('./clubs.template.pug'),
    providers: [ClubsService],
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./clubs.styles.css']
})

export class AdminClubs implements OnInit{
    listing: Listing<Club>;
    club:Club;
    public professor_id:number;
    public currentPage:number = 1;
    public isCollapsed:boolean;

    constructor(private _service:ClubsService) {
        this.club = new Club();
        this.isCollapsed = true;
    }

    ngOnInit() {
        this.listing = new Listing<Club>();
        this.loadClubs(1, 10);
    }

    public pageChanged(event:any):void {
        this.loadClubs(event.page, event.itemsPerPage);
    };

    private loadClubs(page:number, itemsPerPage: number) {
        this._service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }
    professorClub(event){
        this.club['professor_id'] = event.id;
        console.log(event.id);
    }
    addClub($event) {

        this._service.addClub($event.club,$event.logo,69).subscribe((res)=>{
            this.club = res;
            this.loadClubs(1,10);
        });

    }


}