import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function SeaSaltPaperView() {
    const roundBtn = (
        <button className="btn selected nav-btn print-hide">Save Round</button>
    );
    return (
        <GameView definition={getDefinition()} afterTabelElement={roundBtn} />
    );
}
