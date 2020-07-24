import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatablePlanListContainer } from './containers/createable-plan-list/creatable-plan-list-container.component';

const routes: Routes = [
    {
        path: '',
        component: CreatablePlanListContainer,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreatePlanRoutingModule {}
