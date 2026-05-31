import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Targi game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-5-31
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Targi';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/118048/targi',
		rulesUrl:
			'https://brettspiele-report.de/images/t/targi/Spielanleitung-Targi.pdf',
		banner:
			'https://images.aeonmedia.co/images/15f3f596-92e9-4eab-9e87-b6c1461152bb/NationalGeographic_755513.jpg',
		bgColor: '#fce9c9',
		fontColor: '#323339',
		primaryColor: '#9e2821',
		secondaryColor: '#3f5c72',
		fontFamily: FontUtils.getAncientFont(),
		playerSizes: [2],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Victory Point Tokens',
				description: 'Collected Victory Point Tokens during the game.',
				icon: pu.getAbsoluteImagePath('vp-token'),
			},
			{
				name: 'Victory Point on Cards',
				description: 'Victory Points on Cards collected during the game.',
				icon: pu.getAbsoluteImagePath('vp-cards'),
			},
			{
				name: 'Additional Victory Point on Cards',
				description:
					'Additional Victory Points on Cards collected during the game.',
				icon: pu.getAbsoluteImagePath('card-text'),
			},
			{
				name: 'Similar Row',
				description: '4 VP for each row of 4 Cards with the same symbol.',
				icon: pu.getAbsoluteImagePath('sim-row'),
			},
			{
				name: 'Different Row',
				description: '2 VP for each row of 4 Cards with different symbols.',
				icon: pu.getAbsoluteImagePath('diff-row'),
			},
		],
	};
}
