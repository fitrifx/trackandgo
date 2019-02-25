import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , App,LoadingController  } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { HeaderColor } from '@ionic-native/header-color';
import { SigninPage } from '../signin/signin';
import { HttpClient } from '@angular/common/http';
import { ProfileupdatePage } from '../profileupdate/profileupdate';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

/*
export class ProfilePage {
  public person: {name: string, company: string, birthdate?: number ,email :string};
  dob: any;
  age: any;
  showProfile: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams ,  private keyboard: Keyboard , private headerColor: HeaderColor,public http   : HttpClient, public _app: App ,public loadingCtrl: LoadingController )
   {
    this.person = {name: undefined, company: undefined, birthdate: undefined , email:undefined};
    this.dob = undefined;

    
  }
  initializeApp() {

    this.keyboard.disableScroll(false);
    this.headerColor.tint('#f5b610');
   }
   
  ionViewDidLoad() {
    let person = JSON.parse(localStorage.getItem('PERSON'));
    if (person){
      this.person = person;
      this.age = this.getAge(this.person.birthdate);
      this.dob = new Date(this.person.birthdate).toISOString();
    }
  }

  reset(){
    this.person = {name: null, company: null, birthdate: null, email:null};
    this.dob = null;
    this.showProfile = false;
  }

  save(){
    this.person.birthdate = new Date(this.dob).getTime();
    this.age = this.getAge(this.person.birthdate);
    this.showProfile = true;
    localStorage.setItem('PERSON', JSON.stringify(this.person));
  }

  getAge(birthdate){
    let currentTime = new Date().getTime();
     return ((currentTime - birthdate)/31556952000).toFixed(0);
  }
*/

export class ProfilePage 
{
  public items : Array<any> = [];

userId : any;
email : any;
currentLocation : any;
firstname : any;
lastname : any;
age : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http   : HttpClient ,public loadingCtrl: LoadingController,public _app: App) {

  this.navCtrl = navCtrl;
  this.userId = window.localStorage.getItem('userId');
  this.email = window.localStorage.getItem('email');
  this.currentLocation = window.localStorage.getItem('currentLocation');
  this.firstname = window.localStorage.getItem('firstname');
  this.lastname = window.localStorage.getItem('lastname');
  this.age = window.localStorage.getItem('age');





}


ionViewDidLoad() {
  console.log('ionViewDidLoad ProfilePage');
}
/*ionViewWillEnter() : void
 {
  let loading = this.loadingCtrl.create({
    content: 'Loading..'
  });

  loading.present();
  setTimeout(() => {
    loading.dismiss();
  }, 500);
  
 }//tutupionviewwilenter
*/

  logout(){
    
    const loading = this.loadingCtrl.create({
      duration: 500
    });
    loading.present();
    window.localStorage.clear();
 
    this._app.getRootNav().setRoot(SigninPage);
  }

  updateProfile(){
    this.navCtrl.push(ProfileupdatePage)
  }
}