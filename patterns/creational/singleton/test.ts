import {StatsTracker} from './stats-tracker';

export function test() {
    let tracker = StatsTracker.instance;
    console.log(`Widget views: ${tracker.widgetViews}`);
    console.log(`Twitter shares: ${tracker.twitterShares}`);
}