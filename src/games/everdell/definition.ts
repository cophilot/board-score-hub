import basicEvents from './assets/basic-events.png';
import journey from './assets/journey.png';
import pointToken from './assets/point-token.png';
import specialEvents from './assets/special-events.png';
import expedition from './assets/expedition.png';
import discoveryCard from './assets/discovery-cards.png';
import village from './assets/village.png';
import visitor from './assets/visitor.png';
import prosperity from './assets/prosperity.png';
import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';
import { GameDef } from '../../api/types/GameDef';

export default function getDefinition(): GameDef {
	return {
		title: 'Everdell',
		url: 'https://boardgamegeek.com/boardgame/199792/everdell',
		rulesUrl: 'https://cdn.1j1ju.com/medias/c6/cd/89-everdell-rulebook.pdf',
		banner:
			'https://d19y2ttatozxjp.cloudfront.net/assets/everdell/HeroBanner_Everdell.png',
		bgColor: '#5c652e',
		fontColor: '#342a28',
		primaryColor: '#714839',
		secondaryColor: '#50446a',
		fontFamily: FontUtils.HANDWRITING,
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		stripeColor: '#4b5729',
		rows: [
			{
				name: 'Cards in Village',
				icon: village,
			},
			{
				name: 'Prosperity',
				icon: prosperity,
			},
			{
				name: 'Point Tokens',
				icon: pointToken,
			},
			{
				name: 'Basic Events',
				icon: basicEvents,
			},
			{
				name: 'Special Events',
				icon: specialEvents,
			},
			{
				name: 'Journey',
				icon: journey,
			},
		],
		extensions: {
			Newleaf: {
				rows: [
					{
						id: 'newleaf',
						name: 'Vistors',
						description: 'Points from the visitors challenges',
						icon: visitor,
					},
				],
			},
			Spirecrest: {
				rows: [
					{
						id: 'spirecrest',
						name: 'Expedition',
						description: 'Points gained from your expedition',
						icon: expedition,
					},
					{
						name: 'Discovery Cards',
						description: 'Points from your discovery cards',
						icon: discoveryCard,
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
