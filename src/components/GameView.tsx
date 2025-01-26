import BoardScorePage from '../api/BoardScorePage/BoardScorePage';
import { GameDef } from '../api/types/GameDef';
import By from './By';
import Logo from './Logo';

interface GameViewProps {
	definition: GameDef;
	afterTabelElement?: JSX.Element;
}

export default function GameView({
	definition,
	afterTabelElement,
}: GameViewProps): JSX.Element {
	const logoElement = (
		<>
			<Logo
				size={100}
				bgColor={definition.bgColor || '#fff'}
				style={{
					zIndex: 11,
				}}
			/>
			{definition.banner && (
				<img
					src={definition.banner}
					alt={definition.title}
					style={{
						width: '100%',
						height: 'auto',
						maxWidth: '600px',
						marginTop: '-150px',
						opacity: 0.8,
						zIndex: 10,
					}}
				/>
			)}
		</>
	);
	return (
		<BoardScorePage
			definition={definition}
			logo={logoElement}
			afterTableElement={afterTabelElement}
		>
			<By />
		</BoardScorePage>
	);
}
