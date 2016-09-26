import { Routes, RouterModule } from '@angular/router';
import {NoContent} from "./no-content/no-content";

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    //{ path: 'front', loadChildren: 'app/front/front.module#FrontModule'},
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: '**',    component: NoContent },
];

