import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function SeaSaltPaperView() {
    return <GameView definition={getDefinition()} />;
}
