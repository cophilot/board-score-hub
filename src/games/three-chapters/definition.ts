import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = '3 Chapters';
	const pu = new PathUtils(gameTitle, 'three-chapters');

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/423517/3-chapters',
		rulesUrl:
			'https://blog.amigo-spiele.de/content/ap/rule/02451-GB-AmigoRule.pdf',
		banner:
			'https://wallpaperswide.com/download/fairytale_cottage_painting-wallpaper-960x540.jpg',
		bgColor: '#f0e1c8',
		fontColor: '#000',
		primaryColor: '#af3838',
		secondaryColor: '#c6ecfa',
		fontFamily: FontUtils.getElegantFont(),
		stripeColor: '#ebcaa9',
		playerSizes: [2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		tableShadow: true,
		rows: [
			{
				name: 'Stars',
				description: '2 points for each  you earned during the game',
				icon: pu.getAbsoluteImagePath('star'),
			},

			{
				name: 'Hearts',
				description: '1 point for each heart you earned during the game',
				icon: pu.getAbsoluteImagePath('heart'),
			},
			{
				name: 'Gems',
				description: '1 point for each pair of gems you earned during the game',
				icon: pu.getAbsoluteImagePath('gem'),
			},
		],
	};
}
