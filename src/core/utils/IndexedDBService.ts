import { openDB, IDBPDatabase } from 'idb';

export default class IndexedDBService {
	private static DB_NAME = 'BSHDatabase';
	private static STORE_NAME = 'favoriteGames';
	private static DB_VERSION = 1;

	private static dbPromise: Promise<IDBPDatabase> | null = null;

	private static async getDB() {
		if (!this.dbPromise) {
			this.dbPromise = openDB(this.DB_NAME, this.DB_VERSION, {
				upgrade(db) {
					if (!db.objectStoreNames.contains(IndexedDBService.STORE_NAME)) {
						db.createObjectStore(IndexedDBService.STORE_NAME);
					}
				},
			});
		}
		return this.dbPromise;
	}

	static async getFavoriteGames(): Promise<string[]> {
		const db = await this.getDB();
		const data = await db.get(this.STORE_NAME, 'bsh-favorite-games');
		const arr: string[] = data ? JSON.parse(data) : [];
		arr.sort();
		return arr;
	}

	static async setFavoriteGames(favoriteGames: string[]): Promise<void> {
		const db = await this.getDB();
		await db.put(
			this.STORE_NAME,
			JSON.stringify(favoriteGames),
			'bsh-favorite-games',
		);
	}
}
