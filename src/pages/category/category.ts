import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LocationFamilyHikingPage } from '../location-family-hiking/location-family-hiking';
import { LocationFamilyKayakingPage } from '../location-family-kayaking/location-family-kayaking';
import { LocationFamilyCavingPage } from '../location-family-caving/location-family-caving';
import { LocationIndiHikingPage } from '../location-indi-hiking/location-indi-hiking';
import { LocationIndiKayakingPage } from '../location-indi-kayaking/location-indi-kayaking';
import { LocationIndiCavingPage } from '../location-indi-caving/location-indi-caving';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  testRadioOpen = false;
  testRadioResult: any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public modalCtrl: ModalController,public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }


  selectFamily() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Choose your activity!');

    alert.addInput({
      type: 'radio',
      label: 'Hiking',
      value: 'hiking',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Kayaking',
      value: 'kayaking',
     
    });

    alert.addInput({
      type: 'radio',
      label: 'Caving',
      value: 'caving',
    });

  

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        if(data == "hiking"){
          this.navCtrl.push(LocationFamilyHikingPage)}
        else if(data == "kayaking"){
          this.navCtrl.push(LocationFamilyKayakingPage)
        }
        else if(data == "caving"){
          this.navCtrl.push(LocationFamilyCavingPage)
        } 

        
      }
    });

    alert.present();
  }


  selectIndi() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Choose your activity!');

    alert.addInput({
      type: 'radio',
      label: 'Hiking',
      value: 'hiking',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Kayaking',
      value: 'kayaking',
     
    });

    alert.addInput({
      type: 'radio',
      label: 'Caving',
      value: 'caving',
    });

  

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        if(data == "hiking"){
          this.navCtrl.push(LocationIndiHikingPage)}
        else if(data == "kayaking"){
          this.navCtrl.push(LocationIndiKayakingPage)
        }
        else if(data == "caving"){
          this.navCtrl.push(LocationIndiCavingPage)
        } 

        
      }
    });

    alert.present();
  }


}
