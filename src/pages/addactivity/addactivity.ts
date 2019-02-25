import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import {  ViewChild ,ElementRef } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

declare var google;

/**
 * Generated class for the AddactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addactivity',
  templateUrl: 'addactivity.html',
})
export class AddactivityPage {

  options : GeolocationOptions;
  currentPos : Geoposition;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  public items : Array<any> = [];
  public counts : Array<any> = [];


  userid : any;
  activitylocationid : any;
  myDate="";
  myTime="";
  activityDistrict = "any";
  activityName = "any";
  activityState = "any";
  description = "any";
  activityPic = "any";
  activityLat : any;
  activityLong : any;
  noTelResp : any;
  nameTelResp : any;
  clat : number;
  clong : number;
  cats :any;
  review : "";
  showreview : any;

  ppId : any;
  picone : any;
  pictwo : any;
  picthree : any;

  na : any;
  nt : any;
  add : any;
  nsId : any;
  alId : any;

  private baseURI  : string  = "http://trackandgo.000webhostapp.com/";

  constructor(public navCtrl: NavController, public navParams: NavParams,public http   : HttpClient, public alertCtrl: AlertController, public toastCtrl: ToastController, private geolocation : Geolocation,private launchNavigator:LaunchNavigator ) {
  this.cats = "description"}
 
    ionViewDidEnter(){
    this.getUserPosition();
    } 



  /*
ionViewWDidLoad() {
  this.getUserPosition();
}*/
   getUserPosition(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos; 
        /*this.clat = pos.coords.latitude;
        this.clong = pos.coords.longitude;   */  

        console.log(pos);
        this.addMap(this.activityLat,this.activityLong);
    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
}

addMap(lat,long){

  let latLng = new google.maps.LatLng(lat, long);

  let mapOptions = {
  center: latLng,
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  this.addMarker();

}

addMarker(){

  let marker = new google.maps.Marker({
  map: this.map,
  animation: google.maps.Animation.DROP,
  position: this.map.getCenter()
  });

  let content = this.activityDistrict;          
  let infoWindow = new google.maps.InfoWindow({
  content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  });

}
navigateLocation(){
  let options: LaunchNavigatorOptions = {
   app: this.launchNavigator.APP.GOOGLE_MAPS,
            start:[this.clat,this.clong]
     };
 this.launchNavigator.navigate('this.activityLat,this.activityLong',options)
 .then(success =>{
   console.log(success);
 },error=>{
   console.log(error);
 })
}
    




ionViewWillEnter() : void
   {  this.load();
      if(this.navParams.get("record"))
      {
         this.selectEntry(this.navParams.get("record"));
      }
   }

   load() : void
   {

   
      this.http
      .get('http://trackandgo.000webhostapp.com/review.php')
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items = data;
      },
      (error : any) =>
      {
         console.dir(error);
      });

      this.http
      .get('http://trackandgo.000webhostapp.com/services.php')
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.counts = data;
      },
      (error : any) =>
      {
         console.dir(error);
      });


  }



   selectEntry(item : any) : void
   {
      this.userid = window.localStorage.getItem('userId');
      this.activitylocationid = item.activitylocationId;
      this.activityDistrict = item.activityDistrict;
      this.activityState = item.activityState;
      this.description = item.description;
      this.activityPic = item.activityPic;
      this.activityLat = item.activityLat;
      this.activityLong = item.activityLong;
      this.activityName = item.activityName;
      if(item.nameTelResp == "" && item.noTelResp == ""){
        this.nameTelResp = "Not Available";
        this.noTelResp = "Not Available";
      }else
      {  
      this.nameTelResp = item.nameTelResp;
      this.noTelResp = item.noTelResp;
      }
      this.ppId = item.ppId;
      this.picone = item.picone;
      this.pictwo = item.pictwo;
      this.picthree = item.picthree;
   }

   
   addActivity(){
    this.createEntry(this.myDate, this.myTime, this.userid, this.activitylocationid);
  }

   

    createEntry(date: string, time : string, userid : string, activity : string) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "create", "date" : date, "time" : time, "userid" : userid, "activity" : activity},
          url       : any      	= this.baseURI + "addactivity.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
        const toast = this.toastCtrl.create({

          message: 'Your activity is successfully added!',
          duration: 3000,    
          showCloseButton: true,
          closeButtonText: 'Ok'
    
        });
    
        toast.present();
      },
      (error : any) =>
      {
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Please fill in the form.',
          
          buttons: ['OK']
        });
        alert.present();
      });
   }


   sendreview(){
    this.addreview(this.userid,this.activitylocationid, this.review);
  }
  
   
  
  addreview(userId: string, activitylocationId : string, review : string) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "create", "userId" : userId, "activitylocationId" : activitylocationId , "review" : review},
          url       : any      	= this.baseURI + "addcomment.php";
  
      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
        const toast = this.toastCtrl.create({
  
          message: 'Your comment is successfully added!',
    
          showCloseButton: true,
    
          closeButtonText: 'Ok'
    
        });
    
        toast.present();
      },
      (error : any) =>
      {
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Check your internet!.',
          buttons: ['OK']
        });
        alert.present();
      });
   }

}

