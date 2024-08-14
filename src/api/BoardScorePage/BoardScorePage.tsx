/* eslint-disable @typescript-eslint/no-explicit-any */
import './BoardScorePage.scss';
import { useEffect, useState } from 'react';
import PlayerSwitch from '../PlayerSwitch/PlayerSwitch';
import StyleUtils from '../utils/StyleUtils';
import BoardScoreTable from '../BoardScoreTable/BoardScoreTable';
import GameStorage from '../utils/GameStorage';
import { useNavigate } from 'react-router-dom';
import UIUtils from '../utils/UIUtils';

interface BoardScoreTableProps {
    definition: any;
    children?: any;
    onCellChange?: (rowIndex: number, playerIndex: number, value: any) => void;
    logo?: JSX.Element;
    isDarkModeEnabled?: boolean;
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
    logo,
    isDarkModeEnabled = false,
}: BoardScoreTableProps): JSX.Element {
    const navigate = useNavigate();

    const [playerSize, setPlayerSize] = useState<number>(
        GameStorage.getPlayerSize(definition.title, definition.playerSizes[0])
    );
    const [settings, setSettings] = useState(
        GameStorage.getGameSettings(definition.title, {
            showHelp: false,
        })
    );

    const onPlayerSizeChange = (size: number) => {
        setPlayerSize(size);
        GameStorage.setPlayerSize(definition.title, size);
    };

    const applySettings = (newSettings: any) => {
        setSettings(newSettings);
        GameStorage.setGameSettings(definition.title, newSettings);
    };

    useEffect(() => {
        setTimeout(() => {
            setInitialAttributes(definition, isDarkModeEnabled);
        }, 10);
    }, [definition, isDarkModeEnabled]);

    const date = new Date().toLocaleDateString();
    const showHelpButton = definition.rows.some((row: any) => row.icon);

    return (
        <div className="board-score-page">
            {logo}
            {definition.title && <h1>{definition.title}</h1>}
            <h2 className="print-show">
                <i>{date}</i>
            </h2>
            <PlayerSwitch
                playerSizes={definition.playerSizes}
                initPlayerSize={playerSize}
                onPlayerSizeChange={onPlayerSizeChange}></PlayerSwitch>
            <BoardScoreTable
                onCellChange={onCellChange}
                definition={definition}
                gameSettings={settings}
                playerSize={playerSize}></BoardScoreTable>
            {showHelpButton && (
                <button
                    className="btn selected nav-btn print-hide"
                    onClick={() => {
                        const newSettings = {
                            ...settings,
                            showHelp: !settings.showHelp,
                        };
                        applySettings(newSettings);
                    }}>
                    {settings.showHelp ? 'Hide Help' : 'Help'}
                </button>
            )}
            <button className="btn selected nav-btn print-hide" onClick={print}>
                Export
            </button>
            <button
                className="btn selected nav-btn print-hide"
                onClick={() => {
                    GameStorage.deleteStorage(definition.title);
                    window.location.reload();
                }}>
                Clear
            </button>
            <button
                className="btn selected nav-btn print-hide"
                onClick={() => {
                    navigate('/');
                }}>
                Home
            </button>
            <h2 className="print-show">
                <i>board-score-hub.philipp-bonin.com</i>
            </h2>
            {children}
        </div>
    );
}

function print() {
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
            }, 500);
        }, 500);
    }, 500);
}

function setInitialAttributes(definition: any, darkMode: boolean) {
    StyleUtils.setDefaultValues(darkMode);
    setAttributeIfPresent(definition.title, (title) => {
        document.title = title + ' - BoardScoreHub';
    });
    setAttributeIfPresent(definition.bgColor, StyleUtils.setBackGroundColor);
    setAttributeIfPresent(definition.fontColor, StyleUtils.setFontColor);
    setAttributeIfPresent(definition.primaryColor, StyleUtils.setPrimaryColor);
    setAttributeIfPresent(
        definition.secondaryColor,
        StyleUtils.setSecondaryColor
    );
    setAttributeIfPresent(definition.fontFamily, StyleUtils.setFontFamily);
}

function setAttributeIfPresent(
    attribute: unknown,
    callback: (arg0?: any) => void
) {
    if (attribute !== undefined && attribute !== null) {
        callback(attribute);
        return;
    }
}
