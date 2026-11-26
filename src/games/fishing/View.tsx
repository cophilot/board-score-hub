import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function FishingView() {
	return <GameView definition={getDefinition()} />;
}
