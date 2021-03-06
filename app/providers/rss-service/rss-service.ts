import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RssService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RssService {
  url:string = 'https://query.yahooapis.com/v1/public/yql?q=select%20title,link,content:encoded%20from%20rss%20where%20url=%22http://medium.com/feed/@joselitojunior1%22&format=json&diagnostics=true&callback=';

  constructor(private http: Http) {
    this.http = http;
  }

  load() {
    return this.http.get(this.url)
      .map(res => res.json())
      .map(data => data.query.results.item);
  }

}

