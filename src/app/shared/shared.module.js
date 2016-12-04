"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var application_submissions_service_1 = require("./services/application_submissions.service");
var application_templates_service_1 = require("./services/application_templates.service");
var clubs_service_1 = require("./services/clubs.service");
var evaluations_service_1 = require("./services/evaluations.service");
var posts_service_1 = require("./services/posts.service");
var professors_service_1 = require("./services/professors.service");
var team_members_service_1 = require("./services/team_members.service");
var user_service_1 = require("../admin/user.service");
var adminGuard_1 = require("../admin/adminGuard");
var ng2_file_upload_1 = require("ng2-file-upload/ng2-file-upload");
var common_1 = require("@angular/common");
var departments_component_1 = require("../admin/dashboard/professors/departments/departments.component");
var professor_profile_component_1 = require("../frontend/evaluations/professor/professor-profile/professor-profile.component");
var club_profile_component_1 = require("../frontend/clubs/club-profile/club-profile.component");
var team_members_profile_component_1 = require("../frontend/team_members/team-members-profile/team-members-profile.component");
var professor_search_component_1 = require("../admin/dashboard/professors/professor-search/professor-search.component");
var forms_1 = require('@angular/forms');
var typeahead_1 = require('ng2-bootstrap/components/typeahead');
var accordion_1 = require('ng2-bootstrap/components/accordion');
var loading_spinner_component_1 = require("./components/loading-spinner/loading-spinner.component");
var ng2_bootstrap_1 = require('ng2-bootstrap');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, typeahead_1.TypeaheadModule, accordion_1.AccordionModule],
            providers: [application_submissions_service_1.ApplicationSubmissionsService,
                application_templates_service_1.ApplicationTemplatesService, clubs_service_1.ClubsService,
                evaluations_service_1.EvaluationsService, posts_service_1.PostsService, professors_service_1.ProfessorsService,
                team_members_service_1.TeamMembersService, user_service_1.UserService, adminGuard_1.AdminGuard,
            ],
            declarations: [ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES,
                departments_component_1.AdminProfessorDepartments,
                professor_profile_component_1.ProfessorProfileComponent,
                club_profile_component_1.FrontClubProfile,
                team_members_profile_component_1.FrontTeamMembersProfile,
                loading_spinner_component_1.LoadingSpinner,
                professor_search_component_1.ProfessorSearch,
                ng2_bootstrap_1.CollapseDirective,
            ],
            exports: [ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES,
                departments_component_1.AdminProfessorDepartments,
                professor_profile_component_1.ProfessorProfileComponent,
                club_profile_component_1.FrontClubProfile,
                team_members_profile_component_1.FrontTeamMembersProfile,
                loading_spinner_component_1.LoadingSpinner,
                professor_search_component_1.ProfessorSearch,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                typeahead_1.TypeaheadModule,
                accordion_1.AccordionModule,
                ng2_bootstrap_1.CollapseDirective,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
