import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function VerdantView() {
	return <GameView definition={getDefinition()} />;
}
