import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function CastleComboView() {
	return <GameView definition={getDefinition()} />;
}
