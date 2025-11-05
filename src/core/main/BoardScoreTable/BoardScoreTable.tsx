import { useCallback, useEffect, useMemo, useState } from 'react';
import './BoardScoreTable.scss';
import { getFunctionForWinMode, WinMode } from '../../types/WinMode';
import ExtensionButtons from '../../components/ExtensionButtons/ExtensionButtons';
import { GameDef, Label } from '../../types/GameDef';
import NumInput from '../../components/NumInput/NumInput';
import { NumInputFocusManager } from '../../components/NumInput/NumInputFocusManager';
import { isMobile } from '../../utils/functions';
import { InternalRowDef, RowDef } from '../../types/RowDef';
import {
	useGameDefinition,
	useGameSettings,
	useGameState,
} from '../GameDataProvider';
import PopUp from '../../components/PopUp/PopUp';
import { GameState } from '../../state/GameState';
import { GameSettings } from '../../state/GameSettings';
import CheckCell from '../../components/CheckCell/CheckCell';

export interface BoardScoreTableProps {
	/** Callback function triggered when a cell value changes */
	onCellChange?: (rowIndex: number, playerIndex: number, value: number) => void;
	/** Callback function to retrieve the total row values, triggered when the table changes */
	getTotalRow?: (row: number[]) => void;
	/** Callback function triggered when an extension is toggled */
	onExtensionChange?: (extensionName: string, isActive: boolean) => void;
	/** Optional filter function to determine which rows to display */
	rowFilter?: (row: RowDef) => boolean;
}

/**
 * The BoardScoreTable component consists of the score table that is defined in the game definition.
 * It handles the rendering of the table, input fields, total calculations, and extensions.
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-21
 */
export function BoardScoreTable({
	onCellChange,
	getTotalRow,
	onExtensionChange,
	rowFilter = () => true,
}: BoardScoreTableProps) {
	//** START GAME DATA **//
	const definition = useGameDefinition();
	const state = useGameState();
	const settings = useGameSettings();
	//** END GAME DATA **//

	//** START CONSTANTS **//
	const playerSizes = Array.from(Array(state.getCurrPlayerSize()).keys());
	//** END CONSTANTS **//

	//** START STATE **//
	const [rows, setRows] = useState(definition.rows || []);
	const [singleRowHelp, setSingleRowHelp] = useState<string[]>([]);
	const [totalRow, setTotalRow] = useState(
		Array.from(Array(state.getCurrPlayerSize()).keys()).map(() => 0),
	);
	const [rounds, setRounds] = useState(-1);
	const [excludedIDs, setExcludedIDS] = useState<string[]>([]);
	//** END STATE **//

	//** START FUNCTIONS **//
	const getTableValue = (rowIndex: number, playerIndex: number) => {
		const row = state.getTableMatrix()[rowIndex];
		if (!row) {
			return 0;
		}
		return state.getTableMatrix()[rowIndex][playerIndex] || 0;
	};

	const setTableValue = (
		rowIndex: number,
		playerIndex: number,
		value: number,
	) => {
		let newTableMatrix = state.getTableMatrix();

		while (newTableMatrix.length < rows.length) {
			newTableMatrix.push(
				Array.from(Array(state.getCurrPlayerSize()).keys()).map(() => 0),
			);
		}

		newTableMatrix = state
			.getTableMatrix()
			.map((row: number[], index: number) => {
				if (index === rowIndex) {
					row[playerIndex] = Number(value);
				}
				return row;
			});

		state.setTableMatrix(newTableMatrix);
		if (onCellChange) {
			onCellChange(rowIndex, playerIndex, value);
		}
	};

	const getWinningScore = () => {
		const winMode = definition.winMode || WinMode.MOST;
		const winFn = getFunctionForWinMode(winMode);
		const value = winFn(...totalRow);
		// check if all values are the same
		if (totalRow.every((val) => val === value)) {
			return null;
		}
		return value;
	};

	const getLabelForID = (id: string | undefined): Label | undefined => {
		if (!id) {
			return undefined;
		}
		const l = definition.labels || [];
		return l.find((label: Label) => label.beforeID === id);
	};

	const onExtensionOn = useCallback(
		(extensionName: string, emitToState = true) => {
			const exDef = definition.extensions?.[extensionName];
			if (!exDef) {
				return;
			}
			const exRows = exDef.rows || [];
			exRows.forEach((row: InternalRowDef) => {
				row.__extName = extensionName;
			});

			// Handle exclude rows
			if (exDef.excludeRows) {
				setExcludedIDS([...excludedIDs, ...exDef.excludeRows]);
			}

			setRows([...rows, ...exRows]);

			if (!emitToState) {
				return;
			}
			state.activateExtension(extensionName);
			onExtensionChange && onExtensionChange(extensionName, true);
		},
		[definition.extensions, excludedIDs, onExtensionChange, rows, state],
	);

	const onExtensionOff = (extensionName: string) => {
		const exDef = definition.extensions?.[extensionName];
		if (!exDef) {
			return;
		}
		setRows(
			rows.filter((row: InternalRowDef) => row.__extName !== extensionName),
		);
		if (exDef.excludeRows) {
			const newExcludeIds = excludedIDs.filter(
				(id) => !exDef.excludeRows?.includes(id),
			);
			setExcludedIDS(newExcludeIds);
		}
		state.deactivateExtension(extensionName);
		onExtensionChange && onExtensionChange(extensionName, false);
	};
	//** END FUNCTIONS **//

	//** START HOOKS **//
	useEffect(() => {
		setRows(definition.rows || []);
	}, [definition.rows]);

	useEffect(() => {
		if (definition.roundMapper) {
			setRounds(definition.roundMapper[state.getCurrPlayerSize()]);
		}
	}, [definition.roundMapper, state]);

	useEffect(() => {
		const newTotalRow = Array.from(Array(state.getCurrPlayerSize()).keys()).map(
			(playerIndex) =>
				getColumnTotal(state.getTableMatrix(), playerIndex, rounds),
		);
		setTotalRow(newTotalRow);
		if (getTotalRow) {
			getTotalRow(newTotalRow);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state]);

	useEffect(() => {
		state.getActivatedExtension().forEach((extensionName) => {
			onExtensionOn(extensionName, false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	//** END HOOKS **//

	return (
		<NumInputFocusManager>
			<>
				<RankingPopUp
					definition={definition}
					state={state}
					settings={settings}
					totalRow={totalRow}
				/>
				<ExtensionButtons
					extensionDefinition={definition.extensions}
					initialSelectedExtensions={state.getActivatedExtension()}
					onExtensionOn={onExtensionOn}
					onExtensionOff={onExtensionOff}
				/>
				<table
					className={
						'board-score-table ' +
						(definition.tableShadow ? 'table-shadow' : '')
					}
				>
					<thead>
						<tr key="header">
							<th key="-1"></th>
							{playerSizes.map((index) => (
								<th key={index}>
									<input
										type="text"
										placeholder={'P' + (index + 1)}
										value={state.getPlayerNamesAt(index)}
										onChange={(e) => {
											const newPlayerNames = state.getPlayerNames().slice();
											newPlayerNames[index] = e.target.value.toUpperCase();
											state.setPlayerNames(newPlayerNames);
										}}
									/>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows.filter(rowFilter).map(
							(row: InternalRowDef, index: number) =>
								(row.__visible || rounds === -1 || index < rounds) &&
								!excludedIDs.includes(row.id || '___no_id___') && (
									<>
										{getLabelForID(row.id) && (
											<tr key={'label-row-' + index} className="label-row">
												<td colSpan={state.getCurrPlayerSize() + 1}>
													{getLabelForID(row.id)?.label}
												</td>
											</tr>
										)}
										{row.icon &&
											(settings.getShowHelp() ||
												singleRowHelp.includes(row.name)) && (
												<tr className="help-row" key={'help-row-' + index}>
													<td colSpan={state.getCurrPlayerSize() + 1}>
														<b>{row.name}</b>
														<i>
															{row.description ? ' - ' + row.description : ''}
														</i>
													</td>
												</tr>
											)}
										<tr
											key={index}
											style={getStyleForRow(row, definition, index)}
										>
											<FirstRowCell
												row={row}
												onShowHelp={() => {
													if (settings.getShowHelp()) return;
													setSingleRowHelp((prev) => [...prev, row.name]);
													setTimeout(
														() =>
															setSingleRowHelp((prev) =>
																prev.filter((name) => name !== row.name),
															),
														5000,
													);
												}}
											/>
											{playerSizes.map((playerIndex) => (
												<InputCell
													row={row}
													key={playerIndex}
													playerName={
														state.getPlayerNamesAt(playerIndex) ||
														'P' + (playerIndex + 1)
													}
													rowIndex={index}
													playerIndex={playerIndex}
													getValue={getTableValue}
													setValue={setTableValue}
												/>
											))}
										</tr>
									</>
								),
						)}
						<tr key="total" className="total-row">
							<FirstRowCell row={{ name: 'Total' }} />
							{totalRow.map((value, playerIndex) => (
								<td
									key={playerIndex}
									className={
										'total-cell ' + (getWinningScore() == value ? 'win' : '')
									}
								>
									{isNaN(value) ? 0 : value}
								</td>
							))}
						</tr>
					</tbody>
				</table>
			</>
		</NumInputFocusManager>
	);
}

function RankingPopUp({
	definition,
	state,
	settings,
	totalRow,
}: {
	definition: GameDef;
	state: GameState;
	settings: GameSettings;
	totalRow: number[];
}) {
	const playerValues = useMemo(() => {
		const playerValues: { player: string; score: number }[] = [];
		totalRow.forEach((_, playerIndex) => {
			let playerName = state.getPlayerNamesAt(playerIndex);
			if ([null, undefined, ''].includes(playerName)) {
				playerName = 'P' + (playerIndex + 1);
			}
			playerValues.push({
				player: playerName,
				score: totalRow[playerIndex],
			});
		});

		const winMode = definition.winMode || WinMode.MOST;

		playerValues.sort((a, b) => {
			if (winMode === WinMode.MOST) {
				return b.score - a.score;
			}
			return a.score - b.score;
		});
		return playerValues;
	}, [definition, state, totalRow]);

	const getFontSize = (index: number) => {
		if (index > 3) {
			index = 3;
		}
		return 32 - index * 4 + 'px';
	};

	return (
		<PopUp
			isVisible={settings.getShowRanking()}
			onClose={() => settings.setShowRanking(false)}
		>
			<div className="ver">
				<h1>{definition.title}</h1>
				<div className="ver">
					{playerValues.map((playerValue, index) => (
						<div
							key={index}
							className="ranking-row"
							style={{
								fontSize: getFontSize(index),
								marginBottom: '5px',
							}}
						>
							<b>{index + 1}.</b> {playerValue.player} - {playerValue.score}
						</div>
					)) || <div>No players</div>}
				</div>
			</div>
		</PopUp>
	);
}

type InputCellProps = {
	row: RowDef;
	rowIndex: number;
	playerIndex: number;
	playerName: string;
	getValue: (rowIndex: number, playerIndex: number) => number;
	setValue: (rowIndex: number, playerIndex: number, value: number) => void;
};

function InputCell({
	row,
	rowIndex,
	playerIndex,
	playerName,
	getValue,
	setValue,
}: InputCellProps) {
	const value = getValue(rowIndex, playerIndex);

	const transformValue = (value: number): number => {
		if (row.negative && value > 0) {
			return value * -1;
		}
		return value;
	};

	const setValueFn = (value: number) => {
		if (isNaN(value)) {
			return;
		}
		setValue(rowIndex, playerIndex, Number(value));
	};

	const getValueOrUndefined = () => {
		return value === 0 ? undefined : value;
	};
	let inputElement = null;
	if (row.checkValue) {
		inputElement = (
			<CheckCell
				checkValue={row.checkValue}
				currentValue={value}
				onClick={setValueFn}
			/>
		);
	} else {
		inputElement = isMobile() ? (
			<NumInput
				name={row.name + ' | ' + playerName}
				value={getValueOrUndefined()}
				onChange={setValueFn}
				transformNumber={transformValue}
			/>
		) : (
			<input
				type="number"
				value={getValueOrUndefined()}
				onChange={(e) => setValueFn(Number(e.target.value))}
			/>
		);
	}

	return <td>{inputElement}</td>;
}

type FirstRowCellProps = {
	row: RowDef;
	onShowHelp?: () => void;
};

function FirstRowCell({ row, onShowHelp }: FirstRowCellProps) {
	let inner = <>{row.name}</>;
	if (row.icon) {
		inner = (
			<img src={row.icon} alt={row.name} className="row-icon" loading="lazy" />
		);
	}
	return (
		<td
			style={{ fontWeight: 'bold' }}
			onClick={() => onShowHelp && onShowHelp()}
		>
			{inner}
		</td>
	);
}

const getColumnTotal = (
	tableMatrix: number[][],
	playerIndex: number,
	round = -1,
) => {
	return tableMatrix.reduce((acc: number, row: number[], index: number) => {
		if (round !== -1 && index >= round) {
			return acc;
		}
		if (isNaN(row[playerIndex])) {
			return acc;
		}
		return acc + row[playerIndex];
	}, 0);
};

function getStyleForRow(row: RowDef, definition: GameDef, rowIndex: number) {
	const style: React.CSSProperties = {};

	if (row.bgColor) {
		style.backgroundColor = row.bgColor;
	} else if (definition.stripeColor && rowIndex % 2 === 1) {
		style.backgroundColor = definition.stripeColor;
	}

	if (row.fontColor) {
		style.color = row.fontColor;
	}
	return style;
}
