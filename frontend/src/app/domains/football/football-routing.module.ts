import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballPlanFormContainerComponent } from './containers/football-plan/football-plan-form-container.component';

const routes: Routes = [
  {
    path: 'create',
    component: FootballPlanFormContainerComponent,
  },
  {
    path: 'all',
    component: FootballPlanFormContainerComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'all' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballRoutingModule {}
