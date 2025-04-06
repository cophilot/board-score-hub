import { WinMode } from '../../core/types/WinMode';
import { GameDef } from '../../core/types/GameDef';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Dorfromatik: Duel';
	const pu = new PathUtils(gameTitle, 'dorfromatik-duel');

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/395364/dorfromantik-the-duel',
		rulesUrl:
			'https://pegasus.de/media/pdf/e9/7c/e3/4250231736070_Dorfromantik_Duel_Rules_EN_Web.pdf',
		primaryColor: '#7ba1d4',
		secondaryColor: '#ee776c',
		playerSizes: [2],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Tree',
				icon: pu.getAbsoluteImagePath('tree'),
			},
			{
				name: 'Field',
				icon: pu.getAbsoluteImagePath('field'),
			},
			{
				name: 'House',
				icon: pu.getAbsoluteImagePath('house'),
			},
			{
				name: 'Railway',
				icon: pu.getAbsoluteImagePath('rail'),
			},
			{
				name: 'River',
				icon: pu.getAbsoluteImagePath('river'),
			},
			{
				name: 'Border',
				icon: pu.getAbsoluteImagePath('border'),
			},
			{
				name: 'Six',
				icon: pu.getAbsoluteImagePath('six'),
			},
			{
				name: 'Flag green',
				icon: pu.getAbsoluteImagePath('flag-green'),
			},
			{
				name: 'Flag yellow',
				icon: pu.getAbsoluteImagePath('flag-yellow'),
			},
			{
				name: 'Flag red',
				icon: pu.getAbsoluteImagePath('flag-red'),
			},
			{
				name: 'Longest Railway',
				icon: pu.getAbsoluteImagePath('longest-rail'),
			},
			{
				name: 'Longest River',
				icon: pu.getAbsoluteImagePath('longest-river'),
			},
		],
	};
}
