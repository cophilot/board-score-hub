import { PersistentState } from './PersistentState';

export interface GameSettingsData {
	showHelp: boolean;
	showPlot: boolean;
}

export const defaultSettings: GameSettingsData = {
	showHelp: false,
	showPlot: false,
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
	//** END GETTER/SETTER */
}
