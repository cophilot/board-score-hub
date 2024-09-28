import { WinMode } from '../../api/types/WinMode';
import cardIcon from './assets/card.png';
import topIcon from './assets/top.png';
import downIcon from './assets/down.png';
import leftIcon from './assets/left.png';
import rightIcon from './assets/right.png';
import caveIcon from './assets/cave.png';
import { GameDef } from '../../api/types/GameDef';

export default function getDefinition(): GameDef {
	return {
		title: 'Forest Shuffle',
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
				icon: cardIcon,
			},
			{
				name: 'Cards top',
				icon: topIcon,
			},
			{
				name: 'Cards right',
				icon: rightIcon,
			},
			{
				name: 'Cards below',
				icon: downIcon,
			},
			{
				name: 'Cards left',
				icon: leftIcon,
			},
			{
				name: 'Cave',
				icon: caveIcon,
			},
		],
	};
}
