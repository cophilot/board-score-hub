import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function ProphecyView() {
	return <GameView definition={getDefinition()} />;
}
