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

export function getAllGames() {
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
