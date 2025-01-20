import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function EverdellDuoView() {
    return <GameView definition={getDefinition()} />;
}
