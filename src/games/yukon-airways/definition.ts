import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Yukon Airways game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-11-1
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Yukon Airways';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/283294/yukon-airways',
		banner:
			'https://as1.ftcdn.net/v2/jpg/05/40/79/72/1000_F_540797260_6BLRtU4NFCTNl8SNhH22jmVHg4drvcTL.jpg',
		rulesUrl:
			'https://www.brettspielversand.de/mediafiles/spieleanleitungen/ludonova/223-0003_yukonairways_anleitung.pdf?srsltid=AYCX9vJqhHkeMQsFN9qVsaq8bbZX5BNirS3i7HzTMXfTmQ0-By4uXFRi',
		bgColor: '#faf5cf',
		fontColor: '#1c2744',
		primaryColor: '#ff6238',
		secondaryColor: '#a9dfca',
		//fontFamily: FontUtils.getHandwritingFont(),
		//stripeColor: '#000',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Collected Money',
				description: 'The money that they have accumulated during the game.',
				icon: pu.getAbsoluteImagePath('money'),
			},
			{
				name: 'Christmas Bonus Dial',
				description: 'The money obtained through the Christmas Bonus Dial.',
				icon: pu.getAbsoluteImagePath('christmas'),
			},
			{
				name: 'Cube Collection Switch',
				description:
					'If the switch is activated, get $2 for each cube of the color you have the most of (the color grey also counts), on the map of yourPersonal Board.',
				icon: pu.getAbsoluteImagePath('cube-collection-switch'),
			},
			{
				name: 'Distinct Locations',
				description:
					'The money obtained from having traveled to distinct locations according to the table.',
				icon: pu.getAbsoluteImagePath('map'),
			},
		],
	};
}
