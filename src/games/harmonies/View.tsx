import BoardScorePage from '../../api/BoardScorePage/BoardScorePage';
import getDefinition from './definition';

export default function HarmoniesView() {
    return <BoardScorePage definition={getDefinition()} />;
}
