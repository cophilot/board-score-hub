import { useState } from 'react';
import './FavoriteGameSection.scss';
import { getGameByName, getSortedGames } from '../../allGames';
import LocalStorageService from '../../utils/LocalStorageService';
import { GameWithViewButton } from '../GameButton/GameButton';
import GameFilter from '../GameFilter/GameFilter';

/**
 * This is a FavoriteGameSection component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-8-7
 */
function FavoriteGameSection() {
	const [addingMode, setAddingMode] = useState(false);
	const [favoriteGames, setFavoriteGamesInternal] = useState<string[]>(
		LocalStorageService.getFavoriteGames(),
	);
	const allGames = getSortedGames();
	const [games, setGames] = useState(allGames);

	const setFavoriteGames = (favoriteGames: string[]) => {
		favoriteGames.sort();
		setFavoriteGamesInternal(favoriteGames);
		LocalStorageService.setFavoriteGames(favoriteGames);
	};

	const templateButtonStyle = { border: '2px dashed var(--font-color)' };

	const onGameClick = (game: string) => {
		if (addingMode) {
			if (favoriteGames.includes(game)) {
				setFavoriteGames(favoriteGames.filter((g) => g !== game));
			} else {
				setFavoriteGames([...favoriteGames, game]);
			}
		}
	};

	return (
		<div className="ver">
			{!addingMode && <GameFilter allGames={allGames} setGames={setGames} />}
			{addingMode
				? games.map((game) => (
						<button
							key={game.definition.title}
							className={
								'btn wide ' +
								(favoriteGames.includes(game.definition.title)
									? 'selected'
									: '')
							}
							style={
								favoriteGames.includes(game.definition.title)
									? {}
									: templateButtonStyle
							}
							onClick={() => onGameClick(game.definition.title)}
						>
							{game.definition.title}
						</button>
					))
				: favoriteGames.map((gameName: string) => (
						<GameWithViewButton game={getGameByName(gameName)} />
					))}
			<i
				className={'bi icon ' + getIconClassName(addingMode, favoriteGames)}
				onClick={() => setAddingMode(!addingMode)}
			></i>
		</div>
	);
}
export default FavoriteGameSection;

function getIconClassName(addingMode: boolean, favoriteGames: string[]) {
	if (addingMode) {
		return 'bi-check-lg';
	}
	if (favoriteGames.length === 0) {
		return 'bi-plus-circle';
	}
	return 'bi-pencil-square';
}
