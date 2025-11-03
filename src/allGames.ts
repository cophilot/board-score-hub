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
import { GameWithView } from './core/types/GameWithView';
import Cascadia from './games/cascadia/main';
import PlanetUnknown from './games/planet-unknown/main';
import Seti from './games/seti/main';
import ThreeChapters from './games/three-chapters/main';
import CastleCombo from './games/castle-combo/main';
import Village from './games/village/main';
import EverdellSilverfrost from './games/everdell-silverfrost/main';
import KnittingCircle from './games/knitting-circle/main';
import Flip7 from './games/flip-7/main';
import Prophecy from './games/prophecy/main';
import EverdellFarshore from './games/everdell-farshore/main';
import Sanctuary from './games/sanctuary/main';
import SevenWondersDice from './games/seven-wonders-dice/main';
import Earthrise from './games/earthrise/main';
import Spectacular from './games/spectacular/main';
// ~~new-game-import~~

export function getAllGames(): GameWithView[] {
	return [
		// ~~new-game~~
		Spectacular,
		Earthrise,
		SevenWondersDice,
		Sanctuary,
		EverdellFarshore,
		Prophecy,
		Flip7,
		KnittingCircle,
		EverdellSilverfrost,
		Village,
		CastleCombo,
		ThreeChapters,
		Seti,
		PlanetUnknown,
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
	const names: string[] = [];
	games.forEach((game: GameWithView) => {
		names.push(game.definition.title);
		if (game.definition.altTitles) {
			names.push(...game.definition.altTitles);
		}
	});
	return names.sort((a, b) => a.localeCompare(b));
}

export function getGameByName(name: string): GameWithView | undefined {
	const game = getAllGames().find((game) => game.definition.title === name);
	if (game) {
		return game;
	}

	// Check alt titles
	return getAllGames().find(
		(game) =>
			game.definition.altTitles && game.definition.altTitles.includes(name),
	);
}

export function getGameOfTheDay() {
	const games = getAllGames();
	let index = getPseudoRandomIntForToday(0, games.length - 1);
	if (index < 0) {
		index *= -1;
	}
	return games[index];
}

function getPseudoRandomIntForToday(min: number, max: number): number {
	if (min >= max) {
		throw new Error('Min must be less than max.');
	}

	// Get today's date in YYYY-MM-DD format
	const today = new Date().toISOString().split('T')[0];
	// Create a hash from today's date
	const hash = today.split('').reduce((acc, char) => {
		return acc + char.charCodeAt(0);
	}, 0);

	// Generate a pseudo-random number using the hash
	const random = (Math.sin(hash) * 10000) % 1; // A deterministic pseudo-random value in [0, 1)

	// Scale to the desired range
	return Math.floor(min + random * (max - min + 1));
}
