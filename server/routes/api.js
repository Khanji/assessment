"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json({type: 'application/json'}));

const feedparser = require('feedparser-promised');
const url = 'https://www.jouwictvacature.nl/rss/1bbc5495-3872-4058-886e-aeee2a1cd52c';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/**
 * on feed request, return the feeds. This is specifically tailored for the feed retrieved from:
 * 'https://www.jouwictvacature.nl/rss/1bbc5495-3872-4058-886e-aeee2a1cd52c'
 */
router.get('/feed', (req, res) => {
  let newItem;
  let newItems = [];
  feedparser.parse(url).then( (items) => {
    items.forEach( (item) => {
      newItem = {};
      newItem.title       = item['rss:title']['#'];
      newItem.logo        = item['rss:logo']['#'];
      newItem.link        = item['rss:link']['#'];
      newItem.city        = item['rss:city']['#'];
      newItem.province    = item['rss:province']['#'];
      newItem.description = item['rss:description']['#'];
      newItem.guid        = item['rss:guid']['#'];
      newItem.pubDate     = item['rss:pubdate']['#'];
      newItems.push(newItem);
    });
    res.send(newItems);
  });
});

module.exports = router;

