import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { Keyboard } from '@ionic-native/keyboard';
import { SlidesPage } from '../pages/slides/slides';
import { HeaderColor } from '@ionic-native/header-color';
import { ActivityPage } from '../pages/activity/activity';
import { AlertController } from 'ionic-angular';
import { SigninPage } from '../pages/signin/signin';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SlidesPage;
  public alertShown:boolean = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private keyboard: Keyboard , private headerColor: HeaderColor, public alertCtrl: AlertController ) {

    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkPreviousAuthorization();
      this.initializeApp();
    });
  }
  initializeApp() {

    this.keyboard.disableScroll(false);
    this.headerColor.tint('#f5b610');
   }

   checkPreviousAuthorization(): void { 
    if((window.localStorage.getItem('userId') === "undefined" || window.localStorage.getItem('userId') === null)) {
      this.rootPage = SlidesPage;
    } else {
       
        this.rootPage = TabsPage;
    
    }
  }
}
