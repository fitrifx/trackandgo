import { Component } from '@angular/core';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { NgModule } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';




import { ActivityPage } from '../activity/activity';
import { ExplorePage } from '../explore/explore';
import { ProfilePage } from '../profile/profile';
import { CategoryPage } from '../category/category';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  main1Root : any = ActivityPage;
  main2Root : any = ExplorePage;
  main3Root : any = CategoryPage;
  main4Root : any = ProfilePage;
  valueforngif=true;


  

  constructor(public keyboard:Keyboard) {
  }
  
}

@NgModule({
  imports: [
    SuperTabsModule
  ],})
export class AppModule {}