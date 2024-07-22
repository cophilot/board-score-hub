import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function HarmoniesView() {
    return <GameView definition={getDefinition()} />;
}
