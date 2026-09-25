import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function TheGameMakersView() {
	return <GameView definition={getDefinition()} />;
}
