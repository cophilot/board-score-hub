/* eslint-disable @typescript-eslint/no-explicit-any */
import './BoardScorePage.scss';
import { useEffect, useState } from 'react';
import PlayerSwitch from '../PlayerSwitch/PlayerSwitch';
import StyleUtils from '../../utils/StyleUtils';
import BoardScoreTable from '../BoardScoreTable/BoardScoreTable';
import GameStorage from '../utils/GameStorage';
import { useNavigate } from 'react-router-dom';

interface BoardScoreTableProps {
    definition: any;
}

/**
 * This is a BoardScorePage component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-21
 */
function BoardScorePage({ definition }: BoardScoreTableProps): JSX.Element {
    const navigate = useNavigate();
    const [playerSize, setPlayerSize] = useState<number>(
        GameStorage.getPlayerSize(definition.title, definition.playerSizes[0])
    );

    const onPlayerSizeChange = (size: number) => {
        setPlayerSize(size);
        GameStorage.setPlayerSize(definition.title, size);
    };

    useEffect(() => {
        setInitialAttributes(definition);
    }, [definition]);

    return (
        <div className="board-score-page">
            {definition.title && <h1>{definition.title}</h1>}
            <PlayerSwitch
                playerSizes={definition.playerSizes}
                initPlayerSize={playerSize}
                onPlayerSizeChange={onPlayerSizeChange}></PlayerSwitch>
            <BoardScoreTable
                definition={definition}
                playerSize={playerSize}></BoardScoreTable>
            <button className="btn selected nav-btn">Export</button>
            <button
                className="btn selected nav-btn"
                onClick={() => {
                    GameStorage.deleteStorage(definition.title);
                    window.location.reload();
                }}>
                Clear
            </button>
            <button
                className="btn selected nav-btn"
                onClick={() => {
                    navigate('/');
                }}>
                Home
            </button>
        </div>
    );
}
export default BoardScorePage;

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
