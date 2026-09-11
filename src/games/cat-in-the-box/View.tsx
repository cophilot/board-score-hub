import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function CatInTheBoxView() {
	return <GameView definition={getDefinition()} />;
}
