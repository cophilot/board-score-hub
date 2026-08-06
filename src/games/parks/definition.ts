import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Parks game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-8-3
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Parks';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/266524/parks',
		rulesUrl: 'https://boardgamegeek.com/filepage/205978/parks-en-rulebook-v11',
		banner:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZoQ2xwDEhOhYLFg7kU1N9YrCp0fqPxsZ3Jo1glOMWNeZTIjhxzuMKoE0&s=10',
		bgColor: '#fff0dc',
		fontColor: '#0d0c0b',
		primaryColor: '#86764e',
		secondaryColor: '#703f1c',
		playerSizes: [1, 2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Parks',
				description: 'Score points by your visited Parks.',
				icon: pu.getAbsoluteImagePath('parks'),
			},
			{
				name: 'Year Cards',
				description: 'Personal Bonus from your years cards.',
				icon: pu.getAbsoluteImagePath('year-cards'),
			},
			{
				name: 'Photos',
				description: 'One point for each collected photo.',
				icon: pu.getAbsoluteImagePath('photos'),
			},
			{
				name: 'Start Player Maker',
				description:
					'One point for the player who has the Start Player Maker at the end of the game.',
				icon: pu.getAbsoluteImagePath('start-player-maker'),
				checkValue: 1,
			},
		],
	};
}
