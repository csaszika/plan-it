import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatablePlanListContainerComponent } from './containers/createable-plan-list/creatable-plan-list-container.component';

const routes: Routes = [
    {
        path: '',
        component: CreatablePlanListContainerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreatePlanRoutingModule {}
