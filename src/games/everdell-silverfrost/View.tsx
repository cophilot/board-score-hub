import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function EverdellSilverfrostView() {
	return <GameView definition={getDefinition()} />;
}
