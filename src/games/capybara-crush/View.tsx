import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function CapybaraCrushView() {
	return <GameView definition={getDefinition()} />;
}
