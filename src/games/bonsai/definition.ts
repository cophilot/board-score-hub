import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Bonsai game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-6-5
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Bonsai';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		banner:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRS-2APi3S_3hzC3_vlXnCRouFK-_QPmi0A&s',
		url: 'https://boardgamegeek.com/boardgame/366994/bonsai',
		rulesUrl:
			'https://www.dvgiochi.com/giochi/bonsai/download/Bonsai_ENG-Rules_WEB.pdf',
		bgColor: '#fff2e0',
		fontColor: '#2c2e35',
		primaryColor: '#612769',
		secondaryColor: '#fec546',
		//stripeColor: '#000',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Leafs',
				description: '3 Points for each Leaf.',
				icon: pu.getAbsoluteImagePath('leaf'),
			},
			{
				name: 'Flowers',
				description:
					'1 Point for each side of a Flower not touching any other Bonsai tile',
				icon: pu.getAbsoluteImagePath('flower'),
			},
			{
				name: 'Fruits',
				description: '7 Points for each Fruit.',
				icon: pu.getAbsoluteImagePath('fruit'),
			},
			{
				name: 'Parchment Cards',
				description: 'Points earned from Parchment Cards.',
				icon: pu.getAbsoluteImagePath('parchment'),
			},
			{
				name: 'Goal Tiles',
				description: 'Points earned from Goal Tiles.',
				icon: pu.getAbsoluteImagePath('goal-tiles'),
			},
		],
	};
}
