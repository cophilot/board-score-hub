/* eslint-disable @typescript-eslint/no-explicit-any */
import BoardScorePage from '../api/BoardScorePage/BoardScorePage';
import By from './By';
import Logo from './Logo';

interface GameViewProps {
    definition: any;
    afterTabelElement?: JSX.Element;
}

export default function GameView({
    definition,
    afterTabelElement,
}: GameViewProps): JSX.Element {
    const logo = <Logo size={100} bgColor={definition.bgColor || '#fff'} />;
    return (
        <BoardScorePage
            definition={definition}
            logo={logo}
            afterTableElement={afterTabelElement}>
            <By />
        </BoardScorePage>
    );
}
