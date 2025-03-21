import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import FontUtils from '../../core/utils/FontUtils';
import planet from './assets/planet.png';
import tracker from './assets/tracker.png';
import civCard from './assets/civ-card.png';
import lifepod from './assets/lifepod.png';
import meteroit from './assets/meteroit.png';
import neighborObjectives from './assets/neighbor-objectives.png';
import privateObjectives from './assets/private-objectives.png';

export default function getDefinition(): GameDef {
	return {
		title: 'Planet Unknown',
		rulesUrl:
			'https://desktopgames.com.ua/games/8107/Planet_Unknown_Rulebook_eng.pdf?srsltid=AfmBOorg8AS-6pmhoujVRNL4IFY5jlSSPcPBDTtDAmItmsFaypTn98C-',
		url: 'https://boardgamegeek.com/boardgame/258779/planet-unknown',
		bgColor: '#52cedc',
		fontColor: '#2c2e35',
		primaryColor: '#e16d24',
		secondaryColor: '#808e8e',
		fontFamily: FontUtils.FUTURISTIC,
		playerSizes: [1, 2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		banner:
			'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRb2yDxgyDpcqXG_0NVqdUrQX_soW_KZ0DI9uxbnWs4EU7WJo7',
		rows: [
			{
				name: 'Planet',
				description:
					'Score medals for every completed row and column of your planet as long as it does not have a meteorite or empty square.',
				icon: planet,
			},
			{
				name: 'Tracker',
				description:
					'Score the highest value medal that each tracker has surpassed or currently covers on the track it occupies.',
				icon: tracker,
			},
			{
				name: 'Lifepods',
				description: 'Score one point per lifepods that you have collected.',
				icon: lifepod,
			},
			{
				name: 'Meteorites',
				description:
					'Score one point per three meteorites that you have collected.',
				icon: meteroit,
			},
			{
				name: 'CIV Cards',
				description: 'Score medals for your civ cards labeled End Game.',
				icon: civCard,
			},
			{
				name: 'Private Objectives',
				description:
					'Score points based on the private objective card for any of your complete private objectives',
				icon: privateObjectives,
			},
			{
				name: 'Neighbor Objectives',
				description: 'Score points based on the neighbor objective card.',
				icon: neighborObjectives,
			},
		],
		extensions: {
			Supermoon: {
				rows: [
					{
						id: 'supermoon',
						name: 'Moon Objective',
						description: 'Score points based on the moon objective.',
					},
				],
			},
		},
		labels: [
			{
				beforeID: 'supermoon',
				label: 'Supermoon',
			},
		],
	};
}
