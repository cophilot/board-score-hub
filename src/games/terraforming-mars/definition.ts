import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';
import awardsIcon from './assets/awards.png';
import milestonesIcon from './assets/milestones.png';
import treeIcon from './assets/tree.png';
import cityIcon from './assets/city.png';
import terraformingRatingIcon from './assets/terraforming-rating.png';
import victoryPointsIcon from './assets/victory-points.png';
import { GameDef } from '../../api/types/GameDef';

export default function getDefinition(): GameDef {
	return {
		title: 'Terraforming Mars',
		url: 'https://boardgamegeek.com/boardgame/167791/terraforming-mars',
		rulesUrl:
			'https://cdn.1j1ju.com/medias/13/3f/fb-terraforming-mars-rule.pdf',
		banner:
			'https://meeplebr.com/app/uploads/2020/06/Terraforming-Mars-Big-Box-Cabe%C3%A7alho-site.png',
		bgColor: '#a36743',
		primaryColor: '#612720',
		secondaryColor: '#ffe048',
		fontFamily: FontUtils.FUTURISTIC,
		playerSizes: [1, 2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Terraforming Rating',
				icon: terraformingRatingIcon,
			},
			{
				name: 'Milestones',
				icon: milestonesIcon,
			},
			{
				name: 'Awards',
				icon: awardsIcon,
			},
			{
				name: 'Greenery',
				icon: treeIcon,
			},
			{
				name: 'City',
				icon: cityIcon,
			},
			{
				name: 'Victory Points',
				icon: victoryPointsIcon,
			},
		],
	};
}
