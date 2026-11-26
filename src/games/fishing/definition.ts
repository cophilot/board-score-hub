import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';

/**
 * This is the definition for the Fishing game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-11-23
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Fishing';

	return {
		title: gameTitle,
		altTitles: ['Fischen'],
		banner:
			'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3856530/1e6666eebd7e29fe557ca054d591795ad02104df/ss_1e6666eebd7e29fe557ca054d591795ad02104df.1920x1080.jpg?t=1794469361',
		url: 'https://boardgamegeek.com/boardgame/419195/fishing',
		rulesUrl:
			'https://www.riograndegames.com/wp-content/uploads/2024/07/Fishing.pdf',
		bgColor: '#eaeee6',
		fontColor: '#0a0a0a',
		primaryColor: '#1b7932',
		secondaryColor: '#df540d',
		//fontFamily: FontUtils.getHandwritingFont(),
		//stripeColor: '#000',
		playerSizes: [3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: '1',
				description: 'Round 1',
			},
			{
				name: '2',
				description: 'Round 2',
			},
			{
				name: '3',
				description: 'Round 3',
			},
			{
				name: '4',
				description: 'Round 4',
			},
			{
				name: '5',
				description: 'Round 5',
			},
			{
				name: '6',
				description: 'Round 6',
			},
			{
				name: '7',
				description: 'Round 7',
			},
			{
				name: '8',
				description: 'Round 8',
			},
		],
	};
}
