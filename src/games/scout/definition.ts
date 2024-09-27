import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';

export default function getDefinition() {
	return {
		title: 'Scout',
		bgColor: '#FBD800',
		fontColor: '#4B0082',
		primaryColor: '#F08600',
		secondaryColor: '#3E0099',
		fontFamily: FontUtils.CLASSIC,
		playerSizes: [2, 3, 4, 5],
		winMode: WinMode.MOST,
		roundMapper: {
			2: 2,
			3: 3,
			4: 4,
			5: 5,
		},
		rows: [
			{
				name: 'Round 1',
			},
			{
				name: 'Round 2',
			},
			{
				name: 'Round 3',
			},
			{
				name: 'Round 4',
			},
			{
				name: 'Round 5',
			},
		],
	};
}
