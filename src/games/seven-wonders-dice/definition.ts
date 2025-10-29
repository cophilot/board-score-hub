import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the SevenWondersDice game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-10-28
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Seven Wonders Dice';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/446231/7-wonders-dice',
		rulesUrl:
			'https://cdn.svc.asmodee.net/production-rprod/storage/games/7-wonders-dice/rulebooks/7dice-en01-rules-mkt-1757940319zGYvH.pdf',
		bgColor: '#faf5f3',
		fontColor: '#3f1f47',
		primaryColor: '#ffb844',
		secondaryColor: '#2eabe0',
		fontFamily: FontUtils.getAncientFont(),
		playerSizes: [2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Wonder',
				icon: pu.getAbsoluteImagePath('wonder'),
				bgColor: '#efe9e0',
			},
			{
				name: 'Barracks Left',
				icon: pu.getAbsoluteImagePath('red-left'),
				bgColor: '#da313d',
			},
			{
				name: 'Barracks Right',
				icon: pu.getAbsoluteImagePath('red-right'),
				bgColor: '#da313d',
			},
			{
				name: 'Agora',
				icon: pu.getAbsoluteImagePath('blue'),
				bgColor: '#2094c6',
			},
			{
				name: 'Market',
				icon: pu.getAbsoluteImagePath('yellow'),
				bgColor: '#f9c521',
			},
			{
				name: 'University',
				icon: pu.getAbsoluteImagePath('green'),
				bgColor: '#5eb34d',
			},
			{
				name: 'Guild Court',
				icon: pu.getAbsoluteImagePath('purple'),
				bgColor: '#84669d',
			},
			{
				name: 'Gallery of Leaders',
				icon: pu.getAbsoluteImagePath('white'),
				bgColor: '#ffffff',
			},
		],
	};
}
