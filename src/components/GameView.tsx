import BoardScorePage from '../api/BoardScorePage/BoardScorePage';
import { GameDef } from '../api/types/GameDef';
import By from './By';
import LogoWithBanner from './LogoWithBanner';

interface GameViewProps {
	definition: GameDef;
	afterTabelElement?: JSX.Element;
}

export default function GameView({
	definition,
	afterTabelElement,
}: GameViewProps): JSX.Element {
	const logo = (
		<LogoWithBanner
			title={definition.title}
			banner={definition.banner}
			logoBgColor={definition.bgColor}
		/>
	);
	return (
		<BoardScorePage
			definition={definition}
			logo={logo}
			afterTableElement={afterTabelElement}
		>
			<By />
		</BoardScorePage>
	);
}
