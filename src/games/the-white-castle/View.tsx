import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function TheWhiteCastleView() {
    return <GameView definition={getDefinition()} />;
}
