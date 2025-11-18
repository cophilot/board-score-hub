import BoardScore from '../core';
import { GameDef } from '../core/types/GameDef';
import By from './By';
import LogoWithBanner from './LogoWithBanner';

interface GameViewProps {
	definition: GameDef;
	afterTableElement?: JSX.Element;
}

export default function GameView({
	definition,
	afterTableElement,
}: GameViewProps): JSX.Element {
	const logo = (
		<LogoWithBanner
			title={definition.title}
			banner={definition.banner}
			logoBgColor={definition.bgColor}
		/>
	);
	return (
		<BoardScore
			definition={definition}
			logo={logo}
			afterTableElement={afterTableElement}
		>
			<By />
		</BoardScore>
	);
}
