import { GameDef } from '../types/GameDef';
import { WinMode } from '../types/WinMode';
import { PersistentState } from './PersistentState';

export interface GameStateData {
	gameTitle: string;
	currPlayerSize: number;
	playerNames: string[];
	tableMatrix: number[][];
	activatedExtension: string[];
}

const defaultGameStateData: GameStateData = {
	gameTitle: '',
	currPlayerSize: 0,
	playerNames: [],
	tableMatrix: [],
	activatedExtension: [],
};

const SEPARATOR = '|';
const ARRAY_SEPARATOR = ',';
const INLINE_ARRAY_SEPARATOR = ';';

/**
 * Class representing the state of a game.
 * The state is persisted in local storage.
 */
export class GameState extends PersistentState<GameStateData> {
	constructor(definition?: GameDef) {
		super();
		if (!definition) {
			return;
		}
		this.setInitialData(definition);
	}

	protected override getStorageKey(): [string] | [string, string] {
		return [this.data.gameTitle, 'game-state'];
	}

	protected override getDefaultData(): GameStateData {
		return defaultGameStateData;
	}

	protected override createNewState(): GameState {
		return new GameState();
	}

	public override dataToString(): string {
		const flattenMatrix = this.data.tableMatrix.map((row) =>
			row.join(INLINE_ARRAY_SEPARATOR),
		);

		const str = joinStringArray(
			SEPARATOR,
			this.data.gameTitle,
			this.data.currPlayerSize.toString(),
			this.data.playerNames.join(ARRAY_SEPARATOR),
			flattenMatrix.join(ARRAY_SEPARATOR),
			this.data.activatedExtension.join(ARRAY_SEPARATOR),
		);

		return encodeURIComponent(str);
	}

	public override stringToData(state: string): GameStateData {
		state = decodeURIComponent(state);
		const parts = state.split(SEPARATOR);
		if (parts.length !== 5) {
			throw new Error('Invalid state format');
		}

		return {
			gameTitle: parts[0],
			currPlayerSize: parseInt(parts[1]),
			playerNames: parts[2].split(ARRAY_SEPARATOR),
			tableMatrix: parts[3]
				.split(ARRAY_SEPARATOR)
				.map((row) => row.split(INLINE_ARRAY_SEPARATOR).map(Number)),
			activatedExtension: parts[4].split(ARRAY_SEPARATOR),
		};
	}

	//** START GETTER/SETTER */

	public getTotalScores(): number[] {
		const scores = this.data.tableMatrix[0];
		for (let i = 1; i < this.data.tableMatrix.length; i++) {
			for (let j = 0; j < this.data.tableMatrix[i].length; j++) {
				scores[j] += this.data.tableMatrix[i][j] || 0;
			}
		}
		return scores;
	}

	public getCurrentWinner(definition: GameDef): string {
		const winMode = definition.winMode || WinMode.MOST;

		let winnerIndex = -1;
		let winningScore = winMode === WinMode.MOST ? -Infinity : Infinity;

		this.getTotalScores().forEach((score, index) => {
			if (
				(winMode === WinMode.MOST && score > winningScore) ||
				(winMode === WinMode.LEAST && score < winningScore)
			) {
				winningScore = score;
				winnerIndex = index;
			}
		});

		return this.getPlayerNamesAt(winnerIndex) || 'P' + (winnerIndex + 1);
	}

	public getGameTitle(): string {
		return this.data.gameTitle;
	}

	public getCurrPlayerSize(): number {
		return this.data.currPlayerSize;
	}

	public setCurrPlayerSize(value: number): void {
		if (this.data.currPlayerSize === value) {
			return;
		}
		this.data.currPlayerSize = value;
		this.emitChange();
	}

	public getActivatedExtension(): string[] {
		return this.data.activatedExtension;
	}

	public activateExtension(extension: string): void {
		if (this.data.activatedExtension.includes(extension)) {
			return;
		}
		this.data.activatedExtension.push(extension);
		this.emitChange();
	}

	public deactivateExtension(extension: string): void {
		if (!this.data.activatedExtension.includes(extension)) {
			return;
		}
		this.data.activatedExtension = this.data.activatedExtension.filter(
			(ext) => ext !== extension,
		);
		this.emitChange();
	}

	public getTableMatrix(): number[][] {
		return this.data.tableMatrix;
	}

	public setTableMatrix(matrix: number[][]): void {
		this.data.tableMatrix = matrix;
		this.emitChange();
	}

	public clearTableMatrix(): void {
		this.data.tableMatrix = getEmptyTableMatrix(
			this.data.tableMatrix.length,
			this.data.currPlayerSize,
		);
		this.emitChange();
	}

	public getPlayerNamesAt(index: number): string {
		if (index < 0 || index >= this.data.playerNames.length) {
			return '';
		}
		return this.data.playerNames[index];
	}

	public getPlayerNames(): string[] {
		return this.data.playerNames;
	}

	public setPlayerNames(names: string[]): void {
		this.data.playerNames = names;
		this.emitChange();
	}

	public reset(definition: GameDef): void {
		this.data = this.getDefaultData();
		this.setInitialData(definition);
		this.emitChange();
	}
	//** END GETTER/SETTER */

	//** START PRIVATE */
	private setInitialData(definition: GameDef) {
		const currPlayerSize = getDefaultPlayerSize(definition);
		this.data.gameTitle = definition.title;
		this.data.currPlayerSize = currPlayerSize;
		this.data.tableMatrix = getEmptyTableMatrix(
			definition.rows.length,
			currPlayerSize,
		);
	}
	//** END PRIVATE */
}

//** START HELPER FUNCTIONS */

function joinStringArray(separator: string, ...array: string[]): string {
	return array.join(separator);
}

/**
 * Fills the data with default values.
 * @param data The data to fill
 * @param defaultData The default data
 * @returns The filled data
 */
function getEmptyTableMatrix(rows: number, cols: number) {
	return Array.from(Array(rows).keys()).map(() =>
		Array.from(Array(cols).keys()).map(() => 0),
	);
}

/**
 * Returns the default player size for the game.
 * If the game definition is not provided, it returns 0.
 * @param definition The game definition (optional)
 * @returns The default player size
 */
function getDefaultPlayerSize(definition?: GameDef): number {
	if (!definition) {
		return 0;
	}
	const min = definition.playerSizes[0];
	if (min === 1 && definition.playerSizes.length > 1) {
		return definition.playerSizes[1];
	}
	return min;
}

//** END HELPER FUNCTIONS */
