import { GameDef } from '../../api/types/GameDef';
import { WinMode } from '../../api/types/WinMode';
import antelope from './assets/antelope.png';
import bush from './assets/bush.png';
import elephant from './assets/elephant.png';
import giraffe from './assets/giraffe.png';
import ostrich from './assets/ostrich.png';
import rhino from './assets/rhino.png';
import tree from './assets/tree.png';
import zebra from './assets/zebra.png';

export default function getDefinition(): GameDef {
	return {
		title: 'Savannah Park',
		url: 'https://boardgamegeek.com/boardgame/339484/savannah-park',
		rulesUrl:
			'https://deep-print-games.com/wp-content/uploads/2021/05/SavPark_Rulebook_US.pdf',
		banner:
			'https://www.wallart.com/media/catalog/product/cache/5b18b93ddbe5d6592c6b175f41d24454/w/0/w03048-small.jpg',
		bgColor: '#A2AB74',
		fontColor: '#000',
		primaryColor: '#F6AF32',
		secondaryColor: '#514417',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Grass',
				icon: bush,
				description: '1 Point for each empty Grass space',
			},
			{
				name: 'Trees',
				icon: tree,
				description: '3 Point for each empty Tree space',
			},
			{
				name: 'Giraffes',
				icon: giraffe,
			},
			{
				name: 'Elephants',
				icon: elephant,
			},
			{
				name: 'Rhinos',
				icon: rhino,
			},
			{
				name: 'Zebras',
				icon: zebra,
			},
			{
				name: 'Antelopes',
				icon: antelope,
			},
			{
				name: 'Ostriches',
				icon: ostrich,
			},
		],
	};
}
