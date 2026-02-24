import TimeObject from './TimeObject';

export interface ExtendedGameStats {
	minTime?: TimeObject;
	maxTime?: TimeObject;
	weight?: number; // The weight of the game, e.g. on BGG
}
