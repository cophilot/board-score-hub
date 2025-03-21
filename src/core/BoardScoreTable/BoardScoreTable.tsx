/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import './BoardScoreTable.scss';
import GameStorage from '../utils/GameStorage';
import { getFunctionForWinMode, WinMode } from '../types/WinMode';
import ExtensionButtons from '../components/ExtensionButtons/ExtensionButtons';
import { GameDef, Label } from '../types/GameDef';
import NumInput from '../components/NumInput/NumInput';
import { NumInputFocusManager } from '../components/NumInput/NumInputFocusManager';
import PlotDisplay from '../components/PlotDisplay/PlotDisplay';
import { isMobile } from '../utils/functions';
import { GameState } from '../types/GameState';
import { InternalRowDef, RowDef } from '../types/RowDef';
import { GameSettings } from '../types/GameSettings';

interface BoardScoreTableProps {
	definition: GameDef;
	state: GameState;
	setState: (state: GameState) => void;
	gameSettings: GameSettings;
	showPlot?: boolean;
	onClosePlot: () => void;
	onCellChange?: (rowIndex: number, playerIndex: number, value: number) => void;
	getTotalRow?: (row: number[]) => void;
}

/**
 * This is a BoardScoreTable component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-21
 */
function BoardScoreTable({
	state,
	setState,
	definition,
	gameSettings,
	onCellChange,
	onClosePlot,
	getTotalRow,
	showPlot,
}: BoardScoreTableProps) {
	//** STARTING CONSTANTS **//
	const playerSizes = Array.from(Array(state.currPlayerSize).keys());
	const tableStyle = parseTableStyle(definition);
	//** END CONSTANTS **//

	//** STARTING STATE **//
	const [rows, setRows] = useState(definition.rows || []);
	const [tableMatrix, setTableMatrix] = useState(
		GameStorage.getGameMatrix(
			definition.title,
			getEmptyTbaleMatrix(rows.length, state.currPlayerSize),
		),
	);
	const [totalRow, setTotalRow] = useState(
		Array.from(Array(state.currPlayerSize).keys()).map(() => 0),
	);
	const [playerNames, setPlayerNames] = useState(
		GameStorage.getPlayerNames(definition.title, []),
	);
	const [rounds, setRounds] = useState(-1);
	//** END STATE **//

	//** START FUNCTIONS **//
	const getTableValue = (rowIndex: number, playerIndex: number) => {
		const row = tableMatrix[rowIndex];
		if (!row) {
			return 0;
		}
		return tableMatrix[rowIndex][playerIndex] || 0;
	};

	const setTableValue = (
		rowIndex: number,
		playerIndex: number,
		value: number,
	) => {
		let newTableMatrix = tableMatrix;

		while (newTableMatrix.length < rows.length) {
			newTableMatrix.push(
				Array.from(Array(state.currPlayerSize).keys()).map(() => 0),
			);
		}

		newTableMatrix = tableMatrix.map((row: number[], index: number) => {
			if (index === rowIndex) {
				row[playerIndex] = Number(value);
			}
			return row;
		});

		setTableMatrix(newTableMatrix);
		GameStorage.setGameMatrix(definition.title, newTableMatrix);
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
			setRows([...rows, ...exRows]);

			if (!emitToState) {
				return;
			}
			setState({
				...state,
				activatedExtension: [...state.activatedExtension, extensionName],
			});
		},
		[definition.extensions, rows, setState, state],
	);

	const onExtensionOff = (extensionName: string) => {
		setRows(
			rows.filter((row: InternalRowDef) => row.__extName !== extensionName),
		);
		setState({
			...state,
			activatedExtension: state.activatedExtension.filter(
				(ext: string) => ext !== extensionName,
			),
		});
	};
	//** END FUNCTIONS **//

	//** STARTING HOOKS **//
	useEffect(() => {
		setRows(definition.rows || []);
	}, [definition.rows]);

	useEffect(() => {
		if (definition.roundMapper) {
			setRounds(definition.roundMapper[state.currPlayerSize]);
		}
	}, [definition.roundMapper, state.currPlayerSize]);

	useEffect(() => {
		const newTotalRow = Array.from(Array(state.currPlayerSize).keys()).map(
			(playerIndex) => getColumnTotal(tableMatrix, playerIndex, rounds),
		);
		setTotalRow(newTotalRow);
		if (getTotalRow) {
			getTotalRow(newTotalRow);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.currPlayerSize, tableMatrix]);

	useEffect(() => {
		state.activatedExtension.forEach((extensionName) => {
			onExtensionOn(extensionName, false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.activatedExtension]);
	//** END HOOKS **//

	return (
		<NumInputFocusManager>
			<>
				{showPlot && (
					<PlotDisplay
						definition={definition}
						tableMatrix={tableMatrix}
						playerNames={fillPlayerNames(playerNames, state.currPlayerSize)}
						onClose={onClosePlot}
					/>
				)}
				<ExtensionButtons
					extensionDefinition={definition.extensions}
					initialSelectedExtensions={state.activatedExtension}
					onExtensionOn={onExtensionOn}
					onExtensionOff={onExtensionOff}
				/>
				<table className="board-score-table" style={tableStyle}>
					<thead>
						<tr key="header">
							<th key="-1"></th>
							{playerSizes.map((index) => (
								<th key={index}>
									<input
										type="text"
										placeholder={'P' + (index + 1)}
										value={playerNames[index] || ''}
										onChange={(e) => {
											const newPlayerNames = playerNames.slice();
											newPlayerNames[index] = e.target.value.toUpperCase();
											setPlayerNames(newPlayerNames);
											GameStorage.setPlayerNames(
												definition.title,
												newPlayerNames,
											);
										}}
									/>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows.map(
							(row: RowDef, index: number) =>
								(rounds === -1 || index < rounds) && (
									<>
										{getLabelForID(row.id) && (
											<tr key={'label-row-' + index} className="label-row">
												<td colSpan={state.currPlayerSize + 1}>
													{getLabelForID(row.id)?.label}
												</td>
											</tr>
										)}
										{gameSettings.showHelp && row.icon && (
											<tr className="help-row" key={'help-row-' + index}>
												<td colSpan={state.currPlayerSize + 1}>
													<b>{row.name}</b>
													<i>
														{row.description ? ' - ' + row.description : ''}
													</i>
												</td>
											</tr>
										)}
										<tr
											key={index}
											style={getStyleFromRow(row, definition, index)}
										>
											<FirstRowCell row={row} />
											{playerSizes.map((playerIndex) => (
												<InputCell
													row={row}
													key={playerIndex}
													playerName={
														playerNames[playerIndex] || 'P' + (playerIndex + 1)
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
export default BoardScoreTable;

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

	const inputElement = isMobile() ? (
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

	return <td>{inputElement}</td>;
}

type FirstRowCellProps = {
	row: RowDef;
	helpOn?: boolean;
};

function FirstRowCell({ row }: FirstRowCellProps) {
	let inner = <>{row.name}</>;
	if (row.icon) {
		inner = <img src={row.icon} alt={row.name} className="row-icon" />;
	}
	return <td style={{ fontWeight: 'bold' }}>{inner}</td>;
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

function getStyleFromRow(row: any, definition: any, rowIndex: number) {
	const style: any = {};

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

function getEmptyTbaleMatrix(rows: number, cols: number) {
	return Array.from(Array(rows).keys()).map(() =>
		Array.from(Array(cols).keys()).map(() => 0),
	);
}

function parseTableStyle(definition: any) {
	const style: any = {};
	style.borderSpacing = getDefValue(definition, 'tableSpacing', 0);
	style.border = getDefValue(
		definition,
		'tableBorder',
		'2px solid var(--primary-color)',
	);
	return style;
}

function getDefValue(definition: any, key: string, fallback: any) {
	return definition[key] || fallback;
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
