import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Pixies';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/411875/pixies',
		rulesUrl: 'https://studiobombyx.com/assets/PIXIES_rulebook_EN.pdf',
		banner:
			'https://studiobombyx.com/assets/Imageprincipale_PIXIES-1-1024x576.jpg',
		bgColor: '#93c23b',
		fontColor: '#fff',
		primaryColor: '#243f16',
		secondaryColor: '#c7e09e',
		playerSizes: [2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				id: 'round-1',
				name: 'Validated Cards',
				icon: pu.getAbsoluteImagePath('validated-cards'),
				description:
					'Each validated card earns as many points as the number on it',
			},
			{
				id: 'flower-power',
				name: 'Facedown Card',
				icon: pu.getAbsoluteImagePath('facedown-cards'),
				description: 'Each facedown card without a card on top earns 5 points',
			},
			{
				name: 'Spiral',
				icon: pu.getAbsoluteImagePath('spiral'),
				description: 'Each spiral earns 1 point',
			},
			{
				name: 'Cross',
				icon: pu.getAbsoluteImagePath('cross'),
				description: 'Each cross makes the player lose 1 point',
				negative: true,
			},
			{
				id: 'round-end-1',
				name: 'Color Zone',
				icon: pu.getAbsoluteImagePath('color-zone'),
				description:
					'A color zone is made up of at least 2 cards of the same color touching along a side. Diagonals do not count. Each card that is part of the player´s largest zone earns: 2 points in round 1, 3 points in round 2 and 4 points in round 3',
			},
		],
		extensions: {
			'Flower Power': {
				rows: [],
			},
		},
	};
}
