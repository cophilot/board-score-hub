export default class LocalStorageService {
	private static FAVORITE_GAMES_KEY = 'bsh-favorite-games';

	static getFavoriteGames() {
		const favoriteGames = localStorage.getItem(
			LocalStorageService.FAVORITE_GAMES_KEY,
		);
		if (favoriteGames === null) {
			return [];
		}
		const arr: string[] = JSON.parse(favoriteGames);
		// sort the array to make sure the order is consistent
		arr.sort();
		return arr;
	}

	static setFavoriteGames(favoriteGames: string[]) {
		localStorage.setItem(
			LocalStorageService.FAVORITE_GAMES_KEY,
			JSON.stringify(favoriteGames),
		);
	}
}
