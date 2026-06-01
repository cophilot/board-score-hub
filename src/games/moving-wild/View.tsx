import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function MovingWildView() {
	return <GameView definition={getDefinition()} />;
}
