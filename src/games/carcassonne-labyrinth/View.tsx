import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function CarcassonneLabyrinthView() {
	return <GameView definition={getDefinition()} />;
}
