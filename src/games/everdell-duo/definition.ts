import { GameDef } from '../../api/types/GameDef';
import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';

export default function getDefinition(): GameDef {
	return {
		title: 'Everdell Duo',
		url: 'https://boardgamegeek.com/boardgame/425005/everdell-duo',
		rulesUrl:
			'https://desktopgames.com.ua/games/8869/everdell_duo_rules_eng_compresse.pdf?srsltid=AfmBOoo8BiN6UvWu8VxLB9885KoLNmncqkO4Y-3kbXpLFeX_LM0Mfj5j',
		bgColor: '#6d8235',
		fontColor: '#572a15',
		primaryColor: '#ffaf34',
		secondaryColor: '#1e4f6c',
		fontFamily: FontUtils.HANDWRITING,
		playerSizes: [1, 2],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Points on Cards',
			},
			{
				name: 'Purple bonus points',
			},
			{
				name: 'Points tokens',
			},
			{
				name: 'Events',
			},
		],
	};
}
