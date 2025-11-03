import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Spectacular game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-11-2
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Spectacular';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		altTitles: ['Spektakulär'],
		banner:
			'https://i.ytimg.com/vi/6Rx5BXlXM0Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAraijZYwxwvzKsrkJ8KzmsqfOZEg',
		url: 'https://boardgamegeek.com/boardgame/415147/spectacular',
		rulesUrl:
			'https://gamers-hq.de/media/pdf/4b/aa/0e/Spectacular_Rules_Compressed.pdf',
		bgColor: '#dad8d0',
		fontColor: '#181a17',
		primaryColor: '#3f5e3a',
		secondaryColor: '#f6ef1a',
		//primaryColor: '#f6ef1a',
		//secondaryColor: '#b8e5b4',
		fontFamily: FontUtils.getModernFont(),
		playerSizes: [1, 2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Entrance Scoring',
				icon: pu.getAbsoluteImagePath('ticket'),
				description:
					'Each player scores the total value of the dice in every dice group adjacent to their park entrance',
			},
			{
				name: 'Forest Region',
				icon: pu.getAbsoluteImagePath('green'),
				description: 'Point values for forest regions',
			},
			{
				name: 'Desert Region',
				icon: pu.getAbsoluteImagePath('yellow'),
				description: 'Point values for desert regions',
			},
			{
				name: 'Water Region',
				icon: pu.getAbsoluteImagePath('blue'),
				description: 'Point values for water regions',
			},
			{
				name: 'Mountain Region',
				icon: pu.getAbsoluteImagePath('gray'),
				description: 'Point values for mountain regions',
			},
			{
				name: 'Watchtowers',
				icon: pu.getAbsoluteImagePath('watchtower'),
				description:
					'Score the value of the dice around each built tower with 3 dice around it.',
			},
			{
				name: 'Animal',
				icon: pu.getAbsoluteImagePath('animal'),
				description:
					'Each player scores points for the number of different animals in their park, including their star animal',
			},
			{
				name: 'Mission',
				icon: pu.getAbsoluteImagePath('mission'),
				description:
					'Each player scores points for completing their personal mission card',
			},
		],
	};
}
