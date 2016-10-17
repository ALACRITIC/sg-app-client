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
import {AdminProfessorDepartments} from "../admin/dashboard/professors/departments/departments.component";
import {ProfessorProfileComponent} from "../frontend/evaluations/professor/professor-profile.component";
import {FrontClubProfile} from "../frontend/clubs/club-profile.component";
import {FrontTeamMembersProfile} from "../frontend/team_members/team-members-profile/team-members-profile.component";
<<<<<<< HEAD
import {AsyncWaitDirective} from "./directives/asyncWait.directive";

=======
import {ProfessorSearch} from "../admin/dashboard/professors/professor-search/professor-search.component";
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';
>>>>>>> 2a1bc46cfca826c7bf8d93d2c56163a4ef84c5dd
@NgModule({
    imports: [CommonModule, ReactiveFormsModule,FormsModule,TypeaheadModule],
    providers: [ ApplicationSubmissionsService,
        ApplicationTemplatesService, ClubsService,
        EvaluationsService, PostsService, ProfessorsService,
        TeamMembersService, UserService, AdminGuard,
    ],
    declarations: [FILE_UPLOAD_DIRECTIVES,
                   AdminProfessorDepartments,
                   ProfessorProfileComponent,
                   FrontClubProfile,
                   FrontTeamMembersProfile,
<<<<<<< HEAD
                   AsyncWaitDirective
=======
                   ProfessorSearch
>>>>>>> 2a1bc46cfca826c7bf8d93d2c56163a4ef84c5dd
    ],
    exports: [FILE_UPLOAD_DIRECTIVES,
              AdminProfessorDepartments,
              ProfessorProfileComponent,
              FrontClubProfile,
<<<<<<< HEAD
              FrontTeamMembersProfile ,
              AsyncWaitDirective
=======
              FrontTeamMembersProfile,
              ProfessorSearch,
              ReactiveFormsModule,
              FormsModule,
              TypeaheadModule
>>>>>>> 2a1bc46cfca826c7bf8d93d2c56163a4ef84c5dd
    ]
})
export class SharedModule { }
