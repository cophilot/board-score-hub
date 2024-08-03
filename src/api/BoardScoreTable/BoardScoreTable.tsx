/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import './BoardScoreTable.scss';
import GameStorage from '../utils/GameStorage';
import { getFunctionForWinMode, WinMode } from '../types/WinMode';

interface BoardScoreTableProps {
    definition: any;
    playerSize: number;
    gameSettings: any;
    onCellChange?: (rowIndex: number, playerIndex: number, value: any) => void;
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
}: BoardScoreTableProps) {
    const playerSizes = Array.from(Array(playerSize).keys());
    const rows = definition.rows || [];

    const [tableMatrix, setTableMatrix] = useState(
        GameStorage.getGameMatrix(
            definition.title,
            getEmptyTbaleMatrix(rows.length, playerSize)
        )
    );
    const [totalRow, setTotalRow] = useState(
        Array.from(Array(playerSize).keys()).map(() => 0)
    );
    const [playerNames, setPlayerNames] = useState(
        GameStorage.getPlayerNames(definition.title, [])
    );

    const [rounds, setRounds] = useState(-1);
    useEffect(() => {
        if (definition.roundMapper) {
            setRounds(definition.roundMapper[playerSize]);
        }
    }, [definition.roundMapper, playerSize]);

    useEffect(() => {
        const newTotalRow = Array.from(Array(playerSize).keys()).map(
            (playerIndex) => getColumnTotal(tableMatrix, playerIndex, rounds)
        );
        setTotalRow(newTotalRow);
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
        value: any
    ) => {
        // return if value is not a number
        if (isNaN(value)) {
            return;
        }

        let couldBeAdded = false;
        const newTableMatrix = tableMatrix.map(
            (row: number[], index: number) => {
                if (index === rowIndex) {
                    row[playerIndex] = Number(value);
                    couldBeAdded = true;
                }
                return row;
            }
        );

        if (!couldBeAdded) {
            newTableMatrix.push(
                Array.from(Array(playerSize).keys()).map(() => 0)
            );
            newTableMatrix[newTableMatrix.length - 1][playerIndex] =
                Number(value);
        }

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

    return (
        <table className="board-score-table">
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
                                    newPlayerNames[index] =
                                        e.target.value.toUpperCase();
                                    setPlayerNames(newPlayerNames);
                                    GameStorage.setPlayerNames(
                                        definition.title,
                                        newPlayerNames
                                    );
                                }}
                            />
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map(
                    (row: any, index: number) =>
                        (rounds === -1 || index < rounds) && (
                            <tr
                                key={index}
                                style={getStyleFromRow(row, definition, index)}>
                                <FirstRowCell
                                    row={row}
                                    helpOn={gameSettings.showHelp}
                                />
                                {playerSizes.map((playerIndex) => (
                                    <InputCell
                                        key={playerIndex}
                                        rowIndex={index}
                                        playerIndex={playerIndex}
                                        getValueFunction={getTableValue}
                                        setValueFunction={setTableValue}
                                    />
                                ))}
                            </tr>
                        )
                )}
                <tr key="total" className="total-row">
                    <FirstRowCell
                        row={{ name: 'Total' }}
                        helpOn={gameSettings.showHelp}
                    />
                    {totalRow.map((value, playerIndex) => (
                        <td
                            key={playerIndex}
                            className={
                                'total-cell ' +
                                (getWinningScore() == value ? 'win' : '')
                            }>
                            {isNaN(value) ? 0 : value}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}
export default BoardScoreTable;

type InputCellProps = {
    rowIndex: number;
    playerIndex: number;
    getValueFunction: (rowIndex: number, playerIndex: number) => any;
    setValueFunction: (
        rowIndex: number,
        playerIndex: number,
        value: any
    ) => void;
};

function InputCell({
    rowIndex,
    playerIndex,
    getValueFunction,
    setValueFunction,
}: InputCellProps) {
    let value = getValueFunction(rowIndex, playerIndex);
    if (value === 0) {
        value = '';
    }

    return (
        <td>
            <input
                type="number"
                onChange={(e) =>
                    setValueFunction(rowIndex, playerIndex, e.target.value)
                }
                value={value}
            />
        </td>
    );
}

type FirstRowCellProps = {
    row: any;
    helpOn?: boolean;
};

function FirstRowCell({ row, helpOn }: FirstRowCellProps) {
    const [showTempHelp, setShowTempHelp] = useState(false);
    const [inner, setInner] = useState(row.name);

    const onIconClick = () => {
        if (helpOn || showTempHelp) {
            return;
        }
        setShowTempHelp(true);
        setTimeout(() => {
            setShowTempHelp(false);
        }, 2000);
    };

    useEffect(() => {
        if (!row.icon) {
            return;
        }
        let newInner = (
            <img
                src={row.icon}
                alt={row.name}
                className="row-icon"
                onClick={onIconClick}
            />
        );
        if (helpOn || showTempHelp) {
            newInner = (
                <>
                    {newInner}
                    <p className="row-help">{row.name}</p>
                </>
            );
        }
        setInner(newInner);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [row.icon, row.name, helpOn, showTempHelp]);

    return <td style={{ fontWeight: 'bold' }}>{inner}</td>;
}

const getColumnTotal = (
    tableMatrix: number[][],
    playerIndex: number,
    round = -1
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
    } else if (definition.stripColor && rowIndex % 2 === 1) {
        style.backgroundColor = definition.stripColor;
    }

    if (row.fontColor) {
        style.color = row.fontColor;
    }
    return style;
}

function getEmptyTbaleMatrix(rows: number, cols: number) {
    return Array.from(Array(rows).keys()).map(() =>
        Array.from(Array(cols).keys()).map(() => 0)
    );
}
