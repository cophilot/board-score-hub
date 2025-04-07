import { useEffect, useState } from 'react';
import { GameWithView } from '../core/types/GameWithView';
import { GameWithViewButton } from './GameButton/GameButton';
import { getGameByName } from '../allGames';

interface GameButtonListProps {
	games?: GameWithView[];
	gameNames?: string[];
}

/**
 * This is a GameButtonList component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-4-7
 */
function GameButtonList({ games, gameNames }: GameButtonListProps) {
	const [gameList, setGameList] = useState<GameWithView[]>([]);

	useEffect(() => {
		if (!games && !gameNames) {
			throw new Error(
				'GameButtonList.tsx: Either games or gameNames must be provided',
			);
		}

		if (games) {
			setGameList(games);
			return;
		}

		const newGameList: GameWithView[] = [];

		gameNames!.forEach((gameName: string) => {
			const game = getGameByName(gameName);
			if (game) {
				newGameList.push(game);
			}
		});
		setGameList(newGameList);
	}, [games, gameNames]);

	return (
		<div className="ver">
			{gameList.map((game: GameWithView) => {
				return <GameWithViewButton game={game} />;
			})}
		</div>
	);
}
export default GameButtonList;
