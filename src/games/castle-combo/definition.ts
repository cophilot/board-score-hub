import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the CastleCombo game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-4-22
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Castle Combo';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/416851/castle-combo',
		rulesUrl:
			'https://tesera.ru/images/items/2392014/castle_combo_rules_en.pdf',
		banner:
			'https://cf.geekdo-images.com/rGomBfj0FGrZM-w3h5HFWQ__opengraph/img/arUd1NHQ6izZ5t6uWK08p0z2IzE=/0x0:1084x569/fit-in/1200x630/filters:strip_icc()/pic8250341.png',
		bgColor: '#e8e4d6',
		fontColor: '#2c2e35',
		primaryColor: '#61a6a7',
		secondaryColor: '#ffb563',
		fontFamily: FontUtils.getClassicFont(),
		stripeColor: '#d4cfc1',
		playerSizes: [2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Top Left',
				icon: pu.getAbsoluteImagePath('1'),
			},
			{
				name: 'Top Middle',
				icon: pu.getAbsoluteImagePath('2'),
			},
			{
				name: 'Top Right',
				icon: pu.getAbsoluteImagePath('3'),
			},
			{
				name: 'Middle Left',
				icon: pu.getAbsoluteImagePath('4'),
			},
			{
				name: 'Middle',
				icon: pu.getAbsoluteImagePath('5'),
			},
			{
				name: 'Middle Right',
				icon: pu.getAbsoluteImagePath('6'),
			},
			{
				name: 'Bottom Left',
				icon: pu.getAbsoluteImagePath('7'),
			},
			{
				name: 'Bottom Middle',
				icon: pu.getAbsoluteImagePath('8'),
			},
			{
				name: 'Bottom Right',
				icon: pu.getAbsoluteImagePath('9'),
			},
			{
				name: 'Key',
				icon: pu.getAbsoluteImagePath('key'),
				description: 'Each key is worth 1 victory point.',
			},
		],
	};
}
