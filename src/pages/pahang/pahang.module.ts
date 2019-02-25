import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PahangPage } from './pahang';

@NgModule({
  declarations: [
    PahangPage,
  ],
  imports: [
    IonicPageModule.forChild(PahangPage),
  ],
})
export class PahangPageModule {}
