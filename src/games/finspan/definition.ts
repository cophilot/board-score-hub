import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Finspan game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-10-8
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Finspan';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/436126/finspan',
		rulesUrl: 'https://www.scribd.com/document/836479412/fnspn',
		bgColor: '#fefefd',
		fontColor: '#303238',
		primaryColor: '#007587',
		secondaryColor: '#fdcf6f',
		fontFamily: FontUtils.getPlayfulFont(),
		playerSizes: [1, 2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Week 1 Achievements',
				description:
					'Gain points for the achievements you have completed in week 1',
				icon: pu.getAbsoluteImagePath('week-goal'),
				iconText: {
					text: 'Week 1',
				},
			},
			{
				name: 'Week 2 Achievements',
				description:
					'Gain points for the achievements you have completed in week 2',
				icon: pu.getAbsoluteImagePath('week-goal'),
				iconText: {
					text: 'Week 2',
				},
			},
			{
				name: 'Week 3 Achievements',
				description:
					'Gain points for the achievements you have completed in week 3',
				icon: pu.getAbsoluteImagePath('week-goal'),
				iconText: {
					text: 'Week 3',
				},
			},
			{
				name: 'Game End Achievements',
				description:
					'Gain any “GAME END” points on fish in your ocean (in any order). Do not gainGAME END points on consumed fish.',
				icon: pu.getAbsoluteImagePath('end-goal'),
			},
			{
				name: 'Fish Points',
				description:
					'Gain points printed on visible fish in your ocean. Do not gain points printed on consumed fish.',
				icon: pu.getAbsoluteImagePath('points'),
			},
			{
				name: 'Consumed Fish',
				description:
					'Gain 1 point for each consumed fish (cardsand forage) in your ocean.',
				icon: pu.getAbsoluteImagePath('consumed-fish'),
			},
			{
				name: 'Eggs',
				description: 'Gain 1 point for each egg on your fish cards.',
				icon: pu.getAbsoluteImagePath('egg'),
			},
			{
				name: 'Young',
				description: 'Gain 1 point for each young in your ocean.',
				icon: pu.getAbsoluteImagePath('young'),
			},
			{
				name: 'School',
				description: 'Gain 6 points for each school in your ocean.',
				icon: pu.getAbsoluteImagePath('school'),
			},
		],
		extensions: {
			'Sharks & Reefs': {
				rows: [
					{
						id: 'sharks-reefs',
						name: 'Blue Corals',
						description:
							'Gain 1 point for each blue coral in your ocean. Gain additional 6 points if you have at all blue corals.',
						icon: pu.getAbsoluteImagePath('blue'),
					},
					{
						name: 'Purple Corals',
						description:
							'Gain 1 point for each purple coral in your ocean. Gain additional 8 points if you have at all purple corals.',
						icon: pu.getAbsoluteImagePath('purple'),
					},
					{
						name: 'Green Corals',
						description:
							'Gain 1 point for each green coral in your ocean. Gain additional 5 points if you have at all green corals.',
						icon: pu.getAbsoluteImagePath('green'),
					},
				],
			},
		},
		labels: [
			{
				beforeID: 'sharks-reefs',
				label: 'Sharks & Reefs',
			},
		],
	};
}
