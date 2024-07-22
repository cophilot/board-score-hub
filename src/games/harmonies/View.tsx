import BoardScorePage from '../../api/BoardScorePage/BoardScorePage';
import By from '../../components/By/By';
import getDefinition from './definition';

export default function HarmoniesView() {
    return (
        <BoardScorePage definition={getDefinition()}>
            <By />
        </BoardScorePage>
    );
}
