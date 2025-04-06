import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the $$name.p$$ game.
 * @author $$git-name$$
 * @version 1.0.0
 * @created $$year$$-$$month$$-$$day$$
 */
export default function getDefinition(): GameDef {
	const gameTitle = '$$name.p$$';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: '$$url$$',
		rulesUrl: '$$rulesUrl$$',
		bgColor: '$$backgroundColor$$',
		fontColor: '$$fontColor$$',
		primaryColor: '$$primaryColor$$',
		secondaryColor: '$$secondaryColor$$',
		//fontFamily: FontUtils.PLAYFUL,
		//stripeColor: '#000',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Row1',
			},

			{
				name: 'Row2',
				icon: pu.getAbsoluteImagePath('row2'),
			},
		],
	};
}
