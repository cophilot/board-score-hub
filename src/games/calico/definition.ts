import { WinMode } from '../../api/types/WinMode';
import goalTileTop from './assets/goal-tile-top.png';
import goalTileRight from './assets/goal-tile-right.png';
import goalTileLeft from './assets/goal-tile-left.png';
import catTokens from './assets/cat-tokens.png';
import buttonTokens from './assets/button-tokens.png';
import FontUtils from '../../api/utils/FontUtils';
import { GameDef } from '../../api/types/GameDef';

export default function getDefinition(): GameDef {
	return {
		title: 'Calico',
		url: 'https://boardgamegeek.com/boardgame/283155/calico',
		rulesUrl:
			'https://www.alderac.com/wp-content/uploads/2020/09/Calico-Rules.pdf',
		bgColor: '#fbf8f0',
		fontColor: '#000',
		primaryColor: '#142688',
		secondaryColor: '#c12966',
		fontFamily: FontUtils.CLASSIC,
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Top Goal Tile',
				icon: goalTileTop,
				bgColor: '#6c993b',
			},
			{
				name: 'Left Goal Tile',
				icon: goalTileLeft,
				bgColor: '#792a94',
			},
			{
				name: 'Right Goal Tile',
				icon: goalTileRight,
				bgColor: '#ffac33',
			},
			{
				name: 'Cat Tokens',
				icon: catTokens,
				bgColor: '#582895',
			},

			{
				name: 'Button Tokens',
				icon: buttonTokens,
				bgColor: '#68cfda',
			},
		],
	};
}
