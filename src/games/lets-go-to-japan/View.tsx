import BoardScorePage from '../../api/BoardScorePage/BoardScorePage';
import getDefinition from './definition';
import By from '../../components/By/By';

export default function LetsGoToJapanView() {
    return (
        <BoardScorePage definition={getDefinition()}>
            <By />
        </BoardScorePage>
    );
}
