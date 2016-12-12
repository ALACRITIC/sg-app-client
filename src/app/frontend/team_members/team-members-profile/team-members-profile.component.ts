/**
 * Created by Taulant on 10/3/2016.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TeamMember} from "../../../shared/models/team_member.model";
import {TeamMembersService} from "../../../shared/services/team_members.service";
import {ActivatedRoute} from '@angular/router';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'team-profile',
    templateUrl: './team-members-profile.template.pug',
    providers: [TeamMembersService],
})
export class FrontTeamMembersProfile implements OnInit {
    public member: TeamMember;
    sub: any;

    constructor(private _service: TeamMembersService, private _route: ActivatedRoute) {
        this.member = new TeamMember();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.loadTeamMember(params['id']);
        });
    }

    loadTeamMember(id: number) {
        this._service.get(id).then(member => {
            this.member = member
        });
    }
}