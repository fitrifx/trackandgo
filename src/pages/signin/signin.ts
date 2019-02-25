import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App ,AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  public loginForm: any;
  public backgroundImage = 'assets/imgs/rc.jpg';

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http   : HttpClient,
    public app: App
  ) { }

  public items : Array<any> = [];
  public uId : Array<any> = [];
  public pass : Array<any> = [];
  public email : Array<any> = [];
  public currentLocation : Array<any> = [];
  public firstname : Array<any> = [];
  public lastname : Array<any> = [];
  public age : Array<any> = [];
  public checkLogin : boolean = false;
  userId = "";
  password = "";



  login() {

    this.uId = this.items.map(items => items.userId);
    this.pass = this.items.map(items => items.password);
    this.email = this.items.map(items => items.email);
    this.currentLocation = this.items.map(items => items.locationState);
    this.firstname = this.items.map(items => items.firstname);
    this.lastname = this.items.map(items => items.lastname);
    this.age = this.items.map(items => items.age);
    for(let i = 0; i <= this.items.length; i++){
      if(this.userId == this.uId[i] && this.password == this.pass[i]){
        this.checkLogin=true;
        window.localStorage.setItem('userId', this.uId[i]);
        window.localStorage.setItem('password', this.pass[i]);
        window.localStorage.setItem('email', this.email[i]);
        window.localStorage.setItem('currentLocation', this.currentLocation[i]);
        window.localStorage.setItem('firstname', this.firstname[i]);
        window.localStorage.setItem('lastname', this.lastname[i]);
        window.localStorage.setItem('age', this.age[i]);
        break;
      }
      else {
        this.checkLogin=false;
      }
  }

  
    
    
    
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {

      if (this.checkLogin == true){
        /*window.localStorage.setItem('userId', this.userId);*/
        const alert = this.alertCtrl.create({
          title: 'Welcome!',
          subTitle: 'Thanks for logging in.',
          buttons: ['OK']
          
        });
        alert.present();
        this.navCtrl.setRoot(TabsPage);
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Wrong username or password!',
            buttons: ['OK']
          });
          alert.present();
        }

      
    });

    loading.present();

  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  
  ionViewWillEnter() : void
  {
     this.load();
  }

  load() : void
  {
     this.http
     .get('http://trackandgo.000webhostapp.com/signin.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;
     },
     (error : any) =>
     {
        console.dir(error);
     });
  }

}
