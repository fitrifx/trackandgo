import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KelantanPage } from "../kelantan/kelantan";
import { TerengganuPage } from '../terengganu/terengganu';
import { PahangPage } from '../pahang/pahang';
import { KkelantanPage } from '../kkelantan/kkelantan';
import { KterengganuPage } from '../kterengganu/kterengganu';
import { KpahangPage } from '../kpahang/kpahang';
import { CkelantanPage } from '../ckelantan/ckelantan';
import { CterengganuPage } from '../cterengganu/cterengganu';
import { CpahangPage } from '../cpahang/cpahang';

/**
 * Generated class for the KchoosestatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cchoosestate',
  templateUrl: 'cchoosestate.html',
})
export class CchoosestatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KchoosestatePage');
  }
kelantanPage(){
  this.navCtrl.push(CkelantanPage);
}
terengganuPage(){
  this.navCtrl.push(CterengganuPage);
}
pahangPage(){
  this.navCtrl.push(CpahangPage);
}
}
