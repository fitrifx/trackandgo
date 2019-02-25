import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KelantanPage } from "../kelantan/kelantan";
import { TerengganuPage } from '../terengganu/terengganu';
import { PahangPage } from '../pahang/pahang';
import { KkelantanPage } from '../kkelantan/kkelantan';
import { KterengganuPage } from '../kterengganu/kterengganu';
import { KpahangPage } from '../kpahang/kpahang';

/**
 * Generated class for the KchoosestatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kchoosestate',
  templateUrl: 'kchoosestate.html',
})
export class KchoosestatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KchoosestatePage');
  }
kelantanPage(){
  this.navCtrl.push(KkelantanPage);
}
terengganuPage(){
  this.navCtrl.push(KterengganuPage);
}
pahangPage(){
  this.navCtrl.push(KpahangPage);
}
}
