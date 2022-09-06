import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAllPage } from './menu-all.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAllPageRoutingModule {}
