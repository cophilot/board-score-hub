import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';
import eggIcon from './assets/eggs.png';
import resourceIcon from './assets/resources.png';
import roundGoalIcon from './assets/round-goals.png';
import bonusIcon from './assets/bonus.png';
import tuckedCardIcon from './assets/tucked-card.png';
import birdIcon from './assets/bird.png';
import nectarIcon from './assets/nectar.png';

export default function getDefinition() {
	return {
		title: 'Wingspan',
		bgColor: '#f4f5f0',
		fontColor: '#73645b',
		primaryColor: '#9fcccf',
		secondaryColor: '#73645b', //73645b
		playerSizes: [1, 2, 3, 4, 5],
		fontFamily: FontUtils.PLAYFUL,
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Birds',
				description: 'Birds in the players collection',
				icon: birdIcon,
			},
			{
				name: 'Bonus cards',
				description: 'Bonus cards in the players collection',
				icon: bonusIcon,
			},
			{
				name: 'End-of-round goals',

				icon: roundGoalIcon,
			},
			{
				name: 'Eggs on cards',
				description: '1 point per egg on cards',
				icon: eggIcon,
			},
			{
				name: 'Food on cards',
				description: '1 point per food token on cards',
				icon: resourceIcon,
			},
			{
				name: 'Tucked cards',
				description: '1 point per card tucked under another card',
				icon: tuckedCardIcon,
			},
		],
		extensions: {
			Oceania: {
				rows: [
					{
						name: 'Nectar',
						description:
							'5 points for the player with the most nectar and 2 points for the player with the second most nectar per region',
						icon: nectarIcon,
					},
				],
			},
		},
	};
}