import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function EarthriseView() {
	return <GameView definition={getDefinition()} />;
}
