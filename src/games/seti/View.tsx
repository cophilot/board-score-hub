import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function SetiView() {
	return <GameView definition={getDefinition()} />;
}
