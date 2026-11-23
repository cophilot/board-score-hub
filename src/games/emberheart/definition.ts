import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Emberheart game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-11-23
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Emberheart';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		banner:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUefbf92TSr0kIvgLBK-khqH8tERhrX_2m--9-hEui4g&s=10',
		altTitles: ['Glutherz'],
		url: 'https://boardgamegeek.com/boardgame/452817/emberheart',
		rulesUrl:
			'https://preorder.mindclashgames.com/wp-content/uploads/2025/09/Emberheart-rulebook_final-web-sized.pdf',
		bgColor: '#4B3B24',
		fontColor: '#FDFCF5',
		primaryColor: '#FAD32F',
		secondaryColor: '#65394A',
		playerSizes: [2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Dragons',
				description:
					'The Glory value of each of your Dragons, regardless of whether they are attached or not.',
				icon: pu.getAbsoluteImagePath('dragon'),
			},
			{
				name: 'Attribute track',
				description:
					'The highest unlocked Glory value on each Attribute track (Glory values within a single track do not accumulate).',
				icon: pu.getAbsoluteImagePath('attribute'),
			},
			{
				name: 'Hero cards',
				description:
					'The Glory value of each Hero card, provided that a Dragon of the matching color is attached and the scoring condition is met.',
				icon: pu.getAbsoluteImagePath('hero'),
			},
			{
				name: 'Garrison cards',
				description: 'The Glory value of each completed Garrison card.',
				icon: pu.getAbsoluteImagePath('garrison'),
			},
			{
				name: 'Flame position',
				description:
					'The final position of your Flame marker on the Flame track.',
				icon: pu.getAbsoluteImagePath('flame'),
			},
		],
	};
}
