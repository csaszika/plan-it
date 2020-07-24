import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { NavigationCardsModule } from '../shared/navigation-cards/navigation-cards.module';
import { CreatablePlanListContainer } from './containers/createable-plan-list/creatable-plan-list-container.component';
import { CreatePlanRoutingModule } from './create-plan-routing.module';

const MATERIAL_MODULES = [MatCardModule];

@NgModule({
    declarations: [CreatablePlanListContainer],
    imports: [CommonModule, CreatePlanRoutingModule, ...MATERIAL_MODULES, NavigationCardsModule],
})
export class CreatePlanModule {}
