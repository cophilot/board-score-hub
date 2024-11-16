import { GameDef } from '../../api/types/GameDef';
import { WinMode } from '../../api/types/WinMode';

export default function getDefinition(): GameDef {
	return {
		title: 'Wizard',
		url: 'https://boardgamegeek.com/boardgame/1465/wizard',
		rulesUrl:
			'https://blog.amigo-spiele.de/content/ap/rule/06900-GB-AmigoRule.pdf',
		bgColor: '#1F1F1F',
		fontColor: '#29A972',
		primaryColor: '#8C2225',
		secondaryColor: '#111D24',
		playerSizes: [3, 4, 5, 6],
		winMode: WinMode.MOST,
		roundMapper: {
			3: 20,
			4: 15,
			5: 12,
			6: 10,
		},
		rows: [
			{
				name: 'Round 1',
			},
			{
				name: 'Round 2',
			},
			{
				name: 'Round 3',
			},
			{
				name: 'Round 4',
			},
			{
				name: 'Round 5',
			},
			{
				name: 'Round 6',
			},
			{
				name: 'Round 7',
			},
			{
				name: 'Round 8',
			},
			{
				name: 'Round 9',
			},
			{
				name: 'Round 10',
			},
			{
				name: 'Round 11',
			},
			{
				name: 'Round 12',
			},
			{
				name: 'Round 13',
			},
			{
				name: 'Round 14',
			},
			{
				name: 'Round 15',
			},
			{
				name: 'Round 16',
			},
			{
				name: 'Round 17',
			},
			{
				name: 'Round 18',
			},
			{
				name: 'Round 19',
			},
			{
				name: 'Round 20',
			},
		],
	};
}
