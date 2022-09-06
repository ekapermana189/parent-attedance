import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbsensikuPage } from './absensiku.page';

const routes: Routes = [
  {
    path: '',
    component: AbsensikuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbsensikuPageRoutingModule {}
