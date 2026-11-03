import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';

/**
 * This is the definition for the Dogs With Jobs game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-10-30
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Dogs With Jobs';

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/422685/dogs-with-jobs',
		rulesUrl: 'https://shop.lab380games.com/pages/learn',
		banner:
			'https://cf.geekdo-images.com/odQTAMenzzaiIvZxZk7EYw__opengraph/img/Zjib4Vnkgt0O7wViP0cz3jLjPdM=/0x0:1913x1004/fit-in/1200x630/filters:strip_icc()/pic8966440.jpg',
		bgColor: '#eaeaea',
		fontColor: '#000000',
		primaryColor: '#000000',
		secondaryColor: '#e74826',
		fontFamily: FontUtils.getActionFont(),
		stripeColor: '#ddff00',
		playerSizes: [1, 2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'UNIT 1',
				description: 'Points for your completed jobs in the first unit',
				fontItalic: true,
			},
			{
				name: 'U1 NO JOBS',
				description:
					'-10 points if you have no completed jobs in the first unit. No points are deducted if you don`t have the first unit.',
				fontItalic: true,
				checkValue: -10,
			},
			{
				name: 'UNIT 2',
				description: 'Points for your completed jobs in the second unit',
				fontItalic: true,
			},
			{
				name: 'U2 NO JOBS',
				description:
					'-10 points if you have no completed jobs in the second unit. No points are deducted if you don`t have the second unit.',
				fontItalic: true,
				checkValue: -10,
			},
			{
				name: 'UNIT 3',
				description: 'Points for your completed jobs in the third unit',
				fontItalic: true,
			},
			{
				name: 'U3 NO JOBS',
				description:
					'-10 points if you have no completed jobs in the third unit. No points are deducted if you don`t have the third unit.',
				fontItalic: true,
				checkValue: -10,
			},
			{
				name: 'UNIT 4',
				description: 'Points for your completed jobs in the fourth unit',
				fontItalic: true,
			},
			{
				name: 'U4 NO JOBS',
				description:
					'-10 points if you have no completed jobs in the fourth unit. No points are deducted if you don`t have the fourth unit.',
				fontItalic: true,
				checkValue: -10,
			},
			{
				name: 'JOBS ON HAND',
				description:
					'Subtract the Reward Points on any Jobs left in your hand. Special Condition Reward Points do not count against you.',
				fontItalic: true,
				negative: true,
			},
		],
	};
}
