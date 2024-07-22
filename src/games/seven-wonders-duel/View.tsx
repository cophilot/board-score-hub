import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function SevenWondersDuelView() {
    return <GameView definition={getDefinition()} />;
}
