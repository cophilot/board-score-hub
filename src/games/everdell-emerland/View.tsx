import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function EverdellEmerlandView() {
	return <GameView definition={getDefinition()} />;
}
