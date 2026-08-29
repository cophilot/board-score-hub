import { GameDef } from '../../core/types/GameDef';
import { RowDef } from '../../core/types/RowDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

export enum ForestShuffleDartmoorKind {
	DEFAULT = 'default',
	BY_ICON = 'by_icon',
}

/**
 * This is the definition for the Forest Shuffle Dartmoor game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-8-5
 */
export function getDefinition(): GameDef {
	return getDefinitionByKind(ForestShuffleDartmoorKind.DEFAULT);
}

export function getDefinitionByKind(kind: ForestShuffleDartmoorKind): GameDef {
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
		rows: getRows(kind, pu),
	};
}

function getRows(kind: ForestShuffleDartmoorKind, pu: PathUtils): RowDef[] {
	switch (kind) {
		case ForestShuffleDartmoorKind.BY_ICON:
			return getByIconRows(pu);
		case ForestShuffleDartmoorKind.DEFAULT:
		default:
			return getDefaultRows(pu);
	}
}

function getByIconRows(pu: PathUtils): RowDef[] {
	return [
		{
			name: 'Trees and Shrubs',
			icon: pu.getAbsoluteImagePath('tree_and_shrub'),
		},
		{
			name: 'Moors',
			icon: pu.getAbsoluteImagePath('moor_icon'),
		},
		{
			name: 'Amphibians',
			icon: pu.getAbsoluteImagePath('amphibian'),
		},
		{
			name: 'Bats',
			icon: pu.getAbsoluteImagePath('bat'),
		},
		{
			name: 'Insects',
			icon: pu.getAbsoluteImagePath('insect'),
		},
		{
			name: 'Dragonflies',
			icon: pu.getAbsoluteImagePath('dragonfly'),
		},
		{
			name: 'Mice',
			icon: pu.getAbsoluteImagePath('mouse'),
		},
		{
			name: 'Cloven-hoofed animals',
			icon: pu.getAbsoluteImagePath('hoof'),
		},
		{
			name: 'Plants',
			icon: pu.getAbsoluteImagePath('plant'),
		},
		{
			name: 'Pawed Animals',
			icon: pu.getAbsoluteImagePath('paw'),
		},
		{
			name: 'Birds',
			icon: pu.getAbsoluteImagePath('bird'),
		},

		{
			name: 'Cave',
			description: '1 point for each card in the cave',
			icon: pu.getAbsoluteImagePath('cave'),
		},
	];
}
function getDefaultRows(pu: PathUtils): RowDef[] {
	return [
		{
			name: 'Trees and Shrubs',
			icon: pu.getAbsoluteImagePath('tree'),
		},
		{
			name: 'Moor',
			icon: pu.getAbsoluteImagePath('moor'),
		},
		{
			name: 'Left and Right',
			icon: pu.getAbsoluteImagePath('left_right'),
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
	];
}
