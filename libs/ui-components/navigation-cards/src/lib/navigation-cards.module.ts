import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { NavigationCardsComponent } from './navigation-cards/navigation-cards.component';

@NgModule({
    declarations: [NavigationCardsComponent],
    imports: [CommonModule, MatCardModule, RouterModule],
    exports: [NavigationCardsComponent],
})
export class NavigationCardsModule {}
