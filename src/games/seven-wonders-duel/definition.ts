import blueCard from './assets/blue-card.png';
import greenCard from './assets/green-card.png';
import yellowCard from './assets/yellow-card.png';
import purpleCard from './assets/purple-card.png';
import worldWonder from './assets/world-wonder.png';
import greenChip from './assets/green-chip.png';
import coins from './assets/coins.png';
import military from './assets/military.png';
import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';
import { GameDef } from '../../api/types/GameDef';

export default function getDefinition(): GameDef {
	return {
		title: 'Seven Wonders: Duel',
		url: 'https://boardgamegeek.com/boardgame/173346/7-wonders-duel',
		rulesUrl: 'https://cdn.1j1ju.com/medias/1a/ba/6b-7-wonders-duel-rules.pdf',
		bgColor: '#fbdbb3',
		primaryColor: '#c59551',
		secondaryColor: '#2a7c6d',
		playerSizes: [2],
		winMode: WinMode.MOST,
		fontFamily: FontUtils.ANCIENT,
		rows: [
			{
				name: 'Blue cards',
				icon: blueCard,
				bgColor: '#c7f0fc',
			},
			{
				name: 'Green cards',
				icon: greenCard,
				bgColor: '#d8edd6',
			},
			{
				name: 'Yellow cards',
				icon: yellowCard,
				bgColor: '#fffad9',
			},
			{
				name: 'Purple cards',
				icon: purpleCard,
				bgColor: '#d2cce0',
			},
			{
				name: 'World wonders',
				icon: worldWonder,
				bgColor: '#ececed',
			},
			{
				name: 'Progress tokens',
				icon: greenChip,
				bgColor: '#d8edd6',
			},
			{
				name: 'Coins',
				icon: coins,
				bgColor: '#fffad9',
			},
			{
				name: 'Military',
				icon: military,
				bgColor: '#fad2c5',
			},
		],
	};
}
