import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function TheRedCathedralView() {
	return <GameView definition={getDefinition()} />;
}
