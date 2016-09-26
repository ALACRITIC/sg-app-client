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
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from "ng2-file-upload/ng2-file-upload";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [CommonModule],
    providers: [ ApplicationSubmissionsService,
        ApplicationTemplatesService, ClubsService,
        EvaluationsService, PostsService, ProfessorsService,
        TeamMembersService, UserService, AdminGuard,
    ],
    declarations: [FILE_UPLOAD_DIRECTIVES],
    exports: [FILE_UPLOAD_DIRECTIVES]
})
export class SharedModule { }
