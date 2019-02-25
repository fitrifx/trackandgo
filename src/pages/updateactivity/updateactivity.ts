import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  ViewChild ,ElementRef } from '@angular/core';

/**
 * Generated class for the UpdateactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updateactivity',
  templateUrl: 'updateactivity.html',
})
export class UpdateactivityPage {
 
time : any;
date : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http   : HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateactivityPage');
  }

  
ionViewWillEnter()
{ 
}
selectEntry(item : any) : void
{
   

}


   

}
