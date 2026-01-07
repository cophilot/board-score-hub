import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the CapybaraCrush game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-12-30
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Capybara Crush';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/436146/capybara-crush',
		rulesUrl: 'https://boardgamegeek.com/filepage/301166/capybara-crush-rules',
		banner:
			'https://wwf.ca/wp-content/uploads/2025/11/Original_WW1429365-scaled.jpg',
		bgColor: '#ccd1a7',
		fontColor: '#231f20',
		primaryColor: '#e88316',
		// primaryColor: '#bbdce9',
		secondaryColor: '#ffea7d',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Goat Chain',
				icon: pu.getAbsoluteImagePath('goat'),
			},
			{
				name: 'Monkey Chain',
				icon: pu.getAbsoluteImagePath('monkey'),
			},
			{
				name: 'Turtle Chain',
				icon: pu.getAbsoluteImagePath('turtle'),
			},
			{
				name: 'Chicken Chain',
				icon: pu.getAbsoluteImagePath('chicken'),
			},
			{
				name: 'Yuzu Chain',
				icon: pu.getAbsoluteImagePath('yuzu'),
			},
			{
				name: 'Pink Garden Chain',
				icon: pu.getAbsoluteImagePath('pink-garden'),
			},
			{
				name: 'Green Springs Chain',
				icon: pu.getAbsoluteImagePath('forest'),
			},
			{
				name: 'Yellow Beach Chain',
				icon: pu.getAbsoluteImagePath('beach'),
			},
			{
				name: 'Favorite Critter',
				icon: pu.getAbsoluteImagePath('heart'),
			},
			{
				name: 'Unused Stars',
				icon: pu.getAbsoluteImagePath('star'),
			},
		],
	};
}
