import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseActivityPage } from './choose-activity';

@NgModule({
  declarations: [
    ChooseActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseActivityPage),
  ],
})
export class ChooseActivityPageModule {}
