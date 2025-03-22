export interface GameSettings {
	showHelp: boolean;
	showPlot: boolean;
}

export function getDefaultGameSettings(): GameSettings {
	return {
		showHelp: false,
		showPlot: false,
	};
}
