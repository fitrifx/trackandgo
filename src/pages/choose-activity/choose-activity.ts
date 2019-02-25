import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChooselocationeasyPage } from '../chooselocationeasy/chooselocationeasy';
import { ChooselocationmediumPage } from '../chooselocationmedium/chooselocationmedium';
import { ChooselocationhardPage } from '../chooselocationhard/chooselocationhard';
import { ChoosestatePage } from '../choosestate/choosestate';
import { KchooselocationeasyPage } from '../kchooselocationeasy/kchooselocationeasy';
import { KchooselocationhardPage } from '../kchooselocationhard/kchooselocationhard';
import { KchooselocationmediumPage } from '../kchooselocationmedium/kchooselocationmedium';
import { KchoosestatePage } from '../kchoosestate/kchoosestate';
import { CchooselocationeasyPage } from '../cchooselocationeasy/cchooselocationeasy';
import { CchooselocationmediumPage } from '../cchooselocationmedium/cchooselocationmedium';
import { CchooselocationhardPage } from '../cchooselocationhard/cchooselocationhard';
import { CchoosestatePage } from '../cchoosestate/cchoosestate';






/**
 * Generated class for the ChooseActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-activity',
  templateUrl: 'choose-activity.html',
})
export class ChooseActivityPage {

  testRadioOpen = false;
  testRadioResult: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform:Platform,public alertCtrl: AlertController) {

    let backAction = platform.registerBackButtonAction(() => {
      console.log("second");
      this.navCtrl.pop();
      backAction();
      },2)
  }
  choosestate(){
    this.navCtrl.push(ChoosestatePage)
  }
  kchoosestate(){
    this.navCtrl.push(KchoosestatePage)
  }
  cchoosestate(){
    this.navCtrl.push(CchoosestatePage)
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseActivityPage');
  }
//hike
radioLevel() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Choose your level');

    alert.addInput({
      type: 'radio',
      label: 'Easy',
      value: 'easy',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Medium',
      value: 'medium',
     
    });

    alert.addInput({
      type: 'radio',
      label: 'Hard',
      value: 'hard',
    });

  

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        if(data == "easy"){
          this.navCtrl.push(ChooselocationeasyPage)}
        else if(data == "medium"){
          this.navCtrl.push(ChooselocationmediumPage)
        }
        else if(data == "hard"){
          this.navCtrl.push(ChooselocationhardPage)
        } 

        
      }
    });

    alert.present();
  }
//kayak
  radioLevelk() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Choose your level');

    alert.addInput({
      type: 'radio',
      label: 'Easy',
      value: 'easy',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Medium',
      value: 'medium',
     
    });

    alert.addInput({
      type: 'radio',
      label: 'Hard',
      value: 'hard',
    });

  

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        if(data == "easy"){
          this.navCtrl.push(KchooselocationeasyPage)}
        else if(data == "medium"){
          this.navCtrl.push(KchooselocationmediumPage)
        }
        else if(data == "hard"){
          this.navCtrl.push(KchooselocationhardPage)
        } 

        
      }
    });

    alert.present();
  }

  //caving
  radioLevelc() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Choose your level');

    alert.addInput({
      type: 'radio',
      label: 'Easy',
      value: 'easy',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Medium',
      value: 'medium',
     
    });

    alert.addInput({
      type: 'radio',
      label: 'Hard',
      value: 'hard',
    });

  

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        if(data == "easy"){
          this.navCtrl.push(CchooselocationeasyPage)}
        else if(data == "medium"){
          this.navCtrl.push(CchooselocationmediumPage)
        }
        else if(data == "hard"){
          this.navCtrl.push(CchooselocationhardPage)
        } 

        
      }
    });

    alert.present();
  }


  

  comingsoon() {
    const alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      subTitle: 'This app is in beta stage!',
      buttons: ['Ok']
    });

    alert.present();
  }
}



