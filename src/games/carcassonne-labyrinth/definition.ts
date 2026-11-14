import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Carcassonne Labyrinth game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-11-13
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Carcassonne Labyrinth';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/469594/carcassonne-labyrinth',
		rulesUrl:
			'https://gamers-hq.de/media/pdf/61/af/22/Carcassonne-Labyrinth-Regeln.pdf',
		bgColor: '#fff2e3',
		fontColor: '#303238',
		primaryColor: '#384563',
		secondaryColor: '#f9e8ca',
		banner:
			'https://zatu.com/cdn/shop/articles/Untitled_design_5_8941435c-9d0c-4314-bc4b-f0747f3482f1.png?v=1783334574&width=1200',
		//fontFamily: FontUtils.getHandwritingFont(),
		//stripeColor: '#000',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Markers',
				description: '1 Point for each marker you have',
				icon: pu.getAbsoluteImagePath('marker'),
			},
			{
				name: 'Tiles',
				description: '2 Points for each tile you have',
				icon: pu.getAbsoluteImagePath('tile'),
			},
			{
				name: 'Crown',
				description: 'If you have the crown gain 5 points',
				checkValue: 5,
				icon: pu.getAbsoluteImagePath('crown'),
			},
		],
	};
}
