import tree from './assets/tree.png';
import field from './assets/field.png';
import house from './assets/house.png';
import rail from './assets/rail.png';
import river from './assets/river.png';
import border from './assets/border.png';
import six from './assets/six.png';
import flagGreen from './assets/flag-green.png';
import flagYellow from './assets/flag-yellow.png';
import flagRed from './assets/flag-red.png';
import longRail from './assets/longest-rail.png';
import longRiver from './assets/longest-river.png';
import { WinMode } from '../../api/types/WinMode';
import { GameDef } from '../../api/types/GameDef';

export default function getDefinition(): GameDef {
	return {
		title: 'Dorfromatik: Duel',
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
				icon: tree,
			},
			{
				name: 'Field',
				icon: field,
			},
			{
				name: 'House',
				icon: house,
			},
			{
				name: 'Railway',
				icon: rail,
			},
			{
				name: 'River',
				icon: river,
			},
			{
				name: 'Border',
				icon: border,
			},
			{
				name: 'Six',
				icon: six,
			},
			{
				name: 'Flag green',
				icon: flagGreen,
			},
			{
				name: 'Flag yellow',
				icon: flagYellow,
			},
			{
				name: 'Flag red',
				icon: flagRed,
			},
			{
				name: 'Longest Railway',
				icon: longRail,
			},
			{
				name: 'Longest River',
				icon: longRiver,
			},
		],
	};
}
