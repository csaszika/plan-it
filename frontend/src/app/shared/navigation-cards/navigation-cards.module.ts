import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCardsComponent } from './navigation-cards/navigation-cards.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationCardsComponent],
  imports: [CommonModule, MatCardModule, RouterModule],
  exports: [NavigationCardsComponent],
})
export class NavigationCardsModule {}
