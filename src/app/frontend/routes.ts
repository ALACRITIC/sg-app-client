/**
 * Created by hgeorgiev on 8/22/16.
 */
import {RouterConfig} from "@angular/router";
import {Home} from "./home/home.component";
import {FrontTeamMembers} from "./team_members/team_members.component";
import {FrontClubs} from "./clubs/clubs.component";
import {FrontInternships} from "./internships/internships.component";
import {FrontApplicationTemplates} from "./applications/application_templates.component";
import {FrontPostDetail} from "./posts/post-detail.component";
import {FrontProfessors} from "./evaluations/evaluations.component";
import {ProfessorDetailComponent} from "./evaluations/professor/professor-detail.component";


export const FrontEndRoutes:RouterConfig = [
    { path: '',      component: Home },
    { path: 'home',  component: Home },
    { path: 'members' , component: FrontTeamMembers},
    { path: 'clubs' , component: FrontClubs},
    { path: 'internships' , component: FrontInternships},
    { path: 'applications' , component: FrontApplicationTemplates },
    { path: 'post/:id', component: FrontPostDetail},
    { path: 'evaluations' , component: FrontProfessors},
    { path: 'professor/:id' , component: ProfessorDetailComponent},

];
