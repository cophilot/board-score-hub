import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function EmberleafView() {
	return <GameView definition={getDefinition()} />;
}
