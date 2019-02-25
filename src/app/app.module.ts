import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { DatePicker } from '@ionic-native/date-picker';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation} from '@ionic-native/geolocation';  
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';





import { TabsPage } from '../pages/tabs/tabs';
import { ActivityPage} from '../pages/activity/activity';
import { ExplorePage } from '../pages/explore/explore';
import { ProfilePage } from '../pages/profile/profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChooseActivityPage } from '../pages/choose-activity/choose-activity';
import { Keyboard } from '@ionic-native/keyboard';
import { SlidesPage } from '../pages/slides/slides';
import { HeaderColor } from '@ionic-native/header-color';
import { SigninPage } from '../pages/signin/signin';
import { ChooselocationeasyPage } from '../pages/chooselocationeasy/chooselocationeasy';
import { AddactivityPage } from '../pages/addactivity/addactivity';
import { ChooselocationmediumPage } from '../pages/chooselocationmedium/chooselocationmedium';
import { ChooselocationhardPage } from '../pages/chooselocationhard/chooselocationhard';
import { ViewactivityPage } from '../pages/viewactivity/viewactivity';
import { SignupPage } from '../pages/signup/signup';
import { ChoosestatePage } from '../pages/choosestate/choosestate';
import { KelantanPage } from '../pages/kelantan/kelantan';
import { TerengganuPage } from '../pages/terengganu/terengganu';
import { PahangPage } from '../pages/pahang/pahang';
import { InfopagePage } from '../pages/infopage/infopage';
import { UpdateactivityPage } from '../pages/updateactivity/updateactivity';
import { LaunchNavigator } from '../../node_modules/@ionic-native/launch-navigator';
import { KchooselocationeasyPage } from '../pages/kchooselocationeasy/kchooselocationeasy';
import { KchooselocationmediumPage } from '../pages/kchooselocationmedium/kchooselocationmedium';
import { KchooselocationhardPage } from '../pages/kchooselocationhard/kchooselocationhard';
import { KchoosestatePage } from '../pages/kchoosestate/kchoosestate';
import { KkelantanPage } from '../pages/kkelantan/kkelantan';
import { KterengganuPage } from '../pages/kterengganu/kterengganu';
import { KpahangPage } from '../pages/kpahang/kpahang';
import { CheckreqPage } from '../pages/checkreq/checkreq';
import { SearchPage } from '../pages/search/search';
import { TextAvatarDirective } from '../directives/text-avatar/text-avatar';
import { IonTextAvatar } from 'ionic-text-avatar';
import { ProfileupdatePage } from '../pages/profileupdate/profileupdate';
import { CategoryPage } from '../pages/category/category';
import { CchooselocationeasyPage } from '../pages/cchooselocationeasy/cchooselocationeasy';
import { CchooselocationhardPage } from '../pages/cchooselocationhard/cchooselocationhard';
import { CchooselocationmediumPage } from '../pages/cchooselocationmedium/cchooselocationmedium';
import { CchoosestatePage } from '../pages/cchoosestate/cchoosestate';
import { CkelantanPage } from '../pages/ckelantan/ckelantan';
import { CterengganuPage } from '../pages/cterengganu/cterengganu';
import { CpahangPage } from '../pages/cpahang/cpahang';
import { LocationFamilyCavingPage } from '../pages/location-family-caving/location-family-caving';
import { LocationFamilyHikingPage } from '../pages/location-family-hiking/location-family-hiking';
import { LocationFamilyKayakingPage } from '../pages/location-family-kayaking/location-family-kayaking';
import { LocationIndiCavingPage } from '../pages/location-indi-caving/location-indi-caving';
import { LocationIndiHikingPage } from '../pages/location-indi-hiking/location-indi-hiking';
import { LocationIndiKayakingPage } from '../pages/location-indi-kayaking/location-indi-kayaking';
import { NavigatePage } from '../pages/navigate/navigate';









@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ActivityPage,
    ExplorePage,
    ProfilePage,
    ChooseActivityPage,
    SlidesPage,
    SigninPage,
    SignupPage,
    ChooselocationeasyPage,
    ChooselocationmediumPage,
    ChooselocationhardPage,
    KchooselocationeasyPage,
    KchooselocationmediumPage,
    KchooselocationhardPage,
    AddactivityPage,
    ViewactivityPage,
    ChoosestatePage,
    KchoosestatePage,
    KelantanPage,
    TerengganuPage,
    PahangPage,
    InfopagePage,
    UpdateactivityPage,
    KkelantanPage,
    KterengganuPage,
    KpahangPage,
    CheckreqPage,
    SearchPipe,
    SortPipe,
    SearchPage,
    TextAvatarDirective,
    IonTextAvatar,
    ProfileupdatePage,
    CategoryPage,
    CchooselocationeasyPage,
    CchooselocationhardPage,
    CchooselocationmediumPage,
    CchoosestatePage,
    CkelantanPage,
    CterengganuPage,
    CpahangPage,
    LocationFamilyCavingPage,
    LocationFamilyHikingPage,
    LocationFamilyKayakingPage,
    LocationIndiCavingPage,
    LocationIndiHikingPage,
    LocationIndiKayakingPage,
    NavigatePage
 




    
 


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{ scrollAssist: false, autoFocusAssist: false }),
    SuperTabsModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ActivityPage,
    ExplorePage,
    ProfilePage,
    ChooseActivityPage,
    SlidesPage,
    SigninPage,
    SignupPage,
    ChooselocationeasyPage,
    ChooselocationmediumPage,
    ChooselocationhardPage,
    KchooselocationeasyPage,
    KchooselocationmediumPage,
    KchooselocationhardPage,
    AddactivityPage,
    ViewactivityPage,
    ChoosestatePage,
    KchoosestatePage,
    KelantanPage,
    TerengganuPage,
    PahangPage,
    InfopagePage,
    UpdateactivityPage,
    KkelantanPage,
    KterengganuPage,
    KpahangPage,
    CheckreqPage,
    SearchPage,
    ProfileupdatePage,
    CategoryPage,
    CchooselocationeasyPage,
    CchooselocationhardPage,
    CchooselocationmediumPage,
    CchoosestatePage,
    CkelantanPage,
    CterengganuPage,
    CpahangPage,
    LocationFamilyCavingPage,
    LocationFamilyHikingPage,
    LocationFamilyKayakingPage,
    LocationIndiCavingPage,
    LocationIndiHikingPage,
    LocationIndiKayakingPage,
    NavigatePage




    

 


  ],
  providers: [
    StatusBar,
    Keyboard,
    SplashScreen,
    HeaderColor,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePicker,
    Geolocation,
    LaunchNavigator,

  ]
})
export class AppModule {}
