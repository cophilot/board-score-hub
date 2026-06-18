import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function KarubaView() {
	return <GameView definition={getDefinition()} />;
}
