import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import { GameDef } from '../../core/types/GameDef';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Wingspan';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/266192/wingspan',
		rulesUrl: 'https://www.szellemlovas.hu/szabalyok/fesztavEN.pdf',
		banner: 'https://cdn.mos.cms.futurecdn.net/frHNesBiPKkAJJ2aPrWAZD.jpg',
		bgColor: '#f4f5f0',
		fontColor: '#73645b',
		primaryColor: '#9fcccf',
		secondaryColor: '#73645b', //73645b
		playerSizes: [1, 2, 3, 4, 5],
		fontFamily: FontUtils.getPlayfulFont(),
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Birds',
				description: 'Birds in the players collection',
				icon: pu.getAbsoluteImagePath('bird'),
			},
			{
				name: 'Bonus cards',
				description: 'Bonus cards in the players collection',
				icon: pu.getAbsoluteImagePath('bonus'),
			},
			{
				name: 'End-of-round goals',
				description: 'Points earned from end-of-round goals',
				icon: pu.getAbsoluteImagePath('round-goals'),
			},
			{
				name: 'Eggs on cards',
				description: '1 point per egg on players cards',
				icon: pu.getAbsoluteImagePath('eggs'),
			},
			{
				name: 'Food on cards',
				description: '1 point per food token on cards',
				icon: pu.getAbsoluteImagePath('resources'),
			},
			{
				name: 'Tucked cards',
				description: '1 point per card tucked under another card',
				icon: pu.getAbsoluteImagePath('tucked-card'),
			},
		],
		extensions: {
			Oceania: {
				rows: [
					{
						id: 'oceania',
						name: 'Nectar',
						description:
							'5 points for the player with the most nectar and 2 points for the player with the second most nectar per region',
						icon: pu.getAbsoluteImagePath('nectar'),
					},
				],
			},
		},
		labels: [
			{
				beforeID: 'oceania',
				label: 'Oceania',
			},
		],
	};
}
