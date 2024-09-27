import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function ScoutView() {
	return <GameView definition={getDefinition()} />;
}
