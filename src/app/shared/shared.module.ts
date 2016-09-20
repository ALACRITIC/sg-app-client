import { NgModule }            from '@angular/core';
import {ApplicationSubmissionsService} from "./services/application_submissions.service";
import {ApplicationTemplatesService} from "./services/application_templates.service";
import {ClubsService} from "./services/clubs.service";
import {EvaluationsService} from "./services/evaluations.service";
import {PostsService} from "./services/posts.service";
import {ProfessorsService} from "./services/professors.service";
import {TeamMembersService} from "./services/team_members.service";
import {UserService} from "../admin/user.service";
import {AdminGuard} from "../admin/adminGuard";


@NgModule({
    providers: [ ApplicationSubmissionsService,
        ApplicationTemplatesService, ClubsService,
        EvaluationsService, PostsService, ProfessorsService,
        TeamMembersService, UserService, AdminGuard
    ],
})
export class SharedModule { }
