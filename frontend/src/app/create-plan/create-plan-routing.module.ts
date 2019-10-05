import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateSportPlanComponent } from './containers/create-sport-plan/create-sport-plan.component';
import { CreatablePlanListComponent } from './containers/createable-plan-list/creatable-plan-list.component';
import { RoutePaths } from './create-plan.routes';

const routes: Routes = [
  {
    path: '',
    component: CreatablePlanListComponent,
  },
  {
    path: RoutePaths.CREATE_SPORT_PLAN,
    component: CreateSportPlanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePlanRoutingModule {}
