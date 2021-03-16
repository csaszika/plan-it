import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FootballPlanEditorComponent } from './football-plan-editor/football-plan-editor.component';
import { FootballPlansTableComponent } from './football-plan-table/football-plans-table.component';

const routes: Routes = [
    {
        path: 'create',
        component: FootballPlanEditorComponent,
    },
    {
        path: 'update/:id',
        component: FootballPlanEditorComponent,
    },
    {
        path: 'all',
        component: FootballPlansTableComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'create' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FootballPlansRoutingModule {}
