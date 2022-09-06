import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbsensikuPageRoutingModule } from './absensiku-routing.module';

import { AbsensikuPage } from './absensiku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbsensikuPageRoutingModule
  ],
  declarations: [AbsensikuPage]
})
export class AbsensikuPageModule {}
