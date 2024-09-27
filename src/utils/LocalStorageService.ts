export default class LocalStorageService {
	private static FAVORITE_GAMES_KEY = 'bsh-favorite-games';

	static getFavoriteGames() {
		const favoriteGames = localStorage.getItem(
			LocalStorageService.FAVORITE_GAMES_KEY,
		);
		if (favoriteGames === null) {
			return [];
		}
		return JSON.parse(favoriteGames);
	}

	static setFavoriteGames(favoriteGames: string[]) {
		localStorage.setItem(
			LocalStorageService.FAVORITE_GAMES_KEY,
			JSON.stringify(favoriteGames),
		);
	}
}
