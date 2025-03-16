import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function PlanetUnknownView() {
	return <GameView definition={getDefinition()} />;
}
