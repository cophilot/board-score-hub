import Calico from './games/calico/main';
import DorfromantikDuel from './games/dorfromatik-duel/main';
import Everdell from './games/everdell/main';
import Harmonies from './games/harmonies/main';
import LetsGoToJapan from './games/lets-go-to-japan/main';
import Scout from './games/scout/main';
import SevenWondersDuel from './games/seven-wonders-duel/main';
import TerraformingMars from './games/terraforming-mars/main';
import Wizard from './games/wizard/main';
import Wingspan from './games/wingspan/main';
import ForestShuffle from './games/forest-shuffle/main';
import WorldWonders from './games/world-wonders/main';
import SeaSaltPaper from './games/sea-salt-paper/main';
import SpiritsOfTheWild from './games/spirits-of-the-wild/main';
import Faraway from './games/faraway/main';
import SavannahPark from './games/savannah-park/main';
import TheWhiteCastle from './games/the-white-castle/main';
import Pixies from './games/pixies/main';
import EverdellDuo from './games/everdell-duo/main';
import { GameWithView } from './api/types/GameWithView';
import Cascadia from './games/cascadia/main';

export function getAllGames(): GameWithView[] {
	return [
		Everdell,
		Calico,
		DorfromantikDuel,
		Harmonies,
		LetsGoToJapan,
		Scout,
		SevenWondersDuel,
		TerraformingMars,
		Wizard,
		Wingspan,
		WorldWonders,
		ForestShuffle,
		SeaSaltPaper,
		SpiritsOfTheWild,
		Faraway,
		SavannahPark,
		TheWhiteCastle,
		Pixies,
		EverdellDuo,
		Cascadia,
	];
}

export function getSortedGames() {
	const games = getAllGames();
	games.sort((a, b) => a.definition.title.localeCompare(b.definition.title));
	return games;
}

export function getSortedGameNames(): string[] {
	const games = getSortedGames();
	return games.map((game) => game.definition.title);
}

export function getGameByName(name: string): GameWithView | undefined {
	return getAllGames().find((game) => game.definition.title === name);
}
