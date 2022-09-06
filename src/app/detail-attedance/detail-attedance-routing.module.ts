import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAttedancePage } from './detail-attedance.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAttedancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAttedancePageRoutingModule {}
