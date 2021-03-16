import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from '@plan-it/types/ui-routes';

import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            {
                path: RoutePaths.DASHBOARD,
                loadChildren: () => import('@plan-it/features/dashboard').then((module) => module.DashboardModule),
            },
            {
                path: RoutePaths.CREATE_PLAN,
                loadChildren: () => import('@plan-it/features/creatable-plan-list').then((module) => module.CreatablePlanListModule),
            },
            {
                path: RoutePaths.PLANS,
                loadChildren: () => import('@plan-it/features/plans-list').then((module) => module.PlansListModule),
            },
            {
                path: RoutePaths.FOOTBALL,
                loadChildren: () => import('@plan-it/features/football-plans').then((module) => module.FootballPlansModule),
            },
            { path: '', pathMatch: 'full', redirectTo: RoutePaths.DASHBOARD },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
