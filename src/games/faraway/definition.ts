import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Faraway';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/385761/faraway',
		rulesUrl:
			'https://s3.amazonaws.com/geekdo-files.com/bgg362694?response-content-disposition=inline%3B%20filename%3D%22Faraway-rules-EN.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20241021%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241021T060703Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=07f156062feedbf209ca1e84f1bb1f24fbf281d126aa6f4014551f1600adfd5e',
		bgColor: '#fdfcfb',
		fontColor: '#000',
		primaryColor: '#53315e',
		secondaryColor: '#edd406',
		stripeColor: '#f8f4ee',
		playerSizes: [2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Card 1',
				icon: pu.getAbsoluteImagePath('1'),
			},
			{
				name: 'Card 2',
				icon: pu.getAbsoluteImagePath('2'),
			},
			{
				name: 'Card 3',
				icon: pu.getAbsoluteImagePath('3'),
			},
			{
				name: 'Card 4',
				icon: pu.getAbsoluteImagePath('4'),
			},
			{
				name: 'Card 5',
				icon: pu.getAbsoluteImagePath('5'),
			},
			{
				name: 'Card 6',
				icon: pu.getAbsoluteImagePath('6'),
			},
			{
				name: 'Card 7',
				icon: pu.getAbsoluteImagePath('7'),
			},
			{
				name: 'Card 8',
				icon: pu.getAbsoluteImagePath('8'),
			},
			{
				name: 'Sanctuary',
				icon: pu.getAbsoluteImagePath('sanctuary'),
			},
		],
	};
}
