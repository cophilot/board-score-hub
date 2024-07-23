import { WinMode } from '../../api/types/WinMode';
import goalTiles from './assets/goal-tiles.png';
import catTokens from './assets/cat-tokens.png';
import buttonTokens from './assets/button-tokens.png';
import FontUtils from '../../api/utils/FontUtils';

export default function getDefinition() {
    return {
        title: 'Calico',
        bgColor: '#fbf8f0',
        fontColor: '#000',
        primaryColor: '#142688',
        secondaryColor: '#c12966',
        fontFamily: FontUtils.CLASSIC,
        playerSizes: [1, 2, 3, 4],
        winMode: WinMode.MOST,
        rows: [
            {
                name: 'Design Goal Tiles',
                icon: goalTiles,
                bgColor: '#6c993b',
            },

            {
                name: 'Cat Tokens',
                icon: catTokens,
                bgColor: '#ffac33',
            },

            {
                name: 'Button Tokens',
                icon: buttonTokens,
                bgColor: '#68cfda',
            },
        ],
    };
}
