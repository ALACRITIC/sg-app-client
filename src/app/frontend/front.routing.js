"use strict";
/**
 * Created by hgeorgiev on 8/22/16.
 */
var home_component_1 = require("./home/home.component");
var team_members_component_1 = require("./team_members/team_members.component");
var clubs_component_1 = require("./clubs/clubs.component");
var internships_component_1 = require("./internships/internships.component");
var application_templates_component_1 = require("./applications/application_templates.component");
var post_detail_component_1 = require("./posts/post-detail.component");
var evaluations_component_1 = require("./evaluations/evaluations.component");
var professor_detail_component_1 = require("./evaluations/professor/professor-detail/professor-detail.component");
var router_1 = require('@angular/router');
var club_detail_component_1 = require("./clubs/club-detail/club-detail.component");
exports.routing = router_1.RouterModule.forChild([
    // { path: '',      component: Home },
    { path: 'home', component: home_component_1.Home },
    { path: 'clubs', component: clubs_component_1.FrontClubs },
    {
        path: 'club/:id/:name', component: club_detail_component_1.FrontClubDetail,
        data: {
            breadcrumb: "Clubs"
        }
    },
    { path: 'members', component: team_members_component_1.FrontTeamMembers },
    { path: 'internships', component: internships_component_1.FrontInternships },
    { path: 'applications', component: application_templates_component_1.FrontApplicationTemplates },
    {
        path: 'post/:id/:name', component: post_detail_component_1.FrontPostDetail,
        data: {
            breadcrumb: "Home"
        }
    },
    { path: 'evaluations', component: evaluations_component_1.FrontProfessors },
    {
        path: 'professor/:id/:name', component: professor_detail_component_1.ProfessorDetailComponent,
        data: {
            breadcrumb: "Evaluations"
        }
    },
]);
