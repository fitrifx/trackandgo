import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController , ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AddactivityPage } from '../addactivity/addactivity';
/**
 * Generated class for the KchooselocationeasyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kchooselocationeasy',
  templateUrl: 'kchooselocationeasy.html',
})
export class KchooselocationeasyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController
    ,public http   : HttpClient , public toastCtrl: ToastController) {
  }
  public items : Array<any> = [];


  addMe(param : any){
    /*const toast = this.toastCtrl.create({

      message: 'Your activity is successfully added!',

      showCloseButton: true,

      closeButtonText: 'Ok'

    });

    toast.present();*/
    this.navCtrl.push(AddactivityPage, param);

  }

  ionViewWillEnter() : void
  {
   this.load();
   let loading = this.loadingCtrl.create({
     content: 'Loading..'
   });

   loading.present();
   setTimeout(() => {
     loading.dismiss();
   }, 500);
   
  }//tutupionviewwilenter

  load() : void
   {

   
      this.http
      .get('http://trackandgo.000webhostapp.com/klocationeasy.php')
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


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad KchooselocationeasyPage');
  }

}
