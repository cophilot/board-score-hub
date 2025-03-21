import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import captain from './assets/captain.png';
import colorBonus from './assets/color-bonus.png';
import duoCards from './assets/duo-cards.png';
import lighthouse from './assets/lighthouse.png';
import mermaid from './assets/mermaid.png';
import octopus from './assets/octopus.png';
import pinguinColony from './assets/pinguin-colony.png';
import pinguin from './assets/pinguin.png';
import sailor from './assets/sailor.png';
import schoolFish from './assets/school-of-fish.png';
import shell from './assets/shell.png';

export default function getDefinition(): GameDef {
	return {
		title: 'Sea Salt & Paper',
		url: 'https://boardgamegeek.com/boardgame/367220/sea-salt-and-paper',
		rulesUrl:
			'https://cdn.1j1ju.com/medias/a5/4b/bb-sea-salt-paper-rulebook.pdf',
		banner:
			'https://studiobombyx.com/assets/Imageprincipale_seasaltandpaper-1-1024x576.jpg',
		bgColor: '#124876',
		fontColor: '#fff',
		primaryColor: '#fff',
		secondaryColor: '#71c4d0',
		playerSizes: [2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				id: 'round-1',
				name: 'Duo Cards',
				icon: duoCards,
				description: '1 Point / Duo',
			},
			{
				name: 'Shell',
				icon: shell,
			},
			{
				name: 'Octopus',
				icon: octopus,
			},
			{
				name: 'Pinguin',
				icon: pinguin,
			},
			{
				name: 'Sailor',
				icon: sailor,
			},
			{
				name: 'Lighthouse',
				icon: lighthouse,
				description: '1 Point / Boat',
			},
			{
				name: 'School of Fish',
				icon: schoolFish,
				description: '1 Point / Fish',
			},
			{
				name: 'Pinguin Colony',
				icon: pinguinColony,
				description: '2 Points / Pinguin',
			},
			{
				name: 'Captain',
				icon: captain,
				description: '3 Points / Sailor',
			},
			{
				name: 'Mermaid',
				icon: mermaid,
			},
			{
				name: 'Color Bonus',
				icon: colorBonus,
				description: 'The highest number of cards of the same color.',
			},
		],
	};
}
