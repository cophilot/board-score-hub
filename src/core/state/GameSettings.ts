import { PersistentState } from './PersistentState';

export interface GameSettingsData {
	showHelp: boolean;
	showPlot: boolean;
	showQrCode: boolean;
	showRanking: boolean;
}

export const defaultSettings: GameSettingsData = {
	showHelp: false,
	showPlot: false,
	showQrCode: false,
	showRanking: false,
};

/**
 * GameSettings is a class that manages the game settings for a specific game.
 */
export class GameSettings extends PersistentState<GameSettingsData> {
	protected gameTitle: string = '';

	constructor(gameTitle: string = '') {
		super();
		this.gameTitle = gameTitle;
	}

	protected override getStorageKey(): [string] | [string, string] {
		return [this.gameTitle, 'game-settings'];
	}

	protected override getDefaultData(): GameSettingsData {
		return defaultSettings;
	}

	protected override createNewState(): GameSettings {
		return new GameSettings(this.gameTitle);
	}

	//** START GETTER/SETTER */
	public getShowHelp(): boolean {
		return this.data.showHelp;
	}

	public toggleShowHelp(): void {
		this.data.showHelp = !this.data.showHelp;
		this.emitChange();
	}

	public getShowPlot(): boolean {
		return this.data.showPlot;
	}

	public toggleShowPlot(): void {
		this.data.showPlot = !this.data.showPlot;
		this.emitChange(true);
	}

	public setShowPlot(show: boolean): void {
		this.data.showPlot = show;
		this.emitChange(true);
	}

	public getShowQrCode(): boolean {
		return this.data.showQrCode;
	}

	public setShowQrCode(show: boolean): void {
		this.data.showQrCode = show;
		this.emitChange(true);
	}

	public getShowRanking(): boolean {
		return this.data.showRanking;
	}

	public setShowRanking(show: boolean): void {
		this.data.showRanking = show;
		this.emitChange(true);
	}
	//** END GETTER/SETTER */
}
