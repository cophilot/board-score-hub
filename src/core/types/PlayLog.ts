export interface PlayLogEntry {
	gameTitle: string; // The title of the game
	timestamp: number; // The timestamp of when the game was played
	playerNames: string[]; // The names of the players
	scores: number[]; // The scores recorded during the game
	activatedExtensions: string[]; // The extensions activated during the game
}

export function playLogEntryToString(entry: PlayLogEntry): string {
	const parsedPlayerNames = entry.playerNames.map((name, i) => {
		if (name.trim() === '') {
			return `P${i + 1}`;
		}
		return name;
	});
	const winnerIndex = entry.scores.indexOf(Math.max(...entry.scores));

	const winner = parsedPlayerNames[winnerIndex] || `P${winnerIndex + 1}`;
	const activeExtensions = entry.activatedExtensions.filter(
		(x) => x.trim() !== '',
	);
	return (
		`Game: ${entry.gameTitle}\n` +
		`Timestamp: ${new Date(entry.timestamp).toLocaleString()}\n` +
		`Players: ${parsedPlayerNames.join(', ')}\n` +
		`Scores: ${entry.scores.join(', ')}\n` +
		`Winner: ${winner}\n` +
		(activeExtensions.length > 0
			? `Extensions: ${activeExtensions.join(', ')}`
			: '')
	);
}
