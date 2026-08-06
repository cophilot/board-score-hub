import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function ParksView() {
    return <GameView definition={getDefinition()} />;
}
