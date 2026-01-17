import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import { GameDef } from '../../core/types/GameDef';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Harmonies';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/414317/harmonies',
		rulesUrl:
			'https://cdn.svc.asmodee.net/production-libellud/uploads/2024/03/LIBELLUD_HARMONIES_RULES_EN-1.pdf',
		bgColor: '#deceac',
		fontColor: 'black',
		primaryColor: '#0094b8',
		secondaryColor: '#f7ac1f',
		stripeColor: '#ccbd9f',
		fontFamily: FontUtils.getPlayfulFont(),
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Leaf',
				icon: pu.getAbsoluteImagePath('leaf'),
			},
			{
				name: 'Stone',
				icon: pu.getAbsoluteImagePath('stone'),
			},
			{
				name: 'Flower',
				icon: pu.getAbsoluteImagePath('flower'),
			},
			{
				name: 'House',
				icon: pu.getAbsoluteImagePath('house'),
			},
			{
				name: 'Water',
				icon: pu.getAbsoluteImagePath('water'),
			},
			{
				name: 'Animal',
				icon: pu.getAbsoluteImagePath('card'),
			},
		],
	};
}
