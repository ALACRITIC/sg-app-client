import {Component, OnInit} from '@angular/core';
import {TeamMembersService} from "../../shared/services/team_members.service";
import {TeamMember} from "../../shared/models/team_member.model";
import {Listing} from "../../shared/listing.model";

@Component({
    selector: 'team-members',
    providers: [TeamMembersService],
    templateUrl: './team_members.template.html'
})

export class FrontTeamMembers implements OnInit{
    listing: Listing<TeamMember>;
    public currentPage:number = 1;

    public pageChanged(event:any):void {
        this.loadMembers(event.page, event.itemsPerPage);
    };

    constructor(private _service:TeamMembersService) {
    }

    ngOnInit() {
        this.listing = new Listing<TeamMember>();
        this.loadMembers(1, 10);
    }
    private loadMembers(page:number, itemsPerPage: number) {
        this._service.query(page,itemsPerPage).then(listing => {
            this.listing = listing
        });
    }
    
}