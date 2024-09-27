import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function CalicoView() {
	return <GameView definition={getDefinition()} />;
}
