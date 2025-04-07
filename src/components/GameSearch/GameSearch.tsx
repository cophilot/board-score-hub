import { useState } from 'react';
import './GameSearch.scss';
import GameButtonList from '../GameButtonList';
import { getSortedGameNames } from '../../allGames';

/**
 * This is a GameSearch component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-4-7
 */
function GameSearch() {
	const gameNames = getSortedGameNames();

	const [searchString, setSearchString] = useState<string>('');
	const [filteredGameNames, setFilteredGameNames] = useState<string[]>([]);

	const onInputChange = (value: string) => {
		setSearchString(value);
		setFilteredGameNames(filterGameNames(gameNames, value));
	};

	return (
		<div className="ver">
			<div className="game-search hor mb">
				<input
					type="text"
					className="game-search-input"
					placeholder="Search for a game..."
					value={searchString}
					onChange={(e) => onInputChange(e.target.value)}
				/>
				<button
					className={
						'game-clear-button ' + (searchString === '' && 'invisible')
					}
					onClick={() => {
						onInputChange('');
					}}
				>
					<i className="bi bi-x-circle"></i>
				</button>
			</div>
			{searchString !== '' &&
				(filteredGameNames.length > 0 ? (
					<GameButtonList gameNames={filteredGameNames} />
				) : (
					<div className="game-search-no-results">
						<i>No results found</i>
					</div>
				))}
		</div>
	);
}
export default GameSearch;

function filterGameNames(gameNames: string[], searchString: string): string[] {
	if (searchString === '') {
		return [];
	}
	const normalizedSearchString = normalizeString(searchString);
	return gameNames.filter((gameName) =>
		normalizeString(gameName).includes(normalizedSearchString),
	);
}

function normalizeString(str: string) {
	return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}
