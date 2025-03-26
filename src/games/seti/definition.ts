import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';

export default function getDefinition(): GameDef {
	return {
		title: 'SETI',
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
				name: 'Current Track',
				description: 'Points got during the game',
			},
			{
				name: 'End-of-Game Scoring Cards',
				description: 'Points from end-of-game scoring cards that you played',
			},
			{
				name: 'Gold Scoring Tile Bonuses',
				description: 'Points from the four gold scoring tiles',
			},
			{
				name: 'Alien Species',
				description:
					'Some alien species give you points at the end of the game',
			},
		],
	};
}
