import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'SETI';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/418059/seti-search-for-extraterrestrial-intelligence',
		rulesUrl: '',
		banner:
			'https://www.frederickscompany.com/wp-content/uploads/2019/11/iStock-579733578-e1573574017848-1024x499.jpg',
		bgColor: '#01597f',
		fontColor: '#fff',
		primaryColor: '#d6ca70',
		secondaryColor: '#e25100',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				icon: pu.getAbsoluteImagePath('points'),
				name: 'Current Track',
				description: 'Points earned during the game',
			},
			{
				icon: pu.getAbsoluteImagePath('end-of-game-cards'),
				name: 'End-of-Game Scoring Cards',
				description: 'Points from end-of-game scoring cards that you played',
			},
			{
				icon: pu.getAbsoluteImagePath('golden-tiles'),
				name: 'Gold Scoring Tile Bonuses',
				description: 'Points from the four gold scoring tiles',
			},
			{
				icon: pu.getAbsoluteImagePath('alien'),
				name: 'Alien Species',
				description:
					'Some alien species give you points at the end of the game',
			},
		],
	};
}
