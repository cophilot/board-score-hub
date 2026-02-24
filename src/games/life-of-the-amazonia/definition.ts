import { GameDef } from '../../core/types/GameDef';
import TimeObject from '../../core/types/TimeObject';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the LifeOfTheAmazonia game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-2-19
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Life of the Amazonia';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/368305/life-of-the-amazonia',
		rulesUrl:
			'https://gamers-hq.de/media/pdf/3e/85/3d/Life-of-the-Amazonia_Base-Game-Rulebook_Online.pdf',
		bgColor: '#d5dfcf',
		fontColor: '#2c2e35',
		primaryColor: '#4f594b',
		secondaryColor: '#de2d29',
		banner: 'https://wallpapercave.com/wp/wp4079759.jpg',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		stats: {
			minTime: TimeObject.minutes(60),
			maxTime: TimeObject.minutes(150),
			weight: 2.83,
		},
		rows: [
			{
				name: 'Woodpeckers',
				description: 'Score each woodpecker on your board.',
				icon: pu.getAbsoluteImagePath('woodpecker'),
			},
			{
				name: 'Leaf Frogs',
				description: 'Score each leaf frog on your board.',
				icon: pu.getAbsoluteImagePath('frogs'),
			},
			{
				name: 'Tamarins',
				description: 'Score each tamarin on your board.',
				icon: pu.getAbsoluteImagePath('tamarins'),
			},
			{
				name: 'Toucans',
				description: 'Score each toucan on your board.',
				icon: pu.getAbsoluteImagePath('toucans'),
			},
			{
				name: 'Macaws',
				description: 'Score each macaw on your board.',
				icon: pu.getAbsoluteImagePath('macaws'),
			},
			{
				name: 'Caimans',
				description: 'Score each caiman on your board.',
				icon: pu.getAbsoluteImagePath('caimans'),
			},
			{
				name: 'Otters',
				description: 'Score each otter on your board.',
				icon: pu.getAbsoluteImagePath('otters'),
			},
			{
				name: 'Jaguars',
				description: 'Score each jaguar on your board.',
				icon: pu.getAbsoluteImagePath('jaguars'),
			},
			{
				name: 'Scenery Card Points',
				description: 'Points from scenery cards.',
				icon: pu.getAbsoluteImagePath('scenery-card'),
			},
			{
				name: 'Tile Track Points',
				description:
					'Points from the tile track where the player marker resides.',
				icon: pu.getAbsoluteImagePath('tile-track'),
			},
			{
				name: 'Tree Track Points',
				description:
					'Points from the tree track where the player marker resides.',
				icon: pu.getAbsoluteImagePath('tree'),
			},
			{
				name: 'Aquatic Flower Track Points',
				description:
					'Points from the aquatic flower track where the player marker resides.',
				icon: pu.getAbsoluteImagePath('flower'),
			},
			{
				name: 'Remaining Seed Points',
				description:
					'1 point for each remaining seed in the player`s supply at the end of the game.',
				icon: pu.getAbsoluteImagePath('seeds'),
			},
			{
				name: 'End Game Bonus',
				description:
					'The player with the End Game Bonus token receives 5 points.',
				icon: pu.getAbsoluteImagePath('end-game-bonus'),
				checkValue: 5,
			},
		],
	};
}
