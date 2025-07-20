import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'The White Castle';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/371942/the-white-castle',
		rulesUrl:
			'https://www.thamesandkosmos.co.uk/wp-content/uploads/2023/07/WHITE_CASTLE_ENG.pdf',
		bgColor: '#e7daca',
		fontColor: '#342d38',
		primaryColor: '#3d3544',
		secondaryColor: '#fad668',
		fontFamily: FontUtils.getClassicFont(),
		stripeColor: '#cfb5a6',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Clan Points',
				icon: pu.getAbsoluteImagePath('clan-points'),
				description: 'Clan points that you earned during the game.',
			},
			{
				name: 'Passage of Time',
				icon: pu.getAbsoluteImagePath('passage-of-time'),
				description: 'Get points for your passage of time track.',
			},
			{
				name: 'Gardener',
				icon: pu.getAbsoluteImagePath('gardener'),
				description: 'Score the points for your gardeners on the board.',
			},
			{
				name: 'Warrior',
				icon: pu.getAbsoluteImagePath('warrior'),
				description: 'Score the points for your warriors on the board.',
			},
			{
				name: 'Courtier',
				icon: pu.getAbsoluteImagePath('courtier'),
				description: 'Score the points for your courtiers on the board.',
			},
			{
				name: 'Coins',
				icon: pu.getAbsoluteImagePath('coins'),
				description: 'Get 1 point for every 5 coins you have.',
			},
			{
				id: 'resources',
				name: 'Resources',
				icon: pu.getAbsoluteImagePath('resources'),
				description: 'Get points for resources you have left.',
			},
		],
		extensions: {
			Matcha: {
				rows: [
					{
						id: 'matcha',
						name: 'Geishas',
						description: 'Score the points for your geishas in the tea garden.',
						icon: pu.getAbsoluteImagePath('geishas'),
					},
					{
						name: 'Resources and Matcha',
						description:
							'Get points for your resources and matcha you have left.',
						icon: pu.getAbsoluteImagePath('resources-matcha'),
					},
				],
				excludeRows: ['resources'],
				rules:
					'https://gamers-hq.de/media/pdf/3b/23/f9/WhiteCastle_Matcha_ENG.pdf',
			},
		},
		labels: [
			{
				beforeID: 'matcha',
				label: 'Matcha',
			},
		],
	};
}
