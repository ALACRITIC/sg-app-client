/**
 * Created by Taulant on 10/3/2016.
 */
import { Component, OnInit } from '@angular/core';

import {FrontTeamMembersProfile} from "./team-members-profile/team-members-profile.component";
import {TeamMember} from "../../shared/models/team_member.model";
import {FrontTeamMembers} from "./team_members.component";


@Component({

    selector: 'member-profile',
    templateUrl: './team-members-detail.template.html'
})
export class FrontMemberDetail implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}