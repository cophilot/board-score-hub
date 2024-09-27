import { useNavigate } from 'react-router-dom';
import './GameButton.scss';
import StringUtils from '../../utils/StringUtils';

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
function GameButton({ game, asLink = false, link = '' }: GameButtonProps) {
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
export default GameButton;
