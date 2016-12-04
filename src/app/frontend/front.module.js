"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hgeorgiev on 9/26/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var application_templates_component_1 = require("./applications/application_templates.component");
var clubs_component_1 = require("./clubs/clubs.component");
var news_component_1 = require("./home/news/news.component");
var carousel_component_1 = require("./home/carousel/carousel.component");
var post_detail_component_1 = require("./posts/post-detail.component");
var evaluations_component_1 = require("./evaluations/evaluations.component");
var team_members_component_1 = require("./team_members/team_members.component");
var internships_component_1 = require("./internships/internships.component");
var front_routing_1 = require("./front.routing");
var navbar_component_1 = require("./shared/navbar/navbar.component");
var new_application_submission_component_1 = require("./applications/new-application/new_application_submission.component");
var shared_module_1 = require("../shared/shared.module");
var home_component_1 = require("./home/home.component");
var professor_detail_component_1 = require("./evaluations/professor/professor-detail/professor-detail.component");
var professor_evaluations_component_1 = require("./evaluations/professor/professor-evaluations/professor-evaluations.component");
var footer_component_1 = require("./shared/footer/footer.component");
var club_detail_component_1 = require("./clubs/club-detail/club-detail.component");
var header_component_1 = require("./shared/header/header.component");
var breadcrumbs_component_1 = require("./shared/breadcrumbs/breadcrumbs.component");
var new_professor_evaluation_component_1 = require("./evaluations/professor/professor-evaluations/new-professor-evaluation.component");
var post_photo_component_1 = require("./posts/post-image/post-photo.component");
var post_content_component_1 = require("./posts/post-content/post-content.component");
// import {TaoBreadcrumbs} from "tao-breadcrubms/components";
var FrontModule = (function () {
    function FrontModule() {
    }
    FrontModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, ng2_bootstrap_1.PaginationModule, front_routing_1.routing, shared_module_1.SharedModule, ng2_bootstrap_1.CarouselModule],
            declarations: [
                home_component_1.Home,
                application_templates_component_1.FrontApplicationTemplates,
                clubs_component_1.FrontClubs,
                news_component_1.FrontNews,
                carousel_component_1.NewsCarousel,
                post_detail_component_1.FrontPostDetail,
                evaluations_component_1.FrontProfessors,
                team_members_component_1.FrontTeamMembers,
                internships_component_1.FrontInternships,
                navbar_component_1.FrontNavbar,
                new_application_submission_component_1.NewApplicationSubmission,
                professor_detail_component_1.ProfessorDetailComponent,
                professor_evaluations_component_1.ProfessorEvaluationsComponent,
                footer_component_1.HomeFooter,
                header_component_1.FrontHeader,
                club_detail_component_1.FrontClubDetail,
                breadcrumbs_component_1.BreadcrumbComponent,
                new_professor_evaluation_component_1.NewProfessorEvaluation,
                post_photo_component_1.FrontPostPhoto,
                post_content_component_1.FrontPostContent,
            ],
        })
    ], FrontModule);
    return FrontModule;
}());
exports.FrontModule = FrontModule;
