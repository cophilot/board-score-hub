import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function SpiritsOfTheWildView() {
    return <GameView definition={getDefinition()} />;
}
