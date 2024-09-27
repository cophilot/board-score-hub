import { useState } from 'react';
import './PlayerSwitch.scss';

interface PlayerSwitchProps {
	playerSizes?: number[];
	initPlayerSize?: number;
	onPlayerSizeChange: (size: number) => void;
}

/**
 * This is a PlayerSwitch component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-21
 */
function PlayerSwitch({
	playerSizes,
	initPlayerSize,
	onPlayerSizeChange,
}: PlayerSwitchProps) {
	const minPlayerSize = playerSizes && Math.min(...playerSizes);
	const [currentPlayerSize, setCurrentPlayerSize] = useState(
		initPlayerSize || minPlayerSize,
	);
	if (!playerSizes || playerSizes.length <= 1) {
		return null;
	}

	return (
		<>
			<h2 className="print-hide">Players</h2>
			<div className="player-switch print-hide">
				{playerSizes.map((size) => (
					<button
						key={size}
						className={'btn ' + (size === currentPlayerSize ? 'selected' : '')}
						onClick={() => {
							setCurrentPlayerSize(size);
							onPlayerSizeChange(size);
						}}
					>
						{size}
					</button>
				))}
			</div>
		</>
	);
}
export default PlayerSwitch;
