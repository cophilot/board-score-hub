import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function EverdellView() {
    return <GameView definition={getDefinition()} />;
}
