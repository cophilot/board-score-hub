import BoardScore from '../core';
import { GameDef } from '../core/types/GameDef';
import By from './By';
import LogoWithBanner from './LogoWithBanner';

interface GameViewProps {
	definition: GameDef;
	afterTableElement?: JSX.Element;
	beforeTableElement?: JSX.Element;
}

export default function GameView({
	definition,
	afterTableElement,
	beforeTableElement,
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
			beforeTableElement={beforeTableElement}
		>
			<By />
		</BoardScore>
	);
}
