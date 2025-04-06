import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Savannah Park';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
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
				icon: pu.getAbsoluteImagePath('bush'),
				description: '1 Point for each empty Grass space',
			},
			{
				name: 'Trees',
				icon: pu.getAbsoluteImagePath('tree'),
				description: '3 Point for each empty Tree space',
			},
			{
				name: 'Giraffes',
				icon: pu.getAbsoluteImagePath('giraffe'),
			},
			{
				name: 'Elephants',
				icon: pu.getAbsoluteImagePath('elephant'),
			},
			{
				name: 'Rhinos',
				icon: pu.getAbsoluteImagePath('rhino'),
			},
			{
				name: 'Zebras',
				icon: pu.getAbsoluteImagePath('zebra'),
			},
			{
				name: 'Antelopes',
				icon: pu.getAbsoluteImagePath('antelope'),
			},
			{
				name: 'Ostriches',
				icon: pu.getAbsoluteImagePath('ostrich'),
			},
		],
	};
}
