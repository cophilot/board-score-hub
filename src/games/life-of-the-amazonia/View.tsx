import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function LifeOfTheAmazoniaView() {
	return <GameView definition={getDefinition()} />;
}
