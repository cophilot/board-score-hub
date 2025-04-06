import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import { GameDef } from '../../core/types/GameDef';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Seven Wonders: Duel';
	const pu = new PathUtils(gameTitle, 'seven-wonders-duel');

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/173346/7-wonders-duel',
		rulesUrl: 'https://cdn.1j1ju.com/medias/1a/ba/6b-7-wonders-duel-rules.pdf',
		banner:
			'https://cdn.svc.asmodee.net/production-rprod/storage/games/7-wonders-duel/8fond-duel-159782474684uLe.png',
		bgColor: '#fbdbb3',
		primaryColor: '#c59551',
		secondaryColor: '#2a7c6d',
		playerSizes: [2],
		winMode: WinMode.MOST,
		fontFamily: FontUtils.ANCIENT,
		rows: [
			{
				name: 'Blue cards',
				icon: pu.getAbsoluteImagePath('blue-card'),
				bgColor: '#c7f0fc',
			},
			{
				name: 'Green cards',
				icon: pu.getAbsoluteImagePath('green-card'),
				bgColor: '#d8edd6',
			},
			{
				name: 'Yellow cards',
				icon: pu.getAbsoluteImagePath('yellow-card'),
				bgColor: '#fffad9',
			},
			{
				name: 'Purple cards',
				icon: pu.getAbsoluteImagePath('purple-card'),
				bgColor: '#d2cce0',
			},
			{
				name: 'World wonders',
				icon: pu.getAbsoluteImagePath('world-wonder'),
				bgColor: '#ececed',
			},
			{
				name: 'Progress tokens',
				icon: pu.getAbsoluteImagePath('green-chip'),
				bgColor: '#d8edd6',
			},
			{
				name: 'Coins',
				icon: pu.getAbsoluteImagePath('coins'),
				bgColor: '#fffad9',
			},
			{
				name: 'Military',
				icon: pu.getAbsoluteImagePath('military'),
				bgColor: '#fad2c5',
			},
		],
	};
}
