import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the EverdellSilverfrost game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-9-22
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Everdell Silverfrost';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/436821/everdell-silverfrost',
		rulesUrl:
			'https://cdn.shopify.com/s/files/1/0559/8245/6947/files/Silverfrost_CE_1E__Rulebook_V04_20250113_TC_WEB.pdf?v=1737466115',
		bgColor: '#bee8f8',
		fontColor: '#1d3c63',
		banner:
			'https://s3.amazonaws.com/pmgr/projects/4585/project-hero.png?1738262557',
		secondaryColor: '#6c2404',
		primaryColor: '#fcfeff',
		fontFamily: FontUtils.getHandwritingFont(),
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Base points',
				description: 'Base point value of cards in your city',
				icon: pu.getAbsoluteImagePath('cards'),
			},
			{
				name: 'Prosperity points',
				description: 'Bonus purple Prosperity point values',
				icon: pu.getAbsoluteImagePath('prosperity'),
			},
			{
				name: 'Quests',
				description: 'Quests that you achieved',
				icon: pu.getAbsoluteImagePath('quest'),
			},
			{
				name: 'Snow points',
				description:
					'Snow points depending on which reward rules you are using',
				icon: pu.getAbsoluteImagePath('snow'),
			},
			{
				name: 'Point tokens',
				description: 'Each point token you earned',
				icon: pu.getAbsoluteImagePath('point-token'),
			},
			{
				name: 'Journey',
				description: 'Points for any workers you placed on Journey',
				icon: pu.getAbsoluteImagePath('journey'),
			},
		],
	};
}
