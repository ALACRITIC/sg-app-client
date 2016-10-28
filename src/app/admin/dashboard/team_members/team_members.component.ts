
import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Listing} from "../../../shared/listing.model";
import {TeamMember} from "../../../shared/models/team_member.model";
import {TeamMembersService} from "../../../shared/services/team_members.service";

@Component({
    template:require('./team_members.template.pug'),
    providers: [TeamMembersService],
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./team_members.styles.css']
})

export class AdminTeamMembers implements OnInit{
    listing: Listing<TeamMember>;
    public currentPage:number = 1;
    member:TeamMember;
    public isCollapsed:boolean;

    constructor(private _service:TeamMembersService) {
        this.member = new TeamMember();
        this.isCollapsed = true;
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

    addMember($event) {
        this._service.addMember($event.member,$event.photo).subscribe((res) => {
                this.member = res;
                this.loadTeamMembers(1, 10);
        });
    }

}