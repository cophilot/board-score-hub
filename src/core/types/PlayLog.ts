export interface PlayLogEntry {
	gameTitle: string; // The title of the game
	timestamp: number; // The timestamp of when the game was played
	playerNames: string[]; // The names of the players
	scores: number[]; // The scores recorded during the game
	activatedExtensions: string[]; // The extensions activated during the game
}
