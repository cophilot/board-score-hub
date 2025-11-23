import { useNavigate } from 'react-router-dom';
import './GameButton.scss';
import StringUtils from '../../core/utils/StringUtils';
import { GameWithView } from '../../core/types/GameWithView';
import { ExternalGameDef } from '../../core/types/GameDef';

interface GameWithViewButtonProps {
	game: GameWithView | undefined;
}

/** This is a wrapper component for GameButton that takes in a GameWithView */
export function GameWithViewButton({ game }: GameWithViewButtonProps) {
	if (game === undefined) {
		return <></>;
	}
	return (
		<GameButton
			key={game.definition.title}
			game={game.definition.title}
			asLink={(game.definition as ExternalGameDef).link !== undefined}
			link={(game.definition as ExternalGameDef).link}
		/>
	);
}

interface GameButtonProps {
	game: string;
	asLink?: boolean;
	link?: string;
}

/**
 * This is a GameButton component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-8-7
 */
export function GameButton({
	game,
	asLink = false,
	link = '',
}: GameButtonProps) {
	const navigate = useNavigate();

	if (asLink) {
		return (
			<div className="btn selected" style={{ width: '250px' }}>
				<a
					className=""
					href={link}
					target="_blank"
					style={{ color: 'var(--bg-color)' }}
				>
					{game} <i className="bi bi-arrow-up-right-square"></i>
				</a>
			</div>
		);
	}
	return (
		<button
			className="btn selected wide"
			onClick={() => {
				navigate(`/game/${StringUtils.gameNameToPath(game)}`);
			}}
		>
			{game}{' '}
		</button>
	);
}
