import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Everdell Duo';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/425005/everdell-duo',
		rulesUrl:
			'https://desktopgames.com.ua/games/8869/everdell_duo_rules_eng_compresse.pdf?srsltid=AfmBOoo8BiN6UvWu8VxLB9885KoLNmncqkO4Y-3kbXpLFeX_LM0Mfj5j',
		banner:
			'https://comicbook.com/wp-content/uploads/sites/4/2024/08/92b9debb-1c5b-43a8-878d-3bebf8430ac7.jpg?w=1024',
		bgColor: '#6d8235',
		fontColor: '#572a15',
		primaryColor: '#ffaf34',
		secondaryColor: '#1e4f6c',
		fontFamily: FontUtils.getHandwritingFont(),
		playerSizes: [1, 2],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Cards in City',
				description: 'Base points from cards in your city',

				icon: pu.getAbsoluteImagePath('cards'),
			},

			{
				name: 'Prosperity',
				description: 'Bonus points from prosperity',

				icon: pu.getAbsoluteImagePath('prosperity'),
			},
			{
				name: 'Point Tokens',
				description: 'Earned point tokens',

				icon: pu.getAbsoluteImagePath('point-token'),
			},
			{
				name: 'Events',
				description: 'Points from completed events',
				icon: pu.getAbsoluteImagePath('events'),
			},
		],
	};
}
