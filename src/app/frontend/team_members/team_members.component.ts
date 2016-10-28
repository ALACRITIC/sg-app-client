import {Component, OnInit,ViewEncapsulation} from '@angular/core';
import {TeamMembersService} from "../../shared/services/team_members.service";
import {TeamMember} from "../../shared/models/team_member.model";
import {Listing} from "../../shared/listing.model";
@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'team-members',
    providers: [TeamMembersService],
    templateUrl: './team_members.template.pug',
    style:require(['./team-members.styles.scss'])
})

export class FrontTeamMembers implements OnInit{
    public listing: Listing<TeamMember>;
    public selectedMember:TeamMember;
    public currentPage:number = 1;
    public loadingSpinner:boolean = true;

    public pageChanged(event:any):void {
        this.loadMembers(event.page, event.itemsPerPage);
    };

    constructor(private _service:TeamMembersService) {
    }

    ngOnInit() {
        this.listing = new Listing<TeamMember>();
        this.loadMembers(1, 10);
    }

    expandClick(member:TeamMember){
        this.selectedMember = member;
        event.stopPropagation();
    }

    private loadMembers(page:number, itemsPerPage: number) {
        setTimeout(() => {
            this._service.query(page,itemsPerPage).then(listing => {
                this.listing = listing;
                this.currentPage = page;
                this.loadingSpinner = false;
            });
        }, 300);

    }
}