import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function EmberheartView() {
	return <GameView definition={getDefinition()} />;
}
