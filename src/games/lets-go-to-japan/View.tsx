import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function LetsGoToJapanView() {
    return <GameView definition={getDefinition()} />;
}