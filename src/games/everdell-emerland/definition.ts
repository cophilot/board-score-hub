import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Everdell Emerland game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-9-25
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Everdell Emerland';
	const pu = new PathUtils(gameTitle);

	return {
		banner:
			'https://t4.ftcdn.net/jpg/07/30/41/97/360_F_730419788_1LQwRRWZTvudRZSOx8wEriYQWs5dOf3q.jpg',
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/455843/everdell-emerland',
		rulesUrl:
			'https://cdn.shopify.com/s/files/1/0559/8245/6947/files/Emerland-CE-Rulebook-WEB.pdf?v=1761663226',
		bgColor: '#ccb194',
		fontColor: 'black',
		primaryColor: '#16a74c',
		secondaryColor: '#c94c41',
		fontFamily: FontUtils.getHandwritingFont(),
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Cards in City',
				description: 'Base point value of Jungle cards in your city',
				icon: pu.getAbsoluteImagePath('cards'),
			},
			{
				name: 'Prosperity',
				description: 'Bonus Prosperity points',
				icon: pu.getAbsoluteImagePath('prosperity'),
			},
			{
				name: 'Point Tokens',
				description: 'Points from point tokens',
				icon: pu.getAbsoluteImagePath('point-tokens'),
			},
			{
				name: 'Artifacts',
				description: 'Points on Artifacts',
				icon: pu.getAbsoluteImagePath('artifacts'),
			},
			{
				name: 'Archaeologist',
				description:
					'Position of your Archaeologist, if you made it to the Lost City',
				icon: pu.getAbsoluteImagePath('archaeologist'),
			},
			{
				name: 'Realm Cards',
				description: 'Points from Realm cards',
				icon: pu.getAbsoluteImagePath('realm-cards'),
			},
			{
				name: 'Leftover Resources',
				description:
					'1 point for every two leftover resources, including emeralds',
				icon: pu.getAbsoluteImagePath('resources'),
			},
		],
	};
}
