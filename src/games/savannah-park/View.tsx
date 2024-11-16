import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function SavannahParkView() {
	return <GameView definition={getDefinition()} />;
}
