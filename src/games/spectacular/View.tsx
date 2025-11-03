import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function SpectacularView() {
	return <GameView definition={getDefinition()} />;
}
