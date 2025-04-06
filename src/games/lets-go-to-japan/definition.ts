import { WinMode } from '../../core/types/WinMode';
import { GameDef } from '../../core/types/GameDef';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = "Let's Go! To Japan";
	const pu = new PathUtils(gameTitle, 'lets-go-to-japan');

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/368173/lets-go-to-japan',
		rulesUrl:
			'https://www.alderac.com/wp-content/uploads/2023/03/LetsGoToJapan_Influencer_EN_1P_Rulebook_FINAL-copy.pdf',
		banner:
			'https://wallpapercat.com/w/full/0/c/0/1518683-3840x2160-desktop-4k-mount-fuji-japan-wallpaper-photo.jpg',
		bgColor: '#f6f8f9',
		fontColor: '#000',
		primaryColor: '#59c4db',
		secondaryColor: '#eca0bc',
		playerSizes: [1, 2, 3, 4, 5],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Monday',
			},
			{
				name: 'Tuesday',
			},
			{
				name: 'Wednesday',
			},
			{
				name: 'Thursday',
			},
			{
				name: 'Friday',
			},
			{
				name: 'Saturday',
			},
			{
				name: 'Stress / Happiness Trackers',
				icon: pu.getAbsoluteImagePath('mood'),
			},
			{
				name: 'Experience',
				icon: pu.getAbsoluteImagePath('experience'),
			},
			{
				name: 'Trains',
				icon: pu.getAbsoluteImagePath('trains'),
			},
			{
				name: 'Research Tokens',
				icon: pu.getAbsoluteImagePath('research-tokens'),
			},
		],
	};
}
