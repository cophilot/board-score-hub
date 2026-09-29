import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function CascadiaAlpineLakesView() {
	return <GameView definition={getDefinition()} />;
}
