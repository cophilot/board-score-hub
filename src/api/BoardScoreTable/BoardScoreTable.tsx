/* eslint-disable @typescript-eslint/no-explicit-any */ // TODO
import { useEffect, useState } from 'react';
import './BoardScoreTable.scss';
import GameStorage from '../utils/GameStorage';
import { getFunctionForWinMode, WinMode } from '../types/WinMode';
import ExtensionButtons from '../ExtensionButtons/ExtensionButtons';
import { GameDef, Label, RowDef } from '../types/GameDef';
import NumInput from '../NumInput/NumInput';
import { NumInputFocusManager } from '../NumInput/NumInputFocusManager';
import PlotDisplay from '../PlotDisplay/PlotDisplay';
import { isMobile } from '../utils/functions';

interface BoardScoreTableProps {
	definition: GameDef;
	playerSize: number;
	gameSettings: any;
	showPlot?: boolean;
	onClosePlot: () => void;
	onCellChange?: (rowIndex: number, playerIndex: number, value: any) => void;
	getTotalRow?: (row: number[]) => void;
}

/**
 * This is a BoardScoreTable component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-21
 */
function BoardScoreTable({
	definition,
	playerSize,
	gameSettings,
	onCellChange,
	onClosePlot,
	getTotalRow,
	showPlot,
}: BoardScoreTableProps) {
	const playerSizes = Array.from(Array(playerSize).keys());
	const [rows, setRows] = useState(definition.rows || []);
	const tableStyle = parseTableStyle(definition);
	const [tableMatrix, setTableMatrix] = useState(
		GameStorage.getGameMatrix(
			definition.title,
			getEmptyTbaleMatrix(rows.length, playerSize),
		),
	);
	const [totalRow, setTotalRow] = useState(
		Array.from(Array(playerSize).keys()).map(() => 0),
	);
	const [playerNames, setPlayerNames] = useState(
		GameStorage.getPlayerNames(definition.title, []),
	);

	const [rounds, setRounds] = useState(-1);

	useEffect(() => {
		setRows(definition.rows || []);
	}, [definition.rows]);

	useEffect(() => {
		if (definition.roundMapper) {
			setRounds(definition.roundMapper[playerSize]);
		}
	}, [definition.roundMapper, playerSize]);

	useEffect(() => {
		const newTotalRow = Array.from(Array(playerSize).keys()).map(
			(playerIndex) => getColumnTotal(tableMatrix, playerIndex, rounds),
		);
		setTotalRow(newTotalRow);
		if (getTotalRow) {
			getTotalRow(newTotalRow);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playerSize, tableMatrix]);

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
			newTableMatrix.push(Array.from(Array(playerSize).keys()).map(() => 0));
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

	return (
		<NumInputFocusManager>
			<>
				{showPlot && (
					<PlotDisplay
						definition={definition}
						tableMatrix={tableMatrix}
						playerNames={fillPlayerNames(playerNames, playerSize)}
						onClose={onClosePlot}
					/>
				)}
				<ExtensionButtons
					definition={definition}
					onExtensionOn={(extensionName, extensionDefinition) => {
						const extRows = extensionDefinition.rows || [];
						extRows.forEach((row: any) => {
							row.__extName = extensionName;
						});
						setRows([...rows, ...extRows]);
					}}
					onExtensionOff={(extensionName) => {
						setRows(rows.filter((row: any) => row.__extName !== extensionName));
					}}
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
												<td colSpan={playerSize + 1}>
													{getLabelForID(row.id)?.label}
												</td>
											</tr>
										)}
										{gameSettings.showHelp && row.icon && (
											<tr className="help-row" key={'help-row-' + index}>
												<td colSpan={playerSize + 1}>
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
													getValueFunction={getTableValue}
													setValueFunction={setTableValue}
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
	row: any;
	rowIndex: number;
	playerIndex: number;
	playerName: string;
	getValueFunction: (rowIndex: number, playerIndex: number) => any;
	setValueFunction: (rowIndex: number, playerIndex: number, value: any) => void;
};

function InputCell({
	row,
	rowIndex,
	playerIndex,
	playerName,
	getValueFunction,
	setValueFunction,
}: InputCellProps) {
	let value = getValueFunction(rowIndex, playerIndex);
	if (value === 0) {
		value = '';
	}
	let staticNumber = row.staticNumber;
	if (staticNumber && Array.isArray(staticNumber)) {
		staticNumber = staticNumber[playerIndex];
	}

	const transformValue = (value: number): number => {
		if (row.negative && value > 0) {
			return value * -1;
		}
		return value;
	};

	const setValue = (value: any) => {
		if (isNaN(value)) {
			return;
		}
		setValueFunction(rowIndex, playerIndex, Number(value));
	};

	useEffect(() => {
		if (staticNumber) {
			setValue(staticNumber);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [staticNumber]);

	const inputElement = isMobile() ? (
		<NumInput
			name={row.name + ' | ' + playerName}
			value={value}
			onChange={setValue}
			transformNumber={transformValue}
		/>
	) : (
		<input
			type="number"
			value={value}
			onChange={(e) => setValue(Number(e.target.value))}
		/>
	);

	return (
		<td>
			{staticNumber ? (
				<input type="text" value={staticNumber} disabled={true} />
			) : (
				inputElement
			)}
		</td>
	);
}

type FirstRowCellProps = {
	row: any;
	helpOn?: boolean;
};

function FirstRowCell({ row }: FirstRowCellProps) {
	let inner = row.name;
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
