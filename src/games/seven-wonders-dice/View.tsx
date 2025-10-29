import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function SevenWondersDiceView() {
	return <GameView definition={getDefinition()} />;
}
