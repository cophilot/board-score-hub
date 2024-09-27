import { GameDef } from '../../api/types/GameDef';
import './GameCard.scss';

interface GameCardProps {
	definition: GameDef;
	onClick: () => void;
	icon?: string;
}

/**
 * This is a GameCard component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-23
 */
function GameCard({ definition, onClick, icon }: GameCardProps) {
	const isMobile = window.innerWidth < 700;
	const iconElement = icon ? <i className={`bi ${icon}`}></i> : null;

	if (isMobile) {
		return (
			<button className="btn selected wide" onClick={onClick}>
				{definition.title}
				{iconElement}
			</button>
		);
	}
	return <div className="game-card">Hello from GameCard</div>;
}
export default GameCard;
