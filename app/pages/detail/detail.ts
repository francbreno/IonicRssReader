import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/detail/detail.html',
})
export class DetailPage {
  entry: any;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.entry = navParams.get('selectedEntry');
  }

}
