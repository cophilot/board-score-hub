import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import { GameDef } from '../../core/types/GameDef';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Seven Wonders: Duel';
	const pu = new PathUtils(gameTitle, 'seven-wonders-duel');

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/173346/7-wonders-duel',
		rulesUrl: 'https://cdn.1j1ju.com/medias/1a/ba/6b-7-wonders-duel-rules.pdf',
		banner:
			'https://cdn.svc.asmodee.net/production-rprod/storage/games/7-wonders-duel/8fond-duel-159782474684uLe.png',
		bgColor: '#fbdbb3',
		primaryColor: '#c59551',
		secondaryColor: '#2a7c6d',
		playerSizes: [2],
		winMode: WinMode.MOST,
		fontFamily: FontUtils.getAncientFont(),
		rows: [
			{
				name: 'Blue cards',
				icon: pu.getAbsoluteImagePath('blue-card'),
				bgColor: '#c7f0fc',
			},
			{
				name: 'Green cards',
				icon: pu.getAbsoluteImagePath('green-card'),
				bgColor: '#d8edd6',
			},
			{
				name: 'Yellow cards',
				icon: pu.getAbsoluteImagePath('yellow-card'),
				bgColor: '#fffad9',
			},
			{
				id: 'purple-card',
				name: 'Purple cards',
				icon: pu.getAbsoluteImagePath('purple-card'),
				bgColor: '#d2cce0',
			},
			{
				name: 'World wonders',
				icon: pu.getAbsoluteImagePath('world-wonder'),
				bgColor: '#ececed',
			},
			{
				name: 'Progress tokens',
				icon: pu.getAbsoluteImagePath('green-chip'),
				bgColor: '#d8edd6',
			},
			{
				name: 'Coins',
				icon: pu.getAbsoluteImagePath('coins'),
				bgColor: '#fffad9',
			},
			{
				name: 'Military',
				icon: pu.getAbsoluteImagePath('military'),
				bgColor: '#fad2c5',
			},
		],
		quickGuide: [
			{
				heading: 'Setup',
				text: [
					'Remove 3 Cards from each Age deck',
					'Each player takes 7 coins from the Bank.',
					'Draw 3 Guild cards (C) nd shuffle them into the Age III deck',
				],
			},
			{
				heading: 'Wonders Selection Phase',
				text: [
					'Place 4 random Wonders, face up, between the two players',
					'The first player chooses 1 Wonder',
					'The second player chooses 2 Wonders',
					'The first player takes the remaining Wonder',
					'Place 4 more Wonders and repeat the selection, but this time, start with the second player',
				],
			},
			{
				heading: 'Winning Conditions',
				text: [
					"You can win by Military dominance when you reach the opponent's capital",
					'You can win by Scientific dominance when you collect 6 different Scientific symbols',
					'You can win by Civilian victory when reaching more points than your opponent at the end of the game',
				],
			},
		],
		extensions: {
			Pantheon: {
				rows: [
					{
						id: 'pantheon',
						name: 'Grand Temple Cards',
						description: 'Points from the Grand Temple cards',
						icon: pu.getAbsoluteImagePath('dark-blue-card'),
						bgColor: '#d7dbe9',
					},
					{
						name: 'Divinities',
						description: 'Points from the divinities',
						icon: pu.getAbsoluteImagePath('divinity'),
						bgColor: '#e4d9d3',
					},
				],
				excludeRows: ['purple-card'],
			},
		},
		labels: [
			{
				beforeID: 'pantheon',
				label: 'Pantheon',
			},
		],
	};
}
