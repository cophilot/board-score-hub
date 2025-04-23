import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import { GameDef } from '../../core/types/GameDef';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Terraforming Mars';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/167791/terraforming-mars',
		rulesUrl:
			'https://cdn.1j1ju.com/medias/13/3f/fb-terraforming-mars-rule.pdf',
		banner:
			'https://meeplebr.com/app/uploads/2020/06/Terraforming-Mars-Big-Box-Cabe%C3%A7alho-site.png',
		bgColor: '#a36743',
		primaryColor: '#612720',
		secondaryColor: '#ffe048',
		fontFamily: FontUtils.getFuturisticFont(),
		playerSizes: [1, 2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Terraforming Rating',
				icon: pu.getAbsoluteImagePath('terraforming-rating'),
			},
			{
				name: 'Milestones',
				icon: pu.getAbsoluteImagePath('milestones'),
			},
			{
				name: 'Awards',
				icon: pu.getAbsoluteImagePath('awards'),
			},
			{
				name: 'Greenery',
				icon: pu.getAbsoluteImagePath('tree'),
			},
			{
				name: 'City',
				icon: pu.getAbsoluteImagePath('city'),
			},
			{
				name: 'Victory Points',
				icon: pu.getAbsoluteImagePath('victory-points'),
			},
		],
	};
}
