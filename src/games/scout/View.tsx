import BoardScorePage from '../../api/BoardScorePage/BoardScorePage';
import getDefinition from './definition';
import By from '../../components/By/By';

export default function ScoutView() {
    return (
        <BoardScorePage definition={getDefinition()}>
            <By />
        </BoardScorePage>
    );
}
