import { openDB, IDBPDatabase } from 'idb';
import { PlayLogEntry } from '../types/PlayLog';

export default class IndexedDBService {
	private static DB_NAME = 'BSHDatabase';
	private static DB_VERSION = 2;

	private static UTILS_STORE = 'BSHUtilsStore';
	private static PLAY_LOG_STORE = 'BSHPlayLogStore';

	private static dbPromise: Promise<IDBPDatabase> | null = null;

	private static async getDB() {
		if (!this.dbPromise) {
			this.dbPromise = openDB(this.DB_NAME, this.DB_VERSION, {
				upgrade(db) {
					if (!db.objectStoreNames.contains(IndexedDBService.UTILS_STORE)) {
						db.createObjectStore(IndexedDBService.UTILS_STORE);
					}
					if (!db.objectStoreNames.contains(IndexedDBService.PLAY_LOG_STORE)) {
						db.createObjectStore(IndexedDBService.PLAY_LOG_STORE);
					}
				},
			});
			return this.dbPromise;
		}
		return this.dbPromise;
	}

	private static async getEntry(
		storeName: string,
		entryKey: string,
	): Promise<unknown | undefined> {
		const db = await this.getDB();
		const data = await db.get(storeName, entryKey);
		return data;
	}

	private static async setEntry(
		storeName: string,
		entryKey: string,
		data: string,
	): Promise<void> {
		const db = await this.getDB();
		await db.put(storeName, data, entryKey);
	}

	static async getFavoriteGames(): Promise<string[]> {
		const data = await this.getEntry(this.UTILS_STORE, 'bsh-favorite-games');
		const arr: string[] = data ? JSON.parse(data as string) : [];
		arr.sort();
		return arr;
	}

	static async setFavoriteGames(favoriteGames: string[]): Promise<void> {
		await this.setEntry(
			this.UTILS_STORE,
			'bsh-favorite-games',
			JSON.stringify(favoriteGames),
		);
	}

	static async addPLayLogEntry(playLog: PlayLogEntry): Promise<void> {
		console.log('Adding play log entry:', playLog);
		this.setEntry(
			this.PLAY_LOG_STORE,
			`${playLog.gameTitle}-${playLog.timestamp}`,
			JSON.stringify(playLog),
		);
	}

	static async getAllPlayLogEntries(): Promise<PlayLogEntry[]> {
		const db = await this.getDB();
		const allKeys = await db.getAllKeys(this.PLAY_LOG_STORE);
		const entries: PlayLogEntry[] = [];
		for (const key of allKeys) {
			const data = await db.get(this.PLAY_LOG_STORE, key);
			if (data) {
				entries.push(JSON.parse(data as string) as PlayLogEntry);
			}
		}
		return entries;
	}
}
