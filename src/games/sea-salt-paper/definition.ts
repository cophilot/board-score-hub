import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Sea Salt & Paper';
	const pu = new PathUtils(gameTitle, 'sea-salt-paper');

	return {
		title: gameTitle,
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
				icon: pu.getAbsoluteImagePath('duo-cards'),
				description: '1 Point / Duo',
			},
			{
				name: 'Shell',
				icon: pu.getAbsoluteImagePath('shell'),
			},
			{
				name: 'Octopus',
				icon: pu.getAbsoluteImagePath('octopus'),
			},
			{
				name: 'Pinguin',
				icon: pu.getAbsoluteImagePath('pinguin'),
			},
			{
				name: 'Sailor',
				icon: pu.getAbsoluteImagePath('sailor'),
			},
			{
				name: 'Lighthouse',
				icon: pu.getAbsoluteImagePath('lighthouse'),
				description: '1 Point / Boat',
			},
			{
				name: 'School of Fish',
				icon: pu.getAbsoluteImagePath('school-of-fish'),
				description: '1 Point / Fish',
			},
			{
				name: 'Pinguin Colony',
				icon: pu.getAbsoluteImagePath('pinguin-colony'),
				description: '2 Points / Pinguin',
			},
			{
				name: 'Captain',
				icon: pu.getAbsoluteImagePath('captain'),
				description: '3 Points / Sailor',
			},
			{
				name: 'Mermaid',
				icon: pu.getAbsoluteImagePath('mermaid'),
			},
			{
				name: 'Color Bonus',
				icon: pu.getAbsoluteImagePath('color-bonus'),
				description: 'The highest number of cards of the same color.',
			},
		],
	};
}
