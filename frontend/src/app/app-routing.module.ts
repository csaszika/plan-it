import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutePaths } from './shared/routes/app.routes';
import { DashboardComponent } from './shell/dashboard/dashboard.component';
import { ShellComponent } from './shell/shell.component';

/* tslint:disable:typedef */
const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            { path: RoutePaths.DASHBOARD, component: DashboardComponent, data: { animation: '' } },
            {
                path: RoutePaths.PLANS,
                loadChildren: () => import('./plans/plans.module').then((module) => module.PlansModule),
            },
            {
                path: RoutePaths.CREATE_PLAN,
                loadChildren: () => import('./create-plan/create-plan.module').then((module) => module.CreatePlanModule),
            },
            {
                path: RoutePaths.FOOTBALL,
                loadChildren: () => import('./domains/football/football.module').then((module) => module.FootballModule),
            },
            { path: '', pathMatch: 'full', redirectTo: RoutePaths.PLANS },
        ],
    },
];
/* tslint:enable:typedef */

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
