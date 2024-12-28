import { GameDef } from '../../api/types/GameDef';
import { WinMode } from '../../api/types/WinMode';
import validatedCards from './assets/validated-cards.png';
import spiral from './assets/spiral.png';
import cross from './assets/cross.png';
import colorZone from './assets/color-zone.png';

export default function getDefinition(): GameDef {
	return {
		title: 'Pixies',
		url: 'https://boardgamegeek.com/boardgame/411875/pixies',
		rulesUrl: 'https://studiobombyx.com/assets/PIXIES_rulebook_EN.pdf',
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
				icon: validatedCards,
				description:
					'Each validated card earns as many points as the number on it',
			},
			{
				name: 'Spiral',
				icon: spiral,
				description: 'Each spiral earns 1 point',
			},
			{
				name: 'Cross',
				icon: cross,
				description: 'Each cross makes the player lose 1 point',
				negative: true,
			},
			{
				name: 'Color Zone',
				icon: colorZone,
				description:
					'A color zone is made up of at least 2 cards of the same color touching along a side. Diagonals do not count. Each card that is part of the player´s largest zone earns: 2 points in round 1, 3 points in round 2 and 4 points in round 3',
			},
		],
	};
}
