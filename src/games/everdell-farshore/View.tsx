import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function EverdellFarshoreView() {
	return <GameView definition={getDefinition()} />;
}
