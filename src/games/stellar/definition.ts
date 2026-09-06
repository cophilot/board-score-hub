import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Stellar game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-9-3
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Stellar';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/293678/stellar',
		rulesUrl: 'https://gamerules.com/rules/stellar/',
		bgColor: '#1e489a',
		fontColor: '#fff',
		primaryColor: '#0db2ea',
		secondaryColor: '#a58bc0',
		banner:
			'https://wallpapers.com/images/featured/planetary-nebula-k360onb7mc7whz6m.jpg',
		//fontFamily: FontUtils.getHandwritingFont(),
		//stripeColor: '#000',
		playerSizes: [2],
		winMode: WinMode.MOST,
		labels: [
			{
				beforeID: 'planets',
				label: '1. Stars x Multipliers',
			},
			{
				beforeID: 'top',
				label: '2. Section Majorities',
			},
			{
				beforeID: 'diversity',
				label: '3. Diversity Bonus',
			},
		],
		rows: [
			{
				id: 'planets',
				name: 'Planets',
				icon: pu.getAbsoluteImagePath('planet'),
			},
			{
				name: 'Moons',
				icon: pu.getAbsoluteImagePath('moon'),
			},
			{
				name: 'Asteroids',
				icon: pu.getAbsoluteImagePath('asteroid'),
			},
			{
				name: 'Interstellar Clouds',
				icon: pu.getAbsoluteImagePath('cloud'),
			},
			{
				name: 'Black Holes',
				icon: pu.getAbsoluteImagePath('black-hole'),
			},
			{
				id: 'top',
				name: 'Top Majority',
				icon: pu.getAbsoluteImagePath('top'),
				checkValue: 10,
				exclusiveCheck: true,
			},
			{
				name: 'Middle Majority',
				icon: pu.getAbsoluteImagePath('middle'),
				checkValue: 10,
				exclusiveCheck: true,
			},
			{
				name: 'Bottom Majority',
				icon: pu.getAbsoluteImagePath('bottom'),
				checkValue: 10,
				exclusiveCheck: true,
			},
			{
				id: 'diversity',
				name: 'Diversity',
				icon: pu.getAbsoluteImagePath('diversity'),
				checkValue: 10,
			},
		],
	};
}
