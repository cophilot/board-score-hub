import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function BonsaiView() {
    return <GameView definition={getDefinition()} />;
}
