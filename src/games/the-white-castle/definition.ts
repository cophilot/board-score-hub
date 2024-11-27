import { GameDef } from '../../api/types/GameDef';
import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';
import clanPoints from './assets/clan-points.png';
import coins from './assets/coins.png';
import courtier from './assets/courtier.png';
import gardener from './assets/gardener.png';
import passageOfTime from './assets/passage-of-time.png';
import resources from './assets/resources.png';
import warrior from './assets/warrior.png';

export default function getDefinition(): GameDef {
	return {
		title: 'The White Castle',
		url: 'https://boardgamegeek.com/boardgame/371942/the-white-castle',
		rulesUrl:
			'https://www.thamesandkosmos.co.uk/wp-content/uploads/2023/07/WHITE_CASTLE_ENG.pdf',
		bgColor: '#e7daca',
		fontColor: '#342d38',
		primaryColor: '#3d3544',
		secondaryColor: '#fad668',
		fontFamily: FontUtils.CLASSIC,
		stripeColor: '#cfb5a6',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Clan Points',
				icon: clanPoints,
				description: 'Clan points that you earned during the game.',
			},
			{
				name: 'Passage of Time',
				icon: passageOfTime,
				description: 'Get points for your passage of time track.',
			},
			{
				name: 'Gardener',
				icon: gardener,
				description: 'Score the points for your gardeners on the board.',
			},
			{
				name: 'Warrior',
				icon: warrior,
				description: 'Score the points for your warriors on the board.',
			},
			{
				name: 'Courtier',
				icon: courtier,
				description: 'Score the points for your courtiers on the board.',
			},
			{
				name: 'Resources',
				icon: resources,
				description: 'Get points for resources you have left.',
			},
			{
				name: 'Coins',
				icon: coins,
				description: 'Get 1 point for every 5 coins you have.',
			},
		],
	};
}
