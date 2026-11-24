import { GameDef } from '../../core/types/GameDef';
import { RowDef } from '../../core/types/RowDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Fit to Print game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-11-22
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Fit to Print';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/352574/fit-to-print',
		rulesUrl:
			'https://www.alderac.com/wp-content/uploads/2025/04/FitToPrint_BaseGame_Rulebook_Optimized.pdf',
		bgColor: '#f7dcb4',
		fontColor: '#2a1c11',
		primaryColor: '#ed8429',
		secondaryColor: '#54a79e',
		altTitles: ['Druckfrisch'],
		fontFamily: FontUtils.getClassicFont(),
		banner:
			'https://img.magnific.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?semt=ais_hybrid&w=740&q=80',
		playerSizes: [1, 2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		rows: [
			...generateRowsForDay(pu, 'Friday', 'fr', '#59b4ce'),
			...generateRowsForDay(pu, 'Saturday', 'sa', '#fbab46'),
			...generateRowsForDay(pu, 'Sunday', 'su', '#c1798a'),
		],
		labels: [
			{
				beforeID: 'fr',
				label: 'Friday',
			},
			{
				beforeID: 'sa',
				label: 'Saturday',
			},
			{
				beforeID: 'su',
				label: 'Sunday',
			},
		],
	};
}

function generateRowsForDay(
	pu: PathUtils,
	day: string,
	dayId: string,
	bgColor: string,
): RowDef[] {
	return [
		{
			id: dayId,
			name: day + ' Articles',
			description: 'Points for articles published on ' + day,
			icon: pu.getAbsoluteImagePath('articles'),
			bgColor: bgColor,
		},
		{
			name: day + ' Photos',
			description: 'Points for photos published on ' + day,
			icon: pu.getAbsoluteImagePath('photos'),
			bgColor: bgColor,
		},
		{
			name: day + ' Centerpiece',
			description: 'Points for the centerpieces published on ' + day,
			icon: pu.getAbsoluteImagePath('centerpiece'),
			bgColor: bgColor,
		},
		{
			name: day + ' Mood',
			description: 'Minus points for the difference in your moods on ' + day,
			icon: pu.getAbsoluteImagePath('mood'),
			bgColor: bgColor,
			negative: true,
		},
		{
			name: day + ' Leftovers',
			description: 'Minus points for each leftover on ' + day,
			icon: pu.getAbsoluteImagePath('leftovers'),
			bgColor: bgColor,
			negative: true,
		},
		{
			name: day + ' Smallest White Space',
			description: '3 Points if you have the smallest white space on ' + day,
			icon: pu.getAbsoluteImagePath('white-space'),
			bgColor: bgColor,
			iconText: {
				text: 'Smallest (3)',
				outlineColor: '#fff',
			},
			checkValue: 3,
		},
		{
			name: day + ' Largest White Space',
			description: '1 Points if you have the smallest white space on ' + day,
			icon: pu.getAbsoluteImagePath('white-space'),
			bgColor: bgColor,
			iconText: {
				text: 'Largest (-1)',
				outlineColor: '#fff',
			},
			checkValue: -1,
		},
		{
			name: day + ' Other White Space',
			description: '3 Points if you have the smallest white space on ' + day,
			icon: pu.getAbsoluteImagePath('white-space'),
			bgColor: bgColor,

			iconText: {
				text: 'Other (1)',
				outlineColor: '#fff',
			},
			checkValue: 1,
		},
	];
}
