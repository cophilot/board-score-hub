import BoardScorePage from './main/BoardScorePage/BoardScorePage';
import { GameDataProvider } from './main/GameDataProvider';
import { GameDef } from './types/GameDef';
import { GameState } from './state/GameState';
import { getSharedStateUrlSeparator, isSharedState } from './utils/functions';

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

	return (
		<GameDataProvider
			definition={definition}
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
