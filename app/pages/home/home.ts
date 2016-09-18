import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RssService }  from '../../providers/rss-service/rss-service';
import { DetailPage } from '../../pages/detail/detail';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [RssService]
})
export class HomePage {
  entries: any;

  constructor(public navCtrl: NavController, public rssService: RssService) {
    this.entries = [];
    this.navCtrl = navCtrl;
    this.rssService.load().subscribe(
      data => {
        this.entries = data;
      }
    );
  }

  openPage(entry): void {
    this.navCtrl.push(DetailPage, {selectedEntry: entry});
  }
}
