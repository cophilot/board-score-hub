import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Emberleaf game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-5-11
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Emberleaf';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/426513/emberleaf',
		rulesUrl:
			'https://thecityofkings.com/wp-content/uploads/2025/05/Emberleaf-rulebook-v1.0-compressed.pdf',
		bgColor: '#f6d9bb',
		fontColor: '#504334',
		primaryColor: '#186373',
		secondaryColor: '#cb4d79',
		banner:
			'https://spacebiff.com/wp-content/uploads/2025/07/1.-headerleaf.jpg',
		//fontFamily: FontUtils.getHandwritingFont(),
		playerSizes: [1, 2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Score Track',
				icon: pu.getAbsoluteImagePath('score-track'),
				description: 'Score points that were earned during the game',
			},

			{
				name: 'Favour Cards',
				icon: pu.getAbsoluteImagePath('favour-card'),
				description: 'Points from fullfilled favour cards',
			},
		],
	};
}
