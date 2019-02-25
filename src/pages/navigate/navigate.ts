import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { ViewChild ,ElementRef } from '@angular/core';

/**
 * Generated class for the NavigatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;


@IonicPage()
@Component({
  selector: 'page-navigate',
  templateUrl: 'navigate.html',
})
export class NavigatePage {
  options : GeolocationOptions;
  currentPos : Geoposition;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  public lat : any;
  public long : any;
  public start : any;
  public end : any;
  public alat : any;
  public along : any;



  

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation : Geolocation) {


  }

 

  ionViewDidLoad() {

    this.addMap();
    this.startNavigating();
 
    console.log('ionViewDidLoad NavigatePage');
  }

  ionViewDidEnter(){
      this.alat = window.localStorage.getItem('activityLat');
      this.along = window.localStorage.getItem('activityLong');
      console.log(this.along);
    this.getUserPosition();
}    

getUserPosition(){
  this.options = {
  enableHighAccuracy : false
  };
  this.geolocation.getCurrentPosition(this.options).then((position : Geoposition) => {

      this.currentPos = position;     

      console.log(position);
      //console.log(position.coords.latitude);
      //this.addMap(pos.coords.latitude,pos.coords.longitude);
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      this.start = new google.maps.LatLng({lat: Number(position.coords.latitude), lng: Number(position.coords.longitude)});
      this.end = new google.maps.LatLng({lat: Number(this.alat), lng : Number(this.along)});

  },(err : PositionError)=>{
      console.log("error : " + err.message);
  ;
  })
}

addMap(){

  let latLng = new google.maps.LatLng(3.138158,101.693513);

  let mapOptions = {
  center: latLng,
  zoom: 15,
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

  let content = "<p>This is your current position !</p>";          
  let infoWindow = new google.maps.InfoWindow({
  content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  });

}

startNavigating(){
 
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;

  directionsDisplay.setMap(this.map);
  directionsDisplay.setPanel(this.directionsPanel.nativeElement);

  directionsService.route({
      origin: {lat: 5.737871, lng: 102.636923},
      destination: {lat: 5.4219, lng: 103.0202},

      travelMode: google.maps.TravelMode['DRIVING']
  }, (res, status) => {

      if(status == google.maps.DirectionsStatus.OK){
          directionsDisplay.setDirections(res);
          console.log(this.lat, this.long,this.alat,this.along);
      } else {
          console.warn(status);
          console.log(this.lat, this.long,this.alat,this.along);
      }

  });

}

}
