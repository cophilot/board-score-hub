const REMOTE_BASE_IMG_PATH =
	'https://raw.githubusercontent.com/cophilot/board-score-hub/refs/heads/main';

export default class PathUtils {
	gameTitle: string;

	constructor(gameTitle: string) {
		this.gameTitle = gameTitle;
	}

	getAbsoluteImagePath(path: string): string {
		const isProduction = import.meta.env.PROD;

		const newPath = `/src/games/${this.getParsedGameTitle()}/${path}`;

		if (!isProduction) {
			return newPath;
		}
		return REMOTE_BASE_IMG_PATH + newPath;
	}

	private getParsedGameTitle(): string {
		return this.gameTitle.replace(/\s+/g, '-').toLowerCase();
	}
}
