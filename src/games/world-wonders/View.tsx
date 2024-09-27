import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function WorldWondersView() {
	return <GameView definition={getDefinition()} />;
}
