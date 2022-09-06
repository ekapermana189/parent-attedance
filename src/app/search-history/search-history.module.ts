import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchHistoryPageRoutingModule } from './search-history-routing.module';

import { SearchHistoryPage } from './search-history.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchHistoryPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SearchHistoryPage]
})
export class SearchHistoryPageModule {}
