import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlansTableListContainer } from './containers/plans-table-list-container/plans-table-list-container.component';

const routes: Routes = [
    {
        path: '',
        component: PlansTableListContainer,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlansRoutingModule {}
