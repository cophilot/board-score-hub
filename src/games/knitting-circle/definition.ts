import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the KnittingCircle game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-9-24
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Knitting Circle';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		banner:
			'https://www.shutterstock.com/image-photo/orange-domestic-cat-sleeping-on-260nw-2316437187.jpg',
		url: 'https://boardgamegeek.com/boardgame/421606/knitting-circle',
		rulesUrl:
			'https://www.alderac.com/wp-content/uploads/2025/07/KnittingCircle_EN_1P_Rulebook_optimized.pdf',
		bgColor: '#fdfdf1',
		fontColor: '#000',
		primaryColor: '#129ed2',
		secondaryColor: '#6d2a8e',
		fontFamily: FontUtils.getClassicFont(),
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Buttons',
				description: 'Points from collected buttons',
				icon: pu.getAbsoluteImagePath('buttons'),
				bgColor: '#134d9b',
			},
			{
				name: 'Garments',
				description: 'Base Points for finished garments',
				icon: pu.getAbsoluteImagePath('garment-base'),
				bgColor: '#983f94',
			},
			{
				name: 'Garments Bonus',
				description: 'Bonus Points for finished garments',
				icon: pu.getAbsoluteImagePath('garment-bonus'),
				bgColor: '#9b1c54',
			},
			{
				name: 'Ugly Buttons',
				description: 'Points lost from ugly buttons',
				icon: pu.getAbsoluteImagePath('ugly-button'),
				bgColor: '#658038',
				negative: true,
			},
			{
				name: 'Request Cards',
				description: 'Points from fulfilled request cards',
				icon: pu.getAbsoluteImagePath('request-card'),
				bgColor: '#f0b73c',
			},
		],
	};
}
