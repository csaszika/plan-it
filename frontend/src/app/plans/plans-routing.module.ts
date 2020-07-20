import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlansTableListContainerComponent } from './containers/plans-table-list-container/plans-table-list-container.component';

const routes: Routes = [
    {
        path: '',
        component: PlansTableListContainerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlansRoutingModule {}
