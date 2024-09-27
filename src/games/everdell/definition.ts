import basicEvents from './assets/basic-events.png';
import journey from './assets/journey.png';
import pointToken from './assets/point-token.png';
import specialEvents from './assets/special-events.png';
import village from './assets/village.png';
import prosperity from './assets/prosperity.png';
import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';
import { GameDef } from '../../api/types/GameDef';

export default function getDefinition(): GameDef {
	return {
		title: 'Everdell',
		bgColor: '#5c652e',
		fontColor: '#342a28',
		primaryColor: '#714839',
		secondaryColor: '#50446a',
		fontFamily: FontUtils.HANDWRITING,
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		stripeColor: '#4b5729',
		rulesUrl: 'https://cdn.1j1ju.com/medias/c6/cd/89-everdell-rulebook.pdf',
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
	};
}
