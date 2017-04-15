/**
 * FeedService class
 * Handles all communication between api and application regarding the feed.
 */

import { Injectable } from '@angular/core';
import {Jsonp, Response, Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Item} from './model/item';
@Injectable()
export class FeedService {
  /**
   * public constructor
   * @param http
   */
  constructor(private http: Http) {}

  /**
   * request the feed from the api
   * @returns Promise<Item[]>
   */
  public getFeed(): Promise<Item[]> {
    return this.http
      .get('/api/feed')
      .toPromise()
      .then(response => response.json() as Item[]);
  }
}
