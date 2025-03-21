import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import sanctuary from './assets/sanctuary.png';

export default function getDefinition(): GameDef {
	return {
		title: 'Faraway',
		url: 'https://boardgamegeek.com/boardgame/385761/faraway',
		rulesUrl:
			'https://s3.amazonaws.com/geekdo-files.com/bgg362694?response-content-disposition=inline%3B%20filename%3D%22Faraway-rules-EN.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20241021%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241021T060703Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=07f156062feedbf209ca1e84f1bb1f24fbf281d126aa6f4014551f1600adfd5e',
		bgColor: '#fdfcfb',
		fontColor: '#000',
		primaryColor: '#53315e',
		secondaryColor: '#edd406',
		//fontFamily: FontUtils.PLAYFUL,
		stripeColor: '#f8f4ee',
		playerSizes: [2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Card 1',
				icon: img1,
			},
			{
				name: 'Card 2',
				icon: img2,
			},
			{
				name: 'Card 3',
				icon: img3,
			},
			{
				name: 'Card 4',
				icon: img4,
			},
			{
				name: 'Card 5',
				icon: img5,
			},
			{
				name: 'Card 6',
				icon: img6,
			},
			{
				name: 'Card 7',
				icon: img7,
			},
			{
				name: 'Card 8',
				icon: img8,
			},
			{
				name: 'Sanctuary',
				icon: sanctuary,
			},
		],
	};
}
