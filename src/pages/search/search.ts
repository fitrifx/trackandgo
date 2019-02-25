import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController , ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AddactivityPage } from "../addactivity/addactivity";


/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
/**
    * @name items
    * @type {Array}
    * @public
    * @description     Used to store returned PHP data
    */
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController
    ,public http   : HttpClient , public toastCtrl: ToastController) {
  }
  public items : Array<any> = [];
  public an : Array<any> = [];
  public desc : Array<any> = [];
  public lev : Array<any> = [];
  public img : Array<any> = [];
  

  level ="";
  activityName = "";
  description = "";
  image = "";

  descending: boolean = false;
  order: number;
  column: string = 'name';


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
      .get('http://trackandgo.000webhostapp.com/alllocation.php')
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


  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

    
  
  
}
