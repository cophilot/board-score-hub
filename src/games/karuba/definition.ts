import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Karuba game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-6-17
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Karuba';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/183251/karuba',
		rulesUrl: 'https://www.scribd.com/document/637178171/7a-karuba-rulebook',
		banner:
			'https://media.istockphoto.com/id/481272289/photo/el-castillo-of-chichen-itza-at-sunset-mexico.jpg?s=612x612&w=0&k=20&c=vp5jlz0SdiCl4ow_xRUPDgZ-09TdRdWuzE4NW7v130c=',
		bgColor: '#eddd7d',
		fontColor: '#1b1c19',
		primaryColor: '#0069a7',
		secondaryColor: '#ae84b4',
		playerSizes: [2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Temple treasures',
				description: 'Printed value on the Temple treasures tiles.',
				icon: pu.getAbsoluteImagePath('treasure'),
			},
			{
				name: 'Gold Nuggets',
				description: '2 Points per gold nugget.',
				icon: pu.getAbsoluteImagePath('gold'),
			},
			{
				name: 'Crystals',
				description: '1 Point per crystal.',
				icon: pu.getAbsoluteImagePath('crystal'),
			},
		],
	};
}
