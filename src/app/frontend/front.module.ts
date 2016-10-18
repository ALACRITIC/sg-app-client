/**
 * Created by hgeorgiev on 9/26/16.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import {PaginationModule, CarouselModule} from "ng2-bootstrap/ng2-bootstrap";
import {FrontApplicationTemplates} from "./applications/application_templates.component";
import {FrontClubs} from "./clubs/clubs.component";
import {FrontNews} from "./home/news.component";
import {NewsCarousel} from "./home/carousel.component"
import {FrontPostDetail} from "./posts/post-detail.component";
import {FrontProfessors} from "./evaluations/evaluations.component";
import {FrontTeamMembers} from "./team_members/team_members.component";
import {FrontInternships} from "./internships/internships.component";
import {routing} from "./front.routing";
import {FrontNavbar} from "./shared/navbar/navbar.component";

import {NewApplicationSubmission} from "./applications/new_application_submission.component";
import {SharedModule} from "../shared/shared.module";
import {Home} from "./home/home.component";
import {ProfessorDetailComponent} from "./evaluations/professor/professor-detail.component";
import {ProfessorProfileComponent} from "./evaluations/professor/professor-profile.component";
import {ProfessorEvaluationsComponent} from "./evaluations/professor/professor-evaluations.component";
import {HomeFooter} from "./shared/footer/footer.component";
import {FrontClubDetail} from "./clubs/club-detail.component";
import {FrontInternshipDetail} from "./internships/internship-detail.component";
import {FrontMemberDetail} from "./team_members/team-members-detail.component";
import {FrontHeader} from "./shared/header/header.component";


@NgModule({
    imports: [CommonModule, PaginationModule, routing, SharedModule, CarouselModule],
    declarations: [
        Home,
        FrontApplicationTemplates, 
        FrontClubs,
        FrontNews,
        NewsCarousel,
        FrontPostDetail,
        FrontProfessors,
        FrontTeamMembers,
        FrontInternships,
        FrontNavbar,
        NewApplicationSubmission,
        ProfessorDetailComponent,
        ProfessorEvaluationsComponent,
        HomeFooter,
        FrontHeader,
        FrontClubDetail,
        FrontInternshipDetail,
        FrontMemberDetail,
        ],
    
})

export class FrontModule { 
    
} 