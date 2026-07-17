import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the RaisingRobots game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-6-4
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Raising Robots';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/366683/raising-robots',
		rulesUrl:
			'https://www.nauvoogames.com/rules/Raising_Robots_Rulebook-compressed.pdf',
		bgColor: '#fec36e',
		fontColor: '#3b496c',
		primaryColor: '#fff',
		secondaryColor: '#3d82c4',
		playerSizes: [1, 2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Robot Cards',
				description:
					'Each Robot Card in your Play Area provides the VPs shown on the card.',
				icon: pu.getAbsoluteImagePath('robot'),
				bgColor: '#3d82c4',
				fontColor: '#fff',
				checkValue: 7,
			},
			{
				name: 'Class Cards',
				description:
					'Each Class Card to the left of your Player Board awards VPs based on the Class Grade earned. Don’t forget about Extra Credit!',
				icon: pu.getAbsoluteImagePath('class'),
				bgColor: '#fd8bbd',
			},
			{
				name: 'Victory Points Marker',
				description: 'The amount of VPs as marked in your Inventory.',
				icon: pu.getAbsoluteImagePath('vp'),
				bgColor: '#333333',
			},
			{
				name: 'Leftover Resources',
				description:
					'Each Battery and resource (including Duct Tape) in your Inventory and each Robot Card in your hand is worth 1/3 of a VP. Sum the total and round down.',
				icon: pu.getAbsoluteImagePath('resources'),
				bgColor: '#ffeb3d',
			},
		],
	};
}
