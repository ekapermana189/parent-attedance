import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyHistoryPageRoutingModule } from './daily-history-routing.module';

import { DailyHistoryPage } from './daily-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyHistoryPageRoutingModule
  ],
  declarations: [DailyHistoryPage]
})
export class DailyHistoryPageModule {}
