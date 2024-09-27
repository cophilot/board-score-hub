import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function ForestShuffleView() {
	return <GameView definition={getDefinition()} />;
}
