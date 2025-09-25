import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function KnittingCircleView() {
	return <GameView definition={getDefinition()} />;
}
