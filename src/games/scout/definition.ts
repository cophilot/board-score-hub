import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';

export default function getDefinition(): GameDef {
	return {
		title: 'Scout',
		url: 'https://boardgamegeek.com/boardgame/291453/scout',
		rulesUrl:
			'https://onemoregame.cloud-line.com/files/SCOUT!_v2.1_English_open.pdf',
		bgColor: '#FBD800',
		fontColor: '#4B0082',
		primaryColor: '#F08600',
		secondaryColor: '#3E0099',
		fontFamily: FontUtils.CLASSIC,
		playerSizes: [2, 3, 4, 5],
		winMode: WinMode.MOST,
		roundMapper: {
			2: 2,
			3: 3,
			4: 4,
			5: 5,
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
		],
		quickGuide: [
			{
				heading: 'Setup',
				text: 'Shuffle the deck and deal 5 cards to each player.',
			},
			{
				heading: 'Winning',
				text: [
					'More cards are always better.',
					'A pair is higher than a street.',
				],
			},
		],
	};
}
