import BoardScorePage from '../../api/BoardScorePage/BoardScorePage';
import getDefinition from './definition';

export default function DorfromatikDuelView() {
    return <BoardScorePage definition={getDefinition()} />;
}
