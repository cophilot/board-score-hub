import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function WingspanView() {
	return <GameView definition={getDefinition()} />;
}
