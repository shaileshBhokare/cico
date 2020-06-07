import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbrokePage } from './toolbroke.page';

const routes: Routes = [
  {
    path: '',
    component: ToolbrokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbrokePageRoutingModule {}
