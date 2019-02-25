import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController  } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import {  ViewChild ,ElementRef } from '@angular/core';
import { ActivityPage } from '../activity/activity';
import { UpdateactivityPage } from '../updateactivity/updateactivity';
import { CheckreqPage } from '../checkreq/checkreq';
import { NavigatePage } from '../navigate/navigate';



declare var google;


/**
 * Generated class for the ViewactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewactivity',
  templateUrl: 'viewactivity.html',
})
export class ViewactivityPage {

  cat : string = "description";

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
  

  ppId :any;
  picone : any;
  pictwo : any;
  picthree : any;
  coor : any;
  coorG :any
  lat : any;
  long : any;
  coorTwo : any;
  coorI : any;
  latTwo : any;
  longTwo : any;
  cats : any;

  review : "";
  showreview : any;

  
  req1 : any;
  req1det : any;
  req2 : any;
  req2det : any;
  req3 : any;
  req3det : any;
  req4 : any;
  req4det : any;
  req5 : any;
  req5det : any;
  req6 : any;
  req6det : any;
  req7 : any;
  req7det : any;

  ndate : "";
  ntime : "";

  res1 : boolean = false;
  res2 : boolean = false;
  res3 : boolean = false;
  res4 : boolean = false;
  res5 : boolean = false;
  res6 : boolean = false;

  na : any;
  nt : any;
  add : any;
  nsId : any;
  alId : any;




  private baseURI  : string  = "http://trackandgo.000webhostapp.com/";
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public http   : HttpClient, public alertCtrl: AlertController, public toastCtrl: ToastController, private geolocation : Geolocation ) {
  this.cats = "description";
  
  }
  


    /*ionViewDidEnter(){
    this.;
} */

ionViewDidLoad() {
  this.load();
  this.getUserPosition();
  }


ionViewWillEnter()
   { 
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
      this.myDate = item.date;
      this.myTime = item.time;
      if(item.nameTelResp == "" && item.noTelResp == ""){
        this.nameTelResp = "Not Available";
        this.noTelResp = "Not Available";
      }
      else{  
      this.nameTelResp = item.nameTelResp;
      this.noTelResp = item.noTelResp;
      }
      this.ppId = item.ppId;
      this.picone = item.picone;
      this.pictwo = item.pictwo;
      this.picthree = item.picthree;
     /* this.coor = this.coorG.split(",");
      this.lat = this.coor[0];
      this.long = this.coor[1];*/

      if(this.activityName =="Hiking"){
        this.tickboxhike()
      }
      else if(this.activityName =="Kayak"){
        this.tickboxkayak()
      }
      else if(this.activityName =="Caving"){
        this.tickboxcaving()
      }

      window.localStorage.setItem('activityLat', this.activityLat);
      window.localStorage.setItem('activityLong', this.activityLong);
      
      
   }






   getUserPosition(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;     

        console.log(pos);
        this.addMap(this.activityLat, this.activityLong);

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
   
   
    this.addMap(this.activityLat,this.activityLong);


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

  let content = this.activityDistrict          
  let infoWindow = new google.maps.InfoWindow({
  content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  });

}

delete(activitylocationId : string, myDate :any , myTime:any) : void{
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
          this.deleteActivity(this.activitylocationid,this.userid,this.myDate,this.myTime);
          
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




 sendreview(){
  this.addreview(this.userid,this.activitylocationid, this.review);
}

submitreq(){
  this.addtick(this.userid,this.activitylocationid,this.res1,this.res2,this.res3,this.res4,this.res5,this.res6);
}

addtick(userId : string , activitylocationId : string , req1 : boolean , req2 : boolean, req3 : boolean, req4 : boolean, req5 : boolean, req6 : boolean ){
  let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
        options 	: any		= { "key" : "create", "userId" : userId, "activitylocationId" : activitylocationId , "req1" : req1, "req2" : req2, "req3" : req3, "req4" : req4, "req5" : req5, "req6" : req6},
        url       : any      	= this.baseURI + "addtick.php";

    this.http.post(url, JSON.stringify(options), headers)
    .subscribe((data : any) =>
    {
      const toast = this.toastCtrl.create({

        message: 'Your requirement is successfully added!',
  
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

 tickboxhike(){
   
  this.req1 = "Footwear";
  this.req1det = " For a short day hike that doesn’t involve a heavy pack or technical terrain, trail shoes are great. For longer hikes, carrying heavier loads, or more technical terrain, hiking boots offer more support.";
  this.req2 = "Map and compass/GPS";
  this.req2det = "A map and compass not only tell you where you are and how far you have to go, it can help you find campsites, water, and an emergency exit route in case of an accident. While GPS units are very useful, always carry a map and compass as a backup.";
  this.req3 = "Extra food";
  this.req3det = "Any number of things could keep you out longer than expected: getting lost, enjoying time by a stream, an injury, or difficult terrain. Extra food will help keep up energy and morale.";
  this.req4 = "Safety items: fire, light, and a whistle";
  this.req4det = "The warmth of a fire and a hot drink can help prevent hypothermia. Fires are also a great way to signal for help if you get lost. If lost, you’ll also want the whistle as it is more effective than using your voice to call for help (use 3 short bursts). And just in case you’re out later than planned, a flashlight/headlamp is a must-have item to see your map and where you’re walking.";
  this.req5 = "Knife or multi-purpose tool";
  this.req5det = " These enable you to cut strips of cloth into bandages, remove splinters, fix broken eyeglasses, and perform a whole host of repairs on malfunctioning gear.";
  this.req6 = "Daypack/backpack";
  this.req6det = "You can carry comfortably and has the features designed to keep you hiking smartly. Don’t forget the rain cover; some packs come with one built-in. Keep the other Essentials in the pack and you’ll always be ready to hit the trail safely.";
  this.req7 = "(Extra)Trash Bag.";
  this.req7det = "This 7th piece of gear is essential to making sure that the trails you love stay beautiful for generations to come. A zip lock bag is a great option as well for keeping the trash you pick up along the trail separate from the rest of your gear.";
}

tickboxkayak(){
  this.req1 = "Clothing";
  this.req1det = "Dress for the water temp, not the air temp—a capsize (and hypothermia) can happen suddenly; avoid cotton, which will chill you; quick-drying clothing is a must.";
  this.req2 = "Personal items";
  this.req2det = "Plenty of water Snacks for energy, plus a lunch for longer tours Sunscreen, lip balm and sunglasses (with a retainer) First-aid kit Signaling whistle.";
  this.req3 = "Spray Skirts";
  this.req3det = "keeps the cold water out and keeps the hot air in. When you're putting on a spray skirt, you want to start along the back and work your way up along the coaming, then pull the skirt over the front coaming, making sure you leave the rip cord out, because that's what you're going to pull to pop the spray skirt if you do end up flipping.";
  this.req4 = "Thermal Layering";
  this.req4det = "You can always add on additional layers of thermal clothing to give you extra warmth and for wearing a drysuit you might also need some thermal base layers for underneath - just make sure they’re moisture wicking.";
  this.req5 = "Life Jacket";
  this.req5det = "The short answer is yes! You should always wear a life jacket whether you’re in a sit-on-top, a sit-inside or a canoe. ";
  this.req6 = "Zippers & Pockets";
  this.req6det = "Paddling PFDs will often come with extra storage options, which can be handy when you’re on the water. Zippered pockets can be useful for storing smaller items that you want to keep with you at all times, such as your sun protection.";
}

tickboxcaving(){
  this.req1 = "Red Headlight";
  this.req1det = "Use 4 AA alkaline batteries - these should be fresh for each trip; with 4 AA these use #502 bulb, make sure the headlight has the correct bulb and a spare in the chamber ";
  this.req2 = "Mitylites";
  this.req2det = "Use 2 AAA alkaline batteries - check the light in a dark room, if the batteries seem used, change them; these lights use a lithium bulb";
  this.req3 = "Ropes and Slings";
  this.req3det = "Make sure all are in good condition.";
  this.req4 = "Carabiners";
  this.req4det = "Make sure gates and locks function properly.";
  this.req5 = "Helmets";
  this.req5det = "Check to make sure helmet straps are working and shell is intact";
  this.req6 = "Gloves";
  this.req6det = "Gardening gloves are satisfactory (optional)";
}





 updateActivity(params : any){
   this.navCtrl.push(UpdateactivityPage ,params)
 }

 checkreq(an : any) {
   this.navCtrl.push(CheckreqPage,an)
 } 



 updatedt(){

  this.update(this.userid, this.ndate,this.ntime,this.activitylocationid)
 }

 update(userId : any , date : any , time :any , activitylocationId : any ){

  let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "update", "userId" : userId , "date" : date ,"time" : time, "activitylocationId" : activitylocationId },
          url       : any      	= this.baseURI + "updateuseractivity.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
          let alert = this.alertCtrl.create({
            title: 'SUCCESS',
            subTitle: 'Your date and time has been updated!',
            buttons: ['OK']
          });
          alert.present();
          
        },
        (error : any) =>
        {
          let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Your date and time has not been updated! Please try again.',
            buttons: ['OK']
          });
          alert.present();
        });
     }


     navigate(){
       this.navCtrl.push(NavigatePage);
     }
}





