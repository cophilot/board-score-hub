import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import alienImg from './assets/alien.png';
import pointsImg from './assets/points.png';
import endOfGameCardsImg from './assets/end-of-game-cards.png';
import goldScoringTilesImg from './assets/golden-tiles.png';

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
				icon: pointsImg,
				name: 'Current Track',
				description: 'Points earned during the game',
			},
			{
				icon: endOfGameCardsImg,
				name: 'End-of-Game Scoring Cards',
				description: 'Points from end-of-game scoring cards that you played',
			},
			{
				icon: goldScoringTilesImg,
				name: 'Gold Scoring Tile Bonuses',
				description: 'Points from the four gold scoring tiles',
			},
			{
				icon: alienImg,
				name: 'Alien Species',
				description:
					'Some alien species give you points at the end of the game',
			},
		],
	};
}
