import Calico from './games/calico/main';
import DorfromantikDuel from './games/dorfromatik-duel/main';
import Everdell from './games/everdell/main';
import Harmonies from './games/harmonies/main';
import LetsGoToJapan from './games/lets-go-to-japan/main';
import Scout from './games/scout/main';
import SevenWondersDuel from './games/seven-wonders-duel/main';
import TerraformingMars from './games/terraforming-mars/main';
import Wizard from './games/wizard/main';

export default function getAllGames() {
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
    ];
}
