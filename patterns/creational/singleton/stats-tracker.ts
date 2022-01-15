export class StatsTracker {
	buttonClicks: number = 0;
	facebookShares: number = 0;
	twitterShares: number = 0;
	widgetViews: number = 0;

	private static _instance: StatsTracker = new StatsTracker();

	constructor() {
		if (StatsTracker._instance) {
			throw new Error('Cannot initialize singleton class using new');
		}
		StatsTracker._instance = this;
	}

	public static get instance(): StatsTracker {
		return StatsTracker._instance;
	}
}
