import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatablePlanListContainerComponent } from './containers/createable-plan-list/creatable-plan-list-container.component';
import { FootballPlanComponent } from './containers/football-plan/football-plan.component';
import { RoutePaths } from './create-plan.routes';

const routes: Routes = [
  {
    path: '',
    component: CreatablePlanListContainerComponent,
  },
  {
    path: RoutePaths.CREATE_FOOTBALL_PLAN,
    component: FootballPlanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePlanRoutingModule {}
