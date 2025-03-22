import './BoardScorePage.scss';
import { useEffect, useState, useMemo } from 'react';
import PlayerSwitch from '../../components/PlayerSwitch/PlayerSwitch';
import StyleUtils from '../../utils/StyleUtils';
import BoardScoreTable from '../BoardScoreTable/BoardScoreTable';
import GameStorage from '../../utils/GameStorage';
import { useNavigate } from 'react-router-dom';
import UIUtils from '../../utils/UIUtils';
import { GameDef } from '../../types/GameDef';
import { GameMenu } from '../../components/GameMenu/GameMenu';
import { GameState, getDefaultGameState } from '../../types/GameState';
import { RowDef } from '../../types/RowDef';
import { GameSettings, getDefaultGameSettings } from '../../types/GameSettings';
import { callIfArgIsPresent } from '../../utils/generalFunctions';

interface BoardScoreTableProps {
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

/**
 * This is a BoardScorePage component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-21
 */
export default function BoardScorePage({
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
}: BoardScoreTableProps): JSX.Element {
	//** STARTING CONSTANTS **//
	const navigate = useNavigate();
	const date = new Date().toLocaleDateString();
	const showHelpButton = definition.rows.some(
		(row: RowDef) => row.icon || row.description,
	);
	//** END CONSTANTS **//

	//** STARTING STATES **//
	const [gst, setGST] = useState<GameState>(
		GameStorage.getGameState(definition.title, () =>
			getDefaultGameState(definition),
		),
	);
	const [settings, setSettings] = useState<GameSettings>(
		GameStorage.getGameSettings(definition.title, getDefaultGameSettings()),
	);
	//** END STATES **//

	//** START FUNCTIONS **//
	const setGameSate = (newState: GameState, saveInStorage = true) => {
		setGST(newState);
		onGameStateChange && onGameStateChange(newState);
		saveInStorage && GameStorage.saveGameState(definition.title, newState);
	};
	const setGameSettings = (newSettings: GameSettings, saveInStorage = true) => {
		setSettings(newSettings);
		saveInStorage && GameStorage.setGameSettings(definition.title, newSettings);
	};
	const onPlayerSizeChange = (size: number) =>
		setGameSate({ ...gst, currPlayerSize: size });
	//** END FUNCTIONS **//

	//** START HOOKS **//
	useEffect(() => {
		setTimeout(() => {
			setInitialAttributes(definition, isDarkModeEnabled);
		}, 10);
	}, [definition, isDarkModeEnabled]);
	//** END HOOKS **//

	const buttonDefinitions = useMemo(() => {
		return [
			{
				label: settings.showHelp ? 'Hide Help' : 'Help',
				iconClass: 'bi bi-question-circle',
				onClick: () => {
					const newSettings = {
						...settings,
						showHelp: !settings.showHelp,
					};
					setGameSettings(newSettings);
				},
				disabled: !showHelpButton,
			},
			{
				label: 'Export',
				iconClass: 'bi bi-box-arrow-up',
				onClick: print,
			},
			{
				label: 'Rules',
				iconClass: 'bi bi-book',
				onClick: () => {
					window.open(definition.rulesUrl, '_blank');
				},
				disabled: !definition.rulesUrl,
			},
			{
				label: 'Plot',
				iconClass: 'bi bi-graph-up',
				onClick: () => {
					const newSettings = {
						...settings,
						showPlot: !settings.showPlot,
					};
					setGameSettings(newSettings, false);
				},
			},
			{
				label: 'Clear',
				iconClass: 'bi bi-x-circle',
				onClick: () => {
					if (onClear) {
						onClear();
					}
					GameStorage.deleteGameMatrix(definition.title);
					window.location.reload();
				},
			},
			{
				label: 'Reset',
				iconClass: 'bi bi-arrow-clockwise',
				onClick: () => {
					if (onReset) {
						onReset();
					}
					GameStorage.deleteStorage(definition.title);
					window.location.reload();
				},
			},
		];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		definition.rulesUrl,
		definition.title,
		onClear,
		onReset,
		settings,
		showHelpButton,
	]);

	return (
		<>
			<div className="board-score-page">
				<GameMenu buttonDefinitions={buttonDefinitions} />
				{logo}
				<TableHeading definition={definition} />
				<h2 className="print-show">
					<i>{date}</i>
				</h2>
				{definition.playerSizes.length > 1 && (
					<h2 className="print-hide">Players</h2>
				)}
				<PlayerSwitch
					playerSizes={definition.playerSizes}
					initPlayerSize={gst.currPlayerSize}
					onPlayerSizeChange={onPlayerSizeChange}
				></PlayerSwitch>
				{/* <h2 className="print-hide">Timer</h2>
				<Timer gameTitle={definition.title} /> // TODO */}
				<BoardScoreTable
					state={gst}
					setState={setGameSate}
					onCellChange={onCellChange}
					getTotalRow={getTotalRow}
					definition={definition}
					gameSettings={settings}
					showPlot={settings.showPlot}
					onClosePlot={() => {
						const newSettings = {
							...settings,
							showPlot: false,
						};
						setSettings(newSettings);
					}}
				></BoardScoreTable>
				{afterTableElement}
				<button
					className="btn selected nav-btn print-hide"
					onClick={() => {
						navigate('/');
					}}
				>
					<i className="bi bi-house"></i>
					Home
				</button>
				<h2 className="print-show">
					<i>board-score-hub.philipp-bonin.com</i>
				</h2>
				{children}
			</div>
		</>
	);
}

/**
 * Print the current page
 */
function print() {
	const TIMEOUT = 500;

	const displayStyles = UIUtils.hideElementsWithClass('print-hide');
	UIUtils.showElementsWithClass('print-show');

	setTimeout(() => {
		const html = document.documentElement.outerHTML;
		const win = window.open('', 'printwindow');
		if (!win) {
			alert('Please allow popups for this website');
			return;
		}
		win.document.write(html);
		setTimeout(() => {
			win.print();
			win.close();
			setTimeout(() => {
				UIUtils.showElementsWithClass('print-hide', displayStyles);
				UIUtils.hideElementsWithClass('print-show');
			}, TIMEOUT);
		}, TIMEOUT);
	}, TIMEOUT);
}

/**
 * The heading of the table
 */
function TableHeading({ definition }: { definition: GameDef }) {
	const heading = <h1>{definition.title}</h1>;
	if (!definition.url) {
		return heading;
	}
	return (
		<a
			href={definition.url}
			target="_blank"
			rel="noreferrer"
			className="heading-link"
		>
			{heading}
		</a>
	);
}

function setInitialAttributes(definition: GameDef, darkMode: boolean) {
	StyleUtils.setDefaultValues(darkMode);
	callIfArgIsPresent(definition.title, (title) => {
		document.title = title + ' - BoardScoreHub';
	});
	callIfArgIsPresent(definition.bgColor, StyleUtils.setBackGroundColor);
	callIfArgIsPresent(definition.fontColor, StyleUtils.setFontColor);
	callIfArgIsPresent(definition.primaryColor, StyleUtils.setPrimaryColor);
	callIfArgIsPresent(definition.secondaryColor, StyleUtils.setSecondaryColor);
	callIfArgIsPresent(definition.fontFamily, StyleUtils.setFontFamily);
}
