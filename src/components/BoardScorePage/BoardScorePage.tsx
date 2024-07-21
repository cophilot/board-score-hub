import './BoardScorePage.scss';
import BoardScoreTable from '../BoardScoreTable/BoardScoreTable';
import { useEffect } from 'react';

interface BoardScoreTableProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    definition: any;
}

/**
 * This is a BoardScorePage component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-21
 */
function BoardScorePage({ definition }: BoardScoreTableProps): JSX.Element {
    useEffect(() => {
        // initialize global page attributes
        setAttributeIfPresent(definition.pageTitle, (title) => {
            document.title = title;
        });
        setAttributeIfPresent(definition.bgColor, (bgColor) => {
            document.body.style.backgroundColor = bgColor;
        });
    }, [definition.bgColor, definition.pageTitle]);

    return (
        <div
            className="board-score-page"
            style={{ color: definition.fontColor }}>
            {definition.title && <h1>{definition.title}</h1>}
        </div>
    );
}
export default BoardScorePage;

function setAttributeIfPresent(
    attribute: unknown,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: (arg0: any) => void
) {
    if (attribute !== undefined && attribute !== null) {
        callback(attribute);
    }
}
