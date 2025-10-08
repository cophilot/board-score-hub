import {
	BoardScorePage,
	BoardScorePageProps,
} from './main/BoardScorePage/BoardScorePage';
import { GameDataProvider } from './main/GameDataProvider';
import { GameDef } from './types/GameDef';
import { GameState } from './state/GameState';
import { getSharedStateUrlSeparator, isSharedState } from './utils/functions';
import { useMemo } from 'react';
import StyleUtils from './utils/StyleUtils';

interface BoardScoreProps extends BoardScorePageProps {
	/** Game definition object containing the configuration for the score table */
	definition: GameDef;
	/** Callback function triggered when the game state changes */
	onGameStateChange?: (gameState: GameState) => void;
}

/**
 * The BoardScore component is the main entry point for rendering the score table application.
 * It sets up the game data context and renders the BoardScorePage component, passing down necessary props and handling shared state.
 * @author cophilot
 * @version 1.0.0
 * @created 2024-3-22
 */
export default function BoardScore({
	definition,
	onGameStateChange,
	children,
	onReset,
	onClear,
	logo,
	afterTableElement,
	isDarkModeEnabled = false,
	userButtons = [],
	onCellChange,
	getTotalRow,
}: BoardScoreProps) {
	const getSharedStateString = () => {
		if (!isSharedState()) {
			return undefined;
		}
		const url = window.location.href;
		return url.split(getSharedStateUrlSeparator())[1];
	};

	const normalizedDefinition = useMemo(() => {
		return normalizeDefinition(definition, isDarkModeEnabled);
	}, [definition, isDarkModeEnabled]);

	return (
		<GameDataProvider
			definition={normalizedDefinition}
			onStateChange={onGameStateChange}
			sharedGameState={getSharedStateString()}
		>
			<BoardScorePage
				onCellChange={onCellChange}
				getTotalRow={getTotalRow}
				onReset={onReset}
				onClear={onClear}
				logo={logo}
				afterTableElement={afterTableElement}
				isDarkModeEnabled={isDarkModeEnabled}
				userButtons={userButtons}
			>
				{children}
			</BoardScorePage>
		</GameDataProvider>
	);
}

function normalizeDefinition(
	def: GameDef,
	isDarkModeEnabled: boolean,
): GameDef {
	const defaultColors = StyleUtils.getDefaultColors(isDarkModeEnabled);
	def = setIfUndefined(def, 'bgColor', defaultColors.bgColor);
	def = setIfUndefined(def, 'fontColor', defaultColors.fontColor);
	def = setIfUndefined(def, 'primaryColor', defaultColors.primaryColor);
	def = setIfUndefined(def, 'secondaryColor', defaultColors.secondaryColor);
	def = setIfUndefined(def, 'fontFamily', 'Ubuntu');
	return def;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setIfUndefined<T>(obj: T, key: keyof T, value: any): T {
	if (obj[key] === undefined) {
		obj[key] = value;
	}
	return obj;
}
