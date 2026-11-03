import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function DogsWithJobsView() {
	return <GameView definition={getDefinition()} />;
}
