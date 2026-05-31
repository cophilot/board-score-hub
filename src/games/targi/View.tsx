import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function TargiView() {
	return <GameView definition={getDefinition()} />;
}
