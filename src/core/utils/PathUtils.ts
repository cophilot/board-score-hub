const REMOTE_BASE_IMG_PATH =
	'https://raw.githubusercontent.com/cophilot/board-score-hub/refs/heads/main';

const GAMES_BASE_PATH = '/src/games';

/**
 * Utility class for handling paths in the game.
 */
export default class PathUtils {
	private readonly gameTitle: string;
	private readonly overrideGameFolderName: string | undefined;

	/**
	 * Constructor for PathUtils.
	 * @param gameTitle - The title of the game.
	 * @param gameFolderName - Optional folder name to override the default one.
	 */
	constructor(gameTitle: string, gameFolderName?: string) {
		this.gameTitle = gameTitle;
		this.overrideGameFolderName = gameFolderName;
	}

	/**
	 * Returns the absolute path to an image depending on the environment.
	 * @param path - The relative path to the image.
	 * @param prefixWithAssetsFolder - Whether to prefix the path with '/assets/'. Default is true.
	 * @param extendWithPng - Whether to append '.png' to the path. Default is true.
	 * @returns The absolute path to the image.
	 */
	getAbsoluteImagePath(
		path: string,
		prefixWithAssetsFolder = true,
		extendWithPng = true,
	): string {
		const isProduction = import.meta.env.PROD;

		if (prefixWithAssetsFolder && !path.startsWith('/assets/')) {
			path = `/assets/${path}`;
		}

		if (extendWithPng && !path.endsWith('.png')) {
			path += '.png';
		}

		const newPath = `${GAMES_BASE_PATH}/${this.getParsedGameTitle()}/${path}`;

		if (!isProduction) {
			return newPath;
		}
		return REMOTE_BASE_IMG_PATH + newPath;
	}

	private getParsedGameTitle(): string {
		if (this.overrideGameFolderName) {
			return this.overrideGameFolderName;
		}
		return this.gameTitle.replace(/\s+/g, '-').toLowerCase();
	}
}
