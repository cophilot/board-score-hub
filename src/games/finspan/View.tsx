import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function FinspanView() {
	return <GameView definition={getDefinition()} />;
}
