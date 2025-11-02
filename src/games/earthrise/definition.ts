import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Earthrise game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-10-31
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Earthrise';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/445867/earthrise',
		rulesUrl: 'https://www.scribd.com/document/871792594/Earthrise-Rulebook',
		banner:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47sk4aQzrNnRi3dLBo53f5G0HnBERXrYS3A&s',
		bgColor: '#c5e1ec',
		fontColor: '#01020d',
		primaryColor: '#5e60aa',
		secondaryColor: '#fdcf18',
		//fontFamily: FontUtils.getHandwritingFont(),
		//stripeColor: '#000',
		playerSizes: [3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Round One',
				description: 'Points from Round 1',
				icon: pu.getAbsoluteImagePath('one'),
			},
			{
				name: 'Round Two',
				description: 'Points from Round 2',
				icon: pu.getAbsoluteImagePath('two'),
			},
			{
				name: 'Round Three',
				description: 'Points from Round 3',
				icon: pu.getAbsoluteImagePath('three'),
			},
			{
				name: 'Earthrise Bonus',
				description: 'Points from Earthrise puzzle',
				icon: pu.getAbsoluteImagePath('earthrise'),
			},
			{
				name: 'Maneuver tokens',
				description: '1 or 2 points per token left',
				icon: pu.getAbsoluteImagePath('mission'),
			},
			{
				name: 'Fewest Alert tokens',
				description:
					'The player with the fewest Alert tokens gets 10 points (friendly tie)',
				icon: pu.getAbsoluteImagePath('least-alert'),
				checkValue: 10,
			},
		],
	};
}
