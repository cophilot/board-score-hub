export default class GameStorage {
	static saveStateData(stringData: string, key: [string] | [string, string]) {
		localStorage.setItem(this.transformKey(key), stringData);
	}

	static getStorageData<T extends object>(
		fromString: (state: string) => T,
		key: [string] | [string, string],
	): T | null {
		const state = localStorage.getItem(this.transformKey(key));
		if (state === null) {
			return null;
		}
		return fromString(state);
	}

	private static getStorageKeyFromTitle(
		gameTitle: string,
		subKey: string = '',
	) {
		let key = gameTitle.toLowerCase() + '-storage';
		if (subKey !== '') {
			key += '-' + subKey.toLowerCase();
		}
		return key;
	}

	private static transformKey(key: [string] | [string, string]): string {
		const mainKey = key[0];
		const subKey = key[1] || '';

		let transformedKey = 'bsh-storage-' + mainKey.toLowerCase();
		if (subKey && subKey !== '') {
			transformedKey += '-' + subKey.toLowerCase();
		}
		return transformedKey;
	}

	/**
	 * @deprecated Should handled via persistent state
	 */
	static getGameTimer(gameTitle: string, fallback: number = 0) {
		const timer = localStorage.getItem(
			GameStorage.getStorageKeyFromTitle(gameTitle, 'timer'),
		);
		if (timer === null) {
			return fallback;
		}
		return parseInt(timer);
	}

	/**
	 * @deprecated Should handled via persistent state
	 */
	static setGameTimer(gameTitle: string, timer: number) {
		localStorage.setItem(
			GameStorage.getStorageKeyFromTitle(gameTitle, 'timer'),
			timer.toString(),
		);
	}
}
