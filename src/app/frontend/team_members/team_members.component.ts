import {Component, OnInit,ViewEncapsulation} from '@angular/core';
import {TeamMembersService} from "../../shared/services/team_members.service";
import {TeamMember} from "../../shared/models/team_member.model";
import {Listing} from "../../shared/listing.model";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'team-members',
    providers: [TeamMembersService],
    templateUrl: './team_members.template.pug',
    style:require(['./team-members.styles.scss','../shared/styles/styles.scss'])
})

export class FrontTeamMembers implements OnInit{
    listing: Listing<TeamMember>;
    public currentPage:number = 1;
    public isCollapsed:boolean;

    public pageChanged(event:any):void {
        this.loadMembers(event.page, event.itemsPerPage);
        this.isCollapsed = true;
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