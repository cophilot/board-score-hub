import BoardScorePage from '../../api/BoardScorePage/BoardScorePage';
import By from '../../components/By/By';
import getDefinition from './definition';

export default function SevenWondersDuelView() {
    return (
        <BoardScorePage definition={getDefinition()}>
            <By />
        </BoardScorePage>
    );
}
