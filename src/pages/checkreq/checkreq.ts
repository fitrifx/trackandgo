import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkreq',
  templateUrl: 'checkreq.html',
})
export class CheckreqPage {
  

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckreqPage');
  }
  ionViewWillEnter()
   {  
      if(this.navParams.get("record"))
      {
         this.selectEntry(this.navParams.get("record"));
      }
   }



  selectEntry(an:any) : void{
    if(an =="Hiking"){
      this.tickboxhike()
    }
    else if(an =="Kayak"){
      this.tickboxkayak()
    }
    else if(an =="Caving"){
      this.tickboxcaving()
    }
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
    this.req3det = "Keeps the cold water out and keeps the hot air in. When you're putting on a spray skirt, you want to start along the back and work your way up along the coaming, then pull the skirt over the front coaming, making sure you leave the rip cord out, because that's what you're going to pull to pop the spray skirt if you do end up flipping.";
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
}
