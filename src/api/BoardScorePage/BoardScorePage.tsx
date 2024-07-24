/* eslint-disable @typescript-eslint/no-explicit-any */
import './BoardScorePage.scss';
import { useEffect, useState } from 'react';
import PlayerSwitch from '../PlayerSwitch/PlayerSwitch';
import StyleUtils from '../utils/StyleUtils';
import BoardScoreTable from '../BoardScoreTable/BoardScoreTable';
import GameStorage from '../utils/GameStorage';
import { useNavigate } from 'react-router-dom';

interface BoardScoreTableProps {
    definition: any;
    children?: any;
    onCellChange?: (rowIndex: number, playerIndex: number, value: any) => void;
    logo?: JSX.Element;
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
        setInitialAttributes(definition);
    }, [definition]);

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
    // hide all elements with class print-hide
    const hideElements = document.getElementsByClassName('print-hide');
    for (let i = 0; i < hideElements.length; i++) {
        const element = hideElements[i] as HTMLElement;
        element.style.display = 'none';
    }
    const showElements = document.getElementsByClassName('print-show');
    for (let i = 0; i < showElements.length; i++) {
        const element = showElements[i] as HTMLElement;
        element.style.display = 'block';
    }
    setTimeout(() => {
        window.print();
        setTimeout(() => {
            for (let i = 0; i < hideElements.length; i++) {
                const element = hideElements[i] as HTMLElement;
                element.style.display = 'block';
            }

            for (let i = 0; i < showElements.length; i++) {
                const element = showElements[i] as HTMLElement;
                element.style.display = 'none';
            }
        }, 100);
    }, 100);
}

function setInitialAttributes(definition: any) {
    setAttributeIfPresent(definition.title, (title) => {
        document.title = title + ' - BoardScoreHub';
    });
    setAttributeIfPresent(
        definition.bgColor,
        StyleUtils.setBackGroundColor,
        true
    );
    setAttributeIfPresent(definition.fontColor, StyleUtils.setFontColor, true);
    setAttributeIfPresent(
        definition.primaryColor,
        StyleUtils.setPrimaryColor,
        true
    );
    setAttributeIfPresent(
        definition.secondaryColor,
        StyleUtils.setSecondaryColor,
        true
    );
    setAttributeIfPresent(
        definition.fontFamily,
        StyleUtils.setFontFamily,
        true
    );
}

function setAttributeIfPresent(
    attribute: unknown,
    callback: (arg0?: any) => void,
    callWithDefaultAttribute = false
) {
    if (attribute !== undefined && attribute !== null) {
        callback(attribute);
        return;
    }

    if (callWithDefaultAttribute) {
        callback();
    }
}