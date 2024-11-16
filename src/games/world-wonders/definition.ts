import { GameDef } from '../../api/types/GameDef';
import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';
import blockedBuilding from './assets/blocked-building.png';
import loan from './assets/loan.png';
import resources from './assets/resources.png';
import stone from './assets/stone.png';
import vp from './assets/vp.png';
import wonders from './assets/wonders.png';

export default function getDefinition(): GameDef {
	return {
		title: 'World Wonders',
		url: "https://boardgamegeek.com/boardgame/365258/world-wonders",
		rulesUrl: "https://s3.amazonaws.com/geekdo-files.com/bgg361700?response-content-disposition=inline%3B%20filename%3D%22ENGLISH_rule_book_AW_rev_1_web.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20240928%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240928T151225Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=c8175e8505349a67032142a17c16a2281a9a9400428fcdbdaa77196b36182b88",
		bgColor: '#e8e0dd',
		fontColor: '#6c5f56',
		primaryColor: '#b39d90',
		secondaryColor: '#ffec33',
		fontFamily: FontUtils.ANCIENT,
		stripeColor: '#cfbeb0',
		playerSizes: [1, 2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Population',
				icon: vp,
			},
			{
				name: 'Least Produced Resource',
				icon: resources,
			},
			{
				name: 'Monuments',
				icon: wonders,
			},
			{
				name: 'Natural Resources',
				icon: stone,
			},
			{
				name: 'City Districts',
				icon: blockedBuilding,
			},
			{
				name: 'Loans',
				icon: loan,
				negative: true,
				description: 'Players lose 2 VP if they have an unpaid loan',
			},
		],
	};
}