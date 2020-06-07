import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbrokePageRoutingModule } from './toolbroke-routing.module';

import { ToolbrokePage } from './toolbroke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbrokePageRoutingModule
  ],
  declarations: [ToolbrokePage]
})
export class ToolbrokePageModule {}
