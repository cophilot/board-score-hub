import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the MovingWild game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-5-31
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Moving Wild';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/423270/moving-wild',
		rulesUrl: 'https://oinkgames.com/en/games/analog/moving-wild/',
		banner: 'https://bordspelwereld.nl/images/bgg/423270.jpg',
		bgColor: '#fe6b00',
		fontColor: '#ffffff',
		primaryColor: '#009744',
		secondaryColor: '#e0e61d',
		playerSizes: [1, 2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Points Round 1',
				description: 'Points gained on Round 1.',
				icon: pu.getAbsoluteImagePath('1'),
			},
			{
				name: 'Minus Points Round 1',
				description:
					'Negative points gained on Round 1. -2 for unplayed Animal Card and -2 for each unfilled Habitat.',
				icon: pu.getAbsoluteImagePath('-1'),
				negative: true,
			},
			{
				name: 'Points Round 2',
				description: 'Points gained on Round 2.',
				icon: pu.getAbsoluteImagePath('2'),
			},
			{
				name: 'Minus Points Round 2',
				description:
					'Negative points gained on Round 2. -2 for unplayed Animal Card and -2 for each unfilled Habitat.',
				icon: pu.getAbsoluteImagePath('-2'),
				negative: true,
			},
			{
				name: 'Points Round 3',
				description: 'Points gained on Round 3.',
				icon: pu.getAbsoluteImagePath('3'),
			},
			{
				name: 'Minus Points Round 3',
				description:
					'Negative points gained on Round 3. -2 for unplayed Animal Card and -2 for each unfilled Habitat.',
				icon: pu.getAbsoluteImagePath('-3'),
				negative: true,
			},
		],
	};
}
