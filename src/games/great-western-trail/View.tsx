import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function GreatWesternTrailView() {
	return <GameView definition={getDefinition()} />;
}
