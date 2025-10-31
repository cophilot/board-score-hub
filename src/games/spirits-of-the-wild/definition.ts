import { GameDef } from '../../core/types/GameDef';
import { WinMode } from '../../core/types/WinMode';
import PathUtils from '../../core/utils/PathUtils';

export default function getDefinition(): GameDef {
	const gameTitle = 'Spirits of the Wild';
	const pu = new PathUtils(gameTitle);

	return {
		title: gameTitle,
		url: 'https://boardgamegeek.com/boardgame/256606/spirits-of-the-wild',
		rulesUrl:
			'https://s3.amazonaws.com/geekdo-files.com/bgg222578?response-content-disposition=inline%3B%20filename%3D%22SpiritsOfTheWild-Rules-DOM-03-Digital.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20241019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241019T181306Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=93a304c53762c1f6cd4d9eedfbccf51a7cd9487d4b5d0697fedd401a37473efc',
		bgColor: '#0b0738',
		fontColor: '#fff',
		primaryColor: '#00d1f7',
		secondaryColor: '#fff',
		playerSizes: [2],
		winMode: WinMode.MOST,
		rows: [
			{
				name: 'Owl',
				icon: pu.getAbsoluteImagePath('owl'),
			},
			{
				name: 'Rabbit',
				icon: pu.getAbsoluteImagePath('rabbit'),
			},
			{
				name: 'Beaver',
				icon: pu.getAbsoluteImagePath('beaver'),
			},
			{
				name: 'Salmon',
				icon: pu.getAbsoluteImagePath('salmon'),
			},
			{
				name: 'Turtle',
				icon: pu.getAbsoluteImagePath('turtle'),
			},
		],
	};
}
