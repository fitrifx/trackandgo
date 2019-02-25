import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KelantanPage } from "../kelantan/kelantan";
import { TerengganuPage } from '../terengganu/terengganu';
import { PahangPage } from '../pahang/pahang';

/**
 * Generated class for the ChoosestatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choosestate',
  templateUrl: 'choosestate.html',
})
export class ChoosestatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosestatePage');
  }
kelantanPage(){
  this.navCtrl.push(KelantanPage);
}
terengganuPage(){
  this.navCtrl.push(TerengganuPage);
}
pahangPage(){
  this.navCtrl.push(PahangPage);
}
}
