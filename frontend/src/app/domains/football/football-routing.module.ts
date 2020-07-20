import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FootballPlanFormContainerComponent } from './containers/football-plan-form-container/football-plan-form-container.component';
import { FootballPlansContainerComponent } from './containers/football-plans-container/football-plans-container.component';

const routes: Routes = [
    {
        path: 'create',
        component: FootballPlanFormContainerComponent,
    },
    {
        path: 'all',
        component: FootballPlansContainerComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'all' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FootballRoutingModule {}
