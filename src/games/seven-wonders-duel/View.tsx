import BoardScorePage from '../../api/BoardScorePage/BoardScorePage';
import getDefinition from './definition';

export default function SevenWondersDuelView() {
    return <BoardScorePage definition={getDefinition()} />;
}
