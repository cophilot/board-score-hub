/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, useEffect, useState } from 'react';
import { GameState } from '../types/GameState';
import { GameDef } from '../types/GameDef';

const GameDataContext = React.createContext({
	gameState: {} as GameState,
	definition: {} as GameDef,
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
	const [state, setStateInternal] = useState<GameState>(
		GameState.load(definition),
	);

	const setState = (newGameState: GameState) => {
		console.warn(
			'GameDataProvider: setState is deprecated, use setStateInternal instead',
		);
		const newState = newGameState.deepCopy();
		setStateInternal(newState);
		onStateChange && onStateChange(newState);
	};

	useEffect(() => {
		state.configureSetter(setState);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<GameDataContext.Provider
			value={{
				gameState: state,
				definition: definition,
			}}
		>
			{children}
		</GameDataContext.Provider>
	);
}
