import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SigninPage } from '../signin/signin';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {
  @ViewChild('slider') slider: Slides;

  

  color: any;
  colors = ['#ffcc00', '#e0e437', '#14A989'];

  onSlideChanged() {
    const currentIndex = this.slider.getActiveIndex();
    this.color = this.colors[currentIndex];
    console.log('Slide changed! Current index is', currentIndex);
  }

  constructor(public navCtrl: NavController) {
    this.color = this.colors[0];
  }

  skip(){
    this.slider.slideTo(4, 1000);
  }

  signup(){
    this.navCtrl.push(SignupPage)
  }
  signin(){
    this.navCtrl.push(SigninPage)
  }
  app(){
    this.navCtrl.push(TabsPage)
  }
  
}