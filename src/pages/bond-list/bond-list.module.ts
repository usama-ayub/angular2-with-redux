import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BondListPage } from './bond-list';

@NgModule({
  declarations: [
    BondListPage,
  ],
  imports: [
    IonicPageModule.forChild(BondListPage),
  ],
  exports: [
    BondListPage
  ]
})
export class BondListPageModule {}
