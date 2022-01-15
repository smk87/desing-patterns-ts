/*
Singleton - You can have only a single instance of a specific class throughout the entire application. We are not using `new` keyword to create the instance.

Benefits:
1. Shared state
2. Avoid long initializations
3. Cross-class communication
4. Perfectly represents unique items
*/

import { StatsTracker } from './stats-tracker';
import { test } from './test';

let tracker = StatsTracker.instance;

tracker.widgetViews = 90;
tracker.buttonClicks = 64;
tracker.facebookShares = 20;
tracker.twitterShares = 30;

console.log(`Widget Views: ${tracker.widgetViews}`);
console.log(`Button Clicks: ${tracker.buttonClicks}`);
console.log(`Facebook Shares: ${tracker.facebookShares}`);
console.log(`Twitter Shares: ${tracker.twitterShares}`);

tracker.widgetViews++;
tracker.twitterShares += 2;

test();
