import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './shell/dashboard/dashboard.component';
import { ShellComponent } from './shell/shell.component';

export const RoutePaths = {
  dashboard: 'dashboard',
  createPlan: 'create-plan',
  myPlans: 'my-plans',
};

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: RoutePaths.dashboard, component: DashboardComponent, data: { animation: '' } },
      { path: '', pathMatch: 'full', redirectTo: RoutePaths.dashboard },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
