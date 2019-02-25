import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController, DateTime} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SigninPage } from '../signin/signin';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public items : Array<any> = [];
  constructor(public http   : HttpClient,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }


  userId = "";
  firstname="";
  lastname="";
  age : "" ;
  currentLocation="";
  password="";
  vpassword="";
  email="";


  signup() {
    if(this.userId==""||this.firstname==""||this.lastname==""||this.age==""||this.currentLocation==""||this.password==""||this.vpassword==""||this.email==""){
      let alert = this.alertCtrl.create({
        title: 'ERROR',
        subTitle: 'Please fill in all details.',
        buttons: ['OK']
      });
      alert.present();
    }
    else if (this.userId!=""&&this.firstname!=""&&this.lastname!=""&&this.age!=""&&this.currentLocation!=""&&this.password!=""&&this.vpassword!=""&&this.email!="") {
 
      if(!this.email.includes("@")){
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Please enter a valid email.',
          buttons: ['OK']
        });
        alert.present();
      } else {
        if(this.password==this.vpassword){
          this.createEntry(this.userId, this.firstname, this.lastname, this.age , this.currentLocation, this.password, this.email);
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Password and Password Confirmation not match!',
            buttons: ['OK']
          });
          alert.present();
        }
      }
    }
    
   }


   private baseURI               : string  = "http://trackandgo.000webhostapp.com/";

   createEntry(userId : string,firstname : string, lastname : string, age : string, currentLocation : string , password : string , email:string) : void
      {
         let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
             options 	: any		= { "key" : "create", "userId" : userId,  "firstname" : firstname, "lastname" : lastname, "age" : age, "currentLocation" : currentLocation, "password" : password , "email": email},
             url       : any      	= this.baseURI + "signup.php";
   
         this.http.post(url, JSON.stringify(options), headers)
         .subscribe((data : any) =>
         {
             let alert = this.alertCtrl.create({
               title: 'SUCCESS',
               subTitle: 'Successfully signed up! Please log in.',
               buttons: ['OK']
             });
             alert.present();
             this.navCtrl.push(SigninPage);
         },
         (error : any) =>
         {
           let alert = this.alertCtrl.create({
             title: 'ERROR',
             subTitle: 'Username is already exist! Please try again with different username.',
             buttons: ['OK']
           });
           alert.present();
         });
      }
  }

