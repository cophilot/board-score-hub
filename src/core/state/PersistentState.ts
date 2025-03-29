import GameStorage from '../utils/GameStorage';

export type StateEmitter<T extends object> = (
	state: PersistentState<T>,
) => void;

/**
 * Class representing the state of a game.
 * The state is persisted in local storage.
 */
export abstract class PersistentState<T extends object> {
	protected data: T; // The actual data that represents the state
	protected emitters: StateEmitter<T>[]; // The emitters that are called when the state changes

	constructor() {
		this.data = this.getDefaultData();
		this.emitters = [];
	}

	//** START ABSTRACT */

	/**
	 * Returns the key to locate and save the state in local storage.
	 */
	protected abstract getStorageKey(): [string] | [string, string];

	/**
	 * Returns the default data for the state.
	 * This is used to fill in any missing data when loading the state.
	 */
	protected abstract getDefaultData(): T;

	/**
	 * Creates a new empty state.
	 * This is used to create a new state when loading the game.
	 */
	protected abstract createNewState(): PersistentState<T>;

	//** END ABSTRACT */

	//** START PUBLIC */

	/**
	 * Loads the state from local storage.
	 * This should be applied after a new state is created.
	 */
	public load() {
		const state = GameStorage.getStorageData<T>(
			this.stringToData,
			this.getStorageKey(),
		);
		if (state) {
			this.setData(state);
		}
		return this;
	}

	/**
	 * Saves the state to local storage.
	 */
	public save(): void {
		GameStorage.saveStateData(this.dataToString(), this.getStorageKey());
	}

	/**
	 * Add an emitter that is called when the state changes.
	 */
	public addEmitter(stateEmitter: (state: PersistentState<T>) => void): void {
		this.emitters.push(stateEmitter);
	}

	/**
	 * Makes a deep copy of the current state.
	 * @returns A copy of the current state.
	 */
	public deepCopy() {
		const newState = this.createNewState();
		newState.setData(this.data, true);
		newState.setEmitters(this.emitters);
		return newState;
	}

	/**
	 * Returns the current data of the state as a string.
	 */
	public dataToString(): string {
		return JSON.stringify(this.data);
	}

	/**
	 * Converts a string to the data object.
	 * @param dataString The string to convert to data
	 * @returns The data object
	 */
	public stringToData(dataString: string): T {
		return JSON.parse(dataString);
	}

	//** END PUBLIC */

	//** START PROTECTED */

	/**
	 * Emits the change event for the game state.
	 * If ignoreSave is true, it does not save the game state.
	 * @param ignoreSave Whether to ignore saving the game state persistence
	 */
	protected emitChange(ignoreSave: boolean = false): void {
		this.emitters.forEach((emitter) => {
			emitter(this);
		});
		if (!ignoreSave) {
			this.save();
		}
	}

	/**
	 * Sets the data for the state.
	 * @param data The data to set
	 * @param riskyMode If enabled, the data will not be filled with default values
	 */
	protected setData(data: T, riskyMode = false): void {
		this.data = data;
		if (riskyMode) {
			return;
		}
		this.data = fillDataWithDefault(this.data, this.getDefaultData());
	}

	/**
	 * Overrides the emitter list with a new one.
	 * @param emitters The emitters to set
	 */
	protected setEmitters(emitters: StateEmitter<T>[]): void {
		this.emitters = emitters;
	}

	//** END PROTECTED */
}

//** START HELPER FUNCTIONS */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fillDataWithDefault<T extends Record<string, any>>(
	data: T,
	defaultData: T,
): T {
	(Object.keys(defaultData) as (keyof T)[]).forEach((key) => {
		if (!data[key] && defaultData && key in defaultData) {
			data[key] = defaultData[key];
		}
	});

	return data;
}

//** END HELPER FUNCTIONS */
