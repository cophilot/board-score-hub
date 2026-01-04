import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import { GameDef } from '../../core/types/GameDef';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Everdell';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/199792/everdell',
		rulesUrl: 'https://cdn.1j1ju.com/medias/c6/cd/89-everdell-rulebook.pdf',
		banner:
			'https://d19y2ttatozxjp.cloudfront.net/assets/everdell/HeroBanner_Everdell.png',
		bgColor: '#5c652e',
		fontColor: '#342a28',
		primaryColor: '#714839',
		secondaryColor: '#50446a',
		fontFamily: FontUtils.getHandwritingFont(),
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		stripeColor: '#4b5729',
		rows: [
			{
				name: 'Cards in City',
				description: 'Base points from cards in your city',
				icon: pu.getAbsoluteImagePath('village'),
			},
			{
				name: 'Prosperity',
				description: 'Bonus points from prosperity',
				icon: pu.getAbsoluteImagePath('prosperity'),
			},
			{
				name: 'Point Tokens',
				description: 'Earned point tokens',
				icon: pu.getAbsoluteImagePath('point-token'),
			},
			{
				name: 'Basic Events',
				description: 'Points from completed basic events',
				icon: pu.getAbsoluteImagePath('basic-events'),
			},
			{
				name: 'Special Events',
				description: 'Points from completed special events',
				icon: pu.getAbsoluteImagePath('special-events'),
			},
			{
				name: 'Journey',
				description: 'Points for any workers you placed on Journey',
				icon: pu.getAbsoluteImagePath('journey'),
			},
		],
		extensions: {
			Newleaf: {
				rows: [
					{
						id: 'newleaf',
						name: 'Visitors',
						description: 'Points from the visitors challenges',
						icon: pu.getAbsoluteImagePath('visitor'),
					},
				],
			},
			Bellfaire: {
				rows: [
					{
						id: 'bellfaire',
						name: 'Garland Awards',
						description: 'Points from garland awards (ties are friendly)',
						icon: pu.getAbsoluteImagePath('garland-awards'),
					},
				],
			},
			Spirecrest: {
				rows: [
					{
						id: 'spirecrest',
						name: 'Expedition',
						description: 'Points gained from your expedition',
						icon: pu.getAbsoluteImagePath('expedition'),
					},
					{
						name: 'Discovery Cards',
						description: 'Points from your discovery cards',
						icon: pu.getAbsoluteImagePath('discovery-cards'),
					},
				],
			},
		},
		labels: [
			{
				beforeID: 'newleaf',
				label: 'Newleaf',
			},
			{
				beforeID: 'spirecrest',
				label: 'Spirecrest',
			},
			{
				beforeID: 'bellfaire',
				label: 'Bellfaire',
			},
		],
	};
}
