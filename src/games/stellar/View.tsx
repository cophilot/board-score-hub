import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function StellarView() {
	return <GameView definition={getDefinition()} />;
}
