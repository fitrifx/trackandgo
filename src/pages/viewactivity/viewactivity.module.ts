import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewactivityPage } from './viewactivity';
import { TextAvatarDirective } from '../../directives/text-avatar/text-avatar';
import { IonTextAvatar } from 'ionic-text-avatar';

@NgModule({
  declarations: [
    ViewactivityPage,
    TextAvatarDirective,
    IonTextAvatar
  ],
  imports: [
    IonicPageModule.forChild(ViewactivityPage),
  ],
})
export class ViewactivityPageModule {}
