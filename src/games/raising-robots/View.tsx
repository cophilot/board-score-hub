import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function RaisingRobotsView() {
	return <GameView definition={getDefinition()} />;
}
