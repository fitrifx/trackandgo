import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , App,LoadingController,AlertController } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the ProfileupdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-profileupdate',
  templateUrl: 'profileupdate.html',
})
export class ProfileupdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http   : HttpClient ,public loadingCtrl: LoadingController,public _app: App,public alertCtrl: AlertController) {

    this.navCtrl = navCtrl;
    this.userId = window.localStorage.getItem('userId');
    this.email = window.localStorage.getItem('email');
    this.currentLocation = window.localStorage.getItem('currentLocation');
    this.firstname = window.localStorage.getItem('firstname');
    this.lastname = window.localStorage.getItem('lastname');
    this.age = window.localStorage.getItem('age');
    this.password = window.localStorage.getItem('password');
   
  }

private baseURI  : string  = "http://trackandgo.000webhostapp.com/";

public items : Array<any> = [];

userId : any;
email : any;
currentLocation : any;
firstname : any;
lastname : any;
age : any;
password : any;



ncurrentLocation : "";
nemail = "";
npassword : "";
nvpassword : "";

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileupdatePage');
  }


  passAlert(){
    if(this.npassword==this.nvpassword){
      this.createEntry(this.userId, this.nemail ,this.ncurrentLocation, this.npassword );
  }
  else {
    let alert = this.alertCtrl.create({
      title: 'ERROR',
      subTitle: 'Verify your password again!',
      buttons: ['OK']
    });
    alert.present();
  }
}

createEntry(userId : string, email :string , currentLocation : string , password : any) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "update", "userId" : userId , "email" : email ,"currentLocation" : currentLocation, "password" : password },
          url       : any      	= this.baseURI + "updateprofile.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
          let alert = this.alertCtrl.create({
            title: 'SUCCESS',
            subTitle: 'Your profile has been updated!',
            buttons: ['OK']
          });
          alert.present();
          window.localStorage.setItem('email', email);
          window.localStorage.setItem('password', password);
          window.localStorage.setItem('currentLocation', currentLocation);
          this.navCtrl.push(ProfilePage);
      },
      (error : any) =>
      {
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Your profile has not been updated! Please try again.',
          buttons: ['OK']
        });
        alert.present();
      });
   }



}


