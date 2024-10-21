import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function FarawayView() {
    return <GameView definition={getDefinition()} />;
}
