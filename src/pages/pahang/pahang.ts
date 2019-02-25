import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController , ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AddactivityPage } from '../addactivity/addactivity';
/**
 * Generated class for the PahangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pahang',
  templateUrl: 'pahang.html',
})
export class PahangPage {constructor(public navCtrl: NavController, public navParams: NavParams,public http   : HttpClient ,public loadingCtrl: LoadingController) {
}
public items : Array<any> = [];


ionViewDidLoad() {
  console.log('ionViewDidLoad KelantanPage');
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
    .get('http://trackandgo.000webhostapp.com/alllocationpahang.php')
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


addMe(param : any){
/*const toast = this.toastCtrl.create({

  message: 'Your activity is successfully added!',

  showCloseButton: true,

  closeButtonText: 'Ok'

});

toast.present();*/
this.navCtrl.push(AddactivityPage, param);

}

}