import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the TheRedCathedral game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-6-1
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'The Red Cathedral';
	const pu = new PathUtils(gameTitle);

	const getIconFn = (i: number): ((playerSize: number) => string) => {
		return (playerSize: number) =>
			pu.getAbsoluteImagePath(
				`towers/${playerSize == 1 ? 2 : playerSize}-${i}`,
			);
	};

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/227224/the-red-cathedral',
		banner:
			'https://www.annees-de-pelerinage.com/wp-content/uploads/2015/02/close-up-of-st-basils-cathedral-in-moscow.jpg',
		altTitles: [
			'La Cathédrale Rouge',
			'Czerwona Katedra',
			'Katedrála',
			'De Rode Kathedraal',
			'Die Rote Kathedrale',
			'A vörös katedrális',
			'Красный собор',
		],
		rulesUrl: 'https://www.yucata.de/en/Rules/RedCathedral',
		bgColor: '#ffeac1',
		fontColor: '#000000',
		primaryColor: '#be1622',
		secondaryColor: '#28295b',
		fontFamily: FontUtils.getClassicFont(),
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		roundMapper: {
			1: 6,
			2: 6,
			3: 7,
			4: 8,
		},
		rows: [
			{
				name: 'Prestige Points',
				icon: pu.getAbsoluteImagePath('prestige-points'),
				description:
					'Prestige points scored during the game. Remember to move BACK to the closest lower Prestige Point space.',
			},
			{
				name: 'Left Resources',
				description:
					'Gain 1 prestige point for each 5 resources and rubles left at the end of the game.',
				icon: pu.getAbsoluteImagePath('resources'),
			},
			{
				name: 'Tower 1 Contributions',
				description:
					'Gain prestige points based on the contributions to tower 1.',
				iconFn: getIconFn(1),
			},
			{
				name: 'Tower 2 Contributions',
				description:
					'Gain prestige points based on the contributions to tower 2.',
				iconFn: getIconFn(2),
			},
			{
				name: 'Tower 3 Contributions',
				description:
					'Gain prestige points based on the contributions to tower 3.',
				iconFn: getIconFn(3),
			},
			{
				name: 'Tower 4 Contributions',
				description:
					'Gain prestige points based on the contributions to tower 4.',
				iconFn: getIconFn(4),
			},
			{
				name: 'Tower 5 Contributions',
				description:
					'Gain prestige points based on the contributions to tower 5.',
				iconFn: getIconFn(5),
			},
			{
				name: 'Tower 6 Contributions',
				description:
					'Gain prestige points based on the contributions to tower 6.',
				iconFn: getIconFn(6),
			},
		],
	};
}
