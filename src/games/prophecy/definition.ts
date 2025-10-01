import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Prophecy game.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-10-1
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Prophecy';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		banner:
			'https://cdn.natuerlich.reisen/wp-content/uploads/2022/07/Chichen-Itza.-Maya-Pyramide.jpg',
		url: 'https://boardgamegeek.com/boardgame/373435/prophecy',
		rulesUrl: 'https://boardgame.bg/prophecy%20rules.pdf',
		bgColor: '#f5a65b',
		fontColor: '#2e2619',
		primaryColor: '#e94f3d',
		secondaryColor: '#f6ead1',
		playerSizes: [2, 3, 4, 5, 6],
		winMode: WinMode.MOST,
		rows: [
			{
				id: 'R1',
				name: 'Round 1',
				description: 'Red is trump',
				icon: pu.getAbsoluteImagePath('red'),
			},
			{
				id: 'R2',
				name: 'Round 2',
				description: 'White is trump',
				icon: pu.getAbsoluteImagePath('white'),
			},
			{
				id: 'R3',
				name: 'Round 3',
				description: 'Orange is trump',
				icon: pu.getAbsoluteImagePath('orange'),
				bgColor: '#2c7b63',
			},
			{
				id: 'R4',
				name: 'Round 4',
				description: 'Green is trump',
				icon: pu.getAbsoluteImagePath('green'),
			},
			{
				id: 'R5',
				name: 'Round 5',
				description: 'Green is trump',
				icon: pu.getAbsoluteImagePath('green'),
			},
			{
				id: 'R6',
				name: 'Round 6',
				description: 'Orange is trump',
				icon: pu.getAbsoluteImagePath('orange'),
				bgColor: '#2c7b63',
			},
			{
				id: 'R7',
				name: 'Round 7',
				description: 'White is trump',
				icon: pu.getAbsoluteImagePath('white'),
			},
			{
				id: 'R8',
				name: 'Round 8',
				description: 'Red is trump',
				icon: pu.getAbsoluteImagePath('red'),
			},
		],
		extensions: {
			'Short Variant': {
				rows: [
					{
						id: 'SR1',
						name: 'Round 1',
						description: 'Green is trump',
						icon: pu.getAbsoluteImagePath('green'),
					},
					{
						id: 'SR2',
						name: 'Round 2',
						description: 'Orange is trump',
						icon: pu.getAbsoluteImagePath('orange'),
						bgColor: '#2c7b63',
					},
					{
						id: 'SR3',
						name: 'Round 3',
						description: 'White is trump',
						icon: pu.getAbsoluteImagePath('white'),
					},
					{
						id: 'SR4',
						name: 'Round 4',
						description: 'Red is trump',
						icon: pu.getAbsoluteImagePath('red'),
						bgColor: '#2c7b63',
					},
					{
						id: 'SR5',
						name: 'Round 5',
						description: 'Only Jaguar is trump',
						icon: pu.getAbsoluteImagePath('jaguar'),
					},
				],
				excludeRows: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'],
			},
		},
	};
}
