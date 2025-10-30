import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function SanctuaryView() {
	return <GameView definition={getDefinition()} />;
}
