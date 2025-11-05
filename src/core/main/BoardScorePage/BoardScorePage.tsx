import './BoardScorePage.scss';
import { useEffect, useMemo } from 'react';
import PlayerSwitch from '../../components/PlayerSwitch/PlayerSwitch';
import StyleUtils from '../../utils/StyleUtils';
import {
	BoardScoreTable,
	BoardScoreTableProps,
} from '../BoardScoreTable/BoardScoreTable';
import { useNavigate } from 'react-router-dom';
import UIUtils from '../../utils/UIUtils';
import { GameDef } from '../../types/GameDef';
import { ButtonDefinition, GameMenu } from '../../components/GameMenu/GameMenu';
import { RowDef } from '../../types/RowDef';
import { callIfArgIsPresent } from '../../utils/generalFunctions';
import {
	useGameDefinition,
	useGameSettings,
	useGameState,
} from '../GameDataProvider';
import PlotDisplay from '../../components/PlotDisplay/PlotDisplay';
import { GameState } from '../../state/GameState';
import PopUp from '../../components/PopUp/PopUp';
import { QRCode } from 'react-qrcode-logo';
import { isSharedState } from '../../utils/functions';
import IconButton from '../../components/IconButton/IconButton';
import { GameSettings } from '../../state/GameSettings';
import QuickGuidePopUp from '../../components/QuickGuidePopUp/QuickGuidePopUp';
import { ExtensionDef } from '../../types/ExtensionDef';

export interface BoardScorePageProps extends BoardScoreTableProps {
	/** Children elements to be rendered after the main content */
	children?: JSX.Element;
	/** Callback function triggered when the reset button is clicked */
	onReset?: () => void;
	/** Callback function triggered when the clear button is clicked */
	onClear?: () => void;
	/** Optional logo element to be displayed at the top of the page */
	logo?: JSX.Element;
	/** Optional element to be rendered immediately after the score table */
	afterTableElement?: JSX.Element;
	/** Flag to enable dark mode styling */
	isDarkModeEnabled?: boolean;
	/** Array of user-defined buttons to be added to the game menu */
	userButtons?: ButtonDefinition[];
}

/**
 * The BoardScorePage component consists of the entire page including the header, player switcher, score table, and footer.
 * It manages the overall layout and integrates various functionalities such as printing, sharing, and displaying additional information.
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-21
 */
export function BoardScorePage({
	children,
	onReset,
	onClear,
	logo,
	afterTableElement,
	isDarkModeEnabled = false,
	userButtons = [],
	onCellChange,
	getTotalRow,
	onExtensionChange,
	rowFilter,
}: BoardScorePageProps): JSX.Element {
	//** START GAME DATA **//
	const definition = useGameDefinition();
	const state = useGameState();
	const settings = useGameSettings();
	//** END GAME DATA **//

	//** START CONSTANTS **//
	const navigate = useNavigate();
	const showHelpButton = definition.rows.some(
		(row: RowDef) => row.icon || row.description,
	);
	//** END CONSTANTS **//

	//** START STATES **//
	//** END STATES **//

	//** START FUNCTIONS **//
	const onPlayerSizeChange = (size: number) => state.setCurrPlayerSize(size);
	//** END FUNCTIONS **//

	//** START HOOKS **//
	useEffect(() => {
		setTimeout(() => {
			setInitialAttributes(definition, isDarkModeEnabled);
		}, 10);
	}, [definition, isDarkModeEnabled]);
	//** END HOOKS **//

	const buttonDefinitions: ButtonDefinition[] = useMemo(() => {
		return [
			{
				label: settings.getShowHelp() ? 'Hide Help' : 'Help',
				iconClass: 'bi bi-question-circle',
				onClick: () => settings.toggleShowHelp(),
				disabled: !showHelpButton,
			},
			{
				label: 'Export',
				iconClass: 'bi bi-box-arrow-up',
				onClick: print,
			},
			{
				label: 'QR Code',
				iconClass: 'bi bi-qr-code',
				onClick: () => settings.setShowQrCode(true),
			},
			{
				label: 'Share',
				iconClass: 'bi bi-link-45deg',
				onClick: () => shareStateViaURL(state),
			},
			{
				label: 'Quick\nGuide',
				iconClass: 'bi bi-list-columns-reverse',
				onClick: () => settings.setShowQuickGuide(true),
				disabled: !definition.quickGuide,
				quickMenu: true,
			},
			{
				label: 'Rules',
				iconClass: 'bi bi-book',
				onClick: () => {
					window.open(definition.rulesUrl, '_blank');
				},
				disabled: !definition.rulesUrl,
			},
			...(definition.extensions
				? Object.entries(definition.extensions)
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						.filter(([_key, value]: [string, ExtensionDef]) => value.rules)
						.map(([key, value]: [string, ExtensionDef]) => ({
							label: key + ' Rules',
							iconClass: 'bi bi-book',
							onClick: () => {
								window.open(value.rules, '_blank');
							},
						}))
				: []),

			{
				label: 'Plot',
				iconClass: 'bi bi-graph-up',
				onClick: () => settings.toggleShowPlot(),
			},
			{
				label: 'Rank',
				iconClass: 'bi-trophy',
				onClick: () => settings.setShowRanking(true),
				quickMenu: true,
			},
			...userButtons,
			{
				label: 'Clear\nTable',
				iconClass: 'bi bi-x-circle',
				onClick: () => {
					if (onClear) {
						onClear();
					}
					state.clearTableMatrix();
					window.location.reload();
				},
				disabled: isSharedState(),
			},
			{
				label: 'Reset',
				iconClass: 'bi bi-arrow-clockwise',
				onClick: () => {
					if (onReset) {
						onReset();
					}
					state.reset(definition);
					window.location.reload();
				},
				disabled: isSharedState(),
			},
		];
	}, [
		definition,
		onClear,
		onReset,
		settings,
		showHelpButton,
		state,
		userButtons,
	]);

	return (
		<>
			<div className="board-score-page">
				<QuickGuidePopUp />
				<QRCodePopUp
					definition={definition}
					state={state}
					settings={settings}
				/>
				{settings.getShowPlot() && (
					<PlotDisplay
						definition={definition}
						tableMatrix={state.getTableMatrix()}
						playerNames={fillPlayerNames(
							state.getPlayerNames(),
							state.getCurrPlayerSize(),
						)}
						onClose={() => {
							settings.setShowPlot(false);
						}}
					/>
				)}
				{logo}
				<TableHeading definition={definition} />
				<h2 className="print-show">
					<i>{getDateString()}</i>
				</h2>
				<GameMenu buttonDefinitions={buttonDefinitions} />
				<PlayerSwitch
					playerSizes={definition.playerSizes}
					initPlayerSize={state.getCurrPlayerSize()}
					onPlayerSizeChange={onPlayerSizeChange}
				></PlayerSwitch>
				{/* <h2 className="print-hide">Timer</h2>
				<Timer gameTitle={definition.title} /> // TODO */}
				<BoardScoreTable
					onCellChange={onCellChange}
					getTotalRow={getTotalRow}
					onExtensionChange={onExtensionChange}
					rowFilter={rowFilter}
				></BoardScoreTable>
				{afterTableElement}
				{isSharedState() && (
					<div className="print-hide ver">
						<h2>
							<i>
								You are currently watching a shared game state.
								<br />
								Therefore, you can not change the table.
							</i>
						</h2>
						<IconButton icon="bi bi-box-arrow-left" onClick={exitSharedState}>
							Exit
						</IconButton>
					</div>
				)}
				<IconButton
					icon="bi-house"
					cls="print-hide"
					onClick={() => {
						navigate('/');
					}}
				>
					Home
				</IconButton>
				<h2 className="print-show">
					<i>board-score-hub.philipp-bonin.com</i>
				</h2>
				{children}
			</div>
		</>
	);
}

interface GameManagementProps {
	definition: GameDef;
	state: GameState;
	settings: GameSettings;
}

function QRCodePopUp({ definition, state, settings }: GameManagementProps) {
	return (
		<PopUp
			isVisible={settings.getShowQrCode()}
			onClose={() => settings.setShowQrCode(false)}
		>
			<div>
				<h1>{definition.title}</h1>
				<h2>{getDateString()}</h2>
				<QRCode
					value={stateToUrl(state)}
					style={{ width: '80%', height: 'auto', maxWidth: '300px' }}
				/>
			</div>
		</PopUp>
	);
}

function exitSharedState() {
	const currUrl = window.location.href;
	const newUrl = currUrl.split('/share/')[0];
	window.history.pushState({}, '', newUrl);
	window.location.reload();
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

function stateToUrl(state: GameState) {
	const stateString = state.dataToString();

	let currUrl = window.location.href;
	if (!currUrl.endsWith('/')) {
		currUrl = currUrl + '/';
	}
	return currUrl + 'share/' + stateString;
}

function shareStateViaURL(state: GameState) {
	const currUrl = stateToUrl(state);
	const el = document.createElement('textarea');
	el.value = currUrl;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
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

function fillPlayerNames(playerNames: string[], playerSize: number): string[] {
	const newPlayers: string[] = [];
	for (let i = 0; i < playerSize; i++) {
		let name = playerNames[i];
		if (!name || name === '') {
			name = `P${i + 1}`;
		}
		newPlayers.push(name);
	}
	return newPlayers;
}

function getDateString(): string {
	return new Date().toLocaleDateString();
}
