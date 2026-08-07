import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Forest Shuffle Dartmoor game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-8-5
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Forest Shuffle Dartmoor';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/438402/forest-shuffle-dartmoor',
		rulesUrl:
			'https://www.lookout-spiele.de/upload/en_dartmoor.html_ForestShuffeDartmoor_0156_Rules_EN_WEB_250922.pdf',
		bgColor: '#f2e0e0',
		banner:
			'https://www.bed-breakfast.de/assets/Uploads/Kopfleiste/Dartmoor/Dartmoor_Sourton_Ado_199716728_annacurnow_1920px.jpg',
		fontColor: 'black',
		primaryColor: '#802a6f',
		secondaryColor: '#2f8fc3',
		fontFamily: FontUtils.getPlayfulFont(),
		playerSizes: [2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Trees and Shrubs',
				icon: pu.getAbsoluteImagePath('tree'),
			},
			{
				name: 'Moor',
				icon: pu.getAbsoluteImagePath('moor'),
			},
			{
				name: 'Left',
				icon: pu.getAbsoluteImagePath('left'),
			},
			{
				name: 'Right',
				icon: pu.getAbsoluteImagePath('right'),
			},
			{
				name: 'Top',
				icon: pu.getAbsoluteImagePath('top'),
			},
			{
				name: 'Down',
				icon: pu.getAbsoluteImagePath('down'),
			},
			{
				name: 'Cave',
				description: '1 point for each card in the cave',
				icon: pu.getAbsoluteImagePath('cave'),
			},
		],
	};
}
