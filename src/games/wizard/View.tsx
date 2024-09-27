import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function WizardView() {
	return <GameView definition={getDefinition()} />;
}
