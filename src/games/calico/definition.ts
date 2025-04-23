import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import { GameDef } from '../../core/types/GameDef';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Calico';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/283155/calico',
		rulesUrl:
			'https://www.alderac.com/wp-content/uploads/2020/09/Calico-Rules.pdf',
		banner:
			'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/12/Quilts-Cats-Of-Calico-Art.jpg',
		bgColor: '#fbf8f0',
		fontColor: '#000',
		primaryColor: '#142688',
		secondaryColor: '#c12966',
		fontFamily: FontUtils.getClassicFont(),
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Top Goal Tile',
				icon: pu.getAbsoluteImagePath('goal-tile-top'),
				bgColor: '#6c993b',
				fn: (n: number) => n * -2,
				fnDisplay: '_ x -2',
			},
			{
				name: 'Left Goal Tile',
				icon: pu.getAbsoluteImagePath('goal-tile-left'),
				bgColor: '#792a94',
			},
			{
				name: 'Right Goal Tile',
				icon: pu.getAbsoluteImagePath('goal-tile-right'),
				bgColor: '#ffac33',
			},
			{
				name: 'Cat Tokens',
				icon: pu.getAbsoluteImagePath('cat-tokens'),
				bgColor: '#582895',
			},

			{
				name: 'Button Tokens',
				icon: pu.getAbsoluteImagePath('button-tokens'),
				bgColor: '#68cfda',
			},
		],
	};
}
