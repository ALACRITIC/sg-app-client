import {Component, OnInit,ViewEncapsulation} from '@angular/core';
import {TeamMembersService} from "../../shared/services/team_members.service";
import {TeamMember} from "../../shared/models/team_member.model";
import {Listing} from "../../shared/listing.model";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'team-members',
    templateUrl: './team_members.template.pug',
    styleUrls:['./team-members.styles.scss']
})

export class FrontTeamMembers implements OnInit{
    public listing: Listing<TeamMember>;
    public selectedMember:TeamMember;
    public currentPage:number = 1;

    constructor(private _service:TeamMembersService) {}

    ngOnInit() {
        this.listing = new Listing<TeamMember>();
        this.loadMembers(1, 10);
    }

    public pageChanged(event:any):void {
        this.loadMembers(event.page, event.itemsPerPage);
    };

    expandClick(member:TeamMember){
        this.selectedMember = member;
        event.stopPropagation();
    }

    private loadMembers(page:number, itemsPerPage: number) {
            this._service.query(page,itemsPerPage).then(listing => {
                this.listing = listing;
                this.currentPage = page;
            });
    }
}