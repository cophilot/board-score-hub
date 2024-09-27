import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';
import awardsIcon from './assets/awards.png';
import milestonesIcon from './assets/milestones.png';
import treeIcon from './assets/tree.png';
import cityIcon from './assets/city.png';
import terraformingRatingIcon from './assets/terraforming-rating.png';
import victoryPointsIcon from './assets/victory-points.png';

export default function getDefinition() {
	return {
		title: 'Terraforming Mars',
		bgColor: '#a36743',
		//fontColor: '#000',
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
