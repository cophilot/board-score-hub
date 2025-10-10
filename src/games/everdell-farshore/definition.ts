import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the EverdellFarshore game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-10-10
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Everdell Farshore';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/394106/everdell-farshore',
		rulesUrl:
			'https://tesera.ru/images/items/2263476/Farshore_Rulebook_WEB_v12_20230411.pdf',
		bgColor: '#b5d6df',
		fontColor: '#2a4a5f',
		primaryColor: '#d5a26e',
		secondaryColor: '#874720',
		fontFamily: FontUtils.getHandwritingFont(),
		banner:
			'https://cf.geekdo-images.com/zIOGDAQgAbusOt2UKCFwWA__large/img/d2NY7vuFL0kM8gbvUpr0jijxDQA=/fit-in/1024x1024/filters:no_upscale():strip_icc()/pic7615270.png',
		playerSizes: [1, 2, 3, 4],
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
				description: 'Points from point tokens',
				icon: pu.getAbsoluteImagePath('shell'),
			},
			{
				name: 'Treasure tiles',
				description: 'Each leftover treasure tile is worth 2 points',
				icon: pu.getAbsoluteImagePath('treasure'),
			},
			{
				name: 'Collected Maps',
				description: 'Points from collected maps',
				icon: pu.getAbsoluteImagePath('map'),
			},
			{
				name: 'Ship',
				description: 'Points from your final ship location',
				icon: pu.getAbsoluteImagePath('ship'),
			},
		],
	};
}
