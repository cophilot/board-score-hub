import { useState } from 'react';
import './GameFilter.scss';
import { GameWithView } from '../../core/types/GameWithView';

interface GameFilterProps {
	allGames: GameWithView[];
	setGames: (games: GameWithView[]) => void;
}

/**
 * This is a GameFilter component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-2-5
 */
function GameFilter({ allGames, setGames }: GameFilterProps) {
	const [open, setOpen] = useState(false);
	const [filterString, setFilterString] = useState<string[]>([]);
	const [players, setPlayers] = useState('All');

	const applyPlayerSizeFilter = (g: GameWithView[]) => {
		if (players === 'All') {
			return g;
		}

		setFilterString([...filterString, `Players: ${players}`]);
		return g.filter((game) =>
			game.definition.playerSizes.includes(parseInt(players)),
		);
	};

	const apply = () => {
		setOpen(false);

		setFilterString([]);

		const filters = [applyPlayerSizeFilter];

		let filteredGames = allGames;

		for (const filter of filters) {
			filteredGames = filter(filteredGames);
		}

		setGames(filteredGames);
	};

	const clear = () => {
		setPlayers('All');
		apply();
	};

	return (
		<div className="game-filter">
			{open ? (
				<>
					<div className="row">
						<div className="label">Players:</div>
						<select
							value={players}
							onChange={(e) => setPlayers(e.target.value)}
						>
							<option>All</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
						</select>
					</div>
					<div className="row">
						<button className="btn" onClick={clear}>
							Clear
						</button>
						<button className="btn" onClick={apply}>
							Apply
						</button>
					</div>
				</>
			) : (
				<>
					{filterString.map((filter) => (
						<div className="row">
							<b>{filter}</b>
						</div>
					))}
					<i
						className="bi bi-funnel icon-btn"
						onClick={() => setOpen(true)}
					></i>
				</>
			)}
		</div>
	);
}
export default GameFilter;
