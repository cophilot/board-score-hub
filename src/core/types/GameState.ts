import GameStorage from '../utils/GameStorage';
import { GameDef } from './GameDef';

export type GameStateSetter = (gameState: GameState) => void;

export class GameState {
	private _gameTitle: string;
	private _currPlayerSize: number;
	private _activatedExtension: string[];
	private _gameStateSetter: GameStateSetter | undefined;

	constructor(definition?: GameDef) {
		this._gameTitle = definition ? definition.title : '';
		this._activatedExtension = [];
		this._currPlayerSize = definition ? definition.playerSizes[0] : 0;
	}

	public toString(): string {
		return JSON.stringify({
			gameTitle: this._gameTitle,
			currPlayerSize: this._currPlayerSize,
			activatedExtension: this._activatedExtension,
		});
	}

	public static fromString(gameState: string): GameState {
		const parsedState = JSON.parse(gameState);

		if (parsedState === null) {
			throw new Error('Invalid game state string');
		}
		const state = new GameState();
		state._gameTitle = parsedState.gameTitle;
		state._currPlayerSize = parsedState.currPlayerSize;
		state._activatedExtension = parsedState.activatedExtension;
		return state;
	}

	public save(ignore = false): void {
		if (ignore) {
			return;
		}
		GameStorage.saveGameState(this);
	}

	public static load(definition: GameDef): GameState {
		return GameStorage.getGameState(
			definition.title,
			() => new GameState(definition),
		);
	}

	public configureSetter(gameStateSetter?: GameStateSetter): void {
		console.warn('GameState: configureSetter');
		this._gameStateSetter = gameStateSetter;
	}

	public deepCopy(): GameState {
		const copy = new GameState();
		copy._gameTitle = this._gameTitle;
		copy._currPlayerSize = this._currPlayerSize;
		copy._activatedExtension = [...this._activatedExtension];
		copy._gameStateSetter = this._gameStateSetter;
		return copy;
	}

	private callSetter(): void {
		this._gameStateSetter && this._gameStateSetter(this);
	}

	public getGameTitle(): string {
		return this._gameTitle;
	}

	public getCurrPlayerSize(): number {
		return this._currPlayerSize;
	}

	public setCurrPlayerSize(value: number): void {
		if (this._currPlayerSize === value) {
			return;
		}
		this._currPlayerSize = value;
		this.callSetter();
	}

	public getActivatedExtension(): string[] {
		return this._activatedExtension;
	}

	public activateExtension(extension: string): void {
		if (this._activatedExtension.includes(extension)) {
			return;
		}
		this._activatedExtension.push(extension);
		this.callSetter();
	}

	public deactivateExtension(extension: string): void {
		if (!this._activatedExtension.includes(extension)) {
			return;
		}
		this._activatedExtension = this._activatedExtension.filter(
			(ext) => ext !== extension,
		);
		this.callSetter();
	}
}
