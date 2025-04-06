import { WinMode } from '../../core/types/WinMode';
import { GameDef } from '../../core/types/GameDef';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Forest Shuffle';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/391163/forest-shuffle',
		rulesUrl:
			'https://lookout-spiele.de/upload/en_forrestshuffle.html_Forest_Shuffle_175_Rules_EN_WEB_230516.pdf',
		bgColor: '#dce2c9',
		fontColor: '#315a39',
		primaryColor: '#bbad86',
		secondaryColor: '#b11917',
		playerSizes: [2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Tree',
				icon: pu.getAbsoluteImagePath('card'),
			},
			{
				name: 'Cards top',
				icon: pu.getAbsoluteImagePath('top'),
			},
			{
				name: 'Cards right',
				icon: pu.getAbsoluteImagePath('right'),
			},
			{
				name: 'Cards below',
				icon: pu.getAbsoluteImagePath('down'),
			},
			{
				name: 'Cards left',
				icon: pu.getAbsoluteImagePath('left'),
			},
			{
				name: 'Cave',
				icon: pu.getAbsoluteImagePath('cave'),
			},
		],
	};
}
