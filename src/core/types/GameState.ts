import { GameDef } from './GameDef';

export interface GameState {
	currPlayerSize: number; // The current player size
	activatedExtension: string[]; // The activated extension
}

export const getDefaultGameState = (definition: GameDef): GameState => {
	return {
		currPlayerSize: definition.playerSizes[0],
		activatedExtension: [],
	};
};

export const gameSateToString = (gameState: GameState): string => {
	return JSON.stringify(gameState);
};

export const gameStateFromString = (gameState: string): GameState => {
	return JSON.parse(gameState);
};
