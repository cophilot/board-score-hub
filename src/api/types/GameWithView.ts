import { ExternalGameDef, GameDef } from './GameDef';

export type GameWithView = {
	view: () => JSX.Element;
	definition: GameDef | ExternalGameDef;
};
