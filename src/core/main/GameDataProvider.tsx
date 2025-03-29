/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, useEffect, useState } from 'react';
import { GameState, GameStateData } from '../state/GameState';
import { GameDef } from '../types/GameDef';
import { GameSettings, GameSettingsData } from '../state/GameSettings';
import { PersistentState } from '../state/PersistentState';

const GameDataContext = React.createContext({
	gameState: {} as GameState,
	definition: {} as GameDef,
	settings: {} as GameSettings,
});

export function useGameState(): GameState {
	const context = React.useContext(GameDataContext);
	if (!context) {
		throw new Error('useGameState must be used within a GameDataProvider');
	}
	return context.gameState;
}

export function useGameDefinition() {
	const context = React.useContext(GameDataContext);
	if (!context) {
		throw new Error('useGameDefinition must be used within a GameDataProvider');
	}
	return context.definition;
}

export function useGameSettings(): GameSettings {
	const context = React.useContext(GameDataContext);
	if (!context) {
		throw new Error('useGameSettings must be used within a GameDataProvider');
	}
	return context.settings;
}

interface GameDataProps {
	children: ReactNode;
	definition: GameDef;
	onStateChange?: (state: GameState) => void;
}

export function GameDataProvider({
	children,
	definition,
	onStateChange,
}: GameDataProps) {
	const getNewGameState = React.useCallback(() => {
		const state = new GameState(definition);
		state.load();
		return state;
	}, [definition]);

	const getNewGameSettings = React.useCallback(() => {
		const sett = new GameSettings(definition.title);
		sett.load();
		return sett;
	}, [definition.title]);

	const [state, setStateInternal] = useState<GameState>(getNewGameState);
	const [settings, setSettingsInternal] =
		useState<GameSettings>(getNewGameSettings);

	const setState = (newGameState: GameState) => {
		const newState = newGameState.deepCopy() as GameState;
		setStateInternal(newState);
	};

	const setSettings = (newSettings: GameSettings) => {
		setSettingsInternal(newSettings.deepCopy() as GameSettings);
	};

	useEffect(() => {
		state.addEmitter(
			setState as (state: PersistentState<GameStateData>) => void,
		);
		onStateChange &&
			state.addEmitter(
				onStateChange as (state: PersistentState<GameStateData>) => void,
			);

		settings.addEmitter(
			setSettings as (state: PersistentState<GameSettingsData>) => void,
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<GameDataContext.Provider
			value={{
				gameState: state,
				definition: definition,
				settings: settings,
			}}
		>
			{children}
		</GameDataContext.Provider>
	);
}
