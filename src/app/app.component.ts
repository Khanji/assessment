/**
 * app.component class
 * where all the magic happens
 */

// imports
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {FeedService} from './feed.service';
import {Item} from './model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeedService]
})
export class AppComponent implements OnInit {
  // private variables
  public feedSearchItems: Item[];
  public searchString: string;
  public foundResultsStr = ` gevonden resultaten`;
  public detailsButtonStr = `Bekijk Details`;
  public feedItems: Item[];
  public feedLogo: string;
  public footerStr = `JouwICTvacature.nl is een vacaturesite waar jij als specialist centraal staat. Dankzij onze 
                       vakinhoudelijke kennis weten we wat er speelt. Doordat we aan elk ICT-specialisme apart aandacht 
                       besteden, kun je heel gericht vacatures vinden in jouw vakgebied. Zo zijn we in staat keer op 
                       keer de juiste specialist aan de juiste werkgever te koppelen. Jij blij, je nieuwe werkgever 
                       blij, wij blij! `;

  /**
   * public constructor
   * @param feedService
   */
  constructor(private feedService: FeedService) {
  }

  /**
   * on initialisation, get the feed and set variables that should not be null.
   */
  ngOnInit() {
    // get feed from service
    this.feedService.getFeed()
      .then(response => {
        this.feedItems = response as Item[];
        // sort the set on pubDate from new to old
        this.feedItems.sort((a: Item, b: Item) => {
          return Number(new Date(Date.parse(b.pubDate))) - Number(new Date(Date.parse(a.pubDate)));
        });
      });
    this.feedLogo = '/assets/images/logo.png';
    this.searchString = '';
  }

  /**
   * Search within item set, based on the search string
   * @param ss - search string
   */
  findArticles(ss: string): void {
    const itm: Item[] = [];
    if (this.feedItems) {
      this.feedItems.forEach((item) => {
        if (item.title.toLowerCase().indexOf(ss.toLowerCase()) >= 0) {
          itm.push(item);
        } else if (item.city.toLowerCase().indexOf(ss.toLowerCase()) >= 0) {
          itm.push(item);
        } else if (item.province) {
            if (item.province.toLowerCase().indexOf(ss.toLowerCase()) >= 0) {
              itm.push(item);
            }
        }
      });
    }
    this.feedSearchItems = itm;
  }

  // handle the errors - quick and dirty
  private handleError(error) {
    return error;
  }
}
