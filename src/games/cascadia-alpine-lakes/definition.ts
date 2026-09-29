import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

/**
 * This is the definition for the Cascadia Alpine Lakes game.
 * @author cophilot
 * @version 1.0.0
 * @created 2026-9-25
 */
export default function getDefinition(): GameDef {
	const gameTitle = 'Cascadia Alpine Lakes';
	const pu = new PathUtils(gameTitle);
	const primaryColor = '#4bb6dd';
	const secondaryColor = '#795736';
	const fontColor = '#303238';

	const bonusIconText = {
		text: 'Bonus',
		color: primaryColor,
		outlineColor: fontColor,
	};

	const bonusDefinitionFn = (playerSize: number) => {
		if (playerSize == 1) {
			return '2 point bonus with either 2+ Wildlife Tokens at level 3 or 1+ Wildlife Token at level 4.';
		}
		if (playerSize == 2) {
			return '2 point bonus to the player with the HIGHEST wildlife. If tied, 1 bonus point each. No bonus points for second highest.';
		}
		return '3 point bonus to the player with the HIGHEST wildlife. 1 point bonus to the player with the second highest (any ties for second highest result in 0 points each). If two players tie for the highest, 2 points each, no points for next highest. If three or four players tie for highest, 1 point each, no points for next highest. Any ties for second highest, 0 points each.';
	};

	return {
		banner:
			'https://images.unsplash.com/photo-1650493359585-f394207e8460?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxwaW5lJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D',
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/446815/cascadia-alpine-lakes',
		rulesUrl:
			'https://www.kosmos.de/cdn/shop/files/4002051687588_Cascadia_Bergseen_Manual_DE_web.pdf?v=14106945401348993063',
		bgColor: '#f6f3ea',
		fontColor: fontColor,
		primaryColor: primaryColor,
		secondaryColor: secondaryColor,
		//fontFamily: FontUtils.getHandwritingFont(),
		//stripeColor: '#000',
		playerSizes: [1, 2, 3, 4],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Forest',
				description: 'Points from the forest scoring card.',
				icon: pu.getAbsoluteImagePath('forest'),
			},
			{
				name: 'Meadow',
				description: 'Points from the meadow scoring card.',
				icon: pu.getAbsoluteImagePath('meadow'),
			},
			{
				name: 'Glacier',
				description: 'Points from the glacier scoring card.',
				icon: pu.getAbsoluteImagePath('glacier'),
			},
			{
				name: 'Lakes',
				description: 'Points for each placed lake tile.',
				icon: pu.getAbsoluteImagePath('lake'),
			},
			{
				name: 'Cougar',
				description:
					'For each cougar tile on level 3 or higher, score 2 points each.',
				icon: pu.getAbsoluteImagePath('cougar'),
			},
			{
				name: 'Cougar Bonus',
				descriptionFn: bonusDefinitionFn,
				icon: pu.getAbsoluteImagePath('cougar'),
				iconText: bonusIconText,
			},
			{
				name: 'Eagle',
				description:
					'For each eagle tile on level 3 or higher, score 2 points each.',
				icon: pu.getAbsoluteImagePath('eagle'),
			},
			{
				name: 'Eagle Bonus',
				descriptionFn: bonusDefinitionFn,
				icon: pu.getAbsoluteImagePath('eagle'),
				iconText: bonusIconText,
			},
			{
				name: 'Marmot',
				description:
					'For each marmot tile on level 3 or higher, score 2 points each.',
				icon: pu.getAbsoluteImagePath('marmot'),
			},
			{
				name: 'Marmot Bonus',
				descriptionFn: bonusDefinitionFn,
				icon: pu.getAbsoluteImagePath('marmot'),
				iconText: bonusIconText,
			},
			{
				name: 'Goat',
				description:
					'For each goat tile on level 3 or higher, score 2 points each.',
				icon: pu.getAbsoluteImagePath('goat'),
			},
			{
				name: 'Goat Bonus',
				descriptionFn: bonusDefinitionFn,
				icon: pu.getAbsoluteImagePath('goat'),
				iconText: bonusIconText,
			},
			{
				name: 'Pika',
				description:
					'For each pika tile on level 3 or higher, score 2 points each.',
				icon: pu.getAbsoluteImagePath('pika'),
			},
			{
				name: 'Pika Bonus',
				descriptionFn: bonusDefinitionFn,
				icon: pu.getAbsoluteImagePath('pika'),
				iconText: bonusIconText,
			},
			{
				name: 'Cone Tokens',
				description: 'For each leftover cone token, score 1 point each.',
				icon: pu.getAbsoluteImagePath('cone'),
			},
		],
		extensions: {
			'Advanced Mode': {
				rows: [
					{
						id: 'advanced-mode',
						name: 'Wildlife Environment Scoring Card',
						description: 'Points from the wildlife environment scoring card.',
						icon: pu.getAbsoluteImagePath('env-wildlife'),
					},
					{
						name: 'Habitat Environment Scoring Card',
						description: 'Points from the habitat environment scoring card.',
						icon: pu.getAbsoluteImagePath('env-habitat'),
					},
					{
						name: 'Spatial Environment Scoring Card',
						description: 'Points from the spatial environment scoring card.',
						icon: pu.getAbsoluteImagePath('env-spatial'),
					},
				],
			},
		},
	};
}
