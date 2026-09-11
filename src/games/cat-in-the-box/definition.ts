import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';

/**
 * This is the definition for the Cat in the Box game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-9-11
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Cat in the Box';
	// const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/345972/cat-in-the-box-deluxe-edition',
		rulesUrl:
			'https://s3.amazonaws.com/geekdo-files.com/bgg325067?response-content-disposition=inline%3B%20filename%3D%22CATX_English_Online_Rules.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20260911%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260911T110750Z&X-Amz-SignedHeaders=',
		bgColor: '#f2eee4',
		fontColor: '#2f2017',
		primaryColor: '#b7242d',
		secondaryColor: '#006399',
		//stripeColor: '#000',
		banner:
			'https://cf.geekdo-images.com/M1gT_9LjNqUzAx3RAqdGRQ__opengraph/img/sN7GP8v_lleBVtmosei0M9_6eQk=/0x325:1500x1112/fit-in/1200x630/filters:strip_icc()/pic6731829.jpg',
		playerSizes: [2, 3, 4, 5],
		roundMapper: {
			2: 2,
			3: 3,
			4: 4,
			5: 5,
		},
		winMode: WinMode.MOST,
		rows: [
			{
				name: '1',
				description: 'Round 1',
			},
			{
				name: '2',
				description: 'Round 2',
			},
			{
				name: '3',
				description: 'Round 3',
			},
			{
				name: '4',
				description: 'Round 4',
			},
			{
				name: '5',
				description: 'Round 5',
			},
		],
	};
}
