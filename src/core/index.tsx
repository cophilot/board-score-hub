import BoardScorePage from './main/BoardScorePage/BoardScorePage';
import { GameDataProvider } from './main/GameDataProvider';
import { GameDef } from './types/GameDef';
import { GameState } from './state/GameState';
import { getSharedStateUrlSeparator, isSharedState } from './utils/functions';
import { useMemo } from 'react';
import StyleUtils from './utils/StyleUtils';

interface BoardScoreProps {
	definition: GameDef;
	children?: JSX.Element;
	onCellChange?: (rowIndex: number, playerIndex: number, value: number) => void;
	getTotalRow?: (row: number[]) => void;
	onReset?: () => void;
	onClear?: () => void;
	logo?: JSX.Element;
	afterTableElement?: JSX.Element;
	isDarkModeEnabled?: boolean;
	onGameStateChange?: (gameState: GameState) => void;
}

export default function BoardScore({
	definition,
	children,
	onCellChange,
	getTotalRow,
	onReset,
	onClear,
	logo,
	afterTableElement,
	isDarkModeEnabled = false,
	onGameStateChange,
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
