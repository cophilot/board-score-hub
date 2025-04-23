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
				name: 'Cards in Village',
				icon: pu.getAbsoluteImagePath('village'),
			},
			{
				name: 'Prosperity',
				icon: pu.getAbsoluteImagePath('prosperity'),
			},
			{
				name: 'Point Tokens',
				icon: pu.getAbsoluteImagePath('point-token'),
			},
			{
				name: 'Basic Events',
				icon: pu.getAbsoluteImagePath('basic-events'),
			},
			{
				name: 'Special Events',
				icon: pu.getAbsoluteImagePath('special-events'),
			},
			{
				name: 'Journey',
				icon: pu.getAbsoluteImagePath('journey'),
			},
		],
		extensions: {
			Newleaf: {
				rows: [
					{
						id: 'newleaf',
						name: 'Vistors',
						description: 'Points from the visitors challenges',
						icon: pu.getAbsoluteImagePath('visitor'),
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
		],
	};
}
