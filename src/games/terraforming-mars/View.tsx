import GameView from '../../components/GameView';
import getDefinition from './definition';

export default function TerraformingMarsView() {
    return <GameView definition={getDefinition()} />;
}
