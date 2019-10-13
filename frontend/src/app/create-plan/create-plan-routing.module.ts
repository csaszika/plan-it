import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateSportPlanComponent } from './containers/create-sport-plan/create-sport-plan.component';
import { CreatablePlanListComponent } from './containers/createable-plan-list/creatable-plan-list.component';
import { RoutePaths } from './create-plan.routes';
import { FootballPlanComponent } from './containers/football-plan/football-plan.component';

const routes: Routes = [
  {
    path: '',
    component: CreatablePlanListComponent,
  },
  {
    path: RoutePaths.CREATE_SPORT_PLAN,
    component: CreateSportPlanComponent,
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
