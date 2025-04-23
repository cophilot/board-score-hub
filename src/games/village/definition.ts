import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Village game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-4-23
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Village';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/104006/village',
		rulesUrl: 'https://cdn.1j1ju.com/medias/2b/4d/41-village-rulebook.pdf',
		bgColor: '#f3d1aa',
		fontColor: '#2c2e35',
		primaryColor: '#e52c1a',
		secondaryColor: '#efd27c',
		fontFamily: FontUtils.getClassicFont(),
		banner:
			'https://cf.geekdo-images.com/5FBIAvZi3Sw8dvmfwwJTjg__opengraph/img/1-Xv2Tm_dG5eeRz7kY-rmXhaFHs=/0x0:1042x547/fit-in/1200x630/filters:strip_icc()/pic2760568.jpg',
		//stripeColor: '#000',
		playerSizes: [2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Current Track',
				icon: pu.getAbsoluteImagePath('track'),
				description: 'Points earned during the game',
			},
			{
				name: 'Travel',
				icon: pu.getAbsoluteImagePath('travel'),
				description: 'Points earned from travel',
			},
			{
				name: 'Council chamber',
				icon: pu.getAbsoluteImagePath('council-chamber'),
				description: 'Points earned from the council chamber',
			},
			{
				name: 'Church',
				icon: pu.getAbsoluteImagePath('church'),
				description: 'Points earned from the church',
			},
			{
				name: 'Village chronicle',
				icon: pu.getAbsoluteImagePath('village-chronicle'),
				description: 'Points earned from the village chronicle',
			},
			{
				name: 'Customer tiles',
				icon: pu.getAbsoluteImagePath('customers'),
				description: 'Points earned from customer tiles',
			},
			{
				name: 'Coins',
				icon: pu.getAbsoluteImagePath('coins'),
				description: '1 point for each coin',
			},
		],
	};
}
