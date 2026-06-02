import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Explorers game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-6-1
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Explorers';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/330174/explorers',
		rulesUrl:
			'https://www.brettspielwelt.de/Hilfe/Anleitungen/Explorers/?nation=nl',
		bgColor: '#e9bd80',
		fontColor: '#014b88',
		primaryColor: '#b0e4f3',
		secondaryColor: '#7cc96e',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Provisions',
				icon: pu.getAbsoluteImagePath('provisions'),
			},
			{
				name: 'Village',
				icon: pu.getAbsoluteImagePath('village'),
			},
			{
				name: 'Gemstones',
				icon: pu.getAbsoluteImagePath('gemstone'),
			},
			{
				name: 'Temple',
				icon: pu.getAbsoluteImagePath('temple'),
			},
			{
				name: 'Achievement',
				icon: pu.getAbsoluteImagePath('achievement'),
			},
		],
	};
}
