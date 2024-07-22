import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function DorfromatikDuelView() {
    return <GameView definition={getDefinition()} />;
}
