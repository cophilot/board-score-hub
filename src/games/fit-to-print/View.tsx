import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function FitToPrintView() {
	return <GameView definition={getDefinition()} />;
}
