import { getAllGames } from '../src/allGames';
import { GameWithView } from '../src/core/types/GameWithView';
import Prophecy from '../src/games/prophecy/main';
import ObjectFactory from '../src/objectFactory';

ObjectFactory.DISABLE_VIEW_CALLBACK = true;
console.log('Prophecy definition:', Prophecy.definition.title);
// getAllGames().map((game: GameWithView) => {
// 	console.log(game.definition.title);
// });
