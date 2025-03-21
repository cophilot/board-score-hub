import { GameWithView } from '../../core/types/GameWithView';
import getDefinition from './definition';
import DorfromantikDuelView from './View';

const DorfromantikDuel: GameWithView = {
	view: DorfromantikDuelView,
	definition: getDefinition(),
};
export default DorfromantikDuel;
