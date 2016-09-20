import { Routes, RouterModule } from '@angular/router';
import {NoContent} from "./no-content/no-content";

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'front', pathMatch: 'full'},
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: '**',    component: NoContent },
];

