import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ChooseActivityPage } from '../choose-activity/choose-activity';
import { Platform } from 'ionic-angular';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { ViewactivityPage } from '../viewactivity/viewactivity';
import { AlertController } from 'ionic-angular';
import { InfopagePage } from '../infopage/infopage';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , platform: Platform, public loadingCtrl: LoadingController,public http   : HttpClient, private alertCtrl: AlertController ) {

    platform.registerBackButtonAction(() =>{
      console.log("backPressed 1");
    },1);
  }

  private baseURI               : string  = "http://trackandgo.000webhostapp.com/";

  public username : any;
  public items : Array<any> = [];
  public uid : Array<any> = [];
  public alid : Array<any> = [];
  public d : Array<any> = [];
  public t : Array<any> = [];


  public items2 : Array<any> = [];//simpan array untuk individual items

  public ualid : Array<any> = [];
  public uusername : Array<any> = [];
  public udate : Array<any> = [];
  public utime : Array<any> = [];


  public uad : Array<any> = [];
  public uan : Array<any> = [];
  public udesc : Array<any> = [];
  public ulat : Array<any> = [];
  public ulong : Array<any> = [];
  public uas : Array<any> = [];
  public uasd : Array<any> = [];
  public uap : Array<any> = [];
  public uno : Array<any> = [];
  public uname : Array<any> = [];


  public uppid : Array<any> = [];
  public upo : Array<any> = [];
  public upt : Array<any> = [];
  public upth : Array<any> = [];

  
  
  userid : any;
  shortDesc : any;
  date : any;
  time : any;
  activitylocationid : any;


   


  

  ionViewWillEnter() : void
   {
    this.items2 = [];
    this.load();
    
 
    
   }//tutupionviewwilenter
  

   
   load() : void
   {

   
      this.http
      .get('http://trackandgo.000webhostapp.com/useractivity.php')
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items = data;
         this.username = window.localStorage.getItem("userId");

         this.ualid = this.items.map(items => items.activitylocationId);
         this.uusername = this.items.map(items => items.userId);
         this.udate = this.items.map(items => items.date);
         this.utime = this.items.map(items => items.time);

         this.uad = this.items.map(items => items.activityDistrict);
         this.uan = this.items.map(items => items.activityName);
         this.udesc = this.items.map(items => items.description);
         this.ulat = this.items.map(items => items.activityLat);
         this.ulong = this.items.map(items => items.activityLong);
         this.uasd = this.items.map(items => items.activityShortDesc);
         this.uap = this.items.map(items => items.activityPic);
         this.uas = this.items.map(items => items.activityState);
         this.uno = this.items.map(items => items.noTelResp);
         this.uname = this.items.map(items => items.nameTelResp);

         //this.uppid = this.items.map(items => items.ppId);
         this.upo = this.items.map(items => items.picone);
         this.upt = this.items.map(items => items.pictwo);
         this.upth = this.items.map(items => items.picthree);

         for(let i = 0; i <= this.items.length; i++){
           if(this.username == this.uusername[i]){
             this.items2.push({
                               username : this.uusername[i],
                               activitylocationId: this.ualid[i],
                               date : this.udate[i],
                               time : this.utime[i],
                               activityDistrict : this.uad[i],
                               activityName : this.uan[i],
                               description : this.udesc[i],
                               activityLat : this.ulat[i],
                               activityLong : this.ulong[i],
                               activityShortDesc : this.uasd[i],
                               activityPic : this.uap[i],
                               activityState : this.uas[i],
                               noTelResp : this.uno[i],
                               nameTelResp : this.uname[i],

                               picone : this.upo[i],
                               pictwo : this.upt[i],
                               picthree : this.upth[i],    
                              }       
                            
                            );
             //break;

           }

         }
        },
      (error : any) =>
      {
         console.dir(error);
      });
  }
  


  delete(activitylocationId : string,date :any , time:any) : void{
    let alert = this.alertCtrl.create({
      title: 'Delete',
      message: 'Do you want to delete this activity?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: (data: any) => {
            
            console.log('Yes clicked');
            this.deleteActivity(activitylocationId,this.username,date,time);
            
          }
        }
      ]
    });
    alert.present();
  }


  deleteActivity(activitylocationId: string , userId :any , date : any , time :any) : void
   {  
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "delete", "activitylocationId" : activitylocationId , "userId" : userId , "date" : date , "time" : time},
          url       : any      	= this.baseURI + "deleteactivity.php";

      this.http
      .post(url, JSON.stringify(options), headers)
      .subscribe(data =>
      {
        let alert = this.alertCtrl.create({
          title: 'SUCCESS',
          subTitle: 'Activity has been deleted!',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(ActivityPage);
      },
      (error : any) =>
      {
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Please try again.',
          buttons: ['OK']
        });
        alert.present();
      });
   }


  
  choose(){
    this.navCtrl.push(ChooseActivityPage);
  }

  viewUserActivity(param : any ){
    this.navCtrl.push(ViewactivityPage,param);
  }
  info() {
    let alert = this.alertCtrl.create({
      title: 'Just a minute!..',
      subTitle: 'Remember to obey the rules!',
      
      buttons: ['Okay!']
    });
    this.navCtrl.push(InfopagePage);
    alert.present();
    
  }
  
}
