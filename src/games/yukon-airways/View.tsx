import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function YukonAirwaysView() {
	return <GameView definition={getDefinition()} />;
}
