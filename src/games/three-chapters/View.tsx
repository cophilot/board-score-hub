import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function ThreeChaptersView() {
	return <GameView definition={getDefinition()} />;
}
