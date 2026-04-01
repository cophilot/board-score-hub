import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Verdant game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-4-1
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Verdant';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		banner:
			'https://img.freepik.com/vector-gratis/fondo-hojas-tropicales_52683-37566.jpg?semt=ais_hybrid&w=740&q=80',
		altTitles: ['Sattgrün'],
		url: 'https://boardgamegeek.com/boardgame/334065/verdant',
		rulesUrl:
			'https://www.alderac.com/wp-content/uploads/2022/06/Verdant_EN_1P_Rules_Rulebook_FINAL.pdf',
		bgColor: '#fffcf4',
		fontColor: '#082f1f',
		primaryColor: '#45b348',
		secondaryColor: '#ffbe35',
		fontFamily: FontUtils.getClassicFont(),
		//stripeColor: '#000',
		playerSizes: [1, 2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Completed Plants',
				description:
					'Each player scores each completed Plant Card in their home.',
				icon: pu.getAbsoluteImagePath('completed-plants'),
			},
			{
				name: 'Extra Verdancy on Incomplete Plants',
				description:
					'Each player scores points equal to the total number of verdancy on all of their incomplete plants, divided by 2, rounded down to the nearest whole number.',
				icon: pu.getAbsoluteImagePath('verdancy'),
			},
			{
				name: 'Bonus Pot Tokens',
				description:
					'Each player scores the total number of points printed on all of their Bonus Pot Tokens.',
				icon: pu.getAbsoluteImagePath('bonus-pot-tokens'),
			},
			{
				name: 'Room Bonuses',
				description:
					'Each player scores each Room Card in their home. For each room, players score 1 point per adjacent matching plant of the type depicted on the card.',
				icon: pu.getAbsoluteImagePath('room-bonuses'),
			},
			{
				name: 'Furniture and Pets',
				description:
					'Each player scores an increasing number of points based on how many unique Furniture and Pet Item Tokens they have in their home. Duplicate tokens of the same type do not score.',
				icon: pu.getAbsoluteImagePath('furniture-and-pets'),
			},
			{
				name: 'Plant Collector Bonus',
				description:
					'Each players scores 3 points if their home contains at least 1 of each of the 5 different plant types.',
				icon: pu.getAbsoluteImagePath('plant-collector-bonus'),
			},
			{
				name: 'Decorator Bonus',
				description:
					'Each players scores 3 points if their home contains at least 1 of each of the 5 different room types.',
				icon: pu.getAbsoluteImagePath('decorator-bonus'),
			},
			{
				name: 'Plant Goal Card',
				description: 'Score the Plant Goal Card if you completed it.',
				icon: pu.getAbsoluteImagePath('plant-goal'),
			},
			{
				name: 'Item Goal Card',
				description: 'Score the Item Goal Card if you completed it.',
				icon: pu.getAbsoluteImagePath('item-goal'),
			},
			{
				name: 'Room Goal Card',
				description: 'Score the Room Goal Card if you completed it.',
				icon: pu.getAbsoluteImagePath('room-goal'),
			},
		],
	};
}
