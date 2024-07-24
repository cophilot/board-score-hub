import { WinMode } from '../../api/types/WinMode';

export default function getDefinition() {
    return {
        title: '$$name$$',
        //bgColor: '#fff',
        //fontColor: '#000',
        //primaryColor: '#fff',
        //secondaryColor: '#000',
        // fontFamily: FontUtils.PLAYFUL,
        // stripColor: '#000',
        playerSizes: [1, 2, 3, 4],
        winMode: WinMode.MOST,
        rows: [
            {
                name: 'Row1',
            },

            {
                name: 'Row2',
                icon: 'src/games/$$name.k$$/assets/test.png',
            },
        ],
    };
}
