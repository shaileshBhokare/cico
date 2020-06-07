import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyrecordsPage } from './myrecords.page';

const routes: Routes = [
  {
    path: '',
    component: MyrecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyrecordsPageRoutingModule {}
