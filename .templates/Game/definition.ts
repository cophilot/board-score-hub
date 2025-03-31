import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';

/**
 * This is the definition for the $$name.p$$ game.
 * @author $$git-name$$
 * @version 1.0.0
 * @created $$year$$-$$month$$-$$day$$
 */
export default function getDefinition(): GameDef {
	return {
		title: '$$name.p$$',
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
				icon: 'src/games/$$name.k$$/assets/test.png',
			},
		],
	};
}
