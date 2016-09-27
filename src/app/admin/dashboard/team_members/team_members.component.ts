
import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import {Listing} from "../../../shared/listing.model";
import {TeamMember} from "../../../shared/models/team_member.model";
import {TeamMembersService} from "../../../shared/services/team_members.service";

@Component({
    template:require('./team_members.template.html'),
    providers: [TeamMembersService],
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./team_members.styles.css']

})

export class AdminTeamMembers implements OnInit{
    listing: Listing<TeamMember>;
    public currentPage:number = 1;

    constructor(private _service:TeamMembersService) {

    }

    ngOnInit() {
        this.listing = new Listing<TeamMember>();
        this.loadTeamMembers(1, 10);

    }



    public pageChanged(event:any):void {
        this.loadTeamMembers(event.page, event.itemsPerPage);
    };


    private loadTeamMembers(page:number, itemsPerPage: number) {

        this._service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }


}