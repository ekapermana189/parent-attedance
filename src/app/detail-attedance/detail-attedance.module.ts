import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAttedancePageRoutingModule } from './detail-attedance-routing.module';

import { DetailAttedancePage } from './detail-attedance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAttedancePageRoutingModule
  ],
  declarations: [DetailAttedancePage]
})
export class DetailAttedancePageModule {}
