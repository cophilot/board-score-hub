import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Sanctuary game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-10-27
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Sanctuary';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		altTitles: ['Artengarten'],
		banner:
			'https://media.istockphoto.com/id/453469507/photo/giraffe-family.jpg?s=612x612&w=0&k=20&c=MJ-Ztd-hqc-M4eyxlJcW2tK5JD054c4dG7G5BqkjVAA=',
		url: 'https://boardgamegeek.com/boardgame/441696/sanctuary',
		rulesUrl:
			'https://www.feuerland-spiele.de/fileadmin/game/Artengarten/Artengarten_Rules_DE_V1_Web.pdf',
		bgColor: '#cfe8cd',
		fontColor: '#020702',
		primaryColor: '#009771',
		secondaryColor: '#feed00',
		playerSizes: [1, 2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Animal Tiles',
				description: 'Points from your animal tiles in your zoo.',
				icon: pu.getAbsoluteImagePath('animal'),
			},
			{
				name: 'Building Tiles',
				description: 'Points from your building tiles in your zoo.',
				icon: pu.getAbsoluteImagePath('building'),
			},
			{
				name: 'Project Tiles',
				description: 'Points from your project tiles in your zoo.',
				icon: pu.getAbsoluteImagePath('project'),
			},
			{
				name: 'Open Area Tiles',
				description: 'One point for each of your open area tiles in your zoo.',
				icon: pu.getAbsoluteImagePath('open-area'),
			},
			{
				name: 'Conservation Achievement markers',
				description:
					'Points on your Conservation Achievement markers on the Conservation board.',
				icon: pu.getAbsoluteImagePath('conservation-marker'),
			},
			{
				name: 'Remaining Pouch and Conservation markers',
				description:
					'2 points for each Pouch marker and each remaining Conservation marker in your possession.',
				icon: pu.getAbsoluteImagePath('restover'),
			},
			{
				name: 'End-of-game Marker First',
				description: '10 points on your End-of-game marker, if you have one.',
				icon: pu.getAbsoluteImagePath('end-of-game-marker-first'),
				checkValue: 10,
			},
			{
				name: 'End-of-game Marker Second',
				description: '5 points on your End-of-game marker, if you have one.',
				icon: pu.getAbsoluteImagePath('end-of-game-marker-second'),
				checkValue: 5,
			},
		],
	};
}
