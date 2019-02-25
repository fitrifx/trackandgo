import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddactivityPage } from './addactivity';
import { TextAvatarDirective } from '../../directives/text-avatar/text-avatar';
import { IonTextAvatar } from 'ionic-text-avatar';

@NgModule({
  declarations: [
    AddactivityPage,
    TextAvatarDirective,
    IonTextAvatar
  ],
  imports: [
    IonicPageModule.forChild(AddactivityPage),
  ],
})
export class AddactivityPageModule {}
