import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Flip7 game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-9-24
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Flip7';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/420087/flip-7',
		rulesUrl:
			'https://cdn.shopify.com/s/files/1/0611/3958/3198/files/25_FLIP_7_TB_RULES_C_Rev_9_2_25_ND.pdf?v=1756935535',
		bgColor: '#fff8dd',
		fontColor: '#122f92',
		primaryColor: '#7bcdd2',
		secondaryColor: '#ffdd51',
		fontFamily: FontUtils.getClassicFont(),
		stripeColor: '#e6e0c8ff',
		playerSizes: [2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Row1',
			},

			{
				name: 'Row2',
				icon: pu.getAbsoluteImagePath('row2'),
			},
		],
	};
}
