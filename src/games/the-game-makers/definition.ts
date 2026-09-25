import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the The Game Makers game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-9-25
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'The Game Makers';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/447776/the-game-makers',
		rulesUrl:
			'https://dyw4q875ylee1.cloudfront.net/GM%20Game%20Makers%20online%20rules%205.1.pdf',
		bgColor: '#6a4426',
		fontColor: '#090909',
		primaryColor: '#288ece',
		secondaryColor: '#f9d323',
		banner:
			'https://i.kickstarter.com/assets/050/684/076/5ddc8d4d0fdabef652447809b4493bcf_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&v=1756900913&width=1024&sig=x%2FOqlWn5zDjD1opDoTVhlj17bm%2Bj6BmBpXBvhAL63RE%3D',
		stripeColor: '#492c1b',
		playerSizes: [1, 2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Display Case Row 1',
				description: 'Points for your games in your display case row 1.',
				icon: pu.getAbsoluteImagePath('row1'),
			},
			{
				name: 'Display Case Row 2',
				description: 'Points for your games in your display case row 2.',
				icon: pu.getAbsoluteImagePath('row2'),
			},
			{
				name: 'Display Case Row 3',
				description: 'Points for your games in your display case row 3.',
				icon: pu.getAbsoluteImagePath('row3'),
			},
			{
				name: 'Engine Building/ Strategy Games Marketing Track Score',
				description:
					'Points for your Engine Building/ Strategy games multiplied by the multiplier on the marketing track.',
				icon: pu.getAbsoluteImagePath('yellow'),
			},
			{
				name: 'Set Collection / Card Games Marketing Track Score',
				description:
					'Points for your Set Collection / Card games multiplied by the multiplier on the marketing track.',
				icon: pu.getAbsoluteImagePath('blue'),
			},
			{
				name: 'Cooperative / Team Games Marketing Track Score',
				description:
					'Points for your Cooperative / Team games multiplied by the multiplier on the marketing track.',
				icon: pu.getAbsoluteImagePath('purple'),
			},
			{
				name: 'War / Fighting Games Marketing Track Score',
				description:
					'Points for your War / Fighting games multiplied by the multiplier on the marketing track.',
				icon: pu.getAbsoluteImagePath('red'),
			},
			{
				name: 'Tree Marketing Track Score',
				description:
					'Points for your Trees multiplied by the multiplier on the marketing track.',
				icon: pu.getAbsoluteImagePath('tree'),
			},
			{
				name: 'Structure A Score',
				description: 'Points for your structure A tile.',
				icon: pu.getAbsoluteImagePath('a'),
			},
		],
	};
}
