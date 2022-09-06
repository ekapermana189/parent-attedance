import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAllPageRoutingModule } from './menu-all-routing.module';

import { MenuAllPage } from './menu-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAllPageRoutingModule
  ],
  declarations: [MenuAllPage]
})
export class MenuAllPageModule {}
