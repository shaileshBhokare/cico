import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyrecordsPageRoutingModule } from './myrecords-routing.module';

import { MyrecordsPage } from './myrecords.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyrecordsPageRoutingModule
  ],
  declarations: [MyrecordsPage]
})
export class MyrecordsPageModule {}
