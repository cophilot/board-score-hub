import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function VillageView() {
	return <GameView definition={getDefinition()} />;
}
